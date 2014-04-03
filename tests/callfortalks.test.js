process.env.NODE_ENV = 'test';
var tap      = require('tap');
var test     = tap.test;
var codebits = require('./../index.js');
var secret   = require('./secret.json');
var token    = require('./../modules/token.js');

//First we must login
test('Log in', function(t) {
  t.equal(token.getToken(), null, 'Token should be empty before');
  codebits.auth.logIn(secret.user, secret.password, function (err, _token){
    t.type(_token,'string', 'Token should be a string');
    t.equal(_token, token.getToken(), 'Stored Token should be equal');
    t.end();
  });
});

test('List Submissions', function(t) {

  codebits.callfortalks.listSubmissions(function(err, result) {

    t.type(result, 'Object', 'Should be a object');
    t.type(result, 'Array', 'Should be an array');
    t.end();
  });
});

test('Vote talk up', function(t) {

  var talk_id = '100';
  codebits.callfortalks.voteTalkUp(talk_id, function(err, result) {
    t.type(result, 'Object', 'Should be a Object');
    t.equal(result.talk, talk_id, 'Should be the same');
    t.equal(result.thumbs, 'up', 'Thumbs should point up');
    t.end();
  });
});

test('Vote talk down', function(t) {
  
  var talk_id = '100';
  codebits.callfortalks.voteTalkDown(talk_id, function(err, result) {
    t.type(result, 'Object', 'Should be a object');
    t.equal(result.talk, talk_id, 'Should be the same');
    t.equal(result.thumbs, 'down', 'Thumbs should point down');
    t.end();
  });
});

