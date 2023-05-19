// 9. Truncate a string, Fri, 19/05/23

//Truncate a string (first argument) if it is longer than the given maximum string (second argument). Return the truncated string with a ... ending.

// String.prototype.slice()

function truncateAString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  }

  return str;
}

console.log(truncateAString("A-tisket a-tasket A green and yellow basket", 8));
