import React from "react";
import "./App.css";
import Body from "./components/body/Body";
import Header from "./components/layout/Header";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

export default App;
