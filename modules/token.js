var token = '';

exports = module.exports = getToken;
exports.getToken = getToken;
exports.saveToken = saveToken;

function getToken () {
  if (token === ''){
    //console.log('There is no token');
    return null;
  }
  return token;
}

function saveToken (_token) {
  //console.log('_token', token);
  token = _token;
}
