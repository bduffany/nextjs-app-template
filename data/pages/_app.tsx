import { AppPropsType } from 'next/dist/next-server/lib/utils';
import { NextPageWithLayout, NullLayout } from '../components/Layout/Layout';

export default function CustomApp({ Component, pageProps }: AppPropsType) {
  const ComponentWithLayout = Component as NextPageWithLayout;
  const Layout = ComponentWithLayout.layout || NullLayout;

  return (
    <Layout>
      <Component {...pageProps}></Component>
    </Layout>
  );
}
