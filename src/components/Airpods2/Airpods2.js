import React, { useEffect } from "react";

import loadImages from "../../utils/loadImages";
import setBackgroundImage from "../../utils/setBackgroundImage";

const Airpods2 = () => {
  const frameAmount = 88;

  useEffect(() => {
    loadImages("airpods2", frameAmount);
    setBackgroundImage("airpods2", frameAmount, 2001, 4000, true);
    window.addEventListener("scroll", () =>
      setBackgroundImage("airpods2", frameAmount, 2001, 4000, true)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <figure className="airpods2"></figure>;
};

export default Airpods2;
