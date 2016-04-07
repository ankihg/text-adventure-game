var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
rl.on('line', function(line){
    console.log(line);
});

// init game
var Game = module.exports = function(world) {
  this.world = world; //has constructors of objects found in world
}

Game.prototype.play = function() {
  this.prompt(this.world.Creature.firstBorn);
}

Game.prototype.makeRealWorld = function() {
  // creatures
  var firstBorn = this.world.Creature.firstBorn = new this.world.Creature('i was born first');

  // locations
  var kellis = this.world.Location.Bar.kellis = new this.world.Location.Bar('kellis', [new this.world.Location.MenuItem(this.world.Item.Beverage.AlcoholicBeverage.PBR, 2)]);
}

// prompt next moves
Game.prototype.prompt = function(creature) {
  console.log(creature.name + 's turn');
}

// read input
