var models = require('../models');
var about_data = require('../json_files/about_data.json');
var helenSF = require('../json_files/featured_trips/helenSF.json');
var support = require('../json_files/support_help.json');
var moreFeat = require('../json_files/more_feat_trips.json');
var user_moreFeat = require('../json_files/user_more_feat_trips.json');
var boston = require('../json_files/featured_trips/travel_diary_boston.json');
var saved_profiles = require('../json_files/saved_profiles.json');
var saved_trips = require('../json_files/saved_trips.json');
var brit = require('../json_files/featured_trips/diary_brit.json');

/*
 * GET home page.
 */

exports.renderHomepage = function(req, res){

	models.Project
		.find()
		.exec(renderProjects);

	function renderProjects(err, projects) {
		res.render('homepage');
	}

};

exports.renderAbout = function(req, res){
	res.render('about', about_data);
};

exports.renderFeaturedTrips = function(req, res){
	res.render('featured_trips', about_data);
};

exports.renderMoreFeatTrips= function(req, res){
	res.render('search_results', moreFeat);
};

exports.renderHelenTrip = function(req, res){
	res.render('view_trip', helenSF);
};

exports.renderHelenTrip_user = function(req, res){
	res.render('view_trip_user', helenSF);
};

exports.renderBoston = function(req, res){
	res.render('view_trip', boston);
};

exports.renderContact = function(req, res){
	res.render('contact');
};

exports.renderSignIn = function(req, res){
	res.render('signin');
};

exports.renderCreateAccount = function(req, res){
	res.render('create_account');
};

exports.renderSupportHelp = function(req, res){
	res.render('support_help', support);
};

exports.renderForgotPw = function(req, res){
	res.render('forgot_pw');
};

exports.renderSentPw = function(req, res){
	res.render('sent_pw');
};

exports.renderTermsCond = function(req, res){
	res.render('terms_conditions', about_data);
};

exports.renderFeaturedTrips_user = function(req, res){
	res.render('featured_trips_user', about_data);
};

exports.renderMoreFeatTripsUser= function(req, res){
	res.render('search_results_user', user_moreFeat);
};

exports.renderBoston_user = function(req, res){
	res.render('view_trip_user', boston);
};

exports.renderSavedProfiles = function(req, res){
	res.render('saved_profiles',saved_profiles);
};

exports.renderSavedTrips = function(req, res){
	res.render('saved_trips',saved_trips);
};

exports.renderBrit_user = function(req, res){
	res.render('view_trip_user', brit);
}

exports.renderSignOut = function(req, res){
	res.render('signout');
}

exports.renderContact_user = function(req, res){
	res.render('contact_user');
};

exports.renderSupportHelp_user = function(req, res){
	res.render('support_help_user', support);
};
