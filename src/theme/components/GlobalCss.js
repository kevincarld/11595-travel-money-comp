import { Global } from '@emotion/react'

const GlobalCss = () => (
  <Global
    styles={`
        @font-face {
          font-family: 'Avenir Book';
          src: url('./fonts/Avenir-Book.woff2') format('woff2'),
              url('./fonts/Avenir-Book.woff') format('woff'),
              url('./fonts/Avenir-Book.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
      }

      @font-face {
          font-family: 'Prelo Slab';
          src: url('./fonts/PreloSlab-ExtraBold.woff2') format('woff2'),
              url('./fonts/PreloSlab-ExtraBold.woff') format('woff'),
              url('./fonts/PreloSlab-ExtraBold.ttf') format('truetype');
          font-weight: bold;
          font-style: normal;
          font-display: swap;
      }

      @font-face {
          font-family: 'Prelo Slab';
          src: url('./fonts/PreloSlab-SemiBold.woff2') format('woff2'),
              url('./fonts/PreloSlab-SemiBold.woff') format('woff'),
              url('./fonts/PreloSlab-SemiBold.ttf') format('truetype');
          font-weight: 600;
          font-style: normal;
          font-display: swap;
      }

      @font-face {
          font-family: 'Avenir';
          src: url('./fonts/Avenir-Black.woff2') format('woff2'),
              url('./fonts/Avenir-Black.woff') format('woff'),
              url('./fonts/Avenir-Black.ttf') format('truetype');
          font-weight: 900;
          font-style: normal;
          font-display: swap;
      }


      /* spacer */
      p:not(:last-child) {
        margin-bottom: 24px;

        @media(min-width: 1280px) {
          margin-bottom: 30px;
        }
      }

    `}
  />
)

export default GlobalCss