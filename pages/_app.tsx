import AppPage from 'components/framework/AppPage';
import RootLayout from 'components/framework/RootLayout';
import App from 'next/app';
import 'sanitize.css';

export default class CustomApp extends App {
  componentDidMount() {
    // Remove server-rendered JSS styles since they may conflict with
    // client-rendered ones.
    document.getElementById('server-side-styles')?.remove();
  }

  render() {
    const { Component, pageProps } = this.props;

    const ComponentWithLayout = Component as AppPage<any>;
    const Layout = ComponentWithLayout.layout || RootLayout;

    return (
      <Layout>
        <Component {...pageProps}></Component>
      </Layout>
    );
  }
}
