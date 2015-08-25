(function() {
  'use strict';
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  };

  var Asteroid = Asteroids.Asteroid = function (options) {
    options.color = Asteroid.COLOR;
    options.pos = options.pos || Asteroids.Game.randomPosition();
    options.radius = Asteroid.RADIUS;
    options.vel = options.vel || Asteroids.Util.randomVec(Asteroids.SPEED);

    Asteroids.MovingObject.call(this, options);

  };

  Asteroid.COLOR = #GGGGGG;
  Asteroid.RADIUS = 24;
  Asteroid.SPEED = 4;

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);


}());
