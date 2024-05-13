import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

const AppLayout = () => {
  return (
    <div className="food-app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
