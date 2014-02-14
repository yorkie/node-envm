
var test = require('tape');
var env = require('../index')(module, 'MY_ENV');

test('env test rename', function(t) {

  env.exports(10);
  t.equal(module.exports, 10);
  module.exports = {};

  process.env.MY_ENV = 'test';
  env.exports('test', 11);
  t.equal(module.exports, 11);

  t.end();
})