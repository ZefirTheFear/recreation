import React, { useEffect, useContext, useRef } from "react";

import Context from "../../../context/context";

import loadImages from "../../../utils/loadImages";
import setBackgroundImage from "../../../utils/setBackgroundImage";

const BirdsEyeView = () => {
  const context = useContext(Context);

  const frameAmount = useRef(80);

  useEffect(() => {
    loadImages("birds-eye-view", frameAmount.current);
    setBackgroundImage(
      "birds-eye-view",
      frameAmount.current,
      context.birdsEyeViewStart,
      context.birdsEyeViewEnd,
      false
    );
    window.addEventListener("scroll", () =>
      setBackgroundImage(
        "birds-eye-view",
        frameAmount.current,
        context.birdsEyeViewStart,
        context.birdsEyeViewEnd,
        false
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <figure className="birds-eye-view">
      <figcaption className="birds-eye-view__caption">
        <div className="birds-eye-view__bg"></div>
        <div className="birds-eye-view__title">канев</div>
        <div className="birds-eye-view__desc">живописное место на днепре</div>
      </figcaption>
    </figure>
  );
};

export default BirdsEyeView;
