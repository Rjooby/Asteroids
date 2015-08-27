(function() {
  'use strict';
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  };

  var GameView = Asteroids.GameView = function (game, ctx) {
    this.ctx = ctx;
    this.game = game;
  }

  GameView.prototype.start = function() {
    var gameView = this;
    setInterval(
      function() {
        gameView.game.step();
        gameView.game.draw(gameView.ctx);
      }, 50
    );

  }


}());
