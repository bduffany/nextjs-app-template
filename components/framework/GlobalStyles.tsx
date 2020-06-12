export default function GlobalStyles() {
  return (
    <>
      {/* Base theme variables */}
      <style jsx global>{`
        body {
          --primary-color: #ffa000;
          --text-on-primary-color: black;

          --body-background: white;
          --body-font-family: sans-serif;
          --body-text-color: #212121;
          --subtle-body-text-color: #455a64;
          --divider-color: #9e9e9e;

          --footer-color: #eee;
        }
      `}</style>
      {/* Default styles for the app */}
      <style jsx global>{`
        body {
          background: var(--body-background);
          font-family: var(--body-font-family);
          color: var(--body-text-color);
        }

        /* Make each page take up the entire viewport. */
        html,
        body,
        #__next {
          height: 100%;
        }
      `}</style>
    </>
  );
}
