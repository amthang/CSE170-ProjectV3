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

exports.tripInfo = function(req, res) { 
  var projectID = req.params.id;

  // query for the specific project and
  // call the following callback

models.Project
.find(projectID)
.exec(afterQuery);


  function afterQuery(err, projects) {
    if(err) console.log(err);
    res.json(projects[0]);
  }
};