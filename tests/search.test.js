process.env.NODE_ENV = 'test';
var tap = require('tap');
var test = tap.test;
var codebits = require('./../index.js');
var secret = require('./secret.json');
var token = require('./../modules/token.js');

//first we must login
test('Login', function(t){
  t.equal(token.getToken(), null, 'Token should be empty before login');
  codebits.auth.logIn(secret.user, secret.password, function (err, _token){
    t.type(_token, 'string', 'Token should be a string');
    t.equal(_token, token.getToken(), 'Stored token should be equal');
    t.end();
  });
});


test('Search by name', function(t){
  
  var name = 'celso';
  codebits.search.searchByName(name, function(err, result){
    
    t.type(result, 'string', 'Should be a string');
    var res = JSON.parse(result);
    t.equal(res[1].nick, name, 'Should be equal to name searched');
    t.end();

  });
});
