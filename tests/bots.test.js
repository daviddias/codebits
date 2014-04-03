process.env.NODE_ENV = 'test';
var tap = require('tap');
var test = tap.test;
var codebits = require('./../index.js');
var secret = require('./secret.json');
var token = require('./../modules/token.js');
var fs = require('fs');

test('Get Bot Parts', function(t){

  codebits.bots.getBodyParts( function(err, result){
    t.type(result, 'Object', 'Result should be a object');
    t.equal(result.body[0].id, '01', 'Result should be 01');
    t.end();
  });
});

test('Get User Bot', function(t){

  codebits.bots.getUserBot('1', function(err, result){
    t.type(result, 'Object', 'Result should be a object');
    t.type(result.bgcolor, 'number', 'Should be an int');
    t.equal(result.bgcolor, 0, 'Should be zero');
    t.end();
  });
});

test('Make a bot', function(t){

  var opts = {
    body: '01',
    bgcolor: null,
    grad: '03',
    eyes: '04',
    mouth: '05',
    legs: '06',
    head: '07',
    arms: '08',
    balloon: 'hello world',
    file: '/tmp/file.png'
  };

  codebits.bots.makeBot(opts, function(err, res, body){
    
    t.type(res, 'Object', 'Should be an object');
    t.equal(
      res.headers['content-type'],
      'image/png',
      'Content type should be image/png');
    var d = fs.openSync(opts.file, 'r');
    t.notOk(err, 'Should be false. As in the file exists');
    
    t.end();
  });
});
  
test('Login', function(t){
  //first we must login
  t.equal(token.getToken(), null, 'Token should be empty before login');
  codebits.auth.logIn(secret.user, secret.password, function(err, _token){
    t.type(_token, 'string', 'Token should be a string');
    t.equal(_token, token.getToken(), 'Stored token should be equal');
    t.end();
  });
});

test('Set a users bot', function(t){

  
  var opts = {
    body: '01',
    bgcolor: null,
    grad: '03',
    eyes: '04',
    mouth: '05',
    legs: '06',
    head: '07',
    arms: '08',
    balloon: 'hello world'
  };

  codebits.bots.setBot(opts, function(err, result){
    
    t.type(result, 'Object', 'Should be a Object.');
    t.equal(result.msg, 'bot set', 'Should be \"bot set\".');
    t.equal(result.result, 1, 'Should be 1');
    t.end();
  });
});

