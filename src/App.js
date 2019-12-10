import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Background from "./components/Background/Background";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Background />
      <Main />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
