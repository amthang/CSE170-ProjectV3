var results = require('../json_files/search_results.json');
var paris_rsult = require('../json_files/paris.json');
var sd_rsult = require('../json_files/sd.json');
var hogwarts_rsult = require('../json_files/hogwarts.json');
var error_msg = require('../json_files/error_msg.json');
var balboa = require('../json_files/sd/balboa.json');
var potatoChip = require('../json_files/sd/potatoChip.json');


exports.renderResults = function(req, res){
	res.render('search_results', results);
};
 
exports.checkSearch = function(req, res){
	if(req != null) {
		var city = req.body.city;
		var flag = false;
		var sd_flag = false;
		var paris_flag = false;
		var hogwarts_flag = false;

		if(results["search_results"][0].city == city || city == "Paris"){
			res.render('search_results', paris_rsult);
		}

		else if (results["search_results"][1].city == city || city == "San Diego") {
			res.render('search_results', sd_rsult);
		}

		else if (results["search_results"][2].city == city || city == "Hogwarts") {
			res.render('search_results', hogwarts_rsult);
		}

		else
		{
			res.render('homepage', error_msg);
		}
	}
};

exports.displayBalboa = function(req, res){
	res.render('view_trip', balboa);
};

exports.displayPotatoChip = function(req, res){
	res.render('view_trip', potatoChip);
};
