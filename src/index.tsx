import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

// TODO: this might need an obeserve to better help it handle edge cases when it wont load
const rootElement = document.getElementById("extabar");

const appDiv = document.createElement("div");
appDiv.id = "gsf-app-root";
rootElement.appendChild(appDiv);

console.log("[GSF] content script loaded")

ReactDOM.render(<App />, appDiv);