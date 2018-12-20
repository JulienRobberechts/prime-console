const repl = require('repl');
const primes = require('../lib/primes');

exports.launch = () => {
  const replServer = repl.start({
    prompt: "prime-console > ",
  });

  // i.e: primes(100)
  Object.defineProperty(replServer.context, 'primes', {
    configurable: false,
    enumerable: true,
    value: (limit) => primes.findPrimes(limit),
  });

}
