// birth world
var world = {};

// build world
require('./lib/items.js')(world);
require('./lib/creatures.js')(world);

console.log(world.Creature.firstBorn);
console.log(world.Item.Beverage.slurpee);
world.Creature.firstBorn.drink(world.Item.Beverage.slurpee);
console.log(world.Creature.firstBorn);
world.Creature.firstBorn.drink(world.Item.Beverage.AlcoholicBeverage.pbr);
console.log(world.Creature.firstBorn);
