import formatNumber from "./formatNumber";

export default (componentName, frameAmount, minPageYOffset, maxPageYOffset, isLastBlock) => {
  const proportion = (maxPageYOffset - minPageYOffset) / frameAmount;

  if (window.pageYOffset < minPageYOffset || window.pageYOffset > maxPageYOffset) {
    if (!(isLastBlock && window.pageYOffset > maxPageYOffset)) {
      return (document.querySelector(`.${componentName}`).style.display = "none");
    }
  }

  document.querySelector(`.${componentName}`).style.display = "";
  let picNum = formatNumber(Math.round((window.pageYOffset - minPageYOffset) / proportion));

  if (picNum > frameAmount) {
    picNum = formatNumber(frameAmount);
  }

  document.querySelector(`.${componentName}__img_${picNum}`).style.opacity = "1";
  document
    .querySelectorAll(`.${componentName}__img`)
    .forEach(item =>
      item.classList.contains(`${componentName}__img_${picNum}`) ? null : (item.style.opacity = "0")
    );

  const div = document.querySelector(".background__picture-number");
  div.innerHTML = `${componentName}__img_${picNum}`;
};
