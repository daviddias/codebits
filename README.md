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

This module was built in a very quick 'hacky' manner, it has tests, which is a good thing, but if you find any bug or a better way to do things, we accept happily pull requests. Big thanks to [axfcampos](https://github.com/axfcampos) who liked the idea and offered his time to implement several of the functionalities.

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

### getBadgeUsers

### redeemBadges 


# Bots



# Calendar



# Call for Talks



# Comments



# Projects



# Search



# Users





# Other notes:

The correct API endpoint for user info by nick was not `/user` but instead `/nick`

![](https://i.cloudup.com/5dsQCrS675-1200x1200.png)

