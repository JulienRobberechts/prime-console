const primes = require('../lib/primes');

const tryCmd = (cmd) => {
  try {
    return cmd();
  } catch (error) {
    return error;
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

const primesCmd = (limit) => tryCmd(() => primes.findPrimes(checkInt('limit',limit)));

module.exports = {
  primesCmd
};