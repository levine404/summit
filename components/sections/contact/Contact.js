import React from 'react';
import clean from '../../../images/clean.jpg';

const Contact = () => {
  return (
    <div id="contact">
      <div id="contact-message">
        Ready for high quality service?
      </div>
      <div id="contact-title">
        Contact Us At
      </div>
      <div id="contact-phone">
        <a id="phone-call" href="tel:865-585-1445">
          (865) 585-1445
        </a>
      </div>
      <style jsx>{`
      #contact {
        min-height: 100%;
        background-image: url(${clean});
        background-size: cover;
        background-position: center center;
        border-top: 20px solid yellow;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      #contact-message {
        text-align: center;
        font-size: 2em;
        text-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
      }
      #contact-title {
        text-align: center;
        font-size: 3em;
        text-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
      }
      #contact-phone {
        text-align: center;
        margin: 20px;
      }
      #contact-phone a {
        color: #c02c36;
        font-size: 2.6em;
        text-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
      }

      `}</style>
    </div>
  );
};

export default Contact;
