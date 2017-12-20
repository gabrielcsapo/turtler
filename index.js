/**
 * will turn an array matrix into a table
 * @method turtler
 * @param  {Array[Array<String>]} data   - array of arrays of strings
 * @param  {Object}  options         - options to override the default actions
 * @param  {Boolean} options.hasHeader - this will determine if the table data has a header or not, by default this is true
 * @param  {String}  options.columnSeparator - the default separators is ' | '
 * @param  {String}  options.headerSeparator - the default header separators is '=', this value should only be one character
 * @return {String} - a string that represents the ascii table of the data provided
 */
module.exports = function turtler(data, options={}) {
  if(!Array.isArray(data)) throw new Error('data should be an array of arrays');

  let table = '';
  let columns = 0;
  let columnWidths = [];
  let { hasHeader=true, columnSeparator=' | ', headerSeparator='=' } = options;

  // Find the maximum width of each column
  // If rows contain uneven number of columns, throw
  data.forEach((row) => {
    // The row should be an array
    if(!Array.isArray(row)) throw new Error('data should be an array of arrays');
    // Set the initial length of the row
    if(!columns) columns = row.length;
    // If the current row is not the same length as the initial one throw error
    if(columns !== row.length) throw new Error('columns are not formed properly');

    // find the maximum length of each column
    row.forEach((v, l) => {
      // column values must be strings
      if(typeof v !== 'string') throw new Error('column values should be strings');

      // Find the maximum string length in each column
      if(!columnWidths[l] || columnWidths[l] < v.length) {
        columnWidths[l] = v.length;
      }
    });
  });

  data.forEach((row, l) => {
    row = row.map((column, i) => {
      let value = '';
      // the length of the string should be the max column widths
      for(var c = 0; c < columnWidths[i]; c++) {
        value += column[c] || ' ';
      }
      return value;
    // join on the columnSeparator
    }).join(columnSeparator);

    table += `${row}\n`;
    if(l === 0) {
      // ignore the header string if hasHeader is false or headerSeparator is not set
      if(!hasHeader || !headerSeparator) return;

      // we add columnSeparator.length because above we joined on that string which could be more than one character.
      // We only want one character so we only look at the first character of the string
      table += headerSeparator[0].repeat((columnWidths.reduce((a, b) => a + b)) + columnSeparator.length) + '\n';
    }
  });

  return table;
};
