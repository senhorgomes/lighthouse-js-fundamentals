const conditionalSum = function(values, condition) {
  // Your code here
  let sumNumbers = 0
  for (let i = 0; i < values.length; i++) {
    if ((values[i] % 2 === 0) && (condition === "even")) {
      sumNumbers += values[i]
    } else if ((condition === "odd") && (values[i] % 2 !== 0)) { 
      sumNumbers += values[i]
    }
  }
  return (sumNumbers)
}
//version 1.0
  /*let sumNumbers = 0
  if (condition === "even") {
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 === 0) {
        sumNumbers += values[i]
        }
    }
  } else if (condition === "odd") {
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 !== 0) {
        sumNumbers += values[i]
      }
    }
  }
  return (sumNumbers)
}*/
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));