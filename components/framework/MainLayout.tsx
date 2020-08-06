import { createUseStyles } from 'react-jss';
import Layout from './Layout';
import { withRootLayout } from './RootLayout';

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
  },
  header: {
    background: 'var(--primary-color)',
    color: 'var(--text-on-primary-color)',
    padding: 16,
  },
  content: {
    height: '100%',
    position: 'relative',
  },
  footer: {
    background: 'var(--footer-color)',
    marginTop: 'auto',
    padding: 16,
  },
});

export type MainLayoutProps = {
  children?: any;
};

/**
 * The main layout used for the app, which includes a header, main content,
 * and footer.
 *
 * The layout is preserved across page navigations.
 */
const MainLayout: Layout<MainLayoutProps> = ({ children }: MainLayoutProps) => {
  const css = useStyles();
  return (
    <div className={css.root}>
      <header className={css.header}>
        <code>Header: components/framework/MainLayout.tsx</code>
      </header>
      <main className={css.content}>{children}</main>
      <footer className={css.footer}>
        <code>Footer: components/framework/MainLayout.tsx</code>
      </footer>
    </div>
  );
};

export default withRootLayout<MainLayoutProps>(MainLayout);
