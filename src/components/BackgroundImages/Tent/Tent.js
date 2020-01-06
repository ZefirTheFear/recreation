import React, { useEffect, useContext, useRef } from "react";

import Context from "../../../context/context";

import loadImages from "../../../utils/loadImages";
import setBackgroundImage from "../../../utils/setBackgroundImage";

import "./Tent.scss";

const Tent = () => {
  const context = useContext(Context);

  const frameAmount = useRef(37);

  useEffect(() => {
    loadImages("tent", frameAmount.current);
    setBackgroundImage("tent", frameAmount.current, context.tentStart, context.tentEnd, false);
    window.addEventListener("scroll", () =>
      setBackgroundImage("tent", frameAmount.current, context.tentStart, context.tentEnd, false)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <figure className="tent">
      <figcaption className="tent__caption">
        <div className="tent__bg"></div>
        <div className="tent__title">ночевка</div>
        <div className="tent__title">в палатке</div>
      </figcaption>
    </figure>
  );
};

export default Tent;
