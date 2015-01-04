var defs = require("./defs");

var le = (function() {
  var buffer = new ArrayBuffer(2);
  new DataView(buffer).setInt16(0, 256, true);
  return new Int16Array(buffer)[0] === 256;
})();

var bitsFromMask = exports.bitsFromMask = function bitsFromMask(mask, data) {
  var result = 0;

  /* Sweep through mask from bits 0 to 15 */
  for (var i = 0, j = 0; i < 16; i++) {
    /* If mask bit is set */
    if (mask & (1 << i)) {
      /* If data bit is set */
      if (data & (1 << i)) {
        result |= (1 << j);
      }

      j++;
    }
  }

  return result;
};

var lookupDefinition = exports.lookupDefinition = function lookupDefinition(instruction) {
  var def = null;

  for (var i=0;i<defs.length;i++) {
    var ibits = instruction;

    for (var j=0;j<defs[i][3];j++) {
      ibits &= ~(defs[i][4][j]);
    }

    if (ibits === defs[i][2]) {
      def = defs[i];
      break;
    }
  }

  return def;
};

var parseOperand = exports.parseOperand = function parseOperand(optype, value) {
  var result = 0;

  switch (optype) {
    case "BRANCH_ADDRESS":
      /* Relative branch address is 7 bits, two's complement form */

      /* If the sign bit is set */
      if (value & (1 << 6)) {
        /* Manually sign-extend to the 32-bit container */
        result = (~value + 1) & 0x7f;
        result = -result;
      } else {
        result = value & 0x7f;
      }

      break;
    case "RELATIVE_ADDRESS":
      /* Relative address is 12 bits, two's complement form */

      /* If the sign bit is set */
      if (value & (1 << 11)) {
        /* Manually sign-extend to the 32-bit container */
        result = (~value + 1) & 0xfff;
        result = -result;
      } else {
        result = value & 0xfff;
      }

      break;
    default:
      /* Copy the operand with no additional processing */
      result = value;
      break;
  }

  return {
    type: optype,
    value: result,
  };
};

var read = exports.read = function read(data, pos) {
  if (data.byteLength - pos < 2) {
    return null;
  }

  var instruction = data.getUint16(pos, le);

  var def = lookupDefinition(instruction);
  if (def === null) {
    return null;
  }

  if (data.byteLength - pos < def[1]) {
    return null;
  }

  var operands = new Array(def[3]);

  for (var i=0;i<def[3];i++) {
    var value = bitsFromMask(def[4][i], instruction);

    if (def[5][i] === "LONG_ABSOLUTE_ADDRESS") {
      value = (value << 16) + data.getUint16(pos + 2, le);
    }

    operands[i] = parseOperand(def[5][i], value);
  }

  return {
    pos: pos,
    len: def[1],
    buf: data.buffer.slice(pos, pos+def[1]),
    type: def[0],
    operands: operands,
  };
};
