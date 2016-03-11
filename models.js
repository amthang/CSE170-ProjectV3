
var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;


var ProjectSchema = new Mongoose.Schema({
  // fields are defined here
  'title' : String,
  'date' : Date,
  'summary' : String,
  'image' : String
});

var FutureSchema = new Mongoose.Schema({
  // fields are defined here
  'title' : String,
  'date' : Date,
  'summary' : String,
  'image' : String
});

exports.Project = Mongoose.model('Project', ProjectSchema);
exports.Future = Mongoose.model('Future', FutureSchema);