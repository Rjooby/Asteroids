(function() {
  'use strict';
  if (typeof Asteroids === 'undefined'){
    window.Asteroids = {};
  };

  var Util = Asteroids.Util = function () {

  }

  Util.prototype.inherits = function (ChildClass, ParentClass) {
    function Surrogate () { this.constructor = ChildClass };
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
  };

  Util.prototype.randomVec = function (length) {
    var deg = 2*Math.PI * Math.random();
    return scale([Math.sin(deg), Math.cos(deg)], length);
  };

  var scale = Util.scale = function (vec, m) {
    return [vec[0] * m, vec[1] *m];
  };


}());
