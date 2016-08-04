"use strict";

var Fighter = Fighter || {};

Fighter.IDLE = 0;
Fighter.FORWARDS = 1;
Fighter.JUMPING = 2;
Fighter.BACKWARDS = 3;
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

Fighter.Character.prototype.handleInput = function (move) {
  var newSprite = this.currentSprite;

  if (!move) {
    this.state = Fighter.IDLE;
    this.vel.x = 0;
    newSprite = this.spriteData.IDLE;
  } else {
    switch (this.state) {
      case Fighter.IDLE :
        this.vel.x = 0;
        newSprite = this.spriteData.IDLE;

        if (this.spriteData[move.name]) {
          newSprite = this.spriteData[move.name];
        }
        if (move.name === "FORWARD") {
          this.state = Fighter.FORWARDS;
        }
        if (move.name === "BACKWARD") {
          this.state = Fighter.BACKWARDS;
        }
        if (move.name === "CROUCH") {
          this.state = Fighter.CROUCHING;
        }
        break;
      case Fighter.FORWARDS :
        if (move.name === "FORWARD") {
          this.vel.x = 1;
          newSprite = this.spriteData.WALKING;
        } else if (move.name === "IDLE") {
          this.state = Fighter.IDLE;
        }
        break;
      case Fighter.BACKWARDS :
        if (move.name === "BACKWARD") {
          this.vel.x = -1;
          newSprite = this.spriteData.WALKING;
        } else if (move.name === "IDLE") {
          this.state = Fighter.IDLE;
        }
        break;
      case Fighter.CROUCHING :
        if (move.name === "CROUCH") {
          this.vel.x = 0;
          newSprite = this.spriteData.CROUCH;
        } else if (move.name === "IDLE") {
          this.state = Fighter.IDLE;
        } else {
          if (this.spriteData[move.name]) {
            newSprite = this.spriteData[move.name];
          }
        }
        break;
      default :
        break;
    }
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