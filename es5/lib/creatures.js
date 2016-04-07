module.exports = function(world) {

  // conceive
  var Creature = world.Creature = function() {
    this.items = [];
    this.mood = 'fine';
    this.drinks = 0;
  }

  Creature.prototype.drink = function(beverage) {
    if (beverage instanceof world.Item.Beverage.AlcoholicBeverage) this.drinks++;
    if (beverage instanceof world.Item.Beverage) return console.log('gulp');
    return console.log('i cant drink this');
  }

  var firstBorn = world.Creature.firstBorn = new Creature();


}
