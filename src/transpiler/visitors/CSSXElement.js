var t = require('babel-types');

module.exports = {
  enter: function (node, parent, index) {},
  exit: function (node, parent, index) {
    return t.callExpression()
  }
};
