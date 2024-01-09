const reverseString = function(string) {
  let result = '';
  let array = string.split('');

  for(let i = array.length - 1; i >= 0; i--) {
    result += array.pop();
  }

  return result;
};

// Do not edit below this line
module.exports = reverseString;
