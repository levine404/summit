import React from 'react';

import phoneIcon from '../../../images/phone-icon-2.png';

const PhoneCall = () => {
  return (
    <a id="phone-call" href="tel:865-585-1445">
      <img id="phone-icon" src={phoneIcon}/> (865) 585-1445
      <style jsx>{`
        #phone-call {
          text-align: center;
          margin: 12px;
          padding: 12px;
          background: rgba(255, 255, 255, 0.4);
          font-size: 2em;
          color: #333;
          text-decoration: none;
          font-family: sans-serif;
          border-radius: 6px;
        }
        #phone-icon {
          vertical-align: middle;
        }
      `}</style>
    </a>
  )
};

export default PhoneCall;
