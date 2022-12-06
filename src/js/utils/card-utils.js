const valueMap = new Map([
  [0, "0"], [1, "1"], [2, "2"], [3, "3"],
  [4, "4"], [5, "5"], [6, "6"], [7, "7"],
  [8, "8"], [9, "9"], [10, "skip"],
  [11, "reverse"], [12, "draw2"],
  [13, "wild"], [14, "draw4"]
]);

const colorMap = new Map([
  [0, "R"], [1, "Y"],
  [2, "B"], [3, "G"],
  [4, "wild"]
]);

function mapCardToImg({value, color}) {
  return mapValue(value) + "-" + mapColor(color);
}

function isValidIntColor(intColor) {
  return intColor >= 0 && intColor <= 4;
}

function isValidIntValue(intValue) {
  return intValue >= 0 && intValue <= 14;
}

function mapValue(intValue) {
  return valueMap.get(intValue);
}

function mapColor(intColor) {
  return colorMap.get(intColor);
}
