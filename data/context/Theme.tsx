import { createContext } from 'react';

export type Theme = {
  primaryColor: string;
  bodyColor: string;
  textOnPrimaryColor: string;
  bodyFontFamily: string;
  bodyTextColor: string;
  subtleBodyTextColor: string;
  dividerColor: string;
  rootFontSize: string;
};

const LIGHT_THEME: Theme = {
  primaryColor: '#ffa000',
  textOnPrimaryColor: 'white',
  bodyColor: 'white',
  bodyFontFamily: "'Roboto', sans-serif",
  bodyTextColor: '#212121',
  subtleBodyTextColor: '#455a64',
  dividerColor: '#9e9e9e',
  rootFontSize: '16px',
};

const ThemeContext = createContext<Theme>(LIGHT_THEME);
export default ThemeContext;
