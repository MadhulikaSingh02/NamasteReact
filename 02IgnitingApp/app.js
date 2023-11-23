import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Episode 02🚀"),
    React.createElement(
      "h2",
      { id: "heading2" },
      "Igniting our app-Episode 02 Completed!!"
    ),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading" }, "Namaste React by🚀"),
    React.createElement("h2", { id: "heading2" }, "Akshay Saini"),
  ]),
]);
const rootContainer = document.getElementById("root");
const root = ReactDOM.createRoot(rootContainer);
root.render(parent);
