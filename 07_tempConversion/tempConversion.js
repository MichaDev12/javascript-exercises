const convertToCelsius = function(num) {
  let result;

  const F_TO_C = (num - 32) * 5/9;

  if (!Number.isInteger(F_TO_C)) {
    result = Number(F_TO_C.toFixed(1));
  } else {
    result = F_TO_C;
  }
  
  return result;
};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
