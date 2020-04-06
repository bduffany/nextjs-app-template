const DEFAULT_THEME = {
  primaryColor: '#ffa000',
  textOnPrimaryColor: 'white',
  bodyColor: 'white',
  bodyFontFamily: "'Roboto', sans-serif",
  bodyTextColor: '#212121',
  subtleBodyTextColor: '#455a64',
  dividerColor: '#9e9e9e',
  rootFontSize: '16px',
};

// Theme type to be used with `createGlobalStyles`.
// TODO(http://git.io/JvATr): remove this.
export type Theme = {
  theme: typeof DEFAULT_THEME;
};

export default DEFAULT_THEME;
