var r = require('./../modules/r.js');
var token = require('./../modules/token.js');

exports = module.exports;

exports.postComment =
  function postComment(_opts, cb){
    
    var opts = {
      comment_token: _opts.comment_token,
      comment: _opts.comment,
      subject: _opts.subject,
      token: _opts.token || token.getToken()
    };

    if(opts.subject){
      r.post({
        uri: 'comment/' + opts.comment_token,
        form: {
          token: opts.token,
          comment: opts.comment,
          subject: opts.subject
        }
      }, postedComment);
    }else{
      r.post({
        uri: 'comment/' + opts.comment_token,
        form: {
          token: opts.token,
          comment: opts.comment
        }
      }, postedComment);
    }

    function postedComment(err, reply){
      if(err){
        return cb(err, null);
      }
      return cb(null, JSON.parse(reply));
    }
  };
