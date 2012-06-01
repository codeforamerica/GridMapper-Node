/*jshint laxcomma:true */

/**
 * Module dependencies.
 */
var auth = require('./auth')
    , express = require('express')
    , mongoose = require('mongoose')
    , mongoose_auth = require('mongoose-auth')
    , mongoStore = require('connect-mongo')(express)
    , routes = require('./routes')
    , middleware = require('./middleware')
    ;

var HOUR_IN_MILLISECONDS = 3600000;
var session_store;

var init = exports.init = function (config) {
  
  var db_uri = process.env.MONGOLAB_URI || process.env.MONGODB_URI || config.default_db_uri;

  mongoose.connect(db_uri);
  session_store = new mongoStore({url: db_uri});

  var app = express.createServer();

  app.configure(function(){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.set('view options', { pretty: true });

    app.use(express.bodyParser());
    app.use(express.cookieParser());
    app.use(express.methodOverride());
    app.use(express.session({secret: 'top secret', store: session_store,
      cookie: {maxAge: HOUR_IN_MILLISECONDS}}));
    app.use(mongoose_auth.middleware());
    app.use(express.static(__dirname + '/public'));
    app.use(app.router);

  });

  app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  });

  app.configure('production', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: false}));
  });
  
  
  // Routes
  app.get('/', function(req,res){
    res.render('rapidstatus', {
      archiveID: "",
      title: "Grid Map",
      firstSquares: "7,6,6,5,5,4,4,3,3,2,1,1,1,3,4,4,5,5,5,5,5,5,6,7,7,8",
      lastSquares: "8,11,11,13,13,13,13,13,14,14,15,15,15,15,16,16,16,16,16,16,13,12,11,11,10,9",
      tilexyz: "http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg",
      tilecopyright: "Map data &copy; 2012 OpenStreetMap contributors, Tiles by Mike Migurski of Stamen Design",
      lat: "32.815",
      lng: "-83.7491226",
      zoom: "11",
      north: "32.968729",
      south: "32.661449",
      east: "-83.48285",
      west: "-83.9062",
      columns: "26",
      rows: "16",
      squareNameFunction: "var letter = String.fromCharCode(65+i);j++;return letter + j;",
      mapUserPic: "/images/citylogo.png",
      mapUserName: "EMA Sample"
    });
  });

  app.get('/auth', middleware.require_auth_browser, routes.index);
  app.post('/auth/add_comment',middleware.require_auth_browser, routes.add_comment);
  
  // redirect all non-existent URLs to doesnotexist
  app.get('*', function onNonexistentURL(req,res) {
    res.render('doesnotexist',404);
  });

  mongoose_auth.helpExpress(app);

  return app;
};

// Don't run if require()'d
if (!module.parent) {
  var config = require('./config');
  var app = init(config);
  app.listen(process.env.PORT || 3000);
  console.info("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
}