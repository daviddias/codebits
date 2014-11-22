var tap = require('tap');
var test = tap.test;
var codebits = require('./../src/index.js');

test('Search by name', function(t) {
  var id = '110';
  codebits.calendar.getCalendar(function(err, result) {
    t.type(result, 'Object', 'Result should be a object');
    t.type(result, 'Array', 'Result should be an array');
    t.end();
  });
});
