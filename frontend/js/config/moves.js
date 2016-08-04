"use strict";

var Fighter = Fighter || {};

Fighter.MOVES = Fighter.MOVES || {};

Fighter.MOVES.RYU = [
  { name : "FIREBALL",  sequence : "V-V-<-Y" },

  { name : "F_H_PUNCH", sequence : "->L", state : Fighter.IDLE },
  { name : "F_M_PUNCH", sequence : "->X", state : Fighter.IDLE },
  { name : "F_L_PUNCH", sequence : "->Y", state : Fighter.IDLE },

  { name : "F_H_KICK", sequence : "->R", state : Fighter.IDLE },
  { name : "F_M_KICK", sequence : "->A", state : Fighter.IDLE },
  { name : "F_L_KICK", sequence : "->B", state : Fighter.IDLE },

  { name : "CROUCH_H_PUNCH", sequence : "-VL", state : Fighter.CROUCHING },
  { name : "CROUCH_M_PUNCH", sequence : "-VX", state : Fighter.CROUCHING },
  { name : "CROUCH_L_PUNCH", sequence : "-VY", state : Fighter.CROUCHING },

  { name : "H_PUNCH", sequence : "-L", state : Fighter.IDLE },
  { name : "M_PUNCH", sequence : "-X", state : Fighter.IDLE },
  { name : "L_PUNCH", sequence : "-Y", state : Fighter.IDLE },

  { name : "H_KICK", sequence : "-R", state : Fighter.IDLE },
  { name : "M_KICK", sequence : "-A", state : Fighter.IDLE },
  { name : "L_KICK", sequence : "-B", state : Fighter.IDLE },

  { name : "FORWARD", sequence : ">" },
  { name : "BACKWARD", sequence : "<" },
  { name : "CROUCH", sequence : "V" },

  { name : "IDLE", sequence : "-" },
];