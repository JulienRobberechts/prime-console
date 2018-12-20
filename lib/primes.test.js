const primes = require('./primes');
const should = require('chai').should();

describe('primes', () => {
  describe('#algo', () => {

    it('should return an array of primes up to 5', () => {
      const primesNumbers = primes.findPrimes(5);
      primesNumbers.should.be.eql([
        2,
        3,
        5,
      ]);
    });

  });
});
