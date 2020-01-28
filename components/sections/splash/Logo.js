import React from 'react';

import appConfig from '../../../app.config';
import summitLogo from '../../../images/summit-logo.png';

const Logo = () => {
  return (
    <div id="logo">
      <img src={summitLogo} />
      <style jsx>{`
        #logo {
          padding: 12px;
        }
        @media (max-width: ${appConfig.mobileSize}) {
          #logo {
            text-align: center;
          }
          #logo img {
            max-width: 90%;
          }
        }
      `}</style>
    </div>
  );
};

export default Logo;
