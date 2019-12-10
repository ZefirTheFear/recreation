import formatNumber from "./formatNumber";

export default (componentName, frameAmount) => {
  const figure = document.querySelector(`.${componentName}`);
  for (let index = 0; index <= frameAmount; index++) {
    let image = document.createElement("img");
    image.classList.add(`${componentName}__img`);
    image.classList.add(`${componentName}__img_${formatNumber(index)}`);
    image.src = `/assets/images/${componentName}/${formatNumber(index)}.jpg`;
    image.style.display = "none";
    figure.prepend(image);
  }
};
