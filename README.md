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
codebits.logIn('USERNAME', 'PASSWORD', fucntion (err, token){
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

# Table of Contents
[]()


# Auth
## logIn


# Badges

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

