// 5. Title Case a Sentence, 15/05/23

// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
  let lowerCaseTitleStr = str.toLowerCase();

  let strArr = lowerCaseTitleStr.split(" ");

  let capitalizedArr = [];

  for (let i = 0; i < strArr.length; i++) {
    let capitalizedStr = strArr[i][0].toUpperCase();
    let restOfWord = strArr[i].substring(1);

    let wholeArrStr = capitalizedStr + restOfWord;
    capitalizedArr.push(wholeArrStr);
  }

  let wholeStr = capitalizedArr.join(" ");

  return wholeStr;
}

console.log(titleCase("I'm a little tea pot"));
