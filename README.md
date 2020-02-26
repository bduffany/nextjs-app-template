# create-next-app

A simple CLI for creating a Next.js app with opinionated defaults.

## Usage

1. Clone this repo and add it to your `PATH`.
2. Change to the directory where you want to create the app.
3. Run `create_next_app.py` in your terminal.

## What it does

* Runs `npm init -y` and the necessary `npm install` commands.
* Updates package.json with the basic scripts (e.g. `npm run dev`).
* Adds an initial hello-world page (`pages/index.tsx`).
* Adds a basic `.gitignore`.
* Adds `tsconfig.json` so that TSX works.

## Partial setup

If you have already partially created your app, this script will try not to
mess with your existing files.

