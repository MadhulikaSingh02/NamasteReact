import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Main from "./src/components/Main";

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
