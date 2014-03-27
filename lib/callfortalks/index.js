var r = require('./../../modules/r.js');
var token = require('./../../modules/token.js');

exports = module.exports;

exports.listSubmissions = function listSubmissions(_token, cb){
  var tok;
  if (typeof _token === 'function'){
    cb = _token;
    tok = token.getToken();
  }else{
    tok = _token;
  }

  if(tok){
    r.post({
      uri: 'calltalks',
      form: {
        token: tok
      }
    }, gotSubmissionList);
  }else{
    r.get({
      uri: 'calltalks'
    }, gotSubmissionList);
  }

  function gotSubmissionList(err, reply){
    if(err){
      return cb(err, null);
    }
    return cb(null, reply);
  }
};

exports.voteTalkUp = function voteTalkUp(id, _token, cb){

  var tok;
  if(typeof _token === 'function'){
    cb = _token;
    tok = token.getToken();
  }else{
    tok = _token;
  }

  console.log('-------------- GO GO');
  r.post({
    uri: 'calluptalk/' + id,
    form: {
      token: tok
    }
  }, gotVoteTalkUp);
  
  function gotVoteTalkUp(err, reply){
    console.log('IT GETS HERE');
    if(err){
      return cb(err, null);
    }
    return cb(null, reply);
  }
};

exports.voteTalkDown = function voteTalkDown(id, _token, cb){

  var tok;
  if(typeof _token === 'function'){
    cb = _token;
    tok = token.getToken();
  }else{
    tok = _token;
  }

  r.post({
    uri: 'calldowntalk/' + encodeURIComponent(id),
    form: {
      token: tok
    }
  }, gotVoteTalkDown);
  
  function gotVoteTalkDown(err, reply){
    if(err){
      return cb(err, null);
    }
    return cb(null, reply);
  }
};
