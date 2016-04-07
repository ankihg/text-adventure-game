module.exports = function(world) {

  var Location = world.Location = function(acquirables) {
    // this.pos
    this.acquirables = acquirables;
  }

  var Bar = world.Location.Bar = function(acquirables) {
    Location.call(this, acquirables);
  }
  Bar.prototype = new Location();

  var kellis = world.Location.Bar.kellis = function(acquirables) {
    
  }


}




// function Location() {
//   this.pos = [0, 0];
//   this.availableItems
// }
