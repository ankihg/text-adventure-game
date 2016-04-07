module.exports = function(world) {

  var Location = world.Location = function(name, menu, amenities) {
    // this.pos = [x, y]
    this.name = name;
    this.menu = menu; //list of menuItems, acquirables
    this.amenities = amenities;
  }

  /* BAR */
  var Bar = world.Location.Bar = function(name, menu, amenities) {
    Location.call(this, name, menu, amenities);
  }
  Bar.prototype = new Location();


  // /* HELPER OBJECTs */
  // var MenuItem = world.Location.MenuItem = function(acquirable, cost) {
  //   this.acquirable = acquirable;
  //   this.cost = cost;
  // }
  //
  // // var Amenity = world.Location.Amenity = function('name', affectDoer) {
  // //
  // // }


  // var kellis = world.Location.Bar.kellis = new Bar('kellis', [new MenuItem(world.Item.Beverage.AlcoholicBeverage.PBR, 2)]);


}
