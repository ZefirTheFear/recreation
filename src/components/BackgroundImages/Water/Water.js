import React, { useEffect, useContext, useRef } from "react";

import Context from "../../../context/context";

import loadImages from "../../../utils/loadImages";
import setBackgroundImage from "../../../utils/setBackgroundImage";

const Water = () => {
  const context = useContext(Context);

  const frameAmount = useRef(38);

  useEffect(() => {
    loadImages("water", frameAmount.current);
    setBackgroundImage("water", frameAmount.current, context.waterStart, context.waterEnd, false);
    window.addEventListener("scroll", () =>
      setBackgroundImage("water", frameAmount.current, context.waterStart, context.waterEnd, false)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <figure className="water">
      <figcaption className="water__caption">
        <div className="water__bg"></div>
        <div className="water__title">отдых</div>
        <div className="water__title">на воде</div>
      </figcaption>
    </figure>
  );
};

export default Water;
