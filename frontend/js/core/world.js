"use strict";

var Fighter = Fighter || {};

Fighter.World = function () {
  this.bounds = {
    width : Fighter.WIDTH,
    height : Fighter.HEIGHT,
  };
};

Fighter.World.prototype.clear = function (ctx) {
  ctx.save();
  {
    ctx.fillStyle = "#888888";
    ctx.fillRect(0, 0, this.bounds.width, this.bounds.height);
  }
  ctx.restore();
};