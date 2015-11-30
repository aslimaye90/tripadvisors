var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  userName: String,
  recommendations: {
    "A-50": {type: Array},
    "B-75": {type: Array},
    "C-100": {type: Array}
  },
  activity: {
    "A-50": {type: Array},
    "B-75": {type: Array},
    "C-100": {type: Array}
  }
});

module.exports = mongoose.model('users', userSchema);