import { APP_LOGO } from "../utils/constants";
export default Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={APP_LOGO} alt="logo" />
      </div>
      <div className="app-name">
        <h2>Khana Khazana</h2>
      </div>
      <div className="nav-items">
        <ul>
          <a>
            <li>Home</li>
          </a>
          <a>
            <li>About Us</li>
          </a>
          <a>
            <li>Contact</li>
          </a>
          <a>
            <li>Cart</li>
          </a>
        </ul>
      </div>
    </div>
  );
};
