import React, { useEffect, useContext, useRef } from "react";

import Context from "../../../context/context";

import loadImages from "../../../utils/loadImages";
import setBackgroundImage from "../../../utils/setBackgroundImage";

const Sky = () => {
  const context = useContext(Context);

  const frameAmount = useRef(28);

  useEffect(() => {
    loadImages("sky", frameAmount.current);
    setBackgroundImage("sky", frameAmount.current, context.skyStart, context.skyEnd, true);
    window.addEventListener("scroll", () =>
      setBackgroundImage("sky", frameAmount.current, context.skyStart, context.skyEnd, true)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <figure className="sky">
      <figcaption className="sky__caption">
        <div className="sky__bg"></div>
        <div className="sky__title">под</div>
        <div className="sky__title">открытым</div>
        <div className="sky__title">небом</div>
      </figcaption>
    </figure>
  );
};

export default Sky;
