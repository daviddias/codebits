Codebits API Node.js Module Wrapper
=========

[![Gitter chat](https://badges.gitter.im/diasdavid/codebits.png)](https://gitter.im/diasdavid/codebits) 
[![Dependency Status](https://david-dm.org/diasdavid/codebits.svg?theme=shields.io)](https://david-dm.org/diasdavid/codebits)

![Node-Codebits](https://github.com/diasdavid/codebits/raw/master/logo/node-codebits-small.png)

This is the Codebits API Node.js Module Wrapper to speed up for development during that 72 hour straight hackathon we know and love!

# Installation
1. `$ npm install codebits`

# Usage
```javascript
var codebits = require('codebits');
codebits.logIn('USERNAME', 'PASSWORD', function (err, token){
  // codebits module will cache the token
  codebits.getUserbyID('USERID', function(err, user){
    console.log(user);
  });
 
});
// but if you want to use another auth token, you can
codebits.getUserbyID('USERID', anotherToken, function(err, user){
  console.log(user);
});
```

# Disclaimer

This module was built in a very quick 'hacky' manner, it has tests, which is a good thing, but it is not bullet proof, if you find any bug or a better way to do things, we accept happily pull requests. Big thanks to [axfcampos](https://github.com/axfcampos) who liked the idea and offered his time to implement several of the functionalities.

# Table of Contents

* [Auth](https://github.com/diasdavid/codebits#auth)
  * [logIn](https://github.com/diasdavid/codebits#login)
* [Badges](https://github.com/diasdavid/codebits#badges)
  * [listBadges](https://github.com/diasdavid/codebits#listbadges)
  * [getBadgeUsers](https://github.com/diasdavid/codebits#getbadgeusers)
  * [redeemBadges `requires auth token`](https://github.com/diasdavid/codebits#redeembadges)
* [Bots](https://github.com/diasdavid/codebits#bots)
* [Calendar](https://github.com/diasdavid/codebits#calendar)
* [Call for Talks](https://github.com/diasdavid/codebits#call-for-talks)
* [Comments](https://github.com/diasdavid/codebits#comments)
* [Projects](https://github.com/diasdavid/codebits#projects)
* [Search](https://github.com/diasdavid/codebits#search)
* [Users](https://github.com/diasdavid/codebits#users)
* [Other Notes](https://github.com/diasdavid/codebits#other-notes)


# Auth
### logIn

Creates a session token that is requested by calls that need auth

**call:**
```javascript
codebits.logIn('USERNAME', 'PASSWORD', function (err, token){
  // token is a string
});
```

# Badges

### listBadges 

List of all the existing badges

```javascript
codebits.badges.listBadges(function (err, reply){
  /*  reply is a string, use JSON.parse
      each array elem: 
  {  
    "id": "string",           //badge id
    "img": "string",          //img url
    "title": "string",        //badge title
    "description": "string",  //badge description 
    "usercount": "string"     //number of users who have this badge
  }
  */  
});
```

### getBadgeUsers

List of all the users who have a certain badge

```javascript
codebits.badges.getBadgeUsers('BADGE_ID', function(err, reply){
  /*  reply is a string, use JSON.parse

  */
});
```

### redeemBadges (Requires authentication!)

Redeem a badge through a badge code 

```javascript
codebits.badges.redeemBadges('BADGE_CODE', function (err, reply){
  /*  reply is a string, use JSON.parse
      reply.error.id = '1' if success, 0 otherwise 
  */
});
```

# Bots

### getBodyParts

Returns the body parts you can play with to build your bot. 

```javascript
codebits.bots.getBodyParts( function (err, reply){
  /*  reply is a string, use JSON.parse
      full list of body parts
  */
});

```

### getUserBot

Returns the bot structure for a certain user 

```javascript
codebits.bots.getUserBot('USER_ID', function (err, reply){
  /*  reply is a string, use JSON.parse
      body,bgcolor,grad,eyes,mouth,legs,head,arms,balloon.
  */
});
```

### makeBot

Returns the bot image. 
Request format as follows (example): 
```javascript
var opts = {
  body: '01',
  bgcolor: null,
  grad: '03',
  eyes: '04',
  mouth: '05',
  legs: '06',
  head: '07',
  arms: '08',
  balloon: 'hello world! :-)',
  file: '/path/to/save/returned/image.png'
}
```

Each field has the exact ID (with leading zeros) from [getBodyParts](https://github.com/diasdavid/codebits#getBodyParts). 

If you don't want a certain body part to be rendered, use `null` for the ID. The balloon is optional.
If `file:` field is null it defaults to `/tmp/bot.png`.

```javascript
codebits.bots.makeBot(opts, function (err, res, body){
  

});
```

### setBot (requires authentication!)

Sets the bot of the authenticated user.
Format for `opts` field is the same as [makeBot](https://github.com/diasdavid/codebits#makeBot) minus the `file` field.
Returns a success/unsuccess message. 

```javascript
codebits.bots.setBot(opts, function (err, reply){
  /*  reply is a string, use JSON.parse
      if success, JSON.parse(reply).result should be 1, 0 otherwise
  */
});
```

# Calendar

Returns this year's codebits calendar with detailed information. 

```javascript
codebits.calendar.getCalendar( function (err, result){
  /*  result is a string, use JSON.parse
      Calendar is an array
  */
});
```

# Call for Talks

### listSubmissions (authentication optional!)

Returns the list of the call for talks submissions for this year.
Authentication is optional, returns the user thumb option under 'rated', if provided.

```javascript
codebits.callfortalks.listSubmissions( function (err, reply){
  /*  reply is a string, use JSON.parse
      each talk object comes in an array
  */
});
```

### voteTalkUp (authentication required!)

Vote up a proposed talk by its id.

```javascript
codebits.callfortalks.voteTalkUp('TALK_ID', function (err, reply){
  /*  reply is a string, use JSON.parse
      Confirmation object returns the same talk id
  */
});
```
### voteTalkDown (authentication required!)

Vote down a proposed talk by its id.

```javascript
codebits.callfortalks.voteTalkDown('TALK_ID', function (err, reply){
  /*  reply is a string, use JSON.parse
      Confirmation object returns the same talk id
  */
});
```

# Comments

Requires authentication!
Posts a new comment on a certain thread identified by the comment_token. 
Some calls (ie: [listSubmission](https://github.com/diasdavid/codebits#listSubmissions)) will provide you with a comments_token field you can use here. 

```javascript
var opts = {
  comment_token: '1234asdf1234qwerty',
  comment: 'Hello Codebits World!',
  subect: 'My Hello Message' //optional
  token: authtoken //optional, If not submitted our code will search for it ˆ_ˆ
};

codebits.comment.postComment(opts, function (err, reply){
  /*  reply is a string, use JSON.parse
      JSON.parse(reply).result should 1 if successm 0 otherwise
  */
});
```

# Projects

### listProjects (requires authentication!)

Returns the list of submitted projects for this year's competition. 

```javascript
//_token is optional
codebits.projects.listProjects(_token, function (err, reply){
  /*  reply is a string, use JSON.parse
      returns an array where each object is a project
  */
});
```

### getProjectInfo (requires authentication!)

Returns information about a specfic project.

```javascript
//_token is optional
codebits.ptojects.getProjectInfo('PROJECT_ID', _token, function (err, reply){
  /*  reply is a string, use JSON.parse
      contains object with project info
  */
});
```

### getCurrentVotes

Returns information about the number of votes for the project being voted at the project's presentation session 

```javascript
codebits.projects.getCurrentVotes( function (err, reply){
  /*  repluy is string, use JSON.parse
      d
  */
});
```

### voteCurrentProject (requires authentication!)

Votes for the current project being presented. 1 for yes (liked it), 0 for no. 

```javascript
//_token is optional
codebits.projects.voteCurrentProject('1', _token, function (err, reply){
  /*  reply is string, use JSON.parse
      JSON.parse(reply).result should be 1 if you voted 1, 0 otherwise
  */
});
```

# Search



# Users





# Other notes:

The correct API endpoint for user info by nick was not `/user` but instead `/nick`

![](https://i.cloudup.com/5dsQCrS675-1200x1200.png)

