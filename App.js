import React from "react";
import ReactDOM from "react-dom/client";

// <div id="parent">
//     <div id="child1">
//       <h1>I'am h1 tag</h1>
//       <h2>I'am h2 tag</h1>
//     </div>
//     <div id="child2">
//       <h1>I'am h1 tag</h1>
//       <h2>I'am h2 tag</h1>
//     </div>
// </div>
// ReactElement(object) => HTML(Browser Understands)

// for more complex  structure elements

// siblings - use Array

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: "child1" }, [
    React.createElement("h1", { key: "child1-h1" }, "heading-h1 tag"),
    React.createElement("h2", { key: "child1-h2" }, "heading-h2 tag"),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h1", { key: "child2-h1" }, "heading-h1 tag"),
    React.createElement("h2", { key: "child2-h2" }, "heading-h2 tag"),
  ]),
]);

// JSX

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
