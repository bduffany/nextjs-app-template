import { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import ThemeContext, { Theme } from '../../context/Theme';
import { Layout } from './Layout';
import withRootLayout from './Root';

interface Props {
  children?: any;
}

const useStyles = createUseStyles((theme: Theme) => ({
  appBar: {
    background: theme.primaryColor,
    color: theme.textOnPrimaryColor,
    padding: 16,
    '& h1': {
      margin: 0,
    },
  },
  content: {
    padding: 16,
  },
}));

// The primary layout used for the app, which includes only an app bar.
const AppBarLayout: Layout = ({ children }: Props) => {
  const theme = useContext(ThemeContext);
  const jss = useStyles(theme);
  return (
    <>
      <div className={jss.appBar}>
        <h1>Next app</h1>
      </div>
      <div className={jss.content}>{children}</div>
    </>
  );
};

export default withRootLayout(AppBarLayout);
