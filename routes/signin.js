var data = require("../json_files/user_login_database.json");

exports.view = function(req, res){
  // var first = req.body.firstname;
  // var last = req.body.lastname;
  var email = req.body.email;
  var password = req.body.pass;
  var cpass = req.body.cpass;

  if(password != cpass){
    console.log("passwords do not match");
  }

  else{
  var newEntry = {
            "email" : email,
                // "userName": "mrothenbuhler",
                // "firstName": first,
                // "lastName": last,
                // "DOB": "01/03/1994",
                // "hobbies": [
                //   "hearthstone",
                //   "running",
                //   "soccer"
                // ],
                "password" : password
           }

  data["users"].push(newEntry);
  res.render('user_profile');
  }
};