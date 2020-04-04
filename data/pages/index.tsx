import AppBarLayout from '../components/Layout/AppBarLayout';
import { NextPageWithLayout } from '../components/Layout/Layout';

const Page: NextPageWithLayout = () => <div>Hello world!</div>;

Page.layout = AppBarLayout;

export default Page;
