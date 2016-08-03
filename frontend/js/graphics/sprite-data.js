"use strict";

var Fighter = Fighter || {};

Fighter.SPRITES = {
  RYU : {
    IDLE : {
      frames : [
        { x : 0,    y : 0, width : 45, height : 85, originX : 22, originY : 85, duration: 8 },
        { x : 45,   y : 0, width : 45, height : 85, originX : 22, originY : 85, duration: 8 },
        { x : 90,   y : 0, width : 45, height : 85, originX : 22, originY : 85, duration: 8 },
        { x : 135,  y : 0, width : 45, height : 85, originX : 22, originY : 85, duration: 8 },
      ],
    },
    BLOCK : {
      frames : [
        { x : 0, y : 525, width : 45, height : 85, originX : 22, originY : 85, duration: 3 },
      ],
    },
    CROUCH : {
      frames : [
        { x : 0, y : 610, width : 45, height : 75, originX : 22, originY : 75, duration: 3 },
        { x : 45, y : 610, width : 45, height : 75, originX : 24, originY : 75, duration: 3 },
      ],
    },
    WALKING : {
      frames : [
        { x : 0,    y : 85, width : 45, height : 85, originX : 22, originY : 85, duration: 5 },
        { x : 45,   y : 85, width : 45, height : 85, originX : 22, originY : 85, duration: 5 },
        { x : 90,   y : 85, width : 45, height : 85, originX : 22, originY : 85, duration: 5 },
        { x : 135,  y : 85, width : 45, height : 85, originX : 22, originY : 85, duration: 5 },
        { x : 180,  y : 85, width : 45, height : 85, originX : 22, originY : 85, duration: 5 },
      ],
    },
    L_PUNCH : {
      frames : [
        { x : 0,    y : 170, width : 45, height : 85, originX : 22, originY : 85, duration: 3 },
        { x : 45,   y : 170, width : 60, height : 85, originX : 22, originY : 85, duration: 3 },
        { x : 105,  y : 170, width : 45, height : 85, originX : 22, originY : 85, duration: 3 },
      ],
    },
    M_PUNCH : {
      frames : [
        { x : 0,    y : 260, width : 45, height : 85, originX : 22, originY : 85, duration: 3 },
        { x : 45,   y : 260, width : 55, height : 85, originX : 22, originY : 85, duration: 3 },
        { x : 100,  y : 260, width : 75, height : 85, originX : 22, originY : 85, duration: 3 },
        { x : 175,  y : 260, width : 45, height : 85, originX : 22, originY : 85, duration: 3 },
        { x : 230,  y : 260, width : 45, height : 85, originX : 22, originY : 85, duration: 3 },
      ],
    },
    H_PUNCH : {
      frames : [
        { x : 0,    y : 260, width : 45, height : 85, originX : 22, originY : 85, duration: 3 },
        { x : 45,   y : 260, width : 45, height : 85, originX : 22, originY : 85, duration: 3 },
        { x : 100,  y : 260, width : 75, height : 85, originX : 22, originY : 85, duration: 3 },
        { x : 175,  y : 260, width : 45, height : 85, originX : 22, originY : 85, duration: 3 },
        { x : 230,  y : 260, width : 45, height : 85, originX : 22, originY : 85, duration: 3 },
      ],
    },
    L_KICK : {
      frames : [
        { x : 0,    y : 345, width : 50, height : 90, originX : 28, originY : 90, duration: 4 },
        { x : 55,   y : 345, width : 70, height : 90, originX : 40, originY : 90, duration: 4 },
        { x : 130,  y : 345, width : 50, height : 90, originX : 27, originY : 90, duration: 4 },
      ],
    },
    M_KICK : {
      frames : [
        { x : 0,    y : 345, width : 50, height : 90, originX : 28, originY : 90, duration: 4 },
        { x : 55,   y : 345, width : 70, height : 90, originX : 40, originY : 90, duration: 4 },
        { x : 130,  y : 345, width : 50, height : 90, originX : 27, originY : 90, duration: 4 },
      ],
    },
    H_KICK : {
      frames : [
        { x : 0,    y : 435, width : 50, height : 90, originX : 22, originY : 90, duration: 4 },
        { x : 50,   y : 435, width : 60, height : 90, originX : 26, originY : 90, duration: 4 },
        { x : 110,  y : 435, width : 75, height : 90, originX : 25, originY : 90, duration: 4 },
        { x : 185,  y : 435, width : 65, height : 90, originX : 24, originY : 90, duration: 4 },
        { x : 250,  y : 435, width : 50, height : 90, originX : 25, originY : 90, duration: 4 },
      ],
    },
  },
};