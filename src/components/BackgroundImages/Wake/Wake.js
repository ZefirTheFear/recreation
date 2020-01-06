import React, { useEffect, useContext, useRef } from "react";

import Context from "../../../context/context";

import loadImages from "../../../utils/loadImages";
import setBackgroundImage from "../../../utils/setBackgroundImage";

const Wake = () => {
  const context = useContext(Context);

  const frameAmount = useRef(42);

  useEffect(() => {
    loadImages("wake", frameAmount.current);
    setBackgroundImage("wake", frameAmount.current, context.wakeStart, context.wakeEnd, false);
    window.addEventListener("scroll", () =>
      setBackgroundImage("wake", frameAmount.current, context.wakeStart, context.wakeEnd, false)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <figure className="wake">
      <figcaption className="wake__caption">
        <div className="wake__bg"></div>
        <div className="wake__title">катание на</div>
        <div className="wake__title">вейкборде</div>
        <div className="wake__title">плюшке</div>
        <div className="wake__title">лодке</div>
      </figcaption>
    </figure>
  );
};

export default Wake;
