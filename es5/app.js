// birth world
// var world = {};
var Game = require('./lib/game.js');
var game = new Game({}); //pass game an empty world
console.log(game);

// build world
require('./lib/items.js')(game.world);
require('./lib/locations.js')(game.world);
require('./lib/creatures.js')(game.world);

game.makeRealWorld();
console.log(game.world);

// test
var firstBorn = game.world.Creature.firstBorn;
// var slurpee = game.world.Item.Beverage.Slurpee.slurpee;
var pbr = game.world.Item.Beverage.AlcoholicBeverage.PBR.pbr;
var kellis = game.world.Location.Bar.kellis

console.log(firstBorn);

firstBorn.goTo(kellis);
firstBorn.order('pbr');
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
