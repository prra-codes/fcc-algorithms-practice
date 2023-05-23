// Sum All Primes                  Tue, 23/05/23
// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

function sumPrimes(num) {
  let arrPrimes = [2];

  const isPrime = (num) => {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  };

  for (let i = 3; i <= num; i++) {
    if (isPrime(i)) {
      arrPrimes.push(i);
    }
  }

  let sumOfPrimes = 0;

  for (let i = 0; i < arrPrimes.length; i++) {
    sumOfPrimes += arrPrimes[i];
  }

  return sumOfPrimes;
}

console.log(sumPrimes(10));
