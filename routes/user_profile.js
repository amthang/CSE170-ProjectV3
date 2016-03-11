var models = require('../models');
var data = require('../json_files/user_login_database.json');

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

exports.checkLogin = function(req, res){
	//console.log(req);
	if(req != null){
		var email = req.body.email;
		var pass = req.body.password;
		var errormsg = data["msg"][0].errormsg;
		var flag = false;

		for(var i = 0; i < data["users"].length; i++){
			if(data["users"][i].email == email && data["users"][i].password == pass){
				flag = true;
			}
		}
		if (flag) {
			models.Project
					.find()
					.sort('date')
					.exec(renderProjects);

			function renderProjects(err, projects) {
				res.render('user_profile', { 'profile_data': projects});
			}

		}
		else {
			res.render('signin', data);
		}
	}
}