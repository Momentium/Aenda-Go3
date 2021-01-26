export const getTranslateX = (element) => {
  const _style = window.getComputedStyle(element);
  const _matrix = _style.transform || _style.webkitTransform || _style.mozTransform;
  const _matrixValues = _matrix.match(/matrix.*\((.+)\)/)[1].split(', ')
  const _x = _matrixValues[4]
  return Number(_x);
}

export const getNewLinedStr = (txt) => {
}