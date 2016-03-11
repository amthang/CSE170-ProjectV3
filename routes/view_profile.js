var models = require('../models');
var data = require('../json_files/profile_data.json');

exports.renderAnjelica = function(req, res){
	res.render('view_profile', data);
};
exports.renderSteven = function(req, res){
	res.render('view_profile1', data);
};
exports.renderHelen = function(req, res){
	res.render('view_profile2', data);
};
exports.renderJoel = function(req, res){
	res.render('view_profile3', data);
};
exports.renderHarry = function(req, res){
	res.render('view_profile4', data);
};
exports.renderRon = function(req, res){
	res.render('view_profile5', data);
};
exports.renderHermione = function(req, res){
	res.render('view_profile6', data);
};
exports.renderSnape = function(req, res){
	res.render('view_profile7', data);
};
exports.renderAlbus = function(req, res){
	res.render('view_profile8', data);
};