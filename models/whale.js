// whale schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var whaleSchema = new Schema({
  name: String,
  relativeSize: String,
  color: String,
  species: String,
  aliveAndKickin: Boolean,
  age: Number
})

var Whale = mongoose.model("Whale", whaleSchema);

module.exports = Whale;




// var newWhale = {
//   name: req.body.name,
//   relativeSize: req.body.relativeSize,
//   color: req.body.color,
//   species: req.body.species
// }
