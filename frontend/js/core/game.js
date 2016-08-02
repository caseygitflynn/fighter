"use strict";

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

var Fighter = Fighter || {};

Fighter.Game = function (canvas) {
  Fighter.WIDTH = canvas.width;
  Fighter.HEIGHT = canvas.height;

  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');

  this.input = new Fighter.Input();

  this.world = new Fighter.World();
  this.character = new Fighter.Character(Fighter.SPRITES.RYU, Fighter.WIDTH / 2, 0);

  this.loop();
};

Fighter.Game.prototype.loop = function () {
  this.world.clear(this.ctx);

  this.character.handleInput(this.input.pressedKeys);
  this.character.update();
  this.character.handleWorldCollisions(this.world.bounds);

  this.character.draw(this.ctx);

  requestAnimFrame(this.loop.bind(this));
};