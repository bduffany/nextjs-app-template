import { DarkModeContextProvider } from 'components/darkmode/DarkModeToggle';
import Layout from './Layout';
import RootStyles from './RootStyles';

export type RootLayoutProps = {
  children: any;
};

const RootLayout: Layout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <RootStyles />
      {children}
    </>
  );
};

/**
 * A higher order component that wraps a given layout with the root layout
 * and also provides the theme for the whole app.
 */
export default function withRootLayout<P>(Component: React.FC<P>): React.FC<P> {
  return function RootLayoutHOC(props: P) {
    return (
      <DarkModeContextProvider>
        <RootLayout>
          <Component {...props} />
        </RootLayout>
      </DarkModeContextProvider>
    );
  };
}
