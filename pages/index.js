import Splash from '../components/sections/splash/Splash';
import About from '../components/sections/about/About';
import Services from '../components/sections/services/Services';
import Contact from '../components/sections/contact/Contact';

const Page = () => {
  return (
    <div id="container">
      <Splash />
      {/*<About />
      <Services />
      <Contact />*/}
      <style jsx global>{`
        html, body, #__next, #container {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
        }
        @font-face {
          font-family: 'Anton';
          font-style: normal;
          font-weight: 400;
          src: url('../fonts/anton-v11-latin-regular.eot'); /* IE9 Compat Modes */
          src: url('../fonts/anton-v11-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
               url('../fonts/anton-v11-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
               url('../fonts/anton-v11-latin-regular.woff') format('woff'), /* Modern Browsers */
               url('../fonts/anton-v11-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
               url('../fonts/anton-v11-latin-regular.svg#Anton') format('svg'); /* Legacy iOS */
        }
      `}</style>
    </div>  
  );
};

export default Page;
