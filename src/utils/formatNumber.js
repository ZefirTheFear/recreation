export default num => {
  if (num >= 0 && num < 10) {
    return `000${num}`;
  } else if (num >= 10 && num < 100) {
    return `00${num}`;
  } else if (num >= 100 && num < 1000) {
    return `0${num}`;
  }
};
