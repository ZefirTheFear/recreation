import React, { useEffect, useRef } from "react";

import "./Main.scss";

const Main = () => {
  const div = useRef();

  useEffect(() => {
    setYPosition(document.querySelector(".main"));
    setComponentOpacity(document.querySelector(".div-1"));
    setComponentOpacity(document.querySelector(".div-2"));
    window.addEventListener("scroll", () => setYPosition(document.querySelector(".main")));
    window.addEventListener("scroll", () => setComponentOpacity(document.querySelector(".div-1")));
    window.addEventListener("scroll", () => setComponentOpacity(document.querySelector(".div-2")));
  }, []);

  const setYPosition = elem => {
    const rate = Math.round(window.pageYOffset * -0.18);
    elem.style.transform = `translate(-50%, ${rate}px)`;
    // elem.style.transform = `matrix(1,0,0,1,0, ${rate})`;
  };

  const setComponentOpacity = elem => {
    const displayHeight = document.documentElement.clientHeight;
    const bottomShowing = 0.52 * displayHeight;
    const topShowing = 0.48 * displayHeight;
    const bottomMaxOpacity = 0.51 * displayHeight;
    const topMaxOpacity = 0.49 * displayHeight;
    const bottomRangeOfOpacityChanging = bottomShowing - bottomMaxOpacity;
    const topRangeOfOpacityChanging = topMaxOpacity - topShowing;
    const coords = elem.getBoundingClientRect();
    if (coords.top >= bottomShowing || coords.bottom <= topShowing) {
      elem.style.opacity = 0;
    } else if (coords.top > bottomMaxOpacity) {
      const delY = bottomShowing - coords.top;
      elem.style.opacity = delY / bottomRangeOfOpacityChanging;
    } else if (coords.bottom < topMaxOpacity) {
      const delY = coords.bottom - topShowing;
      elem.style.opacity = delY / topRangeOfOpacityChanging;
    } else {
      elem.style.opacity = 1;
    }
  };

  return (
    <>
      <section className="main">
        <div className="main__div div-1">Вашим ушам это по душе.</div>
        <div className="main__div div-2">Просто волшебно. Как никогда.</div>
      </section>
    </>
  );
};

export default Main;
