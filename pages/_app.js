import '../styles/globals.css'
import Script from 'next/script'
import Head from 'next/head'

// <!-- Global site tag (gtag.js) - Google Analytics -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-KB0Z7FKZNY"></script>
// <script>

// </script>

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
    
    </Head>
    <Script 
  strategy='lazyOnload'
  src="https://www.googletagmanager.com/gtag/js?id=G-KB0Z7FKZNY"
  />
  <Script strategy='lazyOnload'>
    {
      `  window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-KB0Z7FKZNY');
      `
    }
  </Script>
  <a
        href="https://wa.me/+919870285680"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      <a
      href="tel:+9870285680"
      className='phone_float'
      >

      <i className="fa fa-phone phone-icon" aria-hidden="true"></i>
      </a>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
