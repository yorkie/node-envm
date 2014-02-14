
var env_name = 'NODE_ENV';

function envInit(context, name) {
  var _module = context;
  var _name = name || env_name;

  return {
    exports: _exports
  }

  function _exports(env, obj) {
    if (arguments.length === 1) {
      _module.exports = env;
    }
    else if (process.env[_name] == env) {
      _module.exports = obj;
    }
    else {
      console.warn('no output in your env: ', env);
    }
  }
}

module.exports = envInit;
