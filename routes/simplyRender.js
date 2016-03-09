var models = require('../models');

/*
 * GET home page.
 */

exports.renderHomepage = function(req, res){

	models.Project
		.find()
		.sort('date')
		.exec(renderProjects);

	function renderProjects(err, projects) {
		res.render('index', { 'projects': projects });
	}

};