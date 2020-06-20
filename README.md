<!-- TODO [i]: Add project details -->

# Next.js app template

A **no-nonsense**, **production-ready**, **pragmatic**, **minimally opinionated**
Next.js template that provides an excellent user experience and developer experience
out of the box.

## How to use it

1.  Open a Terminal and run:

    ```bash
    cd YOUR/PROJECT/DIRECTORY
    git clone https://github.com/bduffany/nextjs-app-template .
    # Start a fresh Git repo
    rm -rf .git && git init
    # Rename the package to match the directory name
    perl -p -i -e "s@nextjs-app-template@$(pwd | xargs basename)@" package.json
    # Install dependencies
    yarn install
    # Start developing
    yarn dev
    ```

2.  If you use [VS Code](https://code.visualstudio.com/) (highly recommended),
    install the recommended extensions (you'll be prompted when opening the
    directory for the first time).

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

- [x] **[Next.js](https://nextjs.org/)**: As the name implies, this is a Next.js template.
      Next.js is widely misunderstood as "just a static site generator," but it is _so_
      much more than that. It automatically generates static pages _when possible_ and
      falls back to server-side rendering otherwise. Static pages are served directly from
      the edge and load nearly instantly. If data fetching is moved to the client side,
      then all pages can be made static, making every page on your site load almost instantly.

- [x] **[TypeScript](https://typescriptlang.org)** is enabled for better
      code completion and a faster feedback loop while developing.

  - [x] `tsconfig.json` enables imports relative to the root directory:
        `import Bar from 'components/foo/Bar';` instead of
        `import Bar from '../../../components/foo/Bar';`

- [x] **CSS-in-JS** with [react-jss](https://cssinjs.org/react-jss/?v=v10.3.0)
      for more flexible styling and more convenient development (all component
      code is located in the same file).

- [x] Powerful and intuitive **configuration** system:

  - [x] Per-environment config is supported `config/env.development.ts`, etc.
    - [x] `import env from 'config/env';` imports `env.development.ts` in
          development (`next dev`) and `env.production.ts` in production (`next build`).
  - [x] Much more powerful than `.env` files since config files are written in TypeScript.
  - [x] Environment variables are still accessible via `process.env` if you
        need them.

- [x] **VSCode configuration**:

  - [x] **Prettier**: configured to auto-format on save
  - [x] **eslint-plugin-import**: auto-organize imports on save, overriding
        Prettier's annoyingly opinionated defaults.
  - [x] Hides the `.next` directory and prevents file watchers from being
        set up on that directory, which otherwise has a negative
        impact on editor performance.

- [x] **Git hooks** that prevent you from committing bad code by mistake

  - [x] Git hooks are installed automatically when running `yarn install`,
        thanks to [Husky](https://github.com/typicode/husky).
  - [x] Prevents committing code that contains "DO&nbsp;NOT&nbsp;COMMIT" (duh).
        This lets you add temporary debug code and leave reminders for
        yourself not to commit that code.
        <!-- NOTE: &nbsp; is used above to allow this README to commit. -->
  - [x] Runs `tsc` on pre-commit to ensure the code compiles.
  - [x] Runs test suites and an optimized production build on pre-push to
        avoid pushing bad code to production.

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

- [ ] **CircleCI**

#### Commonly used frontend APIs

_All of these services have generous free tiers._

- [x] **Firebase**:

  - [x] Authentication
    - [x] Authentication middleware for API routes
    - [x] CLI for setting custom claims on users
    - [ ] `getServerSideProps`-based authentication

- [x] **Sendgrid** email API:

  - [x] Manual setup by adding credentials to `server/config/env`
  - [ ] Automated account creation / setup

- [ ] **Cloudflare** image resizing
