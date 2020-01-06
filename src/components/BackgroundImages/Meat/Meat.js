import React, { useEffect, useContext, useRef } from "react";

import Context from "../../../context/context";

import loadImages from "../../../utils/loadImages";
import setBackgroundImage from "../../../utils/setBackgroundImage";

const Meat = () => {
  const context = useContext(Context);

  const frameAmount = useRef(49);

  useEffect(() => {
    loadImages("meat", frameAmount.current);
    setBackgroundImage("meat", frameAmount.current, context.meatStart, context.meatEnd, false);
    window.addEventListener("scroll", () =>
      setBackgroundImage("meat", frameAmount.current, context.meatStart, context.meatEnd, false)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <figure className="meat">
      <figcaption className="meat__caption">
        <div className="meat__bg"></div>
        <div className="meat__title">мясо</div>
        <div className="meat__title">с костра</div>
      </figcaption>
    </figure>
  );
};

export default Meat;
