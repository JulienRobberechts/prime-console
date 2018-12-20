const repl = require('repl');
const cmd = require('./consoleCommands.js');
const {
  primesCmd,
  mtableCmd,
  mptableCmd
} = cmd;

exports.launch = () => {
  const replServer = repl.start({
    prompt: "prime-console-DEV > ",
  });

  // i.e: primes(100)
  Object.defineProperty(replServer.context, 'primes', {
    configurable: false,
    enumerable: true,
    value: primesCmd,
  });

  // i.e: mtable([1,2,3])
  Object.defineProperty(replServer.context, 'mtable', {
    configurable: false,
    enumerable: true,
    value: mtableCmd,
  });

  // i.e: mptable(10)
  Object.defineProperty(replServer.context, 'mptable', {
    configurable: false,
    enumerable: true,
    value: mptableCmd
  });
}
