var r = require('./../../modules/r.js');

exports = module.exports;

exports.getCalendar = function getCalendar(cb){

  r.get({
    uri: 'calendar'
  }, gotCalendar);

  function gotCalendar(err, reply){
    if(err){
      return cb(err, null);
    }
    return cb(null, reply);
  }
};
