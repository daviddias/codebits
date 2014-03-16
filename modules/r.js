var request = require('request');
var config  = require('./../config.json');

exports = module.exports = function doRequest(options, cb) {
  if (typeof options != 'object') { 
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
    if (err) return cb(err);
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
    if (typeof options != 'object') {
      options = {uri: options};
    }

    options.method = method.toUpperCase();

    return exports(options, cb);
  }
}
