"use strict";

var Fighter = Fighter || {};

Fighter.Character = function (spriteData, x, y) {
  this.bounds = {
    width : 45,
    height: 85,
  };
  this.pos = {
    x : x,
    y : y,
  };
  this.vel = {
    x : 0,
    y : 0,
  };
  this.acc = {
    x : 0,
    y : -0.8,
  };
  this.dir = 1;

  this.spriteData = spriteData;
  this.currentSprite = this.spriteData.IDLE;
  this.sprite = new Fighter.Sprite(this.currentSprite);
};

Fighter.Character.prototype.update = function () {
  this.pos.x += this.vel.x;
  this.pos.y += this.vel.y;
  this.vel.x += this.acc.x;
  this.vel.y += this.acc.y;

  this.sprite.update();
};

Fighter.Character.prototype._setDirection = function () {
  if (this.vel.x < 0 && this.dir !== -1) {
    this.dir = -1;
    return;
  }
  if (this.vel.x > 0 && this.dir !== 1) {
    this.dir = 1;
    return;
  }
};

Fighter.Character.prototype.handleInput = function (input) {
  var newSprite = this.currentSprite;

  if (input[Fighter.KEYS.LEFT]) {
    this.vel.x = -2;
    newSprite = this.spriteData.WALKING;
    
  } else if (input[Fighter.KEYS.RIGHT]) {
    this.vel.x = 2;
    newSprite = this.spriteData.WALKING;
  } else {
    this.vel.x = 0;
    newSprite = this.spriteData.IDLE;
  }

  if (newSprite != this.currentSprite) {
    this.currentSprite = newSprite;
    this.sprite.setSpriteData(this.currentSprite);
  }

  this._setDirection();
};

Fighter.Character.prototype.handleWorldCollisions = function (bounds) {
  if (Fighter.Utils.leftEdge(this) <= 0) {
    this.pos.x = (this.bounds.width / 2);
  }
  if (Fighter.Utils.rightEdge(this) >= bounds.width) {
    this.pos.x = bounds.width - (this.bounds.width / 2);
  }
  if (this.pos.y <= 0) {
    this.pos.y = 0;
  }
};

Fighter.Character.prototype.draw = function (ctx) {
  ctx.save();
  {
      this.sprite.draw(this.pos, ctx, (this.dir === -1));
      ctx.strokeStyle = "#FF0000";
      ctx.lineWidth = 1;
      var canvasPos = Fighter.Utils.worldToCanvas(this.pos);
      ctx.translate(canvasPos.x, canvasPos.y);
      ctx.strokeRect(-(this.bounds.width / 2), -this.bounds.height, this.bounds.width, this.bounds.height);
  }
  ctx.restore();
};