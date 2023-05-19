// 12. Mutations                    Fri, 19/05/23

function mutation(arr) {
  let lowerCaseStrOne = arr[0].toLowerCase();

  let lowerCaseStrTwo = arr[1].toLowerCase();

  let firstWordArr = lowerCaseStrOne.split("");
  let secondWordArr = lowerCaseStrTwo.split("");

  let set = new Set(firstWordArr);

  for (const char of secondWordArr) {
    if (!set.has(char)) {
      return false;
    }
  }

  return true;
}

console.log(mutation(["Hello", "Hey"]));
