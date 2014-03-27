process.env.NODE_ENV = 'test';
var tap      = require('tap');
var test     = tap.test;
var codebits = require('./../index.js');
var secret   = require('./secret.json');
var token    = require('./../modules/token.js');


test('List badges', function(t) {

  codebits.badges.listBadges(function (err, reply){
    t.type(reply, 'string', 'Should be a string');
    var res = JSON.parse(reply);
    t.type(res, 'Array', 'Should be an array');
    t.equal(res[0].id, '1', 'Should be one');
    t.end();
  });
});

test('Gets users of a certain badge', function(t) {
  var id = '1';
  codebits.badges.getBadgeUsers(id, function(err, reply){
    t.type(reply, 'string', 'Should be a string');
    var res = JSON.parse(reply);
    t.type(res, 'Array', 'Should be an array');
    t.equal(res[0].uid, '1081', 'Should be 1081');
    t.end();
  });
});

//First we must login
test('Log in', function(t) {
  t.equal(token.getToken(), null, 'Token should be empty before');
  codebits.auth.logIn(secret.user, secret.password, function (err, _token){
    t.type(_token,'string', 'Token should be a string');
    t.equal(_token, token.getToken(), 'Stored Token should be equal');
    t.end();
  });
});

test('Redeems badge through badge code', function(t) {

  codebits.badges.redeemBadges('xpto', function(err, reply){
    //Both return null even tho status code is 200 regardless of input
    t.equal(err, null, 'Status code 200 - but returns null');
    t.equal(reply, null, 'Status code 200 - but returns null');
    t.end();
  });
});
