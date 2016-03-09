var models = require('../models');

exports.view = function(req, res){

	models.Project
		.find()
		.sort('date')
		.exec(renderProjects);

	function renderProjects(err, projects) {
		res.render('user_profile', { 'profile_data': projects });
	}

};