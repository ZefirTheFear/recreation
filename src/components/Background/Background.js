import React, { useEffect } from "react";

import Airpods from "../Airpods/Airpods";
import Airpods2 from "../Airpods2/Airpods2";

import "./Background.scss";

const Background = () => {
  useEffect(() => {
    document.querySelector(".background").style.height =
      2000 + 2000 + document.documentElement.clientHeight + "px";
    console.log("background.height", document.querySelector(".background").style.height);
    // loadImgs();
    // setBgImg();
    // window.addEventListener("scroll", setBgImg);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const frameAmount = 131;

  // const formatNumber = num => {
  //   if (num >= 0 && num < 10) {
  //     return `000${num}`;
  //   } else if (num >= 10 && num < 100) {
  //     return `00${num}`;
  //   } else if (num >= 100 && num < 1000) {
  //     return `0${num}`;
  //   }
  // };

  // const loadImgs = () => {
  //   const figure = document.querySelector(".background__figure");
  //   for (let index = 0; index <= frameAmount; index++) {
  //     let image = document.createElement("img");
  //     image.classList.add(`background__img`);
  //     image.classList.add(`img_${formatNumber(index)}`);
  //     image.src = `/assets/images/${formatNumber(index)}.jpg`;
  //     image.style.display = "none";
  //     figure.prepend(image);
  //   }
  // };

  // const setBgImg = () => {
  //   const maxPageYOffset =
  //     document.querySelector(".background").scrollHeight - document.documentElement.clientHeight;
  //   const proportion = maxPageYOffset / frameAmount;
  //   let picNum = formatNumber(Math.round(window.pageYOffset / proportion));

  //   if (picNum > frameAmount) {
  //     picNum = formatNumber(frameAmount);
  //   }

  //   document.querySelectorAll(".background__img").forEach(item => (item.style.display = "none"));
  //   document.querySelector(`.img_${picNum}`).style.display = "";

  //   const div = document.querySelector(".background__picture-number");
  //   div.innerHTML = picNum;
  // };

  // const setBckgPosition = () => {
  //   console.log("documentElement.clientHeight", document.documentElement.clientHeight);
  //   console.log("window.pageYOffset", window.pageYOffset);
  //   console.log("documentElement.scrollHeight", document.documentElement.scrollHeight);
  //   console.log("background.scrollHeight", document.querySelector(".background").scrollHeight);
  // };

  return (
    <div className="background">
      {/* <figure className="background__figure">
        <div className="background__picture-number">imgNum</div>
      </figure> */}
      <div className="background__picture-number">imgNum</div>
      <Airpods />
      <Airpods2 />
    </div>
  );
};

export default Background;
