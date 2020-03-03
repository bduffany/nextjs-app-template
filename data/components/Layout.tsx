import STYLE_RESETS from '../styles/resets';

interface Props {
  children?: any;
}

const Layout = ({ children }: Props) => (
  <div>
    {STYLE_RESETS}
    {children}
  </div>
);

export default Layout;
