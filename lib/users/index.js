var r = require('./../../modules/r.js');
var token = require('./../../modules/token.js');

exports = module.exports;

exports.getUserbyID = function getUserbyID(id, cb) {
  r.post({
    uri: 'user/' + encodeURIComponent(id),
    form: {
      token: token.getToken()
    }
  }, gotUser);

  function gotUser(err, reply) {
    if(err){
      cb(err, null);
    }
    cb (null, reply);
  }
};