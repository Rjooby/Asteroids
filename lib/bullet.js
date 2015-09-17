(function() {
  'use strict';
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var Bullet = Asteroids.Bullet = function (options) {
    options.rad = Bullet.RADIUS;
    options.color = Bullet.COLOR;
    options.vel = options.vel;
    options.pos = options.pos;
    options.game = options.game;

    Asteroids.MovingObject.call(this, options);

  }

  Bullet.RADIUS = 6;
  Bullet.COLOR = "#FFFFFF";

  Asteroids.Util.inherits(Asteroids.Bullet, Asteroids.MovingObject);

  
  Bullet.prototype.move = function () {
    console.log(this.vel);
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  }

  Bullet.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Asteroids.Asteroid) {
      this.game.remove(otherObject);
    }
  }





}());
