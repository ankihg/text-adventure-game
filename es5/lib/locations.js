module.exports = function(world) {

  var Location = world.Location = function(name, menu) {
    // this.pos = [x, y]
    this.name = name;
    this.menu = menu; //list of menuItems
  }

  /* BAR */
  var Bar = world.Location.Bar = function(name, acquirables) {
    Location.call(this, name, acquirables);
  }
  Bar.prototype = new Location();


  /* HELPER OBJECTs */
  var MenuItem = world.Location.MenuItem = function(acquirable, cost) {
    this.acquirable = acquirable;
    this.cost = cost;
  }


  // var kellis = world.Location.Bar.kellis = new Bar('kellis', [new MenuItem(world.Item.Beverage.AlcoholicBeverage.PBR, 2)]);


}
