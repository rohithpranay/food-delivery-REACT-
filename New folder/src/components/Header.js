import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div id="nav-container">
      <img
        id="nav-img"
        src={LOGO_URL}
      />
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>ContactUs</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Header;
