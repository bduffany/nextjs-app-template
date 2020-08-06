import AppPage from 'components/framework/AppPage';
import MainLayout from 'components/framework/MainLayout';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  content: {
    boxSizing: 'border-box',
    padding: 16,
    height: '100%',
  },
});

const Page: AppPage = () => {
  const css = useStyles();
  return <div className={css.content}></div>;
};

Page.layout = MainLayout;

export default Page;
