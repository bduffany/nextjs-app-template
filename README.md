<!-- TODO [i]: Add project details -->

# nextjs-app-template

A Next.js template that provides an excellent user experience and developer
experience out of the box.

Feel free to file an issue if you have feature requests or want to contribute!

## How to use it

`yarn create next-app $YOUR_PROJECT_NAME --example https://github.com/bduffany/nextjs-app-template/tree/master`

## What's in the box?

### User Experience

- [x] **Persistent layouts**: app layout is preserved across page navigations
      for a fluid "SPA" experience, instead of each page getting completely
      re-rendered on each navigation.

- [ ] **Style resets** that fix annoying style inconsistencies across browsers.

### Developer Experience

- [x] **[TypeScript](https://typescriptlang.org)** for better
      code completion and a faster feedback loop while developing.

- [x] **CSS-in-JS** with [styled-jsx](https://github.com/vercel/styled-jsx)
      for more flexible styling and more convenient development (all component
      code is located in the same file).

- [x] **VSCode configuration**:

  - [x] **Prettier**: auto-format on save
  - [x] **eslint-plugin-import**: auto-organize imports on save, overriding
        Prettier's annoyingly opinionated defaults.

- [x] **Pre-commit hooks** to prevent you from submitting bad code by mistake

  - [x] Runs `npm build` to ensure the NextJS app builds successfully.
  - [ ] Prevents committing code that contains "DO NOT COMMIT" (duh).
        This lets you add temporary debug code and leave reminders for
        yourself not to commit that code.

- [x] Flexible config mechanism that allows using different config variables
      for different environments (dev, staging, prod, etc.).

- [x] Unit test configuration

  - [x] Jest: run `yarn jest` to run all tests in the package.

- [ ] Integration test configuration

#### Deployment & CI options supported

_All of these services have generous free tiers._

- [x] **Vercel**: this project is ready to be deployed on Vercel.

- [x] **Google Cloud**:

  - [x] Cloud Run:
    - [x] Dockerfile that builds the app and listens on `$PORT`
    - [x] `cloudbuild.yaml` that builds and deploys a Docker image
      - [x] Automatically cleans up old Docker images
    - [ ] Automated Cloud project setup
      - [ ] Create new project if needed
      - [ ] Set up Cloud Build triggers for deploy-on-push
      - [ ] Set up sane alerts for when project is about to go over budget

- [ ] **Firebase**:

  - [ ] Cloud function deployment

- [ ] **AWS**

- [ ] **Azure**

- [ ] **Netlify**

- [ ] **CircleCI**

#### Commonly used frontend APIs

_All of these services have generous free tiers._

- [x] **Sendgrid** email API:

  - [x] Manual setup by adding credentials to `server/config/env`
  - [ ] Automated account creation / setup

- [ ] **Cloudflare** image resizing

## VS Code extensions

Run this command to install recommended extensions:

```bash
code --install-extension esbenp.prettier-vscode dbaeumer.vscode-eslint
```
