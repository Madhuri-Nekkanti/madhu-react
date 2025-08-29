import React from "react";
import ReactDOM from "react-dom/client";

// <div id="parent">
//     <div id="child">
//       <h1>I'am h1 tag</h1>
//     </div>
// </div>
// ReactElement(object) => HTML(Browser Understands)

// for creating nested elements

const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "heading-h1 tag")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
