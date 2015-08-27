(function() {
  'use strict';
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  };

  var Game = Asteroids.Game = function (){
    this.asteroids = [];

    this.addAsteroids();
  };

  Game.DIM_X = 1000;
  Game.DIM_Y = 600;
  Game.NUM_ASTEROIDS = 5;

  Game.prototype.addAsteroids = function () {
    for ( var i = 0; i<  Game.NUM_ASTEROIDS; i++){
      // var ast = new Asteroids.Asteroid({ game : this });
      // console.log(ast);
      this.asteroids.push(new Asteroids.Asteroid({ game : this }));
    }
  }

  Game.prototype.randomPosition = function (){

    var x = Math.random() * Game.DIM_X;
    var y = Math.random() * Game.DIM_Y;

    return [x,y];

  }

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.asteroids.forEach(function (asteroid) {
      // console.log(asteroid.draw);
      asteroid.draw(ctx);
    })
  };

  Game.prototype.allObjects = function () {
    return this.asteroids
  }

  Game.prototype.moveObjects = function () {
    this.asteroids.forEach(function (asteroid) {
      asteroid.move();
    })
  }

  Game.prototype.wrap = function (pos) {


    if (pos[0] < -12) {
        pos[0] = Game.DIM_X;
    } else if ( pos[0] > Game.DIM_X + 12) {
        pos[0] = 0;
    }

    if (pos[1] < -12) {
      pos[1] = Game.DIM_Y;
    } else if (pos[1] > Game.DIM_Y + 12){
      pos[1] = 0;
    }

    return pos;

  }

  Game.prototype.checkCollisions = function () {
    var objects = this.allObjects();

    for (var i = 0; i < objects.length; i++){
      for ( var j = 0; j < objects.length; j++ ){
        if ( i !== j && objects[i].isCollidedWith(objects[j])) {
          objects[i].collideWith(objects[j]);
        }
      }
    }
  }


  Game.prototype.step = function () {

    this.checkCollisions()
    this.moveObjects()

  }

}());
