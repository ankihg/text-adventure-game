// birth world
var world = {};

// build world
require('./lib/items.js')(world);
require('./lib/locations.js')(world);
require('./lib/creatures.js')(world);

// test
var firstBorn = world.Creature.firstBorn;
var slurpee = world.Item.Beverage.slurpee;
var kellis = world.Location.Bar.kellis

console.log(world.Creature.firstBorn);
console.log(world.Item.Beverage.slurpee);

console.log(kellis);
world.Creature.firstBorn.goTo(kellis);
console.log(firstBorn);

// world.Creature.firstBorn.acquire(world.Item.Beverage.slurpee);
// console.log(world.Creature.firstBorn);
// world.Creature.firstBorn.drink(world.Item.Beverage.slurpee);
// console.log(world.Creature.firstBorn);
//
// world.Creature.firstBorn.drink(world.Item.Beverage.slurpee);
//
//
// world.Creature.firstBorn.drink(world.Item.Beverage.AlcoholicBeverage.pbr);
// console.log(world.Creature.firstBorn);
