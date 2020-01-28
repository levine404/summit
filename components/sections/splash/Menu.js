import React from 'react';

import appConfig from '../../../app.config';

const Menu = () => {
  const menuLinks = appConfig.links.map((name, index) => {
    return (
      <div className="menu-link" key={index}>
        {name}
        <style jsx>{`
          .menu-link {
            flex: 1 1 auto;
            background: #c02c36;
            margin: 12px;
            padding: 4px;
            text-align: center;
            color: #fff;
            border-radius: 6px;
            text-transform: uppercase;
            font-size: 0.6em;
            font-family: 'Anton', sans-serif;
            font-weight: 900;
            cursor: pointer;
            box-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
            opacity: 0.8;
            transition: all 0.3s;
          }
          .menu-link:hover {
            opacity: 1;
          }
        `}</style>
      </div>
    );
  });
  
  return (
    <div id="menu">
      {menuLinks}  
      <style jsx>{`
        #menu {
          width: 300px;
          display: flex;
        }
        @media (max-width: ${appConfig.mobileSize}) {
          #menu {
            width: 100%;
            justify-content: center;
            align-items: center;
            align-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Menu;
