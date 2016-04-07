// birth world
var world = {};

// build world
require('./lib/creatures.js')(world);

console.log(world.Creature.firstBorn);
