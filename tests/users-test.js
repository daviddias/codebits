var tap      = require('tap');
var test     = tap.test;
var codebits = require('./../src/index.js');
var secret   = require('./secret.json');
var token    = require('./../src/modules/token.js');

test('Log in', function(t) {
  t.equal(token.getToken(), null, 'Token should be empty before');
  codebits.auth.logIn(secret.user, secret.password, function(err, _token) {
    t.type(_token, 'string', 'Token should be a string');
    t.equal(_token, token.getToken(), 'Stored Token should be equal');
    t.end();
  });
});

test('Get User by ID', function(t) {
  codebits.users.getUserbyID('1', function(err, result) {
    t.type(result, 'Object', 'Result User should be a object');
    t.equal(result.nick, 'celso', 'User 1 should be celso');
    t.end();
  });
});

test('Get User by Nick', function(t) {
  codebits.users.getUserbyNick('celso', function(err, result) {
    t.type(result, 'Object', 'Result User should be a object');
    t.equal(result.nick, 'celso', 'User 1 should be celso');
    t.end();
  });
});

test('list accepted users', function(t) {
  codebits.users.listAcceptedUsers(function(err, reply) {
    t.end();
  });
});
