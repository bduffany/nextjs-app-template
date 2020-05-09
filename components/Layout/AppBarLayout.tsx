import DarkModeToggle from 'components/darkmode/DarkModeToggle';
import Card from 'components/primitives/Card';
import styled from 'styled-components';
import Text from '../primitives/Text';
import Layout from './Layout';
import withRootLayout from './Root';

type Props = {
  children?: any;
};

const AppBar = styled.div`
  background: var(--primary-color);
  color: var(--text-on-accent-color);
`;

const AppTitle = styled.h1`
  margin: 0;
`;

const AppContent = styled.div`
  flex-grow: 1;
`;

const Footer = styled.div`
  color: var(--text-on-accent-color);
  background: var(--footer-background-color);
  margin-top: auto;
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
        <Card style={{ display: 'flex' }}>
          <AppTitle>App Title</AppTitle>
          <DarkModeToggle style={{ marginLeft: 'auto' }} />
        </Card>
      </AppBar>
      <AppContent>{children}</AppContent>
      <Footer>
        <Card>
          <Text align="center">
            &copy; {new Date().getFullYear()} Site Author
          </Text>
        </Card>
      </Footer>
    </>
  );
};

export default withRootLayout(AppBarLayout);
