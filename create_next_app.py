#!/usr/bin/env python3
"""Creates a Next app with opinionated defaults.

To use it, change to the directory in which you would like to create the app,
then run `create_next_app.py`.
"""

import json
import os
import shutil
import sys

from utils import run, working_directory


def mirror_data_directory():
    """Mirrors the data directory in this package to the current directory.

    Existing files are skipped.
    """
    data_dir = os.path.join(os.path.dirname(sys.argv[0]), "data")
    with working_directory(data_dir):
        data_dir_walk = list(os.walk("."))
    for (parent_path, _, file_names) in data_dir_walk:
        if not os.path.exists(parent_path):
            os.mkdir(parent_path)
        for file_name in file_names:
            path = os.path.join(parent_path, file_name)
            if os.path.exists(path) or os.path.exists(path.replace(".tsx", ".js")):
                continue
            shutil.copyfile(os.path.join(data_dir, path), path)
            print(f"Copied: {data_dir}/{path} --> {path}")


def update_package_json():
    """Updates package.json with next.js scripts."""
    with open("package.json", "r") as package_file:
        package_json = json.load(package_file)
    if "scripts" in package_json and "dev" in package_json["scripts"]:
        return
    package_json["scripts"] = {
        "dev": "next",
        "build": "next build",
        "start": "next start",
    }
    with open("package.json", "w") as package_file:
        json.dump(package_json, package_file, indent=2, separators=(",", ": "))
    print("Updated package.json")


def main():
    """Sets up the Next app in the current directory."""
    if not os.path.exists("package.json"):
        run("yarn init -y")

    if not os.path.exists("node_modules"):
        run("yarn add react react-dom next")
        run("yarn add -D typescript @types/react @types/next")

    update_package_json()

    mirror_data_directory()

    print("Done! Run the app with `yarn run dev`.")


if __name__ == "__main__":
    main()
