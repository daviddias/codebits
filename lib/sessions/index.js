var r = require('./../../modules/r.js');

exports = module.exports;

exports.sessionInfo = function sessionInfo(id, cb){

  r.get({
    uri: 'session/' + id
  }, gotSessionInfo);

  function gotSessionInfo(err, reply){
    if(err){
      return cb(err, null);
    }
    return cb(null,reply);
  }
};
