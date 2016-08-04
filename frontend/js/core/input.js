"use strict";

var Fighter = Fighter || {};

Fighter.KEYS = {
  38 : "^", // UP
  40 : "V", // DOWN
  39 : ">", // RIGHT
  37 : "<", // LEFT
  69 : "L", // HIGH PUNCH
  87 : "X", // MIDDLE PUNCH
  81 : "Y", // LOW PUNCH
  68 : "R", // HIGH KICK
  83 : "A", // MIDDLE KICK
  65 : "B", // LOW KICK
};

Fighter.Input = function () {
  this.pressedKeys = [];
  this.allowedKeys = [];
  
  window.addEventListener('keydown', this._onKeyDown.bind(this));
  window.addEventListener('keyup', this._onKeyUp.bind(this));
};

Fighter.Input.prototype._onKeyDown = function (e) {
  var keyCode = e.keyCode;

  if (this._isAssigned(keyCode)) {
    e.preventDefault();
    if (this.allowedKeys[keyCode] === false) {
      return;
    }
    if (this.pressedKeys[keyCode] === true) {
      return;
    }

    this.pressedKeys[keyCode] = true;
    this.keyDown(Fighter.KEYS[keyCode]);
  }
};

Fighter.Input.prototype._onKeyUp = function (e) {
  var keyCode = e.keyCode;

  if (this._isAssigned(keyCode)) {
    e.preventDefault();

    if (this.pressedKeys[keyCode] === false) {
      return;
    }

    this.pressedKeys[keyCode] = false;
    this.keyUp(Fighter.KEYS[keyCode]);
  }
};

Fighter.Input.prototype._isAssigned = function (keyCode) {
  return Fighter.KEYS.hasOwnProperty(keyCode);
};

Fighter.Input.prototype.keyDown = function (key) {
  console.log("Key down ", key);
};

Fighter.Input.prototype.keyUp = function (key) {
  console.log("Key up ", key);
};