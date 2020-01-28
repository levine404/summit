import summitLogo from '../images/summit-logo.png';
import splashImage from '../images/splash.jpg';
import Menu from './Menu';
import PhoneCall from './PhoneCall';

const Splash = () => {
  return (
    <div id="splash">
      <div id="logo">
        <img src={summitLogo} />
      </div>
      <div id="menu">
        <Menu />
      </div>
      <div id="slogan">
        No Gimmicks,
        <br />
        Just Clean
      </div>
      <PhoneCall />
      <div id="service-area">
        Serving Dandridge, Gatlinburg, Jefferson City, Kodak, Morristown, Pigeon Forge, Sevierville, White Pine
      </div>
      <style jsx>{`
        #splash #menu {
          text-align: left;
        }
        #splash img {
          margin: 24px;
        }
        #slogan {
          margin: 72px 48px;
          font-family: 'Anton', sans-serif;
          font-weight: 900;
          font-size: 6vh;
          color: #fef119;
          text-shadow: 0 0 4px rgba(0, 0, 0, 0.8);
        }
        #service-area {
          position: absolute;
          bottom: 48px;
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
          #splash #logo {
            flex: 1 1 100%;
            text-align: center;
            font-size: 10vh;
          }
          #splash #menu {
            text-align: center;
          }
          #splash img {
            margin: 12px;
            max-width: 80%;
          }
        })
      `}</style>
    </div>
  );
};

export default Splash;
