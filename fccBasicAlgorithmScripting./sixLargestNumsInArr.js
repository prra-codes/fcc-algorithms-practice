// Return Largest Numbers in Arrays, Thu, 18/05/23

// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
  let maxes = [];

  for (let i = 0; i < arr.length; i++) {
    let maxVal = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > maxVal) {
        maxVal = arr[i][j];
      }
    }
    maxes.push(maxVal);
  }

  return maxes;
}

console.log(
  largestOfFour([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10],
  ])
);
