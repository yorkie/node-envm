
# node-env

environment management for nodejs

### Installation

```bash
$ npm install envm
```

### Usage

```js
var env = require('env')(module);
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