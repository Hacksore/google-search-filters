import React from "react";
import ReactDOM from "react-dom";
import Inject from "../pages/inject";

// TODO: this might need an obeserve to better help it handle edge cases when it wont load
const rootElement = document.getElementById("search");

const appDiv = document.createElement("div");
appDiv.id = "gsf-app-root";

if (rootElement) {
  rootElement.prepend(appDiv);
}

console.log("[GSF] content script loaded");

ReactDOM.render(<Inject />, appDiv);
