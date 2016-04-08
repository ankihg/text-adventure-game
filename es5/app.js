// birth world
// var world = {};
var Game = require('./lib/game.js');
var game = new Game({}); //pass game an empty world

// build world
require('./lib/misc.js')(game.world);
require('./lib/items.js')(game.world);
require('./lib/locations.js')(game.world);
require('./lib/creatures.js')(game, game.world);

game.makeRealWorld(); // adds instances of constructors to world

// test
var firstBorn = game.world.Creature.firstBorn;
// var slurpee = game.world.Item.Beverage.Slurpee.slurpee;
var pbr = game.world.Item.Beverage.AlcoholicBeverage.PBR.pbr;
var kellis = game.world.Location.Bar.kellis

game.play();

// console.log(firstBorn);
//
// firstBorn.goTo(kellis);
// firstBorn.order('pbr');
// console.log(firstBorn);

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
