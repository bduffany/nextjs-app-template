import { NullLayout } from 'components/layout/Layout';
import AppPage from 'components/page/AppPage';
import { AppPropsType } from 'next/dist/next-server/lib/utils';
import Head from 'next/head';

const APP_TITLE = 'App Title';

export default function CustomApp({ Component, pageProps }: AppPropsType) {
  const Page = Component as AppPage;
  const PageLayout = Page.layout || NullLayout;
  const title = Page.title;

  return (
    <>
      <Head>
        <title>
          {APP_TITLE}
          {title ? ` | ${title}` : ''}
        </title>
      </Head>
      <PageLayout>
        <Page {...pageProps}></Page>
      </PageLayout>
    </>
  );
}
