var r = require('./../../modules/r.js');
var token = require('./../../modules/token.js');

exports = module.exports;

exports.listBadges = function listBadges(cb){

  r.get({
    uri: 'listbadges'
  }, gotBadgeslist);

  function gotBadgeslist(err, reply){
    if(err){
      return cb(err, null);
    }
    return cb(null, JSON.parse(reply));
  }
};

exports.getBadgeUsers = function getBadgeUsers(id, cb){

  r.get({
    uri: 'badgesusers/' + encodeURIComponent(id),
  }, gotBadgeUsers);

  function gotBadgeUsers(err, reply){
    if(err){
      return cb(err, null);
    }
    return cb(null, JSON.parse(reply));
  }
};

exports.redeemBadges = function redeemBadges(badge_code, _token, cb){
  var tok;
  if(typeof _token === 'function'){
    cb = _token;
    tok = token.getToken();
  }else{
    tok = _token;
  }

  r.post({
    uri: 'redeem/' + encodeURIComponent(badge_code),
    form: {
      token: tok
    }
  }, redeemedBadge);

  function redeemedBadge(err, reply){
    if(err){
      return cb(err, null);
    }
    return cb(null, JSON.parse(reply));
  }
};
