import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { APP_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";

//Title component for displaying Logo
const Title = () => {
  return (
    <div className="logo">
      <Link to="/restaurants">
        <img src={APP_LOGO} alt="Food Truck Logo" />
      </Link>
    </div>
  );
};
const DisplayButton = ({ isLoggedIn, setLoggedIn }) => {
  let navigate = useNavigate(); //The useNavigate() hook returns a function that lets you navigate programatically,
  //for ex: in an effect, onClicks etc.
  //useNavigate is used to programmatically redirect to certain URL based on a event or a condition,
  //while Link is more like React version of HTML <a> tag, which redirects to specified URL based on onClick event.

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
        <button
          className="login-btn"
          onClick={() => {
            console.log("login clicked");
            setLoggedIn(true);
            navigate("/");
          }}
        >
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
            <Link to="/restaurants">Home</Link>
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
          {/* {isAdmin && isLoggedIn ? <li>Admin</li> : ""} */}
          <DisplayButton isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
        </ul>
      </div>
    </div>
  );
};
