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

test('Post a comment', function(t) {
  var opts = {
    comment_token: '75f0e78c6abdbe9222d41950bee59155ccc19292', //jscs: disable
    comment: 'Hello world',                                    //jscs: enable
    subject: 'testing api'
  };

  codebits.comment.postComment(opts, function(err, result) {
    t.type(result.result, 'number', 'Should be a number');
    t.equal(result.result, 1, 'Should be 1 if success');
    t.type(result.msg, 'string', 'Should be a string');
    t.end();
  });
});
