var tap      = require('tap');
var test     = tap.test;
var codebits = require('./../src/index.js');
var secret   = require('./secret.json');
var token    = require('./../src/modules/token.js');

test('List badges', function(t) {
  codebits.badges.listBadges(function(err, reply) {
    t.type(reply, 'Object', 'Should be a object');
    t.type(reply, 'Array', 'Should be an array');
    t.equal(reply[0].id, '1', 'Should be one');
    t.end();
  });
});

test('Gets users of a certain badge', function(t) {
  var id = '1';
  codebits.badges.getBadgeUsers(id, function(err, reply) {
    t.type(reply, 'Object', 'Should be a object');
    t.type(reply, 'Array', 'Should be an array');
    t.end();
  });
});

test('Log in', function(t) {
  t.equal(token.getToken(), null, 'Token should be empty before');
  codebits.auth.logIn(secret.user, secret.password, function(err, _token) {
    t.type(_token, 'string', 'Token should be a string');
    t.equal(_token, token.getToken(), 'Stored Token should be equal');
    t.end();
  });
});

test('Redeems badge through badge code', function(t) {
  var code = '1-7aa59a4a117-12'; //random code
  codebits.badges.redeemBadges(code, function(err, reply) {
    t.type(reply, 'Object', 'Should be a object');
    t.equal(reply.error.id, '0', 'Should return an error with id 0');
    t.end();
  });
});
