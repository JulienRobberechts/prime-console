const multiplciationTable = require('./multiplicationTable');
const primes = require('./primes');

const getMPrimesTable = (limit) => {
  const operands = primes.findPrimes(limit);
  const multTable = multiplciationTable.generateTable(operands);
  return multTable;
};

module.exports = {
  getMPrimesTable
}