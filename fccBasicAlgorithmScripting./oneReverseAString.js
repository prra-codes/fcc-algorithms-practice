// 1. Reverse a String, //  11/05/23

// Reverse the provided string.

// You may need to turn the string into an array before you can reverse.

// Me doing it by myself successfully!
function reverseString(str) {
  let strArr = str.split("");
  let reverseArr = strArr.reverse();
  let reverseStr = reverseArr.join("");
  return reverseStr;

  // or can just do:
  // return str.split("").reverse().join("")
}

// console.log(reverseString("Hello"));

// another method using a for loop

// also solved by myself!
function reverseStringTwo(str) {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
console.log(reverseStringTwo("Hello"));
