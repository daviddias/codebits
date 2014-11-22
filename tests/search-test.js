var tap = require('tap');
var test = tap.test;
var codebits = require('./../src/index.js');
var secret = require('./secret.json');
var token = require('./../src/modules/token.js');

test('Login', function(t) {
  t.equal(token.getToken(), null, 'Token should be empty before login');
  codebits.auth.logIn(secret.user, secret.password, function(err, _token) {
    t.type(_token, 'string', 'Token should be a string');
    t.equal(_token, token.getToken(), 'Stored token should be equal');
    t.end();
  });
});

test('Search by name', function(t) {
  var name = 'celso';
  codebits.search.searchByName(name, function(err, result) {
    t.type(result, 'Object', 'Should be a object');
    t.equal(result[1].nick, name, 'Should be equal to name searched');
    t.end();
  });
});
