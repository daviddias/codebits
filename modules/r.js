var request = require('request');
var config  = require('./../config.json');

exports = module.exports = function doRequest(options, cb) {
  if (typeof options !== 'object') {
    options = { uri: options };
  }
  
  if (! options.uri) {
    return (new Error('options.uri is required'));
  }

  options.uri = config.url + options.uri;

  // if (! options.json) { 
  //   options.json = true;
  // }

  return request(options, replied);

  function replied(err, res, body) {
    if (err) {
      return cb(err);
    }

    if (res.statusCode < 200 || res.statusCode >= 300) {
      err = new Error('response code was ' + res.statusCode);
      if (body) {
        err.message += ' — ' + (body.message || body);
      }
    }
    cb(err, body);
  }
};

['post', 'delete', 'get', 'put'].forEach(inject);

function inject(method) {
  exports[method] = function(options, cb) {
    if (typeof options !== 'object') {
      options = {uri: options};
    }

    options.method = method.toUpperCase();

    return exports(options, cb);
  };
}

//['getImg'].forEach(test);

exports.getImg = function(options, cb){

  if (typeof options !== 'object') {
    options = { uri: options };
  }
  
  if (! options.uri) {
    return (new Error('options.uri is required'));
  }

  options.uri = config.url + options.uri;

  // if (! options.json) { 
  //   options.json = true;
  // }

  return request.head(options.uri, function(err, res, body){
    
    if (err) {
      return cb(err);
    }

    if (res.statusCode < 200 || res.statusCode >= 300) {
      err = new Error('response code was ' + res.statusCode);
      if (body) {
        err.message += ' — ' + (body.message || body);
      }
    }
    
    //console.log('content-type:', res.headers['content-type']);
    //console.log('content-length:', res.headers['content-length']);
    
    //var str = new require('stream').Writable;
    //var stream = str();
    //request(options.uri).pipe(stream).on('close', function(er){
      //cb(er, stream);
    //});
    var fs = require('fs');
    request(options.uri).pipe(
      fs.createWriteStream(options.file)).on('close', function(){
        cb(err, res, body);
      });
  });

};



/*
exports.doImageRequest = function doImageRequest(options, cb){



};

*/
