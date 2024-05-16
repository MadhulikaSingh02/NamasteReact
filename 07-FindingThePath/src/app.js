import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

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
      {/* if path=/, then render Body  */}
      {/* if path=/about, then render About */}
      <Outlet />{" "}
      {/*Outlet must be used in the parent route element to render its child route element */}
      <Footer />
    </div>
  );
};

//<About/> and <Contact/> are now children of AppLayout
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, //parent route element
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
