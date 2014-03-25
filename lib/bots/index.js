var r = require('./../../modules/r.js');
var token = require('./../../modules/token.js');

exports = module.exports;

exports.getBodyParts = function getBodyParts(cb) {

  r.post({
    uri: 'botparts'
  }, gotBodyParts);

  function gotBodyParts(err, reply){
    if(err){
      return cb(err, null);
    }
    return cb(null, reply);
  }
};

exports.getUserBot = function getUserBot(id, cb) {
  r.post({
    uri: 'botuser/' + encodeURIComponent(id)
  }, gotUserBot);

  function gotUserBot(err, reply){
    if(err){
      return cb(err, null);
    }
    return cb(null, reply);
  }
};

exports.makeBot = function makeBot(_opts, cb){
   
  var opts = {
    body: _opts.body || '00',
    bgcolor: _opts.bgcolor || '00',
    grad: _opts.grad || '00',
    eyes: _opts.eyes || '00',
    mouth: _opts.mouth || '00',
    legs: _opts.legs || '00',
    head: _opts.head || '00',
    arms: _opts.arms || '00',
    balloon: _opts.balloon || ' '
  };

  opts.balloon = (opts.balloon === ' ') ? opts.balloon : encodeURIComponent(opts.balloon);

  var botsParts =
    opts.body + ',' +
    opts.bgcolor + ',' +
    opts.grad + ',' +
    opts.eyes + ',' +
    opts.mouth + ',' +
    opts.legs + ',' +
    opts.head + ',' +
    opts.arms + ',' +
    opts.balloon;

  r.post({
    uri: 'botmake/' + botsParts,
  }, gotMadeBot);

  function gotMadeBot(err, reply){
    if(err){
      return cb(err, null);
    }
    return cb(null, reply);
  }
};

exports.setBot = function setBot(_opts, _token, cb){ 
  var tok;
  if (typeof _token === 'function') {
    cb = _token;
    tok = token.getToken();
  } else {
    tok = _token;
  }

  var opts = {
    body: _opts.body || '00',
    bgcolor: _opts.bgcolor || '00',
    grad: _opts.grad || '00',
    eyes: _opts.eyes || '00',
    mouth: _opts.mouth || '00',
    legs: _opts.legs || '00',
    head: _opts.head || '00',
    arms: _opts.arms || '00',
    balloon: _opts.balloon || ' '
  };

  opts.balloon = (opts.balloon === ' ') ? opts.balloon : encodeURIComponent(opts.balloon);

  var botsParts =
    opts.body + ',' +
    opts.bgcolor + ',' +
    opts.grad + ',' +
    opts.eyes + ',' +
    opts.mouth + ',' +
    opts.legs + ',' +
    opts.head + ',' +
    opts.arms + ',' +
    opts.balloon;

  r.post({
    uri: 'botset/' + botsParts,
    form: {
      token: tok
    }
  }, gotSetBot);

  function gotSetBot(err, reply){
    if(err){
      return cb(err, null);
    }
    return cb(null, reply);
  }
};
