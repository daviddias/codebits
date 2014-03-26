process.env.NODE_ENV = 'test';
var tap = require('tap');
var test = tap.test;
var codebits = require('./../index.js');
var secret = require('./secret.json');
var token = require('./../modules/token.js');


test('Getting session/talk info', function(t){
  
  var id = '110';
  codebits.session.sessionInfo(id, function(err, result){
    
    t.type(result, 'string', 'Result should be a string');
    var res = JSON.parse(result);
    t.type(res.id, 'string', 'Should be a number');
    t.equal(res.id, id, 'Should have the same id');
    t.end();

  });
});
