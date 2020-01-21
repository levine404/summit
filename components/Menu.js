const links = ['services', 'about', 'contact'];

const Menu = () => {
  return (
    <div id="menu">
      {links.map(link => (
        <div className="menu-link">
          <a>{link}</a>
        </div>
      ))}
      <style jsx>{`
        #menu {
          display: flex;
          padding-left: 24px;
        }
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
        @media (max-width: 600px) {
          #menu {
            flex-wrap: wrap;
            justify-content: center;
            padding-left: 0;
          }
          .menu-link {
            margin: 4px 12px;
            padding: 6px 12px;
            box-shadow: 0 0 4px rgba(0 , 0, 0, 0.3);
          }
        }
      `}</style>
    </div>
  );
};

export default Menu;
