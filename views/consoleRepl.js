const repl = require('repl');
const cmd = require('./consoleCommands.js');
const { primesCmd } = cmd;

exports.launch = () => {
  const replServer = repl.start({
    prompt: "prime-console > ",
    writer: o => o, // useful to convert the output
  });

  // i.e: primes(100)
  Object.defineProperty(replServer.context, 'primes', {
    configurable: false,
    enumerable: true,
    value: primesCmd,
  });
}
