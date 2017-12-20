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
let table = turtler([
  ["uid", "name"],
  ["1", "Doe"],
  ["2", "Hemma"]
], {
  hasHeader: true,
  columnSeperator: ' | ',
  headerSeperator: '='
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
