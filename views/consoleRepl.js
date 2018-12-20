const repl = require('repl');
const cmd = require('./consoleCommands.js');
const tableFormat = require('./tableView');

const {
  mptableCmd
} = cmd;

function evalMPTableCmd(cmd, context, filename, callback) {
  const cmdArg = cmd.replace('\n', '');
  const cmdMethod = tableFormat.format(mptableCmd(cmdArg));
  callback(null, cmdMethod);
}

exports.launch = () => {
  const replServer = repl.start({
    prompt: "prime-console > ",
    eval: evalMPTableCmd,
    writer: o => o, // useful to convert the output
  });
}
