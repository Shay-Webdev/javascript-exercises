const convertToCelsius = function(degree) {
  let celsiusDegree = ((degree-32) * (5/9));
  return Math.round(celsiusDegree * 10)/10;
};

const convertToFahrenheit = function(degree) {
  let fahrenheitDegree = (degree * (9/5) + 32);
  return Math.round(fahrenheitDegree * 10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
