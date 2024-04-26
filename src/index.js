import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const currentTime = date.getHours();
let greeting;
if (currentTime < 12) {
  greeting = "Good morning";
} else if (currentTime < 18) {
  greeting = "Good afternoon";
} else {
  greeting = "Good night";
}
ReactDOM.render(
  <h1 className="heading" contentEditable>
    {greeting}
  </h1>,
  document.getElementById("root")
);
