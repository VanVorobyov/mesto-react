import logo from '../images/logo_white.svg';

function Header() {
  return (
    <header className="header">
      <img
        src={logo}
        alt="Логотип Mesto Russia"
        className="logo"
      />
    </header>
  );
}
export default Header;
