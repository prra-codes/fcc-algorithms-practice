// Sum All Odd Fibonacci Numbers    Wed, 24/05/23

// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
  let arrOfFibs = [0, 1];

  for (let i = 2; i <= num; i++) {
    let newFib = arrOfFibs[i - 1] + arrOfFibs[i - 2];
    arrOfFibs.push(newFib);
  }

  let sumOfOddFibs = 0;

  for (let i = 1; i < arrOfFibs.length; i++) {
    if (arrOfFibs[i] <= num && arrOfFibs[i] % 2 !== 0) {
      sumOfOddFibs += arrOfFibs[i];
    }
  }

  return sumOfOddFibs;
}

console.log(sumFibs(75025));
