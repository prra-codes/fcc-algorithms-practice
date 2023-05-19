// 10. Chunky Monkey              Fri, 10/05/23
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  let finalArr = [];

  while (arr.length > 0) {
    finalArr.push(arr.slice(0, size));
    arr.splice(0, size);
  }

  return finalArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
