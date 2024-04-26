import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const currentTime = date.getHours();
let greeting;
const customStyle = {
  color: ""
}
if (currentTime < 12) {
  greeting = "Good morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good night";
  customStyle.color = "blue";
}
ReactDOM.render(
  <h1 className="heading" style={customStyle}contentEditable>
    {greeting}
  </h1>,
  document.getElementById("root")
);
