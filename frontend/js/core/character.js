"use strict";

var Fighter = Fighter || {};

Fighter.IDLE = 0;
Fighter.FORWARD = 1;
Fighter.JUMPING = 2;
Fighter.BLOCKING = 3;
Fighter.CROUCHING = 4;

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
  this.state = Fighter.IDLE;

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

Fighter.Character.prototype.handleInput = function (input) {
  var newSprite = this.currentSprite;

  // if (input[Fighter.KEYS.BLOCK]) {
  //   this.vel.x = 0;
  //   this.state = Fighter.BLOCKING;
  //   newSprite = this.spriteData.BLOCK;
    
  // } else if (input[Fighter.KEYS.FORWARD]) {
  //   this.vel.x = 2;
  //   newSprite = this.spriteData.WALKING;
  //   this.state = Fighter.IDLE;
  // } else {
  //   this.vel.x = 0;
  //   newSprite = this.spriteData.IDLE;
  //   this.state = Fighter.IDLE;
  // }

  switch (this.state) {
    case Fighter.IDLE :
      this.vel.x = 0;
      newSprite = this.spriteData.IDLE;
      if (input[Fighter.KEYS.L_PUNCH]) {
          newSprite = this.spriteData.L_PUNCH;
      }
      if (input[Fighter.KEYS.M_PUNCH]) {
          newSprite = this.spriteData.M_PUNCH;
      }
      if (input[Fighter.KEYS.H_PUNCH]) {
          newSprite = this.spriteData.H_PUNCH;
      }
      if (input[Fighter.KEYS.L_KICK]) {
          newSprite = this.spriteData.L_KICK;
      }
      if (input[Fighter.KEYS.M_KICK]) {
          newSprite = this.spriteData.M_KICK;
      }
      if (input[Fighter.KEYS.H_KICK]) {
          newSprite = this.spriteData.H_KICK;
      }
      if (input[Fighter.KEYS.FORWARD]) {
        this.state = Fighter.FORWARD;
      }
      if (input[Fighter.KEYS.BLOCK]) {
        this.state = Fighter.BLOCKING;
      }
      if (input[Fighter.KEYS.CROUCH]) {
        this.state = Fighter.CROUCHING;
      }
      break;
    case Fighter.FORWARD :
      if (input[Fighter.KEYS.FORWARD]) {
        this.vel.x = 2;
        newSprite = this.spriteData.WALKING;
      } else {
        this.state = Fighter.IDLE;
      }
      break;
    case Fighter.BLOCKING :
      if (input[Fighter.KEYS.BLOCK]) {
        this.vel.x = 0;
        newSprite = this.spriteData.BLOCK;
      } else {
        this.state = Fighter.IDLE;
      }
      break;
    case Fighter.CROUCHING :
      if (input[Fighter.KEYS.CROUCH]) {
        this.vel.x = 0;
        newSprite = this.spriteData.CROUCH;
      } else {
        this.state = Fighter.IDLE;
      }
      break;
    default :
      break;
  }

  if (newSprite != this.currentSprite) {
    this.currentSprite = newSprite;
    this.sprite.setSpriteData(this.currentSprite);
  }
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
  this.sprite.draw(this.pos, ctx, (this.dir === -1));
  // ctx.save();
  // {
  //     ctx.strokeStyle = "#FF0000";
  //     ctx.lineWidth = 1;
  //     var canvasPos = Fighter.Utils.worldToCanvas(this.pos);
  //     ctx.translate(canvasPos.x, canvasPos.y);
  //     ctx.strokeRect(-(this.bounds.width / 2), -this.bounds.height, this.bounds.width, this.bounds.height);
  // }
  // ctx.restore();
};