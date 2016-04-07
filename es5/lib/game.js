// init game
function Game(world) {
  this.world = world; //has constructors of objects found in world
  this.name = 'plz';
  // this.makeRealWorld(); // adds instances of constructors to world
}

Game.prototype.makeRealWorld = function() {
  // creatures
  var firstBorn = this.world.Creature.firstBorn = new this.world.Creature();

  // locations
  var kellis = this.world.Location.Bar.kellis = new this.world.Location.Bar('kellis', [new this.world.Location.MenuItem(this.world.Item.Beverage.AlcoholicBeverage.PBR, 2)]);
}

module.exports = Game;







// read input


//prompt next moves
