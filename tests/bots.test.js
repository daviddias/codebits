process.env.NODE_ENV = 'test';
var tap = require('tap');
var test = tap.test;
var codebits = require('./../index.js');
var secret = require('./secret.json');
var token = require('./../modules/token.js');

test('Get Bot Parts', function(t){

  codebits.bots.getBodyParts( function(err, result){
    t.type(result, 'string', 'Result should be a string');
    var bodyParts = JSON.parse(result);
    t.equal(bodyParts.body[0].id, '01', 'Result should be 01');
    t.end();
  });
});

test('Get User Bot', function(t){

  codebits.bots.getUserBot('1', function(err, result){
    t.type(result, 'string', 'Result should be a string');
    var userBot = JSON.parse(result);
    t.type(userBot.bgcolor, 'number', 'Should be an int');
    t.equal(userBot.bgcolor, 0, 'Should be zero');
    t.end();
  });
});

test('Make a bot', function(t){

  var opts = {
    body: '01',
    bgcolor: null,
    grad: '03',
    eyes: '04',
    mouth: '05',
    legs: '06',
    head: '07',
    arms: '08',
    balloon: 'hello world'
  };

  codebits.bots.makeBot(opts, function(err, result){
    
    //var w = fs.createWriteStream('my-file.png');
    //result.pipe(w).on('data', console.log('omg'));

    //var utf8 = require('utf8');
    //fs.writeFile('message.png', utf8.encode(result), function (err) {
      //if (err) {throw err;}
      //console.log('file!');
    //});

    //t.type(result, 'string', 'asdkas');
    //t.equal(getExtension(result), '.png', 'Should be .png');
    t.end();
  });
});
  
test('Login', function(t){
  //first we must login
  t.equal(token.getToken(), null, 'Token should be empty before login');
  codebits.auth.logIn(secret.user, secret.password, function(err, _token){
    t.type(_token, 'string', 'Token should be a stirng');
    t.equal(_token, token.getToken(), 'Stored token should be equal');
    t.end();
  });
});

test('Set a users bot', function(t){

  
  var opts = {
    body: '01',
    bgcolor: null,
    grad: '03',
    eyes: '04',
    mouth: '05',
    legs: '06',
    head: '07',
    arms: '08',
    balloon: 'hello world'
  };

  codebits.bots.setBot(opts, function(err, result){
    
    //var w = fs.createWriteStream('my-file.png');
    //result.pipe(w).on('data', console.log('omg'));

    //var utf8 = require('utf8');
    //fs.writeFile('message.png', utf8.encode(result), function (err) {
      //if (err) {throw err;}
      //console.log('file!');
    //});
    
    if(err) { console.log('deu erro velho');}
    console.log(result);

    //t.type(result, 'string', 'asdkas');
    //t.equal(getExtension(result), '.png', 'Should be .png');
    t.end();
  });
});

