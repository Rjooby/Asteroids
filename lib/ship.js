(function() {
  'use strict';
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  };

  var Ship = Asteroids.Ship = function (options) {
    options.rad = Ship.RADIUS;
    options.color = Ship.COLOR;
    options.vel = [1,0];
    options.pos = options.game.randomPosition();

    Asteroids.MovingObject.call(this, options);

  }

  Ship.RADIUS = 12;
  Ship.COLOR = "#3498db";

  Asteroids.Util.inherits(Asteroids.Ship, Asteroids.MovingObject);


  Ship.prototype.relocate = function () {
    this.pos = this.game.randomPosition();
    this.vel = [0,0];
  }

  Ship.prototype.power = function (impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  }


}());
