process.env.NODE_ENV = 'test';
var tap      = require('tap');
var test     = tap.test;
var codebits = require('./../index.js');
var secret   = require('./secret.json');
var token    = require('./../modules/token.js');

test('Log in', function(t) {
  t.equal(token.getToken(), null, 'Token should be empty before');
  codebits.auth.logIn(secret.user, secret.password, function (err, _token){
    t.type(_token,'string', 'Token should be a string');
    t.equal(_token, token.getToken(), 'Stored Token should be equal');
    t.end();
  });
});

test('Get User by ID', function(t) {
  codebits.users.getUserbyID('1', function(err, result) {
    t.type(result, 'string', 'Result User should be a String');
    var user = JSON.parse(result);
    t.equal(user.nick, 'celso', 'User 1 should be celso');
    t.end();
  });
});

test('Get User by Nick', function(t) {
  codebits.users.getUserbyNick('celso', function(err, result) {
    t.type(result, 'string', 'Result User should be a String');
    var user = JSON.parse(result);
    t.equal(user.nick, 'celso', 'User 1 should be celso');
    t.end();
  });
});


// test('Get User friends', function(t) {
// // function getUserFriends(id, cb) 


// });


// test('List of Accepted Users', function(t) {
// // function listAcceptedUsers(skill, cb) 


// });

// test('User Favourite Sessions', function(t) {
// // function userFavSessions(id, cb) 


// });

// would need a test db to test these properly
// function addUserAsFriend(id, cb) 
// function rejectUserAsFriend(id, cb) 


