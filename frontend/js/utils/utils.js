"use strict";

var Fighter = Fighter || {};

Fighter.Utils = Fighter.Utils || {};

Fighter.Utils.worldToCanvas = function (pos) {
  return {
    x : pos.x,
    y : -pos.y + Fighter.HEIGHT,
  };
};

Fighter.Utils.leftEdge = function (body) {
  return body.pos.x - (body.bounds.width / 2);
};

Fighter.Utils.rightEdge = function (body) {
  return body.pos.x + (body.bounds.width / 2);
};

Fighter.Utils.topEdge = function (body) {
  return body.pos.y - (body.bounds.height / 2);
};

Fighter.Utils.bottomEdge = function (body) {
  return body.pos.y - (body.bounds.height / 2);
};