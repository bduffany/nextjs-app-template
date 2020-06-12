import AppPage from 'components/framework/AppPage';
import RootLayout from 'components/framework/RootLayout';
import { AppPropsType } from 'next/dist/next-server/lib/utils';

export default function CustomApp({ Component, pageProps }: AppPropsType) {
  const ComponentWithLayout = Component as AppPage<any>;
  const Layout = ComponentWithLayout.layout || RootLayout;

  return (
    <Layout>
      <Component {...pageProps}></Component>
    </Layout>
  );
}
