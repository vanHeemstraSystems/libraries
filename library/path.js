//import Path from 'path';
//
//export default Path;

// See also https://nodejs.org/api/path.html

module.exports = function() { return(require('path')) }; // Exception, Path module needs to be wrapped in a function