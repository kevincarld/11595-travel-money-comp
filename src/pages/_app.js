import React from 'react';
import Head from 'next/head';
import Script from 'next/script';


export default function App({ Component, pageProps }) {
  const isDev = process.env.NODE_ENV === 'development'
  const jobCode = process.env.jobCode

  const brand = process.env.appMeta?.brand
  const title = process.env.appMeta?.title
  const siteName = process.env.appMeta?.siteName
  const canonical = process.env.appMeta?.canonical
  const description = process.env.appMeta?.description
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

        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="2221664741450677" />
        <meta property="og:site_name" content={siteName} />

        <meta property="og:title" content={`${brand} - ${title} - ${siteName}`} />
        <meta name="twitter:title" content={`${brand} - ${title} - ${siteName}`} />

        <meta property="og:description" content={description} />
        <meta name="twitter:description" content={description} />
        <meta name="description" content={description} />

        <link rel="canonical" href={canonical} />
        <meta property="og:url" content={canonical} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />

        {/* Favicons, App Icons and Theme  */}
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="https://www.nine.com.au/static/assets/images/apple-touch-icon-57x57-6b5acb5f.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="https://www.nine.com.au/static/assets/images/apple-touch-icon-60x60-dcaa3fbe.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="https://www.nine.com.au/static/assets/images/apple-touch-icon-72x72-ac8692ed.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="https://www.nine.com.au/static/assets/images/apple-touch-icon-76x76-1896d58d.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="https://www.nine.com.au/static/assets/images/apple-touch-icon-114x114-50bb97a0.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="https://www.nine.com.au/static/assets/images/apple-touch-icon-120x120-9e37a545.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="https://www.nine.com.au/static/assets/images/apple-touch-icon-144x144-fe87d88d.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="https://www.nine.com.au/static/assets/images/apple-touch-icon-152x152-ea7e5da8.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://www.nine.com.au/static/assets/images/apple-touch-icon-180x180-f11bc70c.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://www.nine.com.au/static/assets/images/favicon-32x32-861c8c96.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://www.nine.com.au/static/assets/images/favicon-194x194-c025fffc.png"
          sizes="194x194"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://www.nine.com.au/static/assets/images/favicon-96x96-2a132643.png"
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://www.nine.com.au/static/assets/images/android-chrome-192x192-443fa2ea.png"
          sizes="192x192"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://www.nine.com.au/static/assets/images/favicon-16x16-84d42972.png"
          sizes="16x16"
        />
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
