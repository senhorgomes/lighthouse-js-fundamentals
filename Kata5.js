const urlEncode = function(text) {
  // Put your solution here
  let trimmedString = text.trim();
  let encodedString = ""
  for (let i = 0; i < trimmedString.length; i++) {
    if (trimmedString[i] === " ") {
      encodedString += "%20";
    } else {
      encodedString += trimmedString[i];
    }
  }
  return encodedString
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));