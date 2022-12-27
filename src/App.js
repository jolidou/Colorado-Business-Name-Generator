import colorado from "./colorado.png";
import "./App.css";
import React from "react";
import Generator from "./Generator";

function App() {
  return (
    <div className="App gradient">
      <header className="App-header">
        <img src={colorado} className="App-logo" alt="logo" />
        <div className="App-bigText">colorado business name generator</div>
      </header>
      <div className="App-body">
        <Generator />
      </div>
    </div>
  );
}

export default App;
