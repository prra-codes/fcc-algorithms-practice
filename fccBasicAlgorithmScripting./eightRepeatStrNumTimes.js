// Repeat a string Repeat a String   Thu, 18/05/23

// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return "";
  }

  let repeatedStr = "";

  for (let i = 1; i <= num; i++) {
    repeatedStr += str;
  }

  return repeatedStr;
}

console.log(repeatStringNumTimes("abc", 3));
