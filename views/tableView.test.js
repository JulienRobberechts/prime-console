const tableView = require('./tableView');
const should = require('chai').should();

describe('table view', () => {
  describe('#show', () => {

    it('should return empty for a null table', () => {
      tableView.format(null).should.be.eql("");
    });

    it('should return empty for an undefined table', () => {
      tableView.format(undefined).should.be.eql("");
    });

    // it('should return table column for an empty table', () => {
    //   table.format([]).should.be.eql("Table view");
    // });

    it('should return table column and content for a simple column table', () => {
      const table = [["x"],[2], [3]];
      const expectedFormat = `
| x|
| 2|
| 3|
`.substr(1); // remove the first carriage return

      const output = tableView.format(table);
      output.should.be.eql(expectedFormat);
      // console.log('OUTPUT:');
      // console.log(output);
    });

    it('should return table column and content for a simple line table', () => {
      const table = [[, 2, 3]];
      const expectedFormat = `
| | 2| 3|
`.substr(1); // remove the first carriage return

      const output = tableView.format(table);
      output.should.be.eql(expectedFormat);
      // console.log('OUTPUT:');
      // console.log(output);
    });

    it('should return table column and content for a simple square table', () => {
      const table = [
        ['*', 2, 3],
        [2, 4, 6],
        [3, 6, 9],
      ];
      const expectedFormat = `
| *| 2| 3|
| 2| 4| 6|
| 3| 6| 9|
`.substr(1); // remove the first carriage return

      const output = tableView.format(table);
      output.should.be.eql(expectedFormat);
      // console.log('OUTPUT:');
      // console.log(output);
    });

  });
});