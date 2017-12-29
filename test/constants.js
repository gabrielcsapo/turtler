const test = require('tape');

const constants = require('../constants');

test('Constants', (t) => {
  t.plan(3);

  t.test('html separators default values are set', (t) => {
    t.equal(constants.htmlSeparatorsDefault.rowStart, '<div class="table row">');
    t.equal(constants.htmlSeparatorsDefault.rowEnd, '</div>');
    t.equal(constants.htmlSeparatorsDefault.columnStart, '<span class="table column">');
    t.equal(constants.htmlSeparatorsDefault.columnEnd, '</span>');
    t.end();
  });

  t.test('markdown header separtor has default value', (t) => {
    t.equal(constants.markdownHeaderSeparotrDefault, '-');
    t.end();
  });

  t.test('default vaules are set for hasHeader, header and column separator', t => {
    t.equal(constants.columnSeparatorDefault, ' | ');
    t.equal(constants.headerSeparatorDefault, '=');
    t.equal(constants.hasHeaderDefault, true);
    t.end();
  });
});
