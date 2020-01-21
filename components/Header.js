import Link from 'next/link';
import summitLogo from '../images/summit-logo.png';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <img src={summitLogo} />
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
);

export default Header;
