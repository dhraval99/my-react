import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home/home";

function App() {
  return <Home />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
