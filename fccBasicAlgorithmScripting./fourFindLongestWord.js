// 4. Find the Longest Word in a String (14/05/23)

// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWord(str) {
  let strArr = str.split(" ");

  let longestWord = "";

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > longestWord.length) {
      longestWord = strArr[i];
    }
  }

  return longestWord.length;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
