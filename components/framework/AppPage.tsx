import { NextPage } from 'next';
import Layout from './Layout';

/** The base page type for all pages in this app. */
type AppPage<P = {}> = NextPage<P> & {
  /**
   * The base layout for the page.
   *
   * If not specified, the layout defaults to the root layout.
   */
  layout?: Layout<P>;
};
export default AppPage;
