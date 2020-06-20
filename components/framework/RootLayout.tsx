import Head from 'next/head';
import GlobalStyles from './GlobalStyles';
import Layout from './Layout';

export type RootLayoutProps = {
  children?: any;
};

/**
 * The root layout for the application.
 *
 * All page layouts should use the `withRootLayout` function to
 * include the root layout as their parent.
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <Head>
        <title>TODO: Default page title</title>
      </Head>
      <GlobalStyles />
      {children}
    </>
  );
}

/**
 * A higher order component that wraps a given layout with the root layout.
 */
export function withRootLayout<P>(LayoutComponent: Layout<P>): React.FC<P> {
  return function RootLayoutDecorator(props: P) {
    return (
      <RootLayout>
        <LayoutComponent {...props} />
      </RootLayout>
    );
  };
}
