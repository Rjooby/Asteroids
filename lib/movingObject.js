(function() {
  'use strict';

  if (typeof Asteroids === 'undefined') {
    window.Asteroids = {};
  };

  var MovingObject = Asteroids.MovingObject = function (options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.rad = options.rad;
    this.game = options.game;
    this.color = options.color;
    this.density = 1.0;

  }

  MovingObject.prototype.draw = function(ctx) {

    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.rad, 0, 2 * Math.PI, true);
    ctx.fill();

  };

  MovingObject.prototype.move = function () {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];

    this.game.wrap(this.pos);

  }

  MovingObject.prototype.collideWith = function (otherObject) {

  }

  MovingObject.prototype.isCollidedWith = function (otherObject){

    var xDist = Math.abs(this.pos[0] - otherObject.pos[0]);
    var yDist = Math.abs(this.pos[1] - otherObject.pos[1]);
    var dist = Math.sqrt((xDist * xDist ) + (yDist * yDist));

    var radSum = this.rad + otherObject.rad;

    return (dist < radSum) ? true : false;

  }

  MovingObject.prototype.mass = function () {
    return this.rad * this.rad * Math.PI * this.density;
  }

  MovingObject.prototype.bump = function (otherObject) {

    var thisMass = this.mass();
    var othrMass = otherObject.mass();
    var newVelX1 = (this.vel[0] * (thisMass - othrMass) + (2 * othrMass * otherObject.vel[0])) / (thisMass + othrMass);
    var newVelY1 = (this.vel[1] * (thisMass - othrMass) + (2 * othrMass * otherObject.vel[1])) / (thisMass + othrMass);
    var newVelX2 = (otherObject.vel[0] * (othrMass - thisMass) + (2 * thisMass * this.vel[0])) / (thisMass + othrMass);
    var newVelY2 = (otherObject.vel[1] * (othrMass - thisMass) + (2 * thisMass * this.vel[1])) / (thisMass + othrMass);

    this.vel = [newVelX1, newVelY1];
    otherObject.vel = [newVelX2, newVelY2];

    this.move();
    otherObject.move();

  }



}());
