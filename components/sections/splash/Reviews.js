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
      `}</style>
    </div>
  );
};

export default Reviews;
