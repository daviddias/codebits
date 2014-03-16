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

exports.getUserbyNick = function getUserbyNick(nick, cb) {
  r.post({
    uri: 'nick/' + encodeURIComponent(nick),
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

exports.getUserFriends = function getUserFriends(id, cb) {
  r.post({
    uri: 'foaf/' + encodeURIComponent(id),
    form: {
      token: token.getToken()
    }
  }, gotFriends);

  function gotFriends(err, reply) {
    if(err){
      cb(err, null);
    }
    cb (null, reply);
  }
};

exports.addUserAsFriend = function addUserAsFriend(id, cb) {
  r.post({
    uri: 'foafadd/' + encodeURIComponent(id),
    form: {
      token: token.getToken()
    }
  }, result);

  function result(err, reply) {
    if(err){
      cb(err, null);
    }
    cb (null, reply);
  }
};

exports.rejectUserAsFriend = function rejectUserAsFriend(id, cb) {
  r.post({
    uri: 'foafreject/' + encodeURIComponent(id),
    form: {
      token: token.getToken()
    }
  }, result);

  function result(err, reply) {
    if(err){
      cb(err, null);
    }
    cb (null, reply);
  }
};

exports.listAcceptedUsers = function listAcceptedUsers(skill, cb) {
  var skills_path = '';
  if (cb === null) { //Skills are optional
    cb = skill;
  } else {
    skills_path = '/' + encodeURIComponent(skill);
  }

  r.post({
    uri: 'users' + skills_path,
    form: {
      token: token.getToken()
    }
  }, gotAcceptedUsers);

  function gotAcceptedUsers(err, reply) {
    if(err){
      cb(err, null);
    }
    cb (null, reply);
  }
};

exports.userFavSessions = function userFavSessions(id, cb) {
  r.post({
    uri: 'usersessions/' + encodeURIComponent(id),
    form: {
      token: token.getToken()
    }
  }, gotSessions);

  function gotSessions(err, reply) {
    if(err){
      cb(err, null);
    }
    cb (null, reply);
  }
};

