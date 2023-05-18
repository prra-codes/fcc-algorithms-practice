// 2. Factorialize a Number //  11/05/23

// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// done by myself!

function factorialize(num) {
  let total = 1;

  for (let i = 1; i <= num; i++) {
    total = total * i;
  }
  return total;
}

console.log(factorialize(5));
