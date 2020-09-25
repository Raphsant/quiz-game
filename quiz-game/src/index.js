import ReactDOM from "react-dom";
import React from "react";
import "./main.css";
import App from "./components/app";

const root = document.querySelector("#root");
console.log(root);

ReactDOM.render(<App />, root);
