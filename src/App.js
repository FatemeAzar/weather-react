import "./App.css";
import Search from "./Search";
import React from "react";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search />
      <p>
        <a href="https://github.com/FatemeAzar/weather-react">
          Open-source code
        </a>{" "}
        by Fatemeh Azar
      </p>
    </div>
  );
}

export default App;
