node-env [![Build Status](https://travis-ci.org/yorkie/node-envm.png)](https://travis-ci.org/yorkie/node-envm)
============================================

Environment management for nodejs

### Installation

```bash
$ npm install envm
```

### Usage

```js
var env = require('envm')(module);
env.exports('test', function() {
  console.log('under test');
})

env.exports('production', function() {
  console.log('under production');
})
```

And then you should run your node process in this way:

```bash
$ NODE_ENV=test node app
$ NODE_ENV=production node app
```

### License

MIT
