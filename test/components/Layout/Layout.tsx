import { NextPage } from 'next';
import React from 'react';

// A layout is just a functional component that renders children.
export type Layout = React.FC;

// A regular Next page that has an optional `layout`.
//
// This prevents the layout from being re-rendered between page loads.
//
// See https://adamwathan.me/2019/10/17/persistent-layout-patterns-in-nextjs/
export type NextPageWithLayout = NextPage & {
  // If not specified, the layout defaults to a no-op fragment.
  layout?: Layout;
};

export const NullLayout = ({ children }: any) => <>{children}</>;
