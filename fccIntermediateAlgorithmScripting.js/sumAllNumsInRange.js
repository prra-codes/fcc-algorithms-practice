// Sum All Numbers in a Range     22/05/23

// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10

function sumAll(arr) {
  arr.sort((a, b) => a - b);

  let smallerNum = arr[0];
  let largerNum = arr[1];

  let sum = 0;

  for (let i = smallerNum; i <= largerNum; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([1, 4]));
