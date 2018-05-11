# turtler

> 🐢 Ascii tables made easy

[![Npm Version](https://img.shields.io/npm/v/turtler.svg)](https://www.npmjs.com/package/turtler)
[![Build Status](https://travis-ci.org/gabrielcsapo/turtler.svg?branch=master)](https://travis-ci.org/gabrielcsapo/turtler)
[![Coverage Status](https://lcov-server.gabrielcsapo.com/badge/github%2Ecom/gabrielcsapo/turtler.svg)](https://lcov-server.gabrielcsapo.com/coverage/github%2Ecom/gabrielcsapo/turtler)
[![Dependency Status](https://starbuck.gabrielcsapo.com/badge/github/gabrielcsapo/turtler/status.svg)](https://starbuck.gabrielcsapo.com/github/gabrielcsapo/turtler)
[![devDependency Status](https://starbuck.gabrielcsapo.com/badge/github/gabrielcsapo/turtler/dev-status.svg)](https://starbuck.gabrielcsapo.com/github/gabrielcsapo/turtler#info=devDependencies)
[![npm](https://img.shields.io/npm/dt/turtler.svg)]()
[![npm](https://img.shields.io/npm/dm/turtler.svg)]()

## Installation

```
npm install turtler --save
```

## Usage

> the given options are the defaults

```javascript
let table = new Turtler([
  ["uid", "name"],
  ["1", "Doe"],
  ["2", "Hemma"]
], {
  hasHeader: true,
  columnSeparator: ' | ',
  headerSeparator: '='
});

console.log(table);
```

This will yield:

```
uid | name
===========
1   | Doe  
2   | Hemma
```

### Markdown

> We can also output markdown tables just as easily


```javascript
let table = new Turtler([
  ["uid", "name"],
  ["1", "Doe"],
  ["2", "Hemma"]
]);

console.log(table.markdown());
```

This will yield:

```
| uid | name  |
|-----|-------|
| 1   | Doe   |
| 2   | Hemma |
```

### Html

> We can also output html tables just as easily

```javascript

let table = new Turtler([
  ["uid", "name"],
  ["1", "Doe"],
  ["2", "Hemma"]
]);

console.log(table.html());

```

This will yield:

```html
<table>
  <thead>
    <tr>
      <th>uid</th>
      <th>name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Doe</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Hemma</td>
    </tr>
  </tbody>
</table>
```
