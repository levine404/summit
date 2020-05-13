import React from 'react';

import starsImage from '../../../images/stars.png';
import qrCodeImage from '../../../images/qrcode.png';

const LeaveAReviewButton = () => {
  return (
    <div id="leave-a-review-button">
      <a href="https://qrco.de/bbPDEi" target="_new">Leave A Review</a>
      <style jsx>{`
        #leave-a-review-button {
          cursor: pointer;
        }
        a {
          color: #ffff26;
        }
      `}</style>
    </div>
  );
};

const Reviews = () => {
  return (
    <div id="reviews">
      <div id="review-stars">
        <img src={starsImage} />
      </div>
      "We just bought a new house and of course the carpet needed cleaning! I called Mr Gilson and a time was set with my time schedule!! He was there when he said he would b and did a fantastic job on my carpet! This company is an outstanding company and I highly recommend it!"
      <LeaveAReviewButton />
      <img src={qrCodeImage} width="100" className="qr-code" />
      <br />
      <a href="https://www.facebook.com/summitcarpetcleaningtn/">
        <button className="fbButton">View Our Facebook Page</button>
      </a>
      <style jsx>{`
        #reviews {
          padding: 12px;
          color: #fff;
          font-family: sans-serif;
          text-align: center;
          text-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
          font-size: 1.2em;
          font-weight: 900;
        }
        #review-stars {
          margin: 6px;
        }
        .qr-code {
          margin: 12px;
        }
        .fbButton {
          width: 100%;
          border-radius: 12px;
          padding: 12px;
          border: none;
          color: #fff;
          opacity: 0.9;
          background: #3b5998;f
          font-size: 1.3em;
          font-weight: 900;
          box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
          transition: all 0.3s;
          cursor: pointer;
        }
        .fbButton:hover {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Reviews;
