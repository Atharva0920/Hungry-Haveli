import logo from "../../utils/images/logo.png";

const Header = () => {
    return (
      <div className="nav-container">
        <div className="app-logo">
          <img className="logo" alt="logo-img" src={logo} />
        </div>
        <div className="nav-links">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

export default Header;