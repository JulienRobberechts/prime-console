const replDev = require('./views/consoleReplDev');
const repl = require('./views/consoleRepl');

if (process.argv.includes('dev')){
  replDev.launch();
}
else {
  repl.launch();
}