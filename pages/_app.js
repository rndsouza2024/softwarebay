import '@styles/globals.css';
import Footer from '../components/Footer';
import Hamburger from '../components/Hamburger';
import { PageTransition } from "../components/PageTransition";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";
import Script from 'next/script';

// import 'bootstrap/dist/css/bootstrap.min.css';



function Application({ Component, pageProps }) {
 

  return ( 
  
      
     <div className="center">
     {/* <Script
        src="https://js.wpadmngr.com/static/adManager.js"
        data-admpid="82683"
        strategy="afterInteractive"
      /> */}
      
 <Script type="text/javascript" src="https://platform-api.sharethis.com/js/sharethis.js#property=664f7ed93a56e900196c14e4&product=sticky-share-buttons&source=platform" async="async"></Script>
        <GoogleAnalytics measurementId="G-S5LDTN7VFD" />
        {/* <Script async data-id="101405628" src="//static.getclicky.com/js"></Script> */}
     
        <PageTransition>  
          <Hamburger />
         <Component {...pageProps} />
          <Footer />
        </PageTransition>
     </div>
  
  );
}




export default Application;
