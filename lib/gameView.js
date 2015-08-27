(function() {
  'use strict';
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  };

  var GameView = Asteroids.GameView = function (game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.ship = this.game.addShip();
  }



  GameView.prototype.start = function() {
    var gameView = this;
    setInterval(
      function() {
        gameView.game.step();
        gameView.game.draw(gameView.ctx);
      }, 50
    );

    this.bindKeyHandlers();

  }

  GameView.prototype.bindKeyHandlers = function () {
    var ship = this.ship;

    key('up', function () {ship.power([0,-0.5]); });
    key('down', function () {ship.power([0,0.5]); });
    key('right', function () {ship.power([0.5, 0]); });
    key('left', function () {ship.power([-0.5, 0]); });

    key("space", function () {});
  }


}());
