module.exports = function(world) {

  var Location = world.Location = function(name, acquirables) {
    // this.pos = [x, y]
    this.name = name;
    this.acquirables = acquirables;
  }

  /* BAR */
  var Bar = world.Location.Bar = function(name, acquirables) {
    Location.call(this, name, acquirables);
  }
  Bar.prototype = new Location();


  var kellis = world.Location.Bar.kellis = new Bar('kellis', [world.Item.Beverage.AlcoholicBeverage.PBR]);


}
