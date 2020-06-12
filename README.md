<!-- TODO [i]: Add project details -->

# Next.js production app template

A production-ready Next.js template that provides an excellent user
experience and developer experience out of the box.

Feel free to file an issue if you have feature requests or want to contribute!

## How to use it

1.  If you use VS Code (highly recommended), run this command to install
    recommended extensions:

    `code --install-extension esbenp.prettier-vscode dbaeumer.vscode-eslint`

2.  `git clone https://github.com/bduffany/nextjs-app-template your/project/dir`

3.  Change the `name` field in `package.json` to your project name

## What's in the box?

### User Experience

- [x] **Persistent page layouts**: app layout is preserved across page navigations
      for a fluid "SPA" experience, instead of each page getting completely
      re-rendered on each navigation.

- [x] **Security**:

  - [x] **CORS** config on API routes via framework middleware: `server/framework/index.tsx`
  - [ ] **CSRF protection**

- [x] **Style resets** using [sanitize.css](https://github.com/csstools/sanitize.css)
      which fix well-known cross-browser bugs and inconsistencies.

### Developer Experience

- [x] **[TypeScript](https://typescriptlang.org)** for better
      code completion and a faster feedback loop while developing.

  - [x] `tsconfig.json` enables imports relative to the root directory:
        `import Bar from 'components/foo/Bar';` instead of
        `import Bar from '../../../components/foo/Bar';`

- [x] **CSS-in-JS** with [styled-jsx](https://github.com/vercel/styled-jsx)
      for more flexible styling and more convenient development (all component
      code is located in the same file).

- [x] Powerful and intuitive **configuration** system:

  - [x] Per-environment config is supported `config/env.development.ts`, etc.
    - [x] `import env from 'config/env';` imports `env.development.ts` in
          development and `env.production.ts` in production (`next build`).
  - [x] Much more powerful than `.env` files since config files are written in TypeScript.
  - [x] Environment variables are still accessible via `process.env` if you
        need them.

- [x] **VSCode configuration**:

  - [x] **Prettier**: auto-format on save
  - [x] **eslint-plugin-import**: auto-organize imports on save, overriding
        Prettier's annoyingly opinionated defaults.

- [x] **Pre-commit Git hooks** that prevent you from committing bad code by mistake

  - [x] Git hooks are installed automatically when running `yarn install`,
        thanks to Husky
  - [x] Runs `yarn run build` to ensure the NextJS app builds successfully.
  - [x] Runs `yarn run test` to ensure tests pass
  - [x] Prevents committing code that contains "DO&nbsp;NOT&nbsp;COMMIT" (duh).
        This lets you add temporary debug code and leave reminders for
        yourself not to commit that code.
        <!-- NOTE: &nbsp; is used above to allow this README to commit. -->

* [x] **Unit testing** configuration

  - [x] Jest: run `yarn jest` to run all tests in the package.

* [ ] Integration test configuration

#### Deployment & CI options supported

_All of these services have generous free tiers._

- [x] **Vercel**: this project is ready to be deployed on Vercel.

- [x] **Google Cloud**:

  - [x] Cloud Run:
    - [x] `Dockerfile` that builds the app and listens on `$PORT`
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

- [x] **Firebase**:

  - [x] Authentication
    - [x] Authentication middleware for API routes
    - [x] CLI for setting custom claims on users

- [x] **Sendgrid** email API:

  - [x] Manual setup by adding credentials to `server/config/env`
  - [ ] Automated account creation / setup

- [ ] **Cloudflare** image resizing
