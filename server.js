/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////

//require express in our app
var express = require('express'),
  bodyParser = require('body-parser');

// connect to db models
var db = require('./models');
var Whale = db.Whale;

// generate a new express app and call it 'app'
var app = express();

// serve static files in public
app.use(express.static('public'));

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));

var whales = [
  {name: "George", relativeSize: "gigantic", color: "pink", species: "Beluga"},
  {name: "Zander", relativeSize: "wee", color: "blue", species: "Minke"},
  {name: "Pat", relativeSize: "titanic", color: "burgundy", species: "Blue"}
]

app.get('/api/whales', function index(req, res) {
  Whale.find({}, function getAllWhales(err, whales){
    if(err){return console.log("Whale Index Err", err);}
    console.log("WHOOOOOOO :)");
    res.json({data: whales});
  });
});

app.get('/api/whales/:id', function show(req, res) {

  var id = req.params.id;

  Whale.findById(id, function getOneWhales(err, showWhale){
    if(err){return console.log("Whale Show Err", err);}
    console.log(showWhale);
    res.json(showWhale);
  });

});

app.post('/api/whales', function create(req,res) {

  var newWhale = {
    name: req.body.name,
    relativeSize: req.body.relativeSize,
    color: req.body.color,
    species: req.body.species
  }

  Whale.create(newWhale, function createWhale(err, newWhale) {
    if(err){return console.log("Whale Create Err", err);}
    console.log("Welcome, ",newWhale);
    res.json(newWhale);
  });

});

app.listen(process.env.PORT || 3000, function () {
  console.log('Welcome to the whale API. Whooooooooooooooooowowowowowowowowowowowowow!');
});
