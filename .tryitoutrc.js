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
        var turtler = require('turtler');
        console.log(turtler([
          ["uid", "name"],
          ["1", "Doe"],
          ["2", "Hemma"]
        ]));
      `
  }, {
    type: "code",
    title: "Creating a simple ascii table with extended defaults",
    subtitle: "This will use the defaults",
    value: `
        var turtler = require('turtler');
        console.log(turtler([
          ["uid", "name"],
          ["1", "Doe"],
          ["2", "Hemma"]
        ], {
          columnSeperator: ' + ',
          headerSeperator: '+'
        }));
      `
  }],
  output: "./docs",
  externals: [
    "./dist/turtler.min.js"
  ]
};
