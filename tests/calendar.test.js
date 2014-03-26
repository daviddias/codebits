process.env.NODE_ENV = 'test';
var tap = require('tap');
var test = tap.test;
var codebits = require('./../index.js');


test('Search by name', function(t){
  
  var id = '110';
  codebits.calendar.getCalendar(function(err, result){
    
    t.type(result, 'string', 'Result should be a string');
    var res = JSON.parse(result);
    t.type(res, 'Array', 'Result should be an array');
    t.end();

  });
});
