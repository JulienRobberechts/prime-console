const multiplicationTable = require('./multiplicationTable');
const should = require('chai').should();

describe('multiplication table', () => {
  describe('#generation', () => {

    it('should return an empty multiplication table for empty value', () => {
      multiplicationTable.generateTable([]).should.be.eql([["x"]]);
    });

    it('should return an 1x1 multiplication table (+headers) for 1 value', () => {
      multiplicationTable.generateTable([7]).should.be.eql([["x", 7], [7, 49]]);
    });

    it('should return an 2x2 multiplication table (+headers) for 2 values', () => {
      multiplicationTable.generateTable([3, 4]).should.be.eql([["x", 3, 4], [3, 9, 12], [4, 12, 16]]);
    });
  });
});