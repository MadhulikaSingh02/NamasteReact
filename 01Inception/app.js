// const heading = React.createElement(
//   "h1",
//   { id: "heading", className: "abc" },
//   "Hello using React "
// );
// console.log(heading); //this will return an Object.
// //Note that headiing is just an object and NOT a tag yet
// const rootContainer = document.getElementById("root");
// const root = ReactDOM.createRoot(rootContainer);
// root.render(heading); //But when the root renders the heading, the root first converts the heading object to a tag
// //and put it up in the DOM

//-------------------
/**
 * Nested structure
 * <div id="parent">
 *      <div id="child">
 *          <h1>h1 tag</h1>
 *          <h2> h2 tag</h2>
 *      </div>
 * </div>
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "h1 tag"),
    React.createElement("h2", { id: "heading2" }, "h2 tag"),
  ])
);
console.log(parent);
const rootContainer = document.getElementById("root");
const root = ReactDOM.createRoot(rootContainer);
root.render(parent);
//-------------------
/**
 * Nested structure
 * <div id="parent">
 *      <div id="child">
 *          <h1>h1 tag</h1>
 *          <h2> h2 tag</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>h1 tag</h1>
 *          <h2> h2 tag</h2>
 *      </div>
 * </div>
 */

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", { id: "heading" }, "h1 tag"),
//     React.createElement("h2", { id: "heading2" }, "h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", { id: "heading" }, "h1 tag"),
//     React.createElement("h2", { id: "heading2" }, "h2 tag"),
//   ]),
// ]);
// const rootContainer = document.getElementById("root");
// const root = ReactDOM.createRoot(rootContainer);
// root.render(parent);
