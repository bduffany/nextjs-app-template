#!/bin/bash

set -eo pipefail

if ! type gcloud &>/dev/null ; then
  echo "gcloud command was not found. See https://cloud.google.com/sdk/install"
  exit 1
fi
if ! type jq &>/dev/null ; then
  echo "jq was not found. See https://github.com/stedolan/jq"
  exit 1
fi

__dir__=$(realpath $(dirname "$0"))
__repo__=$(realpath "$__dir__/../../")

function get-config () {
  cat "$__dir__/gcloud_ci.json" | jq -r ".$1"
}

project_id=$(get-config project_id)
region=$(get-config region)
github_repo_owner=$(get-config github_repo_owner)
github_repo_name=$(get-config github_repo_name)
package_name=$(cat $__repo__/package.json | jq -r '.name')

function spinner () {
  "$__dir__/spinner.sh" "$@"
}
args="--format=json --project=$project_id"

function grant-role () {
  spinner "Granting role '$1' to $2" \
      gcloud $args projects add-iam-policy-binding "$project_id" \
      --role="$1" --member="$2"
}

services="
run.googleapis.com
cloudbuild.googleapis.com
containerregistry.googleapis.com
cloudresourcemanager.googleapis.com
"

spinner "Enabling required Google Cloud services" gcloud $args services enable $services

build_service_account=$(
  gcloud $args projects get-iam-policy "$project_id" \
      | jq -r '.bindings[].members[]' \
      | sort | uniq | grep @cloudbuild.gserviceaccount.com
)
grant-role roles/iam.serviceAccountUser "$build_service_account"
grant-role roles/run.admin "$build_service_account"

function create-service () {
  local branch_name="$1"
  local service_name="$package_name-$branch_name"
  spinner "Setting up Cloud Run service $service_name" gcloud $args run deploy "$service_name" \
      --region="$region" \
      --image="gcr.io/google-samples/hello-app:1.0" \
      --platform=managed \
      --allow-unauthenticated

  spinner "Creating build trigger to auto-deploy '$service_name' from branch '$branch_name'" \
      gcloud $args beta builds triggers create github \
      --substitutions="_SERVICE_NAME=$service_name" \
      --repo-name="$github_repo_name" \
      --repo-owner="$github_repo_owner" \
      --branch-pattern="$branch_name" \
      --build-config="cloudbuild.yaml"
}

echo ""
echo "Go to this URL and ensure your repository '$github_repo_name' is connected to gcloud:"
echo "https://console.cloud.google.com/cloud-build/triggers/connect?project=${project_id}"
echo -n "Press any key when done: "
read -n 1
echo

create-service staging
create-service production
