import { useState } from "react";
import { APP_LOGO } from "../utils/constants";

//Title component for displaying Logo
const Title = () => {
  return (
    <div className="logo">
      <a href="/">
        <img src={APP_LOGO} alt="Food Truck Logo" />
      </a>
    </div>
  );
};

//Header component for Header Section: Logo, Name, Nav Items
export default Header = () => {
  //using UseState for user logged in or logged out
  const [isLoggedIn, setLoggedIn] = useState(true);
  return (
    <div className="header">
      <Title />
      <div className="app-name">
        <h1>The Food Truck</h1>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a>
              <i className="fa-solid fa-cart-shopping"></i>
            </a>
          </li>
          <li>
            {isLoggedIn ? (
              <button className="logout-btn" onClick={() => setLoggedIn(false)}>
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => setLoggedIn(true)}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};
