"use strict";

var Fighter = Fighter || {};

Fighter.Sprite = function (spriteData) {
  this.image = Fighter.Assets.image('sprites');
  this.setSpriteData(spriteData);
};

Fighter.Sprite.prototype.setSpriteData = function (spriteData) {
  this.width = spriteData.width;
  this.height = spriteData.height;
  this.frameIndex = 0;
  this.tickCount = 0;
  this.loopable = spriteData.loopable || false;
  this.frames = spriteData.frames;
  this.numberOfFrames = this.frames.length;
  this.done = this.loopable || true;
};

Fighter.Sprite.prototype.update = function () {
  this.tickCount += 1;

  if (this.tickCount > this.frames[this.frameIndex].duration) {
    this.tickCount = 0;
    if (this.frameIndex < this.numberOfFrames - 1) {  
      this.frameIndex += 1;
    } else {
      if (this.loopable) {
        this.frameIndex = 0;
      } else {
        this.done = true;
      }
    }
  }
};

Fighter.Sprite.prototype.getFrame = function (frame) {
  return this.frameIndex * this.width + this.x;
};

Fighter.Sprite.prototype.draw = function (pos, ctx, flip) {
  flip = flip || false;

  var canvasPos = Fighter.Utils.worldToCanvas(pos);
  var frame = this.frames[this.frameIndex];

  ctx.save();
  {
    ctx.translate(Math.floor(canvasPos.x), Math.floor(canvasPos.y));
    if (flip) {
      ctx.scale(-1, 1);
    }
    ctx.drawImage(this.image, frame.x, frame.y, frame.width, frame.height, -frame.originX, -frame.originY, frame.width, frame.height);
  }
  ctx.restore();
};