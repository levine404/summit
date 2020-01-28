import React from 'react';

const PhoneCall = () => {
  return (
    <div id="phone-call">
      <div id="phone-call-icon"></div>
      <div id="phone-call-number">Number</div>
      <style jsx>{`
        #phone-call {
          position: absolute;
          bottom: 150px;
          width: calc(100% - 48px);
          padding: 24px;
          background: rgba(255, 255, 255, 0.3);
          color: #fff;
          text-shadow: 0 0 4px rgba(0, 0, 0, 0.9);
          font-size: 120%;
          text-align: center;
          font-weight: 900;
          font-family: 'Anton', sans-serif;
        }
        @media (max-width: 600px) {
          #phone-call {
            color: blue;
          }
        }
      `}</style>
    </div>
  );
};

export default PhoneCall;
