import React from "react";

import "./ScrollToTop.scss";

const ScrollToTop = () => {
  const scrolToTop = () => {
    document.body.scrollIntoView({ behavior: "smooth" });
  };

  return <div className="scroll-to-top" onClick={scrolToTop}></div>;
};

export default ScrollToTop;
