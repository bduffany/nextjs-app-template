import { ThemeProvider, createGlobalStyle } from 'styled-components';
import DEFAULT_THEME, { Theme } from '../../context/theme';
import { Layout } from './Layout';

const CommonStyles = createGlobalStyle<Theme>`
  ${({ theme }) =>
    css`
      html {
        font-size: ${theme.rootFontSize};
      }

      body {
        font-family: ${theme.bodyFontFamily};
      }
    `}
`;

const StyleResets = createGlobalStyle`
  body {
    margin: 0;
  }
`;

export type RootLayoutProps = {
  children: any;
};

const RootLayout: Layout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <CommonStyles />
      <StyleResets />
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
      <ThemeProvider theme={DEFAULT_THEME}>
        <RootLayout>
          <Component {...props} />
        </RootLayout>
      </ThemeProvider>
    );
  };
}
