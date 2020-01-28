import React from 'react';

import appConfig from '../../../app.config';

const Slogan = () => {
  return (
    <div id="slogan">
      No Gimmicks,
      <br />
      Just Clean
      <style jsx>{`
        #slogan {
          margin-top: 24px;
          padding: 12px;
          font-family: 'Anton', sans-serif;
          font-weight: 900;
          font-size: 6vh;
          color: #fef119;
          text-shadow: 0 0 4px rgba(0, 0, 0, 0.8);
        }
        @media (max-width: ${appConfig.mobileSize}) {
          #slogan {
            width: calc(100% - 24px);
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Slogan;
