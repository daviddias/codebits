var r = require('./../modules/r.js');
var token = require('./../modules/token.js');

exports = module.exports;

exports.listProjects = function listProjects(_token, cb){

  var tok;
  if(typeof _token === 'function'){
    cb = _token;
    tok = token.getToken();
  }else{
    tok = _token;
  }

  r.post({
    uri: 'projects',
    form: {
      token: tok
    }
  }, gotProjectList);

  function gotProjectList(err, reply){
    if(err){
      return cb(err, null);
    }
    return cb(null, JSON.parse(reply));
  }
};

exports.getProjectInfo = function getProjectInfo(id, _token, cb){

  var tok;
  if(typeof _token === 'function'){
    cb = _token;
    tok = token.getToken();
  }else{
    tok = _token;
  }

  r.post({
    uri: 'project/' + encodeURIComponent(id),
    form: {
      token: tok
    }
  }, gotProjectInfo);

  function gotProjectInfo(err, reply){
    if(err){
      return cb(err, null);
    }
    return cb(null, JSON.parse(reply));
  }

};

exports.getCurrentVotes = function getCurrentVotes(cb){

  r.get({
    uri: 'votes'
  }, gotVotes);

  function gotVotes(err, reply){
    if(err){
      return cb(err, null);
    }
    return cb(null, JSON.parse(reply));
  }
};

exports.voteCurrentProject = function voteCurrentProject(vote, _token, cb){

  var tok;
  if(typeof _token === 'function'){
    cb = _token;
    tok = token.getToken();
  }else{
    tok = _token;
  }
  
  //vote = 1 -> yes
  //vote = 0 -> no
  r.post({
    uri: 'vote/' + encodeURIComponent(vote),
    form: {
      token: tok
    }
  }, gotVoteForProject);

  function gotVoteForProject(err, reply){
    if(err){
      return cb(err, null);
    }
    return cb(null, JSON.parse(reply));
  }
};

