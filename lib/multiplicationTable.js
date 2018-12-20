const generateTable = (operands) => {
  
  const numbers = [1].concat(operands);

  const multTable = new Array(numbers);

  for (let i = 0; i < numbers.length; i++) {
    multTable[i] = new Array(numbers);
    for (let j = 0; j < numbers.length; j++) {
      multTable[i][j] = numbers[i] * numbers[j];
    }
  }
  multTable[0][0] = "x";

  return multTable;
};

module.exports = {
  generateTable,
}
