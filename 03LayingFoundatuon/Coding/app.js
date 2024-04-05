/* Create a Nested header Element using React.createElement(h1,h2,h3 inside a
div with class “title”)
○ Create the same element using JSX
○ Create a functional component of the same with JSX
○ Pass attributes into the tag in JSX
○ Composition of Component(Add a component inside another)
○ {TitleComponent} vs {<TitleComponent/>} vs
{<TitleComponent></TitleComponent>} in JSX
*/

import React from "react";
import ReactDOM from "react-dom";

//Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)
// const header = React.createElement("div", { className: "title" }, [
//   React.createElement("h1", { id: "h1" }, "Heading 1"),
//   React.createElement("h2", { id: "h2" }, "Heading 2"),
//   React.createElement("h3", { id: "h3" }, "Heading 3"),
// ]);

//Create the same element using JSX
// const headerJSX = (
//   <div className="title">
//     <h1>JSX Heading 1</h1>
//     <h2>JSX Heading 2</h2>
//     <h3>JSX Heading 3</h3>
//   </div>
// );

//Create a functional component of the same with JSX
// const FnCompHeader = () => {
//   return (
//     <div className="title">
//       Using Function Component
//       <h1>JSX Heading 1</h1>
//       <h2>JSX Heading 2</h2>
//       <h3>JSX Heading 3</h3>
//     </div>
//   );
// };

//Pass attributes into the tag in JSX
// let x = 1;
// let y = 2;

// const headerJSX2 = (
//   <div className="title">
//     <h1>{x === 1 ? "Hello" : "Namaste"}, Coders</h1>
//     <h2>{y > 3 ? "Hello" : "Namaste"}, Teachers</h2>
//     <h3>{x > 1 ? "Hello" : "Namaste"}, Admins</h3>
//   </div>
// );

//Composition of Component(Add a component inside another)
// const Footer = () => <footer>This is a basic footer</footer>;

// const FnCompHeader2 = () => {
//   return (
//     <div>
//       <div className="title">
//         <h1>JSX Heading 1</h1>
//         <h2>JSX Heading 2</h2>
//         <h3>JSX Heading 3</h3>
//       </div>
//       <Footer />
//     </div>
//   );
// };

//{TitleComponent} vs {<TitleComponent/>} vs
//{<TitleComponent></TitleComponent>} in JSX
// const Title = () => (
//   <div className="title">
//     <h1>Heading 1</h1>
//   </div>
// );
// const message = <span>Question 1:Solutions</span>;
// const FooterText = () => <footer>This is a basic footer</footer>;
// const Copyright = () => <div>All rights reserved Madhulika@NamasteReact🚀</div>;
// const Footer = () => {
//   return (
//     <div>
//       <FooterText />
//       <Copyright />
//     </div>
//   );
// };
// const Body = () => {
//   return (
//     <div className="container">
//       <Title />
//       {message}
//       <Footer />
//     </div>
//   );
// };
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(header);
// root.render(headerJSX);
// root.render(<FnCompHeader />);
// root.render(headerJSX2);
// root.render(<FnCompHeader2 />);
// root.render(<Body />);

/*
Create a Header Component from scratch using Functional Components with
JSX
○ Add a Logo on left
○ Add a search bar in middle
○ Add User icon on right
○ Add CSS to make it look nice
*/
import logo from "./logo.png";
const Header = () => {
  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="nav-search">
          <input className="search-input" placeholder="Looking for something" />
          <div className="search-icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        <div className="user-icon ">
          <i className="fa-solid fa-user"></i>
        </div>
      </div>
    </header>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
