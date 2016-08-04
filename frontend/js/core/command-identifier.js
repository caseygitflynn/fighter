"use strict";

var Fighter = Fighter || {};

Fighter.CommandIdentifier = function (inputBuffer, moveList) {
  this.inputBuffer = inputBuffer;
  this.moveList = moveList;
  this.sequenceList = "";
  this.lastMove = null;
};

Fighter.CommandIdentifier.prototype.getPossibleMoves = function () {
  this.sequenceList = this._removeRepeats(this.inputBuffer.queue);

  console.log(this.sequenceList);

  var possibleMoves = [];

  for (var i = 0; i < this.moveList.length; i = i + 1) {
    var move = this.moveList[i];
    if(this.containsSequence(move.sequence)) {
      possibleMoves.push(move);
    }
  }

  return possibleMoves;
};

Fighter.CommandIdentifier.prototype.containsSequence = function (sequence) {
  return (this.sequenceList.indexOf(sequence) !== -1);
};

Fighter.CommandIdentifier.prototype._removeRepeats = function (queue) {
  var cleanedQueue = "";
  var lastKey = null;

  for (var i = 0; i < queue.length; i = i + 1) {
    var currentKey = queue[i];
    if (currentKey !== lastKey) {
      cleanedQueue += currentKey;
      lastKey = currentKey;
    }
  }

  return queue.join('');
};