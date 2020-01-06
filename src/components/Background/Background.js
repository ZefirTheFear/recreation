import React, { useEffect, useContext } from "react";

import BirdsEyeView from "../BackgroundImages/BirdsEyeView/BirdsEyeView";
import Water from "../BackgroundImages/Water/Water";
import Wake from "../BackgroundImages/Wake/Wake";
import Meat from "../BackgroundImages/Meat/Meat";
import Tent from "../BackgroundImages/Tent/Tent";
import Sky from "../BackgroundImages/Sky/Sky";

import Context from "../../context/context";

import "./Background.scss";

const Background = () => {
  const context = useContext(Context);

  useEffect(() => {
    document.querySelector(".background").style.height =
      context.mainHeight + document.documentElement.clientHeight + "px";
    console.log("background.height", document.querySelector(".background").style.height);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="background">
      <div className="background__picture-number">imgNum</div>
      <BirdsEyeView />
      <Water />
      <Wake />
      <Meat />
      <Tent />
      <Sky />
    </div>
  );
};

export default Background;
