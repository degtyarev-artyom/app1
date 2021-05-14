const { override, addBabelPlugin } = require('customize-cra');

module.exports = override(
  addBabelPlugin([
    "styled-jsx/babel",
    {
      "plugins": [
        "styled-jsx-plugin-sass"
      ]
    }
  ])
);
