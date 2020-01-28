import React from 'react';

import serviceAreaImage from '../../../images/service-area-image.png';
import appConfig from '../../../app.config';

const ServiceArea = () => {
  return (
    <div id="service-area">
      <div id="service-area-image">
        <img src={serviceAreaImage} />
      </div>
      <div id="service-area-locations">
        Serving Dandridge, Gatlinburg, Jefferson City, Kodak, Morristown, Pigeon Forge, Sevierville, White Pine
      </div>
      <style jsx>{`
        #service-area {
          padding: 12px;
          margin: 12px;
          margin-top: 42px;
          display: flex;
          justify-content: center;
          align-items: center;
          align-content: center;
          border-radius: 6px;
          max-width: 350px;
          background: #fef119;
          box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
          font-family: sans-serif;
        }
        #service-area-locations {
          display: inline-block;
          text-align: center;
        }
        @media (max-width: ${appConfig.mobileSize}) {
          #service-area {
            max-width: none;
            margin-bottom: 24px;
          }
        }
      `}</style>
    </div>
  );
};

export default ServiceArea;
