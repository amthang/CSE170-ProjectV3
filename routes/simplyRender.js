var models = require('../models');

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