(function() {
  'use strict';
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  };

  var Asteroid = Asteroids.Asteroid = function (options) {
    options.color = Asteroid.COLOR;
    options.pos = options.pos || options.game.randomPosition();
    options.rad = Asteroid.RADIUS;
    options.vel = options.vel || Asteroids.Util.randomVec(Math.random() * 10);
    Asteroids.MovingObject.call(this, options);

  };

  Asteroid.COLOR = "#FFFFFF";
  Asteroid.RADIUS = 24;
  Asteroid.SPEED = Math.random() * 20;

  Asteroids.Util.inherits(Asteroids.Asteroid, Asteroids.MovingObject);


  Asteroid.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Asteroids.Asteroid){

      this.bump(otherObject);

    } else if (otherObject instanceof Asteroids.Ship){
      console.log(otherObject);
      otherObject.relocate();
    }

  }

}());
//
