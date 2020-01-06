import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import Background from "./components/Background/Background";
// import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import Context from "./context/context";

import "./App.scss";

function App() {
  useEffect(() => {
    document.addEventListener(
      "keypress",
      function(e) {
        if (e.keyCode === 13) {
          toggleFullScreen();
        }
      },
      false
    );
  }, []);

  const [language, setLanguage] = useState(
    localStorage.getItem("language") ? localStorage.getItem("language") : "ru"
  );

  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  return (
    <Context.Provider
      value={{
        language: language,
        setLanguage: setLanguage,
        birdsEyeViewStart: 0,
        birdsEyeViewEnd: 4000,
        waterStart: 4001,
        waterEnd: 6000,
        wakeStart: 6001,
        wakeEnd: 8000,
        meatStart: 8001,
        meatEnd: 10000,
        tentStart: 10001,
        tentEnd: 12000,
        skyStart: 12001,
        skyEnd: 13400,
        mainHeight: 13400
      }}
    >
      <div className="app">
        <Navbar />
        <Background />
        {/* <Main /> */}
        <Footer />
        <ScrollToTop />
      </div>
    </Context.Provider>
  );
}

export default App;
