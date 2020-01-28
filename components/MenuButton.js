import React from 'react';

const MenuButton = ({ name }) => {
  return (
    <div className="menu-link">
      <a>{name}</a>
      <style jsx>{`
        .menu-link {
          padding: 12px 16px;
          font-weight: 900;
          margin: 0 12px;
          border-radius: 6px;
          cursor: pointer;
          background: #c02c36;
          color: #fff;
          font-size: 60%;
          font-family: sans;
          box-shadow: 0 0 4px rgba(0 , 0, 0, 0.1);
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
};

export default MenuButton;
