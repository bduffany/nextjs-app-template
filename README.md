# nextjs-app-template

A Next.js template that provides an insanely good user experience and developer
experience out of the box.

## How to use it

`yarn create next-app YOUR-PROJECT-NAME --example https://github.com/bduffany/nextjs-app-template/tree/master`

## Features

- [TypeScript](https://typescriptlang.org)

- [styled-components](https://styled-components.com/) with proper
  server-side rendering, as well as a basic app theme.

- App layout is preserved across navigations, for a true "SPA" experience,
  instead of each page getting completely re-rendered on each navigation.
  The layout system is based on Adam Wathan's article,
  [Persistent Layout Patterns in NextJS](https://adamwathan.me/2019/10/17/persistent-layout-patterns-in-nextjs/).

- VSCode configuration that uses Prettier for super fast formatting on save,
  while also fixing the issue that neither Prettier nor VS Code organizes
  imports in a satisfying way ([#5995](https://github.com/prettier/prettier/issues/5995))

- Google Cloud:

  - Dockerfile
  - Build configuration that allows auto-deploying scripts when pushing to
    deployment branches
  - Build configuration that

- Git hooks:
  - "DO NOT COMMIT" hook that prevents commiting any files containing
    "DO NOT COMMIT"

## Recommended VS Code extensions

Install these VS Code extensions to get the most out of this template:

- Prettier - Code formatter
- eslint
- vscode-styled-components
- Docker
