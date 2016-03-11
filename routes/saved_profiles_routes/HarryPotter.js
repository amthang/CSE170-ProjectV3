var user_data = require('../../version2_json/public_profile_data.json');

exports.main = function(req, res) {
  	res.render('saved_profiles_views/HarryPotter', user_data);
}