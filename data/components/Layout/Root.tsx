import { useContext } from 'react';
import { createUseStyles, ThemeProvider } from 'react-jss';
import ThemeContext, { Theme } from '../../context/Theme';
import { Layout } from './Layout';

const useStyleResets = createUseStyles({
  '@global': {
    body: {
      margin: 0,
    },
    '*': {
      boxSizing: 'border-box',
    },
  },
});

const useGlobalProperties = createUseStyles((theme: Theme) => ({
  '@global': {
    body: {
      font: {
        family: theme.bodyFontFamily,
        size: theme.rootFontSize,
      },
    },
  },
}));

export type RootLayoutProps = {
  children: any;
};

const RootLayout: Layout = ({ children }: RootLayoutProps) => {
  useStyleResets();
  useGlobalProperties();
  return <>{children}</>;
};

/**
 * A higher order component that wraps a given layout with the root layout
 * and also provides the theme for the whole app.
 */
export default function withRootLayout<P>(Component: React.FC<P>): React.FC<P> {
  return function RootLayoutHOC(props: P) {
    const theme = useContext(ThemeContext);
    return (
      <ThemeProvider theme={theme}>
        <RootLayout>
          <Component {...props} />
        </RootLayout>
      </ThemeProvider>
    );
  };
}
