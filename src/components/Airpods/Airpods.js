import React, { useEffect } from "react";

import loadImages from "../../utils/loadImages";
import setBackgroundImage from "../../utils/setBackgroundImage";

import "./Airpods.scss";

const Airpods = () => {
  const frameAmount = 131;

  useEffect(() => {
    loadImages("airpods", frameAmount);
    setBackgroundImage("airpods", frameAmount, 0, 2000);
    window.addEventListener("scroll", () => setBackgroundImage("airpods", frameAmount, 0, 2000));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <figure className="airpods"></figure>;
};

export default Airpods;
