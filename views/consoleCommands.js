const primes = require('../lib/primes');
const multiplicationTable = require('../lib/multiplicationTable');
const mPrimesTable = require('../lib/mPrimesTable');

const tryCmd = (header, cmd) => {
  try {
    console.log(header);
    return cmd();
  } catch (error) {
    return error.toString();
  }
}

const checkInt = (paramName, stringArg) => {
  const value = eval(stringArg);
  var integer = parseInt(value, 10);
  if (isNaN(integer)) {
    throw `invalid parameter ${paramName} - '${JSON.stringify(value)}' is not a valid integer.`;
  }
  return integer;
}

const checkArray = (paramName, arg) => {
  const value = eval(arg);
  if (!Array.isArray(value)) {
    throw `invalid parameter ${paramName} - '${JSON.stringify(value)}' is not a valid array.`;
  }
  return value;
}

const primesCmd = (limit) => tryCmd(
  `primes numbers up to ${limit}:`,
  () => primes.findPrimes(checkInt('limit',limit))
);

const mtableCmd = (array) => tryCmd(
  `multiplication table for ${JSON.stringify(array)}:`,
  () => multiplicationTable.generateTable(checkArray('array', array))
);

const mptableCmd = (limit) => tryCmd(
  `multiplication table primes numbers up to ${limit}:`,
  () => mPrimesTable.getMPrimesTable(checkInt('limit', limit))
);

module.exports = {
  primesCmd,
  mtableCmd,
  mptableCmd,
};