var mongoose = require('mongoose'),
  mongoose_auth = require('mongoose-auth'),
  Schema = mongoose.Schema;

var GridMapSchema = new Schema({
  text: String,
  name: String,
  updated: { type: Date, index: true },
  created: Date
});

var GridMap = mongoose.model('GridMap', GridMapSchema);

exports.GridMap = GridMap;
