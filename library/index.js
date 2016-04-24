/*
 * index.js
 */
var LibraryAlt = require(__dirname+'/alt.js');
var LibraryAsync = require(__dirname+'/async.js');
var LibraryBabelRegister = require(__dirname+'/babel-register.js');
var LibraryBluebird = require(__dirname+'/bluebird.js');
var LibraryBodyParser = require(__dirname+'/body-parser.js');
var LibraryCreateBrowserHistory = require(__dirname+'/create-browser-history.js');
var LibraryDevice = require(__dirname+'/device.js');
var LibraryExpressSession = require(__dirname+'/express-session.js');
var LibraryFs = require(__dirname+'/fs.js');
var LibraryHead = require(__dirname+'/head.js');
var LibraryHistory = require(__dirname+'/history.js');
var LibraryHttp = require(__dirname+'/http.js');
var LibraryI18n = require(__dirname+'/i18n.js');
var LibraryKoaBody = require(__dirname+'/koa-body.js');
var LibraryKoaRouter = require(__dirname+'/koa-router.js');
var LibraryKoaValidate = require(__dirname+'/koa-validate.js');
var LibraryKoa = require(__dirname+'/koa.js');
var LibraryMocha = require(__dirname+'/mocha.js');
var LibraryMorgan = require(__dirname+'/morgan.js');
var LibraryPass = require(__dirname+'/pass.js');
var LibraryPassportFacebook = require(__dirname+'/passport-facebook.js');
var LibraryPassportLocal = require(__dirname+'/passport-local.js');
var LibraryPassport = require(__dirname+'/passport.js');
var LibraryPath = require(__dirname+'/path.js');
var LibraryPromise = require(__dirname+'/promise.js');
var LibraryReactDom = require(__dirname+'/react-dom.js');
var LibraryReactRouter = require(__dirname+'/react-router.js');
var LibraryReact = require(__dirname+'/react.js');
var LibraryRequest = require(__dirname+'/request.js');
var LibraryRequire = require(__dirname+'/require.js');
var LibraryRethinkdb = require(__dirname+'/rethinkdb.js');
var LibraryRethinkdbdash = require(__dirname+'/rethinkdbdash.js');
var LibrarySwig = require(__dirname+'/swig.js');
var LibraryUnderscore = require(__dirname+'/underscore.js');
var LibraryUri = require(__dirname+'/uri.js');
var LibraryValidator = require(__dirname+'/validator.js');
var LibraryXml2js = require(__dirname+'/xml2js.js');

/**
 * Create a new Library that let users create sub-libraries.
 * @return {Library}
 */
function Library() { }

/**
 * Create a new LibraryPath object.
 * @return {LibraryPath}
 */
Library.prototype.path = function() {
  return new LibraryPath();
}

//ORIGINAL module.exports = new Library();
module.exports = function() { return new Library(); }