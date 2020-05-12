import React from 'react';
import inVan from '../../../images/invan.jpg';
import equip from '../../../images/equip.jpg';

const About = () => {
  return (
    <div id="about">
      <div id="about-left">
      <h2>About Summit Carpet and Upholstery Cleaning</h2>
      <p>
        Summit Carpet and Upholstery Cleaning specializes in providing high quality carpet cleaning services for owners of residential and commercial properties in Dandridge, TN and the surrounding areas. With 15 years of experience, no job can be too hard for us. We have access to the best products and use state of the art tools and equipment in all the work we do. No matter the size of your project, we’re equipped to deliver in an efficient and timely manner without compromising quality. We are licensed, insured and bonded for your protection. We are IICRC certified.
      </p>
      <p>
        Our services include carpet cleaning, rug cleaning, floor cleaning, upholstery cleaning, pet treatment, area rug cleaning and water extraction services. We’re a family owned and operated company that treats everyone we come across with utmost respect. We pay close attention to details and cater to the customer’s needs. We seek to establish longstanding working relationships with our customers by having them satisfied and happy with the services we provide. Our experts are uniformed and professional. We offer free estimates and competitive pricing.
      </p>
      <p>
        Call Summit Carpet and Upholstery Cleaning in Dandridge, TN today to talk about your carpet cleaning service needs with our experts, to request a free estimate, to arrange an appointment with us as well as to hear how we can help.
      </p>
      </div>
      <div id="about-right">
        <h3>TOP OF THE LINE EQUIPMENT</h3>
        <div id="about-photos">
          <div id="ap1"></div>
          <div id="ap2"></div>
        </div>
      </div>
      <style jsx>{`
      #about {
        min-height: 100%;
        background: #c02c36;
        padding: 24px;
        font-size: 1.6em;
        display: flex;
        flex-wrap: wrap;
        color: #fff;
      }
      #about-left {
        flex: 1 1 60%;
        min-width: 60%;
      }
      #about-right {
        max-width: 100%;
        flex: 1 0 auto;
        text-align: center;
      }
      @media (min-width: 800px) {
        #about-right {
          min-width: 50%;
        }
      }
      #about-photos {
        display: flex;
        flex-wrap: wrap;
      }
      #about p {
        text-indent: 48px;
      }
      #ap1 {
        flex: 1 0 0;
        background-image: url(${inVan});
        background-size: cover;
        background-position: center center;
        min-height: 350px;
        min-width: 280px;
        border-radius: 12px;
        margin: 12px;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
      }
      #ap2 {
        flex: 1 0 0;
        background-image: url(${equip});
        background-size: cover;
        background-position: center center;
        min-height: 350px;
        min-width: 280px;
        border-radius: 12px;
        margin: 12px;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
      }
      `}</style>
    </div>
  );
};

export default About;
