(function() {
  'use strict';
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  };

  var Ship = Asteroids.Ship = function (options) {
    options.rad = Ship.RADIUS;
    options.color = Ship.COLOR;
    options.vel = [0,0];
    options.pos = options.game.randomPosition();
    options.game = options.game

    Asteroids.MovingObject.call(this, options);

  }

  Ship.RADIUS = 12;
  Ship.COLOR = "#3498db";

  Asteroids.Util.inherits(Asteroids.Ship, Asteroids.MovingObject);


  Ship.prototype.move = function () {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.game.wrap(this.pos);
  }

  Ship.prototype.relocate = function () {
    this.pos = this.game.randomPosition();
    this.vel = [0,0];
  }

  Ship.prototype.power = function (impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  }

  Ship.prototype.fireBullet = function () {
    this.game.addBullet({pos: this.pos.slice(0), vel : [this.vel[0], this.vel[1]]});
  }


}());
