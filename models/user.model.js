var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { first: String, last: String },
  email: String,
  password: String,
  student: {
    status: {type: Boolean, default: false},
    institution: String,
    number: String,
    faculty: String
  }
});

module.exports = mongoose.model('User', userSchema);