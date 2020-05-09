import React from 'react';

// A layout is just a functional component that renders children.
type Layout = React.FC;

export const NullLayout = ({ children }: any) => <>{children}</>;

export default Layout;
