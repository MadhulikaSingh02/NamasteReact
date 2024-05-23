import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import About from "./components/header/About";
import Contact from "./components/header/Contact";
import Error from "./components/Error";
import { RestaurantMenu } from "./components/menu/RestaurantMenu";
import Login from "./components/header/Login";

const AppLayout = () => {
  return (
    <div className="food-app">
      <Header />
      {/* if path=/, then render Body  */}
      {/* if path=/about, then render About */}
      <Outlet />
      {/*Outlet must be used in the parent route element to render its child route element */}
      <Footer />
    </div>
  );
};

//<About/> and <Contact/> are now children of AppLayout
// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout />, //parent route element
//     children: [
//       {
//         path: "/",
//         element: <Main />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//       {
//         path: "/login",
//         element: <Login />,
//       },
//       {
//         path: "/restaurants/:resId", //for dynamic rendering
//         element: <RestaurantMenu />,
//       },
//     ],
//     errorElement: <Error />,
//   },
// ]);
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, //parent route element
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants",
        element: <Main />,
      },
      {
        path: "/restaurants/:resId", //for dynamic rendering
        element: <RestaurantMenu />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
