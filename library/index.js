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
 * Create a new LibraryAlt object.
 * @return {LibraryAlt}
 */
Library.prototype.alt = function() {
  return new LibraryAlt();
}

/**
 * Create a new LibraryAsync object.
 * @return {LibraryAsynv}
 */
Library.prototype.async = function() {
  return new LibraryAsync();
}

/**
 * Create a new LibraryBabelRegister object.
 * @return {LibraryBabelRegister}
 */
Library.prototype.babelRegister = function() {
  return new LibraryBabelRegister();
}

/**
 * Create a new LibraryBluebird object.
 * @return {LibraryBluebird}
 */
Library.prototype.bluebird = function() {
  return new LibraryBluebird();
}

/**
 * Create a new LibraryBodyParser object.
 * @return {LibraryBodyParser}
 */
Library.prototype.bodyParser = function() {
  return new LibraryBodyParser();
}

/**
 * Create a new LibraryCreateBrowserHistory object.
 * @return {LibraryCreateBrowserHistory}
 */
Library.prototype.createBrowserHistory = function() {
  return new LibraryCreateBrowserHistory();
}

/**
 * Create a new LibraryDevice object.
 * @return {LibraryDevice}
 */
Library.prototype.device = function() {
  return new LibraryDevice();
}

/**
 * Create a new LibraryExpressSession object.
 * @return {LibraryExpressSession}
 */
Library.prototype.expressSession = function() {
  return new LibraryExpressSession();
}

/**
 * Create a new LibraryExpress object.
 * @return {LibraryExpress}
 */
Library.prototype.express = function() {
  return new LibraryExpress();
}

/**
 * Create a new LibraryFs object.
 * @return {LibraryFs}
 */
Library.prototype.fs = function() {
  return new LibraryFs();
}

/**
 * Create a new LibraryHead object.
 * @return {LibraryHead}
 */
Library.prototype.head = function() {
  return new LibraryHead();
}

/**
 * Create a new LibraryHistory object.
 * @return {LibraryHistory}
 */
Library.prototype.history = function() {
  return new LibraryHistory();
}

/**
 * Create a new LibraryHttp object.
 * @return {LibraryHttp}
 */
Library.prototype.http = function() {
  return new LibraryHttp();
}

/**
 * Create a new LibraryI18n object.
 * @return {LibraryI18n}
 */
Library.prototype.i18n = function() {
  return new LibraryI18n();
}

/**
 * Create a new LibraryKoaBody object.
 * @return {LibraryKoaBody}
 */
Library.prototype.koaBody = function() {
  return new LibraryKoaBody();
}

/**
 * Create a new LibraryKoaRouter object.
 * @return {LibraryKoaRouter}
 */
Library.prototype.koaRouter = function() {
  return new LibraryKoaRouter();
}

/**
 * Create a new LibraryKoaValidate object.
 * @return {LibraryKoaValidate}
 */
Library.prototype.koaValidate = function() {
  return new LibraryKoaValidate();
}

/**
 * Create a new LibraryKoa object.
 * @return {LibraryKoa}
 */
Library.prototype.koa = function() {
  return new LibraryKoa();
}

/**
 * Create a new LibraryMocha object.
 * @return {LibraryMocha}
 */
Library.prototype.mocha = function() {
  return new LibraryMocha();
}

/**
 * Create a new LibraryMorgan object.
 * @return {LibraryMorgan}
 */
Library.prototype.morgan = function() {
  return new LibraryMorgan();
}

/**
 * Create a new LibraryPass object.
 * @return {LibraryPass}
 */
Library.prototype.pass = function() {
  return new LibraryPass();
}

/**
 * Create a new LibraryPassportFacebook object.
 * @return {LibraryPassportFacebook}
 */
Library.prototype.passportFacebook = function() {
  return new LibraryPassportFacebook();
}

/**
 * Create a new LibraryPassportLocal object.
 * @return {LibraryPassportLocal}
 */
Library.prototype.passportLocal = function() {
  return new LibraryPassportLocal();
}

/**
 * Create a new LibraryPassport object.
 * @return {LibraryPassport}
 */
Library.prototype.passport = function() {
  return new LibraryPassport();
}

/**
 * Create a new LibraryPath object.
 * @return {LibraryPath}
 */
Library.prototype.path = function() {
  return new LibraryPath();
}

/**
 * Create a new LibraryPromise object.
 * @return {LibraryPromise}
 */
Library.prototype.promise = function() {
  return new LibraryPromise();
}

/**
 * Create a new LibraryReactDom object.
 * @return {LibraryReactDom}
 */
Library.prototype.reactDom = function() {
  return new LibraryReactDom();
}

/**
 * Create a new LibraryReactRouter object.
 * @return {LibraryReactRouter}
 */
Library.prototype.reactRouter = function() {
  return new LibraryReactRouter();
}

/**
 * Create a new LibraryReact object.
 * @return {LibraryReact}
 */
Library.prototype.react = function() {
  return new LibraryReact();
}

/**
 * Create a new LibraryRequest object.
 * @return {LibraryRequest}
 */
Library.prototype.request = function() {
  return new LibraryRequest();
}

/**
 * Create a new LibraryRequire object.
 * @return {LibraryRequire}
 */
Library.prototype.require = function() {
  return new LibraryRequire();
}

/**
 * Create a new LibraryRethinkdb object.
 * @return {LibraryRethinkdb}
 */
Library.prototype.rethinkdb = function() {
  return new LibraryRethinkdb();
}

/**
 * Create a new LibraryRethinkdbdash object.
 * @return {LibraryRethinkdbdash}
 */
Library.prototype.rethinkdbdash = function() {
  return new LibraryRethinkdbdash();
}

/**
 * Create a new LibrarySwig object.
 * @return {LibrarySwig}
 */
Library.prototype.swig = function() {
  return new LibrarySwig();
}

/**
 * Create a new LibraryUnderscore object.
 * @return {LibraryUnderscore}
 */
Library.prototype.underscore = function() {
  return new LibraryUnderscore();
}

/**
 * Create a new LibraryUri object.
 * @return {LibraryUri}
 */
Library.prototype.uri = function() {
  return new LibraryUri();
}

/**
 * Create a new LibraryValidator object.
 * @return {LibraryValidator}
 */
Library.prototype.validator = function() {
  return new LibraryValidator();
}

/**
 * Create a new LibraryXml2js object.
 * @return {LibraryXml2js}
 */
Library.prototype.xml2js = function() {
  return new LibraryXml2js();
}

//ORIGINAL module.exports = new Library();
module.exports = function() { return new Library(); }