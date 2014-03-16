var r = require('./../../modules/r.js');
var token = require('./../../modules/token.js');

exports = module.exports;

exports.logIn = function logIn(username, password, cb) {
  r.post({
    uri: 'gettoken',
    form: {
      user: username,
      password: password
    }
  }, gotToken);

  function gotToken(err, reply) {
    if(err){
      cb(err, null);
    }
    token.saveToken(JSON.parse(reply).token);
    cb(null,JSON.parse(reply).token);
  }
};