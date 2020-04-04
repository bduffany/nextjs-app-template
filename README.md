# create-next-app

A simple CLI for creating a Next.js app with opinionated defaults.

## What it does

* Bootstraps `package.json` using Yarn.
* Adds a basic `.gitignore`, eslint configs, and VS Code settings.
* Sets up the `index.js` page as well as a custom `Document` and `App`
  (which are almost always desired when creating NextJS apps).
* Adds a layout system that prevents the entire page from getting
  rendered on each client-side navigation, for a true "SPA" experience.
  The layout system is based on Adam Wathan's article, 
  [Persistent Layout Patterns in NextJS](https://adamwathan.me/2019/10/17/persistent-layout-patterns-in-nextjs/).
* Sets up [react-jss](https://cssinjs.org) and adds a basic theme.

## Usage

Pre-requisites: you will need Yarn and Python 3 installed.

1. Clone this repo and add it to your `PATH`.
2. Change to the directory where you want to create the app.
3. Run `python3 /PATH/TO/create_next_app.py` in your terminal.

If you have already partially created your app, you can still run
this script. It will never overwrite any of your existing files.
