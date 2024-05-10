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
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
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
