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
  
  var opts = {
    comment_token: '75f0e78c6abdbe9222d41950bee59155ccc19292',
    comment: 'Hello world',
    subject: 'testing api'
  };

  codebits.comment.postComment(opts, function(err, result){
    
    var res = JSON.parse(result);
    t.type(res.result, 'number', 'Should be a number');
    t.equal(res.result, 1, 'Should be 1 if success');
    t.type(res.msg, 'string', 'Should be a string');
    t.end();

  });
});
