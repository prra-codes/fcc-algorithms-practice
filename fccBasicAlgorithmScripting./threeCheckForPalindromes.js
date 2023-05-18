// 3. Check for Palindromes, Sun, 14/05/23

// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
function palindrome(str) {
  let lowerCaseStr = str.toLowerCase();

  let reversedStr = lowerCaseStr.split("").reverse().join("");

  if (lowerCaseStr === reversedStr) {
    return true;
  }
  return false;
}

console.log(palindrome("hannah"));
