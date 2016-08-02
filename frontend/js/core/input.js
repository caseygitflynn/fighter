"use strict";

var Fighter = Fighter || {};

Fighter.KEYS = {
  UP    : 38,
  DOWN  : 40,
  LEFT  : 37,
  RIGHT : 39,
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
    this.keyDown(keyCode);
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
    this.keyUp(keyCode);
  }
};

Fighter.Input.prototype._isAssigned = function (keyCode) {
  for (var key in Fighter.KEYS) {
      if (Fighter.KEYS.hasOwnProperty(key)) {
        if (keyCode == Fighter.KEYS[key]) {
          return true;
        }
      }
  }

  return false;
};

Fighter.Input.prototype.keyDown = function (key) {
  console.log("Key down ", key);
};

Fighter.Input.prototype.keyUp = function (key) {
  console.log("Key up ", key);
};