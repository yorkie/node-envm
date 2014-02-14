
var env_name = 'NODE_ENV';

function envInit(context, name) {
  var _module = context;
  var _name = name || env_name;

  return {
    exports: _exports
  }

  function _exports(env, obj) {
    switch (arguments.length) {
    case 1:
      if (!process.env[_name]) _module.exports = env;
      break;
    default:
      if (process.env[_name] == env) _module.exports = obj;
      else console.warn('no output in your env: ', env);
      break;
    }
  }
}

module.exports = envInit;
