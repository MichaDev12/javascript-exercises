const sumAll = function (num1, num2) {
  let min;
  let max;

  if (num1 > 0 && num2 > 0 && typeof num1 == "number" && typeof num2 == "number") {
    if (num1 > num2) {
      max = num1;
      min = num2;
    } else {
      max = num2;
      min = num1;
    }
  } else {
    return 'ERROR';
  }

  let finalSum = 0;

  for (let i = 1; i <= max; i++) {
    finalSum += i;
  }

  return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
