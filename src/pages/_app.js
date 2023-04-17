import React from 'react';
import Head from 'next/head';
import Script from 'next/script';


export default function App({ Component, pageProps }) {
  const isDev = process.env.NODE_ENV === 'development'
  const jobCode = process.env.jobCode

  const brand = process.env.appMeta?.brand
  const title = process.env.appMeta?.title
  const siteName = process.env.appMeta?.siteName
  const date = process.env.appMeta?.date
  const year = process.env.appMeta?.year

  return (
    <React.Fragment>
      <Head>
      <title>{`${brand} - ${title}`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        {/* see next.config.js for setting up */}
        <meta property="og:image" content={process.env.appMeta?.ogImage} />
        <meta property="og:image:secure_url" content={process.env.appMeta?.ogImage} />
        <meta name="twitter:image" content={process.env.appMeta?.ogImage} />
      </Head>

      {/* {!isDev &&
        <>
          <Script id="nineKit2" async>
            {`
            function runSecondScript() {
              NINEAU_Loader.setup();

              //Nine Third Party Kit - Configurationmsnportalaucatdev
              NINEAU_Config.setOmnitureSuiteId("msnportalaucatglobal"); // change tp msnportalaucatglobal !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
              NINEAU_Config.setCategory("miscellaneous"); // Page Category Name
              NINEAU_Config.setSiteName("campaign"); // Page Site Name
              NINEAU_Config.setSectionName("${jobCode}"); // Optional - Delete if unneeded.
              NINEAU_Config.setNielsenEnabled(false);
              NINEAU_Config.setAdcEnabled(false);
              NINEAU_Config.setPageTrackingOnRenderTracking(true);
              NINEAU_ThirdParty.initialize();
              NINEAU_ThirdParty.renderTracking();
            }
            `}
          </Script>
          <Script id="nineKit1">
            {`
              // Nine Third Party Kit - Loader
              (function () {
                var LOADER_SCRIPT_URL =
                  "http://share.9cdn.net/share/short_cache/js/third_party/loaders/au.loader-latest.min.js";
                var LOADER_SCRIPT_URL_SECURE =
                  "https://share.9cdn.net/share/short_cache/js/third_party/loaders/au.loader-latest.min.js";
                var loaderScriptUrl =
                  window.location.protocol == "https:"
                    ? LOADER_SCRIPT_URL_SECURE
                    : LOADER_SCRIPT_URL;

                const script = document.createElement('script');
                script.src = loaderScriptUrl;
                script.async = true;
                script.onload = runSecondScript;
                document.body.appendChild(script);
              })();
            `}
          </Script>
        </>
      } */}

      <Component {...pageProps} />

    {/* UNCOMMENT FOR: GA4 scripts
      {!isDev &&

        <>
          <Script id='ga4' async src="https://www.googletagmanager.com/gtag/js?id=G-8H9J6GLFEH" />
          <Script id="ga4b">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-8H9J6GLFEH');
            `}
          </Script>
        </>
      }
      */}


      <Script>
      {`
        // callback function for recaptcha
        function onTokenVerified(token) {
          window.submitFormik(token); // submit the form - see function in components/Form/Form.js
        }

        function onTokenError(error) {
          // console.log('onTokenError', error);
        }

        function onTokenExpired() {
          // console.log('onTokenExpired');
          window.tokenReset(); // reset the token - see function in components/Form/Form.js
        }
      `}
      </Script>

      <Script src="https://www.google.com/recaptcha/api.js" async defer />
    </React.Fragment>
  );
}
