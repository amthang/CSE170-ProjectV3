var models = require('../models');

exports.view = function(req, res){

	models.Future
		.find()
		.exec(renderPage);

	function renderPage(err, future_travels) {
		res.render('add_future_diary', {'profile_data': future_travels});
	}

};

exports.addTripToPage = function(req, res){
	var form_data = req.body;
	console.log(form_data);

	var trip_info = new models.Future({
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
  models.Future
  .find({"_id":projectID}).remove(afterQuery);

  function afterQuery(err, projects) {
    if(err) console.log(err);
    res.send('Removal works!');
  }
}