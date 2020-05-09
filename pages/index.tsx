import Card from 'components/primitives/Card';
import AppBarLayout from '../components/layout/AppBarLayout';
import AppPage from '../components/page/AppPage';

const Page: AppPage = () => <Card>Hello world!</Card>;

Page.title = 'Home';

Page.layout = AppBarLayout;

export default Page;
