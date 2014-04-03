var r = require('./../../modules/r.js');
var token = require('./../../modules/token.js');

exports = module.exports;

exports.searchByName = function searchByName(nick, _token, cb){
  var tok;
  if (typeof _token === 'function') {
    cb = _token;
    tok = token.getToken();
  } else {
    tok = _token;
  }

  r.post({
    uri: 'search/' + nick,
    form: {
      token: tok
    }
  }, gotSearchResult);

  function gotSearchResult(err, reply){
    if(err){
      return cb(err, null);
    }
    return cb(null, JSON.parse(reply));
  }
};
