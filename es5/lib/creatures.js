module.exports = function(world) {

  // conceive
  var Creature = world.Creature = function() {
    this.backpack = [];
    this.mood = 'fine';
    this.drinks = 0;
    this.cash = 5;
  }

  // MAYBE CREATURE ACTIONS RETURN NEXT POSSIBLE ACTIONS??
  Creature.prototype.drink = function(beverage) {
    if (beverage instanceof world.Item.Beverage) {
      if (this.backpack.indexOf(beverage) < 0) return console.log('i dont have a ' + beverage.name);
      if (beverage instanceof world.Item.Beverage.AlcoholicBeverage) this.drinks++;
      this.backpack.splice(this.backpack.indexOf(beverage), 1);
      return console.log('gulp');
    }
    return console.log('i cant drink this');
  }

  Creature.prototype.acquire = function(item) {
    if (!(item instanceof world.Item)) return console.log('i cant acquire this');
    if (this.cash - item.cost < 0) return console.log('i cant pay for this');
    this.cash -= item.cost;
    this.backpack.push(item);
  }

  var firstBorn = world.Creature.firstBorn = new Creature();


}
