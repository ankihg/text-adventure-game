module.exports = function(world) {

  // conceive
  var Creature = world.Creature = function(name) {
    this.name = name;
    this.backpack = [];
    this.mood = 'fine';
    this.drinks = 0;
    this.cash = 5;
    this.location; //new world.Location.Home()
    this.options;
  }

  // MAYBE CREATURE ACTIONS RETURN NEXT POSSIBLE ACTIONS??
  // Creature.prototype.use = function(amenity) {
  //   console.log(amenity);
  // }

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

  Creature.prototype.order = function(itemName) {
    var menuMatch = this.location.menu.filter(function(menuItem) {
      return menuItem.acquirable.substance === itemName;
    })[0];
    if (!menuMatch) return console.log('out of stock');
    this.acquire(new menuMatch.acquirable(menuMatch.cost));
  }

  Creature.prototype.goTo = function(location) {
    if (!(location instanceof world.Location)) return console.log('no trespassing');
    this.location = location;
    console.log('welcome to ' + location.name);
  }

  Creature.prototype.assessOptions = function() {
    //clear prev options
    this.options = [];

    // delete me
    this.goTo(world.Location.Bar.kellis);

    // logic to figure out options
    if (this.location.menu.length) {
      this.options.push(new Option('SEE MENU', null, console.log, this.location.menu));
    }
    return this.options;
  }

  // HELPER OBJECT
  function Option(name, subject, action, objects) {
    this.name = name;
    this.subject = subject;
    this.action = action;
    this.objects = objects;
  }

  Option.prototype.do = function() {
    return this.action.apply(this.subject, this.objects);
  };



  // var firstBorn = world.Creature.firstBorn = new Creature();


}
