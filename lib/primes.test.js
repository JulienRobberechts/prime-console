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

    it('should return an array of primes up to 101', () => {
      const primesNumbers = primes.findPrimes(101);
      primesNumbers.should.be.eql([
        2,
        3,
        5,
        7,
        11,
        13,
        17,
        19,
        23,
        29,
        31,
        37,
        41,
        43,
        47,
        53,
        59,
        61,
        67,
        71,
        73,
        79,
        83,
        89,
        97,
        101
      ]);
    });

  });
});
