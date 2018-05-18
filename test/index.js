const test = require('tape')

const Turtler = require('../index')

test('Turtler', (t) => {
  t.plan(11)

  t.test('should throw on value that isn\'t an array of arrays', (t) => {
    try {
      let table = new Turtler('hi')
      table.getSize()
      t.fail('should not be able to format strings')
    } catch (ex) {
      t.equal(ex.message, 'data should be an array of arrays')
      t.end()
    }
  })

  t.test('should throw on value that isn\'t an array of arrays', (t) => {
    try {
      let table = new Turtler([['hi'], 'nope nope nope'])
      table.getSize()
      t.fail('should not be able to format strings as row values')
    } catch (ex) {
      t.equal(ex.message, 'data should be an array of arrays')
      t.end()
    }
  })

  t.test('should throw on column values that are not strings', (t) => {
    try {
      let table = new Turtler([['hi'], [{ hi: 'world' }]])
      table.getSize()
      t.fail('should not be able to format objects as column values')
    } catch (ex) {
      t.equal(ex.message, 'column values should be strings')
      t.end()
    }
  })

  t.test('should be able to format simple arrays (ascii/default)', (t) => {
    try {
      let table = new Turtler([
        ['uid', 'name'],
        ['1', 'Doe'],
        ['2', 'Hemma']
      ])
      t.equal(table.toString(), 'uid | name \n===========\n1   | Doe  \n2   | Hemma\n')
      t.end()
    } catch (ex) {
      t.fail(ex)
    }
  })

  t.test('should be able to ensure the header length will be appropriately sized across multiple columns', (t) => {
    try {
      let table = new Turtler([
        ['uid', 'name', 'quote'],
        ['1', 'Doe', 'this is a long string'],
        ['2', 'Hemma', 'this is a longer string']
      ])
      t.equal(table.toString(), 'uid | name  | quote                  \n=====================================\n1   | Doe   | this is a long string  \n2   | Hemma | this is a longer string\n')
      t.end()
    } catch (ex) {
      t.fail(ex)
    }
  })

  t.test('should be able to format simple arrays (markdown)', (t) => {
    try {
      let table = new Turtler([
        ['uid', 'name'],
        ['1', 'Doe'],
        ['2', 'Hemma']
      ])
      t.equal(table.markdown(), '| uid | name  |\n|-----|-------|\n| 1   | Doe   |\n| 2   | Hemma |\n')
      t.end()
    } catch (ex) {
      t.fail(ex)
    }
  })

  t.test('should be able to override the header and column separators', (t) => {
    try {
      let table = new Turtler([
        ['uid', 'name'],
        ['1', 'Doe'],
        ['2', 'Hemma']
      ], {
        headerSeparator: '',
        columnSeparator: ' '
      })
      t.equal(table.toString(), 'uid name \n1   Doe  \n2   Hemma\n')
      t.end()
    } catch (ex) {
      t.fail(ex)
    }
  })

  t.test('should be able to decorate rows', (t) => {
    let table = new Turtler([
      ['uid', 'name'],
      ['1', 'Doe'],
      ['2', 'Hemma']
    ], {
      headerSeparator: '',
      columnSeparator: ' ',
      decorate: (v, r, c) => {
        return `-${v}-`
      }
    })

    t.equal(table.ascii(), '-uid- -name- \n-1-   -Doe-  \n-2-   -Hemma-\n')
    t.equal(table.markdown(), '| -uid- | -name-  |\n|-----|-------|\n| -1-   | -Doe-   |\n| -2-   | -Hemma- |\n')
    t.equal(table.html(), '<table>      <thead>        <tr>          <th>-uid-</th><th>-name-</th>        </tr>      </thead>      <tbody>        <tr>          <td>-1-</td><td>-Doe-</td>        </tr><tr>          <td>-2-</td><td>-Hemma-</td>        </tr>      </tbody>    </table>')
    t.end()
  })

  t.test('should be able to state that there is no header', (t) => {
    try {
      let table = new Turtler([
        ['1', 'Doe'],
        ['2', 'Hemma']
      ], {
        hasHeader: false,
        columnSeparator: ' '
      })

      t.equal(table.toString(), '1 Doe  \n2 Hemma\n')
      t.end()
    } catch (ex) {
      t.fail(ex)
    }
  })

  t.test('should throw error for mismatching column length', (t) => {
    try {
      let table = new Turtler([
        ['uid', 'name'],
        ['1', 'Doe'],
        ['2', 'Hemma', 'Errorneous input']
      ])
      table.toString()
      t.fail('should have thrown an error')
    } catch (e) {
      t.equal(e.message, 'columns are not formed properly')
      t.end()
    }
  })

  t.test('should be able to format simple arrays (html)', (t) => {
    try {
      let table = new Turtler([
        ['uid', 'name'],
        ['1', 'Doe'],
        ['2', 'Hemma']
      ])
      t.equal(table.html(), '<table>      <thead>        <tr>          <th>uid</th><th>name</th>        </tr>      </thead>      <tbody>        <tr>          <td>1</td><td>Doe</td>        </tr><tr>          <td>2</td><td>Hemma</td>        </tr>      </tbody>    </table>')
      t.end()
    } catch (ex) {
      t.fail(ex)
    }
  })
})
