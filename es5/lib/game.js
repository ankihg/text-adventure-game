// SALEM SUNRISE

// init game
var Game = module.exports = function(world) {
  this.world = world; //has constructors of objects found in world
  this.players = [];
  this.locations = [];
  this.turns = 0;
  console.log('SALEM SUNRISE - A SUN RISES IN SALEM');
}

Game.prototype.play = function() {
  console.log('****************************');
  this.currentPlayer = this.players[this.turns % this.players.length];
  var options = this.prompt(this.currentPlayer);

  var game = this;
  var response = this.read();
  console.log('got line '+response);

  var action = options.filter(function(option) {
    return option.command === response.toLowerCase();
  })[0];
  if (action) action.do();

  game.turns++;
  game.play();
}

Game.prototype.makeRealWorld = function() {
  // creatures
  var firstBorn = new this.world.Creature('firstBorn');
  this.players.push(firstBorn);
  var tad = new this.world.Creature('tad');
  this.players.push(tad);


  // locations
  var kellis = new this.world.Location.Bar('kellis', [new this.world.Misc.MenuItem(this.world.Item.Beverage.AlcoholicBeverage.PBR, 2)]);
  this.locations.push(kellis);
  var home = new this.world.Location('home', []);
  this.locations.push(home);
}

// prompt next moves
Game.prototype.prompt = function(creature) {
  console.log('ok... ' + creature.name + '. would you like to');
  creature.assessOptions().forEach(function(option) {
    option.print();
  });

  return creature.options;
}

// read input
Game.prototype.read = function() {
  // require('./util.js').rl.once('line', function(line){
  //     next(line);
  // });
  return require('readline-sync').question();
}
