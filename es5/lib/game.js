var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

// init game
var Game = module.exports = function(world) {
  this.world = world; //has constructors of objects found in world
  this.players = [];
  this.turns = 0;
}

Game.prototype.play = function() {
  this.currentPlayer = this.players[this.turns % this.players.length];
  var options = this.prompt(this.currentPlayer);

  var game = this;
  this.read(function(response) {
    console.log('got line '+response);

    var action = options.filter(function(option) {
      return option.command === response;
    })[0];
    if (action) action.do();

    game.turns++;
    game.play();
  });
}

Game.prototype.makeRealWorld = function() {
  // creatures
  var firstBorn = this.world.Creature.firstBorn = new this.world.Creature('firstBorn');
  this.players.push(firstBorn);
  var tad = this.world.Creature.tad = new this.world.Creature('tad');
  this.players.push(tad);


  // locations
  var kellis = this.world.Location.Bar.kellis = new this.world.Location.Bar('kellis', [new this.world.Misc.MenuItem(this.world.Item.Beverage.AlcoholicBeverage.PBR, 2)]);
}

// prompt next moves
Game.prototype.prompt = function(creature) {
  console.log(creature.name + 's turn');
  console.log(creature.assessOptions());
  // var seeMenu = creature.assessOptions()[0];
  // seeMenu.do();
  return creature.options;
}

// read input
Game.prototype.read = function(next) {
  rl.once('line', function(line){
      if (line) next(line);
  });
}
