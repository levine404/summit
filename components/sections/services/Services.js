import React from 'react';
import floor from '../../../images/floor.jpg';

const Services = () => {
  return (
    <div id="services">
      <div id="service-tag">
        Cleaning Dirt Deep Down You Didn't Even Know Was There 
      </div>
      <div id="service-list">
        <div id="sbox">
          <h2>Services</h2>
          <p>
            Serving Dandridge, Gatlinburg, Jefferson City, Kodak, Morristown, Pigeon Forge, Sevierville, White Pine
            Summit Carpet and Upholstery Cleaning in Dandridge, TN provides dependable carpet cleaning services. Call 865-585-1445 to hear how we can help.
          </p>
          <ul>
            <li>Residential Carpet Cleaning Services</li>
            <li>Commercial Carpet Cleaning Services</li>
            <li>Rug Cleaning Services</li>
            <li>Floor Cleaning Services</li>
            <li>Upholstery Cleaning Services</li>
            <li>Pet Treatment Services</li>
            <li>Area Rug Cleaning Services</li>
          </ul>
        </div>
      </div>
      <style jsx>{`
      #services {
        min-height: 100%;
        background-image: url(${floor});
        background-size: cover;
        background-position: center center;
        display: flex;
        flex-direction: column;
      }
      #service-tag {
        width: calc(100% - 48px);
        padding: 24px;
        flex: 1 1 auto;
        min-height: 150px;
        text-align: center;
        color: #fff;
        text-shadow: 0 0 4px rgba(0, 0, 0, 0.6);
        font-size: 2.2em;
        font-weight: 900;
      }
      @media (min-width: 800px) {
        #service-list {
          max-width: 60%;
        }
        #service-tag {
          text-align: right;
        }
      }
      #service-list {
        flex: 1 1 auto;
        padding: 24px;
        text-align: center;
      }
      #sbox {
        font-size: 1.4em;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.7);
        padding: 8px 48px;
        text-align: center;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
      }
      `}</style>
    </div>
  );
};

export default Services;
