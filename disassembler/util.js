var defs = require("./defs");

exports.bitsFromMask = function bitsFromMask(mask, data) {
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

exports.lookupDefinition = function lookupDefinition(instruction) {
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

exports.parseOperand = function parseOperand(optype, value) {
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
      /* Multiply by two to point to a byte address */
      result *= 2;

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
      /* Multiply by two to point to a byte address */
      result *= 2;

      break;
    case "LONG_ABSOLUTE_ADDRESS":
      /* Multiply by two to point to a byte address */
      result = value * 2;
      break;
    case "REGISTER_STARTR16":
      /* Register offset from R16 */
      result = 16 + value;
      break;
    case "REGISTER_EVEN_PAIR":
      /* Register even */
      result = value * 2;
      break;
    case "REGISTER_EVEN_PAIR_STARTR24":
      /* Register even offset from R24 */
      result = 24 + value * 2;
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
