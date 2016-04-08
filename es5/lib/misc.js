module.exports = function(world) {

  world.Misc = {};

  // OPTION
  var Option = world.Misc.Option = function(command, subject, action, objects) {
    this.command = command;
    this.subject = subject;
    this.action = action;
    this.objects = objects;
  }

  Option.prototype.do = function() {
    return this.action.apply(this.subject, this.objects);
  };

  Option.prototype.print = function() {
    console.log('\t' + this.command.toUpperCase());
  }

  // MENU ITEM
  var MenuItem = world.Misc.MenuItem = function(acquirable, cost) {
    this.acquirable = acquirable;
    this.cost = cost;
  }
  MenuItem.prototype.print = function() {
    console.log(this.acquirable.substance + ' .......... ' + this.cost);
  }
  MenuItem.printMenu = function(menu) {
    menu.forEach(function(menuItem) {
      menuItem.print();
    });
  }



}
