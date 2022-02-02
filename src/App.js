import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Search from "./Search";
import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search />
    </div>
  );
}

export default App;
