import styled from 'styled-components';
import { Layout } from './Layout';
import withRootLayout from './Root';

type Props = {
  children?: any;
};

const AppBar = styled.div`
  ${({ theme }) => css`
    background: ${theme.primaryColor};
    color: ${theme.textOnPrimaryColor};
  `}
  padding: 16px;
`;

const AppTitle = styled.h1`
  margin: 0;
`;

const AppContent = styled.div`
  padding: 16px;
`;

/**
 * The primary layout used for the app, which includes only an app bar.
 *
 * The layout is preserved across page navigations.
 */
const AppBarLayout: Layout = ({ children }: Props) => {
  return (
    <>
      <AppBar>
        <AppTitle>Next app</AppTitle>
      </AppBar>
      <AppContent>{children}</AppContent>
    </>
  );
};

export default withRootLayout(AppBarLayout);
