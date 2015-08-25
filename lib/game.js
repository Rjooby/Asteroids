(function() {
  'use strict';
  if (typeof Asteroids = "undefined") {
    window.Asteroids = {};
  };

  var Game = Asteroids.game = function (options){
    this.asteroids = [];
    this.addAsteroids;
  };

  Game.DIM_X = 1000;
  Game.DIM_Y = 600;
  Game.NUM_ASTEROIDS = 15;

  Game.prototype.addAsteroids = function () {
    for ( var i = 0; i<Game.NUM_ASTEROIDS; i++){
      var ast = new Asteroids.Asteroid();
      this.asteroids.push(ast);
    }
  }

  Game.prototype.randomPosition = function (){

    var x = Math.random() * Game.DIM_X;
    var y = Math.random() * Game.DIM_Y;

    return [x,y];

  }

  Game.protoype.draw = function (ctx) {
    ctx.clearRect(0,0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = #FFFFFF;
    ctx.fillRect(0,0, Game.DIM_X, Game.DIM_Y);

    this.asteroids.forEach(function (asteroid) {
      asteroid.draw();
    })
  };

  Game.prototype.moveObjects = function () {
    this.asteroids.forEach(function (asteroid) {
      asteroids.move();
    })
  }
}());
