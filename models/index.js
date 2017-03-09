//head of the kraken
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/wwhowoowowowowoowowowoo");

// grabbing the whale schema and offering it up to outside files.
module.exports.Whale = require("./whale.js");
