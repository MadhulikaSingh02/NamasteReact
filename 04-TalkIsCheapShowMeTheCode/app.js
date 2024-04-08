import React from "react";
import ReactDOM from "react-dom/client";
import { resList } from "./list";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1711929600&semt=ais"
          alt="logo"
        />
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

const styleCard = {
  backgroundColor: "#f0f0f0",
};
const ResCard = (props) => {
  // const data = props.resData;
  const { resData } = props;
  const { image, name, cuisine, rating, costText } = resData?.info;
  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" src={image.url} alt="res-logo" />
      <h3>{name}</h3>
      <h4>{cuisine.join(" ")}</h4>
      <h5>{rating.aggregate_rating}</h5>
      <h5>{costText.text}</h5>
      {/* <div className="separtor"></div>
      <div className="safety-msg">
        <span>Follows all Safety Measures to ensure your food is safe</span>
      </div> */}
    </div>
  );
};

const Main = () => {
  return (
    <div>
      <div className="search">Search Here</div>
      <div className="res-container">
        {resList.map((res) => (
          <ResCard key={res.info.resId} resData={res} />
        ))}
      </div>
    </div>
  );
};
// resName="Desi Gali"
// cuisine="North Indian, Biriyani"
// rating="4.0"
// delivery="30 min"
const Footer = () => {
  return (
    <footer>
      <div className="copyright">
        <span>
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2008-2024 © Khana Khazana Ltd.
          All rights reserved.
        </span>
      </div>
    </footer>
  );
};
const AppLayout = () => {
  return (
    <div className="food-app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
