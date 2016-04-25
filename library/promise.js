//import Request from 'bluebird';
//
//export default Request;

// Look at the cheat sheet for Promises at
// http://ricostacruz.com/cheatsheets/bluebird.html

// Events are great for things that can happen multiple times on the same object — keyup, touchstart etc. 
// With those events you don't really care about what happened before you attached the listener. 
// But when it comes to async success/failure, ideally you want promises.
// Source: http://www.html5rocks.com/en/tutorials/es6/promises/#toc-async

module.exports = function() { return(require('bluebird')) }; // Exception, Promise module needs to be wrapped in a function