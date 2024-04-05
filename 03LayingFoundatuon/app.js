import React from "react";
import ReactDOM from "react-dom/client";
//const Title = () => <h1 className="hellod">How are you????????🙌</h1>;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Title />);

// const Title = function () {
//   // const title = (
//   //   <h1 id="title" className="hello">
//   //     How are you?
//   //   </h1>
//   // );

//   // return title;
//   return (
//     <h1 id="title" className="hello">
//       Helloooooo
//     </h1>
//   );
// };
// const Heading = () => (
//   <div id="container">
//     <Title />
//     with Title
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Heading />);
// function Title() {
//   return (
//     <h1 id="title" className="hello">
//       03-Laying Foundation
//     </h1>
//   );
// }
// const Title = function () {
//   return (
//     <h1 id="title" className="hello">
//       03 - Laying Foundation--no arr-
//     </h1>
//   );
// };

// const FunctionalComponent = () => (
//   <div id="container">
//     <Title />
//     {new Date().getFullYear()}
//     <h1 id="fc1 ">Learning React</h1>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<FunctionalComponent />);

const root = ReactDOM.createRoot(document.getElementById("root"));
const x = 15;
const Tick = () => {
  const element = (
    <div>
      <h1>{x < 10 ? "Hello" : "Namaste"}, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
};

setInterval(Tick, 1000);
//React Only Updates What’s Necessary
//React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring
// the DOM to the desired state.

//Even though we create an element describing the whole UI tree on every tick, only the text node whose contents have changed gets updated by React DOM.
//refer react docs https://legacy.reactjs.org/docs/rendering-elements.html
