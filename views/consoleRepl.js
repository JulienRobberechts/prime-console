const repl = require('repl');
const primes = require('../lib/primes');

exports.launch = () => {
  const replServer = repl.start({
    prompt: "prime-console > ",
    writer: o => o, // useful to convert the output
  });

  // i.e: primes(100)
  Object.defineProperty(replServer.context, 'primes', {
    configurable: false,
    enumerable: true,
    value: (limit) => tryCmd(() => primes.findPrimes(checkInt(limit))),
  });

}

const tryCmd = (cmd) => {
  try {
    return cmd();
  } catch (error) {
    return "invalid command - " + error;
  }
}

const checkInt = (stringArg) => {
  const value = eval(stringArg);
  var integer = parseInt(value, 10);
  if (isNaN(integer)) {
    throw `'${JSON.stringify(value)}' is not a valid integer parameter.`;
  }
  return integer;
}
