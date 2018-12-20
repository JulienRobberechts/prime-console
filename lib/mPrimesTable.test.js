const primesTable = require('./mPrimesTable');
const should = require('chai').should();

describe('multiplication primes table', () => {
  describe('#end2end', () => {
    it('should return 2x2 multiplication table of primes up to 3', () => {
      const output = primesTable.getMPrimesTable(3);
      const expected = [['x', 2, 3], [2, 4, 6], [3, 6, 9]];
      output.should.be.eql(expected);
    });

    it('should return 3x3 multiplication table of primes up to 6', () => {
      const output = primesTable.getMPrimesTable(6);
      const expected = [['x', 2, 3, 5],
      [2, 4, 6, 10],
      [3, 6, 9, 15],
      [5, 10, 15, 25]];

      output.should.be.eql(expected);
      // console.log('OUTPUT:');
      // console.log(output);
    });
  });
});
