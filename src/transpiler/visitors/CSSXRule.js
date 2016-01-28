var t = require('babel-types');

module.exports = {
  enter: function (node, parent, index) {},
  exit: function (node, parent, index) {
    parent[index] = t.objectProperty(node.label, node.body);
  }
};
