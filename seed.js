var db = require('./models');

var whales = [
  {name: "George", relativeSize: "gigantic", color: "pink", species: "Beluga",   aliveAndKickin: true,
    age: 4},
  {name: "Zander", relativeSize: "wee", color: "blue", species: "Minke",   aliveAndKickin: true,
    age: 5},
  {name: "Pat", relativeSize: "titanic", color: "burgundy", species: "Blue",   aliveAndKickin: true,
    age: 6}
];

db.Whale.remove({}, function beJapan(err, succ) {
  if(err){return console.log(" remove Err", err);}
  console.log('All whales have been lost :(');
  db.Whale.create(whales, function beSeaShepherd(err, succ) {
    if(err){return console.log("create Err", err);}
    console.log('The Sea Shepherd has saved the day! We now have ' + succ.length + ' new whales');
    process.exit();
  });
});
