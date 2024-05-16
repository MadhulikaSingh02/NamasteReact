import { useState } from "react";
import { APP_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";

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
const DisplayButton = ({ isLoggedIn, setLoggedIn }) => {
  // return (
  //   <li>
  //     {btnName === "Login" ? (
  //       <button className="login-btn" onClick={() => setBtnName("Logout")}>
  //         {btnName}
  //       </button>
  //     ) : (
  //       <button className="logout-btn" onClick={() => setBtnName("Login")}>
  //         {btnName}
  //       </button>
  //     )}
  //   </li>
  // );
  return (
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
  );
};
//Header component for Header Section: Logo, Name, Nav Items
export default Header = () => {
  //using UseState for user logged in or logged out
  const [btnName, setBtnName] = useState("Login");

  //Can also be done using login state - true false
  const [isLoggedIn, setLoggedIn] = useState(false);
  //On using regular variables, the btnName does not refresh
  //When the state variable changes, React triggers Reconcillation algo and re-renders the component.

  const [isAdmin, setAdmin] = useState(true);
  return (
    <div className="header">
      <Title />
      <div className="app-name">
        <h1>The Food Truck</h1>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            {/* <a href="/">Home</a> */}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <a>
              <i className="fa-solid fa-cart-shopping"></i>
            </a>
          </li>
          {isAdmin && isLoggedIn ? <li>Admin</li> : ""}
          <DisplayButton isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
        </ul>
      </div>
    </div>
  );
};
