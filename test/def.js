
var test = require('tape');
var env = require('../index')(module);

test('env test def', function(t) {

  env.exports(10);
  t.equal(module.exports, 10);
  module.exports = {};

  process.env.NODE_ENV = 'test';
  env.exports('test', 11);
  t.equal(module.exports, 11);

  t.end();
})