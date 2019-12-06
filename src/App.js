import React from "react";

import Background from "./components/Background/Background";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Background />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
