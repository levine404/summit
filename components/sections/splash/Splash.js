import React from 'react';

import appConfig from '../../../app.config';
import splashImage from '../../../images/splash.jpg';
import Logo from './Logo';
import Menu from './Menu';
import Slogan from './Slogan';
import ServiceArea from './ServiceArea';
import Reviews from './Reviews';
import PhoneCall from './PhoneCall';

const Splash = () => {
  return (
    <div id="splash">
      <Logo />
      <div id="divider">
        <div id="left">
          <Menu />
          <Slogan />
          <ServiceArea />
        </div>
        <div id="right">
          <Reviews />
          <PhoneCall />
        </div>
      </div>

      <style jsx>{`
        #splash {
          position: relative;
          background-image: url(${splashImage});
          background-size: cover;
          background-position: center 30%;
          min-height: 100%;
          height: auto;
          padding-bottom: 10%;
          display: flex;
          flex-direction: column;
        }
        #divider {
          flex: 1 1 auto;
          width: 100%;
          display: flex;
        }
        #left, #right {
          flex: 1 1 50%;
        }
        #right {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        @media (max-width: ${appConfig.mobileSize}) {
          #divider {
            flex-direction: column;
          }
          #right {
            justify-content: flex-start;
            flex-direction: column-reverse;
          }
        }
      `}</style>
    </div>
  );
};

export default Splash;
