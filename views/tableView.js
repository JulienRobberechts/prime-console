const format = (table) => {
  if (!table) {
    return '';
  }

  var tableAsString = table.reduce((output, line) => {
    return `${output}| ${formatLine(line)}|\n`;
  }, "");

  return tableAsString;
};

const formatLine = line => {
  return line.join('| ');
};

module.exports = {
  format
}
