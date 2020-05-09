import { NextPage } from 'next';
import Layout from '../layout/Layout';

/**
 * Custom app page.
 *
 * Each page in the app should implement this type.
 */
type AppPage = NextPage & {
  /** Title of the page displayed by the browser. */
  title?: string;
  /**
   * Layout component for the page.
   *
   * All pages are completely re-rendered across page navigations, but layout
   * components are diffed and persisted like normal React components.
   */
  layout?: Layout;
};

// A next page extended with custom
export default AppPage;
