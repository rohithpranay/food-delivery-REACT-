import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [logBtn, setLogBtn] = useState("login");

  return (
    <div id="nav-container">
      <img id="nav-img" src={LOGO_URL} />
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>ContactUs</li>
        <li>Cart</li>
      </ul>
      <button
        className="login-btn"
        onClick={() => {
          logBtn === "login" ? setLogBtn("logout") : setLogBtn("login");
        }}
      >
        {logBtn}
      </button>
    </div>
  );
};

export default Header;
