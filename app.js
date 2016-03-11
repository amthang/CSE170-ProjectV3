
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');
var mongoose = require('mongoose');
var img_upload = require('express-fileupload');
var multer = require('multer');


var index = require('./routes/index');
var project = require('./routes/project');
var add_diary = require('./routes/add_diary');
var user_profile = require('./routes/user_profile');
var simplyRender = require('./routes/simplyRender');
var search_results = require('./routes/search_results');
var future_diary = require('./routes/future_diary');
var add_future_diary = require('./routes/add_future_diary');
var signin = require('./routes/signin');

// Example route
// var user = require('./routes/user');

// Connect to the Mongo database, whether locally or on Heroku
// MAKE SURE TO CHANGE THE NAME FROM 'lab7' TO ... IN OTHER PROJECTS
// var local_database_name = 'lab_DB';
// var local_database_uri  = 'mongodb://localhost/' + local_database_name
// var database_uri = process.env.MONGOLAB_URI || local_database_uri
// mongoose.connect(database_uri);

var heroku_database_uri = 'mongodb://wishy:washy@ds023088.mlab.com:23088/wishtrip'
var database_uri = heroku_database_uri;

mongoose.connect(heroku_database_uri);

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(img_upload);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/img_upload/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.jpg') //Appending .jpg
  }
})

var upload = multer({ storage: storage,
  onFileUploadComplete: function (file, req, res) {
    console.log(file.fieldname + ' uploaded to  ' + file.path);
  }

});

// Add routes here
// app.get('/', index.view);
// app.get('/home', index.view);
// app.get('/project/:id', project.projectInfo);
// app.post('/project/new', project.addProject);
// app.post('/project/:id/delete', project.deleteProject);


app.get('/', simplyRender.renderHomepage);
app.get('/home', simplyRender.renderHomepage);
app.get('/add_diary', add_diary.view)
app.get('/search_results', search_results.renderResults);
app.get('/user_profile', user_profile.view);
app.get('/user_profile/:id', user_profile.tripInfo);
app.post('/user_profile', user_profile.checkLogin);
app.post('/user_profile/new', add_diary.addTripToPage);
app.post('/user_profile/:id/delete', add_diary.deleteTrip);
app.post('/search_results', search_results.checkSearch);


// Render these pages for the hamburger menu -- NON-USER
app.get('/about', simplyRender.renderAbout);
app.get('/featured_trips', simplyRender.renderFeaturedTrips);
app.get('/contact', simplyRender.renderContact);
app.get('/signin', simplyRender.renderSignIn);
app.get('/create_account', simplyRender.renderCreateAccount);
app.get('/support_help', simplyRender.renderSupportHelp);
app.get('/forgot_pw', simplyRender.renderForgotPw);
app.get('/sent_pw', simplyRender.renderSentPw);
app.get('/terms', simplyRender.renderTermsCond);
app.get('/search_results_feat', simplyRender.renderMoreFeatTrips);
app.post('/login', signin.view);

// Render these pages for the hamurger menu -- USER
app.get('/saved_profiles', simplyRender.renderSavedProfiles);
app.get('/featured_trips_user', simplyRender.renderFeaturedTrips_user);
app.get('/saved_trips', simplyRender.renderSavedTrips);
app.get('/signout', simplyRender.renderSignOut);
app.get('/user_contact', simplyRender.renderContact_user);
app.get('/support_help_user', simplyRender.renderSupportHelp_user);
app.get('/add_future_diary', add_future_diary.view);
app.get('/future_travels', future_diary.view);
app.get('/future_travels/:id', future_diary.tripInfo);
app.post('/future_travels/new', add_future_diary.addTripToPage);
app.post('/future_travels/:id/delete', add_future_diary.deleteTrip);

// Render these pages when viewing a featured trip or saved trip
app.get('/travel_diary_helenSF', simplyRender.renderHelenTrip);
app.get('/travel_diary_helenSF_user', simplyRender.renderHelenTrip_user);

app.get('/travel_diary_boston', simplyRender.renderBoston);
app.get('/travel_diary_boston_user', simplyRender.renderBoston_user);
app.get('/travel_diary_brittany_user', simplyRender.renderBrit_user);

// Render these pages when viewing a trip
app.get('/view_trip_balboa', search_results.displayBalboa);
app.get('/view_trip_potato_chip', search_results.displayPotatoChip);
// app.get('/view_trip_downtown_sd', search_results.displayTrip);
// app.get('/view_trip_la_jolla_surf', search_results.displayTrip);
// app.get('/view_trip_anza_borrego_camping', search_results.displayTrip);
// app.get('/view_trip_');
// app.get('/view_trip_');
// app.get('/view_trip_');
// app.get('/view_trip_');
// app.get('/view_trip_');
// app.get('/view_trip_');
// app.get('/view_trip_');


// Example route
// app.get('/users', user.list);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
