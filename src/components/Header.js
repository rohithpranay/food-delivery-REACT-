import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [logBtn, setLogBtn] = useState("login");

  return (
    <div id="nav-container">
      <img id="nav-img" src={LOGO_URL} />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/">Cart</Link>
        </li>
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
