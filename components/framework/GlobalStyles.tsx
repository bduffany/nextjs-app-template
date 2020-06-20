import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  '@global': {
    body: {
      // Theme variables
      '--primary-color': '#ffa000',
      '--text-on-primary-color': 'black',
      '--body-background': 'white',
      '--body-font-family': 'sans-serif',
      '--body-text-color': '#212121',
      '--subtle-body-text-color': '#455a64',
      '--divider-color': '#9e9e9e',
      '--footer-color': '#eee',
      // Default styles
      background: 'var(--body-background)',
      fontFamily: 'var(--body-font-family)',
      color: 'var(--body-text-color)',
    },
    // Make each page take up the entire viewport.
    'html, body, #__next': {
      height: '100%',
    },
  },
});

export default function GlobalStyles() {
  useStyles();
  return <></>;
}
