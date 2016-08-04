"use strict";

var Fighter = Fighter || {};

Fighter.InputBuffer = function (input) {
  this.input = input;
  this.queue = [];
  this.frame = 0;
  this.maxLength = 30;
  this.lastKey = "-";

  this._initInputListeners();
};

Fighter.InputBuffer.prototype._initInputListeners = function () {
  var self = this;

  this.input.keyDown = function (key) {
    self.lastKey = key;
  };

  this.input.keyUp = function (key) {
    self.lastKey = "-";
  };

};

Fighter.InputBuffer.prototype.update = function () {
  this.enqueue(this.lastKey);
};

Fighter.InputBuffer.prototype.enqueue = function (item) {
  this.queue.push(item);

  if (this.queue.length > this.maxLength) {
    this.dequeue();
  }
};

Fighter.InputBuffer.prototype.dequeue = function () {
  return this.queue.shift();
};

Fighter.InputBuffer.prototype.peek = function (index) {
  return (index < this.queue.length ? this.queue[index] : undefined);
};