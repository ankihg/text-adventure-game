module.exports = function(world) {

  var Item = world.Item = function(name) {
    this.name = name;
    this.availableAt = [];
  }


  var Beverage = world.Item.Beverage = function(name) {
    Item.call(this, name);
  }
  Beverage.prototype = new Item();

  var AlcoholicBeverage = world.Item.Beverage.AlcoholicBeverage = function(name) {
    Beverage.call(this, name);
  }
  AlcoholicBeverage.prototype = new Beverage();


  var pbr = world.Item.Beverage.AlcoholicBeverage.pbr = new AlcoholicBeverage('pbr');
  var slurpee = world.Item.Beverage.slurpee = new Beverage('slurpee');

}
