const primes = require('../lib/primes');
const multiplicationTable = require('../lib/multiplicationTable');

const tryCmd = (cmd) => {
  try {
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

const primesCmd = (limit) => tryCmd(() => primes.findPrimes(checkInt('limit',limit)));

const mtableCmd = (array) => tryCmd(() => multiplicationTable.generateTable(checkArray('array', array)));

module.exports = {
  primesCmd,
  mtableCmd,
};