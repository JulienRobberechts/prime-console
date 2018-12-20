
/**
 * return an array of limit+1 booleans with
 * primes[n] === true if n is a prime number false otherwise.
 * @param {number} limit the maximum number to test (limit included)
 */
const findBoolPrimesArray = (limit) => {

  // primesBools[n] === true if n is a prime number.
  // All non prime numbers will be set to false before at the end.
  const primesBools = new Array(limit + 1).fill(true);
  primesBools[0] = false;
  primesBools[1] = false;

  const sqrt = Math.sqrt(limit + 1);
  for (let i = 2; i <= sqrt; i++) {
    if (!primesBools[i]) continue;
    for (let j = i; j <= limit; j += i) {
      if (primesBools[j] && i != j) primesBools[j] = false;
    }
  }

  return primesBools;
};

/**
 * return an array of all primes integers up to limit
 * @param {number} limit the maximum number to test (limit included)
 */
const findPrimes = (limit) => {

  const primesBooleans = findBoolPrimesArray(limit);

  const primesNumbers = primesBooleans.reduce((primesArray, isPrime, number) => {
    if (isPrime) {
      primesArray.push(number);
    }
    return primesArray;
  }, []);

  return primesNumbers;
};

module.exports = {
  findPrimes,
}