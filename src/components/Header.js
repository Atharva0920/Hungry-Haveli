import logo from "../../utils/images/logo.png";
import { useState, useEffect } from "react";

const Header = () => {
  console.log("Header Rendered")
  const [btnName, setBtnName] = useState("Login");
  useEffect(()=>{
    console.log("useEffect Called");  
    const fun = ()=>{
      console.log("This is function returned by useEffect");
    }
    return fun;
    
  },[btnName]);
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
