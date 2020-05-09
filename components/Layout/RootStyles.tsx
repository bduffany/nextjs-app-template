import { createGlobalStyle } from 'styled-components';

export default function RootStyles() {
  return (
    <>
      <ThemeVars />
      <CommonStyles />
      <StyleResets />
    </>
  );
}

const ThemeVars = createGlobalStyle`
  html {
    --root-font-size: 16px;

    /* Spacing */
    --grid: 8px;
    --gutter: 24px;
  }
  
  body {
    /* Color palette */
    --primary-color: #ffa000;
    --secondary-color: #00675b;

    /* Typography */
    --body-font-family: 'Montserrat', sans-serif;
    
    /* Color definitions */
    --text-color: black;
    --text-on-accent-color: white;
    --body-background-color: white;
    --footer-background-color: var(--secondary-color);

    transition: all 107ms;
  }

  body.dark {
    --text-color: white;
    --body-background-color: black;
  }
`;

const CommonStyles = createGlobalStyle`
  html {
    font-size: var(--root-font-size);
    overflow: auto;
  }

  body {
    background: var(--body-background-color);
    color: var(--text-color);
    display: flex;
    flex-direction: column;
    font-family: var(--body-font-family);
    font-weight: 400;
  }

  html,
  body,
  #__next {
    height: 100%;
  }

  #__next {
    display: flex;
    flex-direction: column;
  }

  body,
  input,
  button {
    font-family: var(--body-font-family);
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
    margin: 0;
  }
`;

const StyleResets = createGlobalStyle`
  body {
    margin: 0;
  }
`;
