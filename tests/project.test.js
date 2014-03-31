process.env.NODE_ENV = 'test';
var tap = require('tap');
var test = tap.test;
var codebits = require('./../index.js');
var secret = require('./secret.json');
var token = require('./../modules/token.js');

test('Log in', function(t){
  t.equal(token.getToken(), null, 'Token should be empty before');
  codebits.auth.logIn(secret.user, secret.password, function(err, _token){
    t.type(_token, 'string', 'Token should be a string') ;
    t.equal(_token, token.getToken(), 'Stored token should be equal');
    t.end();
  });
});

test('List projects', function(t){
  codebits.projects.listProjects(function(err, reply){
    t.equal(err, null, 'Should not return an error');
    t.type(reply, 'string', 'Should be a string');
    var res = JSON.parse(reply);
    t.type(res, 'Array', 'SHould be an array');
    t.end();
  });
});

test('List projects with token', function(t){
  codebits.projects.listProjects(token.getToken() ,function(err, reply){
    t.equal(err, null, 'Should not return an error');
    t.type(reply, 'string', 'Should be a string');
    var res = JSON.parse(reply);
    t.type(res, 'Array', 'SHould be an array');
    t.end();
  });
});

test('Get project info by id', function(t){
  var id = '123493024032';
  codebits.projects.getProjectInfo(id, function(err, reply){
    t.type('reply', 'string', 'Should be a string');
    var res = JSON.parse(reply);
    t.type(res, 'Object', 'Should be an object');
    t.equal(res.error.id, '-1', 'Should be -1');
    t.end();
  });
});

test('Get current votes for presented', function(t){
  codebits.projects.getCurrentVotes(function(err, reply){
    t.type(reply, 'string', 'Should be a string');
    var res = JSON.parse(reply);
    t.equal(res.project, '353', 'Should be 353');
    t.end();
  });
});

test('Vote for presented project', function(t){
  codebits.projects.voteCurrentProject('1', function(err, reply){
    t.type(reply, 'string', 'Should be a string');
    var res = JSON.parse(reply);
    t.equal(res.result, 1, 'Should be one');
    t.equal(res.project, '353', 'Should be 353');
    t.end();
  });
});
