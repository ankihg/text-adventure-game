module.exports = function(world) {

  var Item = world.Item = function(name, cost) {
    this.name = name;
    this.cost = cost;
  }

  /* BEVERAGES */
  var Beverage = world.Item.Beverage = function(name, cost) {
    Item.call(this, name, cost);
  }
  Beverage.prototype = new Item();

  var Slurpee = world.Item.Beverage.Slurpee = function(cost) {
    return new Beverage('slurpee', cost);
  }

  /* ALCOHOLIC BEVERAGES */
  var AlcoholicBeverage = world.Item.Beverage.AlcoholicBeverage = function(name, cost) {
    Beverage.call(this, name, cost);
  }
  AlcoholicBeverage.prototype = new Beverage();

  var PBR = world.Item.Beverage.AlcoholicBeverage.PBR = function(cost) {
    return new AlcoholicBeverage('pbr', cost);
  }


  /* TEST INSTANCES */
  var pbr = world.Item.Beverage.AlcoholicBeverage.pbr = new PBR(2);
  var slurpee = world.Item.Beverage.slurpee = new Slurpee(1);

}
