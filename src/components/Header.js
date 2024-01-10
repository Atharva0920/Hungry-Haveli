import logo from "../../utils/images/logo.png";
import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const handleLogin = () => {
    btnName == "Logout"? setBtnName("Login"): setBtnName("Logout")
  };

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
          <li>
            <button className="login-btn" onClick={handleLogin}>
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
