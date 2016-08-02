"use strict";

var Fighter = Fighter || {};

Fighter.Sprite = function (spriteData) {
  this.image = Fighter.Assets.image('sprites');

  this.frameIndex = 0;
  this.tickCount = 0;

  this.setSpriteData(spriteData);
};

Fighter.Sprite.prototype.setSpriteData = function (spriteData) {
  this.width = spriteData.width;
  this.height = spriteData.height;
  this.frameIndex = 0;
  this.tickCount = 0;
  this.x = spriteData.x || 0;
  this.y = spriteData.y || 0;
  this.originX = spriteData.originX !== undefined ? spriteData.originX : Math.floor(this.width / 2);
  this.originY = spriteData.originY !== undefined ? spriteData.originY : Math.floor(this.height / 2);
  this.ticksPerFrame = spriteData.ticksPerFrame || 0,
  this.numberOfFrames = spriteData.numberOfFrames || 1;
};

Fighter.Sprite.prototype.update = function () {
  this.tickCount += 1;

  if (this.tickCount > this.ticksPerFrame) {
    this.tickCount = 0;
    if (this.frameIndex < this.numberOfFrames - 1) {  
      this.frameIndex += 1;
    } else {
      this.frameIndex = 0;
    }
  }
};

Fighter.Sprite.prototype.getFrame = function (frame) {
  return this.frameIndex * this.width + this.x;
};

Fighter.Sprite.prototype.draw = function (pos, ctx, flip) {
  flip = flip || false;

  var canvasPos = Fighter.Utils.worldToCanvas(pos);

  ctx.save();
  {
    ctx.translate(Math.floor(canvasPos.x), Math.floor(canvasPos.y));
    if (flip) {
      ctx.scale(-1, 1);
    }
    ctx.drawImage(this.image, this.getFrame(), this.y, this.width, this.height, -this.originX, -this.originY, this.width, this.height);
  }
  ctx.restore();
};