class Turtler {
  /**
   * will turn an array matrix into a table
   * @class turtler
   * @param  {Array[Array<String>]} data   - array of arrays of strings
   * @param  {Object}  options         - options to override the default actions
   * @param  {Boolean} options.hasHeader - this will determine if the table data has a header or not, by default this is true
   * @param  {String}  options.columnSeparator - the default separators is ' | '
   * @param  {String}  options.headerSeparator - the default header separators is '=', this value should only be one character
   * @return {String} - a string that represents the ascii table of the data provided
   */
  constructor(data, options={}) {
    if(!Array.isArray(data)) throw new Error('data should be an array of arrays');

    let { hasHeader=true, columnSeparator=' | ', headerSeparator='=' } = options;

    this.data = data;
    this.cache = {};

    this.hasHeader = hasHeader;
    this.columnSeparator = columnSeparator;
    this.headerSeparator = headerSeparator;
  }
  getSize() {
    const { data } = this;

    let columns = 0;
    let columnWidths = [];

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

    return columnWidths;
  }
  /**
   * will return an ascii table representation of the data
   * @method ascii
   * @return {String} - ascii table
   */
  ascii() {
    if (this.cache['ascii']) return this.cache['ascii'];

    const { data, hasHeader, columnSeparator, headerSeparator } = this;

    let table = '';
    let columnWidths = this.getSize();

    data.forEach((row, l) => {
      row = row.map((value, i) => {
        // Create pad of empty spaces to match the width of this value to max width of this column
        let padding = ' '.repeat(columnWidths[i] - value.length);
        return value + padding;
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
    return this.cache['ascii'] = table;
  }
  /**
   * renders a markdown table
   * @method markdown
   * @return {String} markdown table string
   */
  markdown() {
    if (this.cache['markdown']) return this.cache['markdown'];

    const { data } = this;

    let table = '';
    let columnWidths = this.getSize();

    // make the rows nice and tidy giving enough space on all sides to make it uniform
    data.forEach((row, l) => {
      row = row.map((value, i) => {
        // Create pad of empty spaces to match the width of this value to max width of this column
        return value + ' '.repeat(columnWidths[i] - value.length);
      // join on the pipe which denotes the border of a table element in markdown
      }).join(' | ');

      table += `| ${row} |\n`;

      if(l === 0) {
        // we add the header with the width of the column minus the addition of a pipe symbol
        table += columnWidths.map((width, i) => {
          if(i == 0) {
            return '|' + '-'.repeat(width + 2) + '|';
          }
          return '-'.repeat(width + 2) + '|';
        }).join('') + '\n';
      }
    });

    return this.cache['markdown'] = table;
  }
  /**
   * will return an html table representation of the data
   * @method html
   * @return {String} - html table
   */
  html() {
    if (this.cache['html']) return this.cache['html'];

    const { data } = this;

    let header = '';
    let body = '';

    data.forEach((row, l) => {
      if(l === 0) {
        header += `<tr>
          ${row.map((value) => {
            return `<th>${value}</th>`;
          }).join('')}
        </tr>`;
      } else {
        body += `<tr>
          ${row.map((value) => {
            return `<td>${value}</td>`;
          }).join('')}
        </tr>`;
      }
    });

    return this.cache['html'] = `<table>
      <thead>
        ${header}
      </thead>
      <tbody>
        ${body}
      </tbody>
    </table>`.replace(/\n/g, '');
  }
  /**
   * renders the data to an ascii table string
   * @method toString
   * @return {String} ascii table string
   */
  toString() {
    return this.ascii();
  }
}

module.exports = Turtler;
