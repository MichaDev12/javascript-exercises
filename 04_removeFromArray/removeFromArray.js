const removeFromArray = function (array, ...args) {
  let newArray = array;

  for (let arg of args) {
    if (newArray.includes(arg)) {
      newArray.splice(newArray.indexOf(arg),1)
    }
  }

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
