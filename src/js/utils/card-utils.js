const valueMap = new Map([
  [0, "0"], [1, "1"], [2, "2"], [3, "3"],
  [4, "4"], [5, "5"], [6, "6"], [7, "7"],
  [8, "8"], [9, "9"], [10, "skip"],
  [11, "reverse"], [12, "draw2"],
  [13, "wild"], [14, "draw4"]
]);

const strValueMap = new Map([
  ["0", 0], ["1", 1], ["2", 2], ["3", 3],
  ["4", 4], ["5", 5], ["6", 6], ["7", 7],
  ["8", 8], ["9", 9], ["skip", 10],
  ["reverse", 11], ["draw2", 12],
  ["wild", 13], ["draw4", 14]
]);

const colorMap = new Map([
  [0, "R"], [1, "Y"],
  [2, "B"], [3, "G"],
  [4, "wild"]
]);

const strColorMap = new Map([
  ["R", 0], ["Y", 1],
  ["B", 2], ["G", 3],
  ["wild", 4],
]);

function mapCardToImgCode({value, color}) {
  return mapValue(value) + "-" + mapColor(color);
}

function mapImgCodeToCard(imgCode) {
  let [valueStr, colorStr] = imgCode.split("-");
  return {
    value: mapStringToValue(valueStr),
    color: mapStringToColor(colorStr)
  }
}

function isValidIntColor(intColor) {
  return intColor >= 0 && intColor <= 4;
}

function isValidIntValue(intValue) {
  return intValue >= 0 && intValue <= 14;
}

function mapStringToValue(valueString) {
  return strValueMap.get(valueString);
}

function mapStringToColor(colorString) {
  return strColorMap.get(colorString);
}

function mapValue(intValue) {
  return valueMap.get(intValue);
}

function mapColor(intColor) {
  return colorMap.get(intColor);
}
