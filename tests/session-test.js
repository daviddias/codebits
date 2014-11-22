var tap = require('tap');
var test = tap.test;
var codebits = require('./../src/index.js');
var secret = require('./secret.json');
var token = require('./../src/modules/token.js');

test('Getting session/talk info', function(t) {
  var id = '110';
  codebits.session.sessionInfo(id, function(err, result) {
    t.type(result, 'Object', 'Result should be a object');
    t.type(result.id, 'string', 'Should be a number');
    t.equal(result.id, id, 'Should have the same id');
    t.end();
  });
});
