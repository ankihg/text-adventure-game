module.exports = function(game, world) {

  // conceive
  var Creature = world.Creature = function(name) {
    this.name = name;
    this.backpack = {};
    this.mood = 'fine';
    this.drinks = 0;
    this.cash = 5;
    this.location;  //new world.Location.Home()

    this.defaultOptions = [];
    this.makeDefaultOptions();
    this.options = [];
  }

  // MAYBE CREATURE ACTIONS RETURN NEXT POSSIBLE ACTIONS??
  // Creature.prototype.use = function(amenity) {
  //   console.log(amenity);
  // }

  Creature.prototype.makeDefaultOptions = function() {
    this.defaultOptions.push(new world.Misc.Option('self reflect', this, this.selfReflect, []));
    this.defaultOptions.push(new world.Misc.Option('go', this, this.goTo, []));
    // check map
  }

  Creature.prototype.selfReflect = function() {
    console.log('my name is ' + this.name);
    console.log('im at ' + this.location.name + ' and i feel ' + this.mood);
    console.log('i have ' + this.cash + ' dollars in my pocket');
    console.log('and ' + this.drinks + ' drinks in my brain');
    console.log('i carry these with me');
    Object.keys(this.backpack).forEach(function(itemName) {
      console.log('\t' + itemName);
    });
  }

  Creature.prototype.drink = function(beverageName) {
      if (!this.backpack[beverageName]) return console.log('i dont have a ' + beverage.name);
      if (!(this.backpack[beverageName] instanceof world.Item.Beverage)) return console.log('i cant drink this');
      if (beverage instanceof world.Item.Beverage.AlcoholicBeverage) this.drinks++;
      this.backpack[beverageName] = undefined;
      return console.log('gulp');
  }

  Creature.prototype.acquire = function(item) {
    if (!(item instanceof world.Item)) return console.log('i cant acquire this');
    if (this.cash - item.cost < 0) return console.log('i cant pay for this');
    this.cash -= item.cost;
    this.backpack[item.name] = item;
  }

  Creature.prototype.order = function(itemName) {

    if (!itemName) {
      console.log('[*] order what');
      itemName = require('readline-sync').question();
     }

    var menuMatch = this.location.menu.filter(function(menuItem) {
      return menuItem.acquirable.substance === itemName;
    })[0];

    if (!menuMatch) return console.log('out of stock');

    console.log('here ya go');
    this.acquire(new menuMatch.acquirable(menuMatch.cost));
  }

  Creature.prototype.goTo = function(locationName) {

    if (!locationName) {
      console.log('[*] to where');
      locationName = require('readline-sync').question()
    };

    // var location = game.locations.filter(function(loc) {
    //   return loc.name === locationName;
    // })[0];
    var location = game.locations[locationName];

    if (!(location instanceof world.Location)) return console.log('no trespassing');
    this.location = location;
    console.log('[*] welcome to ' + location.name);
  }

  Creature.prototype.assessOptions = function() {
    // clear to default options
    this.options = this.defaultOptions.map(function(defaultOption) {
      return defaultOption;
    });

    // delete me
    // this.goTo('kellis');
    // this.goTo(world.Location.Bar.kellis);

    // logic to figure out options
    if (this.location.menu.length) {
      this.options.push(new world.Misc.Option('see menu', null, world.Misc.MenuItem.printMenu, [this.location.menu]));
      this.options.push(new world.Misc.Option('order', this, this.order, []));
    }
    return this.options;
  }

  // HELPER OBJECT
  // function Option(command, subject, action, objects) {
  //   this.command = command;
  //   this.subject = subject;
  //   this.action = action;
  //   this.objects = objects;
  // }
  //
  // Option.prototype.do = function() {
  //   return this.action.apply(this.subject, this.objects);
  // };



  // var firstBorn = world.Creature.firstBorn = new Creature();


}
