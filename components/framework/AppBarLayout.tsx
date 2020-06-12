import Layout from './Layout';
import { withRootLayout } from './RootLayout';

export type AppBarLayoutProps = {
  children?: any;
};

/**
 * The primary layout used for the app, which includes only an app bar.
 *
 * The layout is preserved across page navigations.
 */
const AppBarLayout: Layout<AppBarLayoutProps> = ({
  children,
}: AppBarLayoutProps) => {
  return (
    <div className="root">
      <header className="app-bar">
        <div className="title">
          <code>App bar: components/framework/AppBarLayout.tsx</code>
        </div>
      </header>
      <div className="content">{children}</div>
      <footer className="footer">
        <code>Footer: components/framework/AppBarLayout.tsx</code>
      </footer>
      <style jsx>{`
        .root {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .app-bar {
          background: var(--primary-color);
          color: var(--text-on-primary-color);
          padding: 16px;
        }

        .content {
          height: 100%;
          position: relative;
        }

        .title {
          margin: 0;
        }

        .footer {
          background: var(--footer-color);
          margin-top: auto;
          padding: 16px;
        }
      `}</style>
    </div>
  );
};

export default withRootLayout<AppBarLayoutProps>(AppBarLayout);
