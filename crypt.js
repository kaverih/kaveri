
console.log('Hello.');
//invoke the crypto module
const crypto = require('crypto');
 //invoke the os module
const os = require('os');
 //create the user variable which stores the hostname of the os
var user = os.userInfo();
var user1 = os.hostname();
//creation of hmac class for crypto and convert the user value to hexadecimal
const hmac = crypto.createHmac('sha256', user.homedir);
//to print the hostname and hexadecimal value
const hmac1 =crypto.createHmac('sha256', user.username);
const hmac2 =crypto.createHmac('sha256', user1);
  console.log(`${user.homedir} ${hmac.digest('hex')}`);
    console.log(`${user.username} ${hmac1.digest('hex')}`);
      console.log(`${user1} ${hmac2.digest('latin1')}`);
console.log(user);
