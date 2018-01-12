const { name, description } = require('./package.json');

module.exports = {
  title: name,
  description: description,
  nav: {
    Source: "https://github.com/gabrielcsapo/turtler"
  },
  body: [{
    type: "text",
    value: `
      > [\`turtler\`](https://github.com/gabrielcsapo/turtler) an easy way to build ascii tables.
      <br/>
      \`\`\`
      npm install turtler --save
      \`\`\`
    `
  }, {
    type: "code",
    title: "Creating a simple ascii table",
    subtitle: "This will use the defaults",
    value: `
        var Turtler = require('turtler');
        var table = new Turtler([
          ["uid", "name"],
          ["1", "Doe"],
          ["2", "Hemma"]
        ]);
        table.toString();
      `
  }, {
    type: "code",
    title: "Creating a simple ascii table with extended defaults",
    subtitle: "This will use the defaults",
    value: `
        var Turtler = require('turtler');
        var table = new Turtler([
          ["uid", "name"],
          ["1", "Doe"],
          ["2", "Hemma"]
        ], {
          columnSeparator: ' + ',
          headerSeparator: '+'
        });
        table.toString();
      `
  },{
    type: "code",
    title: "Even rendering markdown can be as simple",
    subtitle: "This will use the defaults",
    value: `
        var Turtler = require('turtler');
        var table = new Turtler([
          ["uid", "name"],
          ["1", "Doe"],
          ["2", "Hemma"]
        ]);
        table.markdown();
      `
  },{
    type: "code",
    title: "Rending html tables can be just as simple!",
    subtitle: "This will use the defaults",
    value: `
        var Turtler = require('turtler');
        var table = new Turtler([
          ["uid", "name"],
          ["1", "Doe"],
          ["2", "Hemma"]
        ]);
        console.html(table.html());
      `
  }],
  output: "./docs",
  externals: [
    "./dist/turtler.min.js",
    "./docs/main.css"
  ]
};
