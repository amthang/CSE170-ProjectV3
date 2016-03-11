var models = require('../models');

exports.view = function(req, res){

	models.Project
		.find()
		.exec(renderPage);

	function renderPage(err, projects) {
		res.render('add_diary');
	}

};

exports.addTripToPage = function(req, res){
	var form_data = req.body;
	console.log(form_data);

	var trip_info = new models.Project({
		// "circle_position" : "fa fa-circle",
		"title" : form_data["project_title"],
		// "location" : "newTrip",
		 "image" : form_data["image_url"],
		//"image" : form_data["image_upload"],
		"description" : form_data["summary"],
		"date" : form_data["date"],
	});

	trip_info.save(finalSave)

	function finalSave(err){
    if(err) {
      console.log(err);
    }

    //res.redirect('/home');
    res.send('Add new project works!');
  }
}

exports.deleteTrip = function(req, res) {
  var projectID = req.params.id;

  // find the project and remove it
  // YOU MUST send an OK response w/ res.send();
  models.Project
  .find({"_id":projectID}).remove(afterQuery);

  function afterQuery(err, projects) {
    if(err) console.log(err);
    res.send('Removal works!');
  }
}