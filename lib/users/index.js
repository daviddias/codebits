var r = require('./../../modules/r.js');
var token = require('./../../modules/token.js');

exports = module.exports;

exports.getUserbyID = function getUserbyID(id, _token, cb) {
  var tok;
  if (typeof _token === 'function') {
    cb = _token;
    tok = token.getToken();
  } else {
    tok = _token;
  }

  r.post({
    uri: 'user/' + encodeURIComponent(id),
    form: {
      token: tok
    }
  }, gotUser);

  function gotUser(err, reply) {
    if(err){
      return cb(err, null);
    }
    return cb (null, JSON.parse(reply));
  }
};

exports.getUserbyNick = function getUserbyNick(nick, _token, cb) {
  var tok;
  if (typeof _token === 'function') {
    cb = _token;
    tok = token.getToken();
  } else {
    tok = _token;
  }

  r.post({
    uri: 'nick/' + encodeURIComponent(nick),
    form: {
      token: tok
    }
  }, gotUser);

  function gotUser(err, reply) {
    if(err){
      return cb(err, null);
    }
    return cb (null, JSON.parse(reply));
  }
};

exports.getUserFriends = function getUserFriends(id, _token, cb) {
  var tok;
  if (typeof _token === 'function') {
    cb = _token;
    tok = token.getToken();
  } else {
    tok = _token;
  }

  r.post({
    uri: 'foaf/' + encodeURIComponent(id),
    form: {
      token: tok
    }
  }, gotFriends);

  function gotFriends(err, reply) {
    if(err){
      return cb(err, null);
    }
    return cb (null, JSON.parse(reply));
  }
};

exports.addUserAsFriend = function addUserAsFriend(id, _token, cb) {
  var tok;
  if (typeof _token === 'function') {
    cb = _token;
    tok = token.getToken();
  } else {
    tok = _token;
  }

  r.post({
    uri: 'foafadd/' + encodeURIComponent(id),
    form: {
      token: tok
    }
  }, result);

  function result(err, reply) {
    if(err){
      return cb(err, null);
    }
    return cb (null, JSON.parse(reply));
  }
};

exports.rejectUserAsFriend = function rejectUserAsFriend(id, _token, cb) {
  var tok;
  if (typeof _token === 'function') {
    cb = _token;
    tok = token.getToken();
  } else {
    tok = _token;
  }

  r.post({
    uri: 'foafreject/' + encodeURIComponent(id),
    form: {
      token: tok
    }
  }, result);

  function result(err, reply) {
    if(err){
      return cb(err, null);
    }
    return cb (null, JSON.parse(reply));
  }
};

exports.listAcceptedUsers = function listAcceptedUsers(skill, _token, cb) {
  var tok;
  if (typeof _token === 'function') {
    cb = _token;
    tok = token.getToken();
  } else {
    tok = _token;
  }

  var skills_path = '';
  if (cb === null) { //Skills are optional
    cb = skill;
  } else {
    skills_path = '/' + encodeURIComponent(skill);
  }

  r.post({
    uri: 'users' + skills_path,
    form: {
      token: tok
    }
  }, gotAcceptedUsers);

  function gotAcceptedUsers(err, reply) {
    if(err){
      return cb(err, null);
    }
    return cb (null, JSON.parse(reply));
  }
};

exports.userFavSessions = function userFavSessions(id, _token, cb) {
  var tok;
  if (typeof _token === 'function') {
    cb = _token;
    tok = token.getToken();
  } else {
    tok = _token;
  }

  r.post({
    uri: 'usersessions/' + encodeURIComponent(id),
    form: {
      token: tok
    }
  }, gotSessions);

  function gotSessions(err, reply) {
    if(err){
      return cb(err, null);
    }
    return cb (null, JSON.parse(reply));
  }
};

