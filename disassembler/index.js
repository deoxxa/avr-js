var util = require("./util");

var Disassembler = module.exports = function Disassembler(options) {
  options = options || {};

  this.data = options.data || null;
  this.offset = options.offset || 0;
};

Disassembler.prototype.withData = function withData(data) {
  this.data = data;
  this.offset = 0;

  return this;
};

Disassembler.prototype.next = function next() {
  var res = util.read(this.data, this.offset);

  if (res === null) {
    return res;
  }

  for (var i=0;i<res.operands.length;i++) {
    res.operands[i] = disassembleOperand(res.operands[i].type, res.operands[i].value);
  }

  this.offset += res.len;

  return res;
};

Disassembler.prototype.all = function all() {
  var res = [];

  for (var r = this.next(); r != null; r = this.next()) {
    res.push(r);
  }

  return res;
};

Disassembler.prototype.parse = function parse(data) {
  return this.withData(data).all();
};

var disassembleOperand = function disassembleOperand(optype, value) {
  var result = 0;

  switch (optype) {
    case "BRANCH_ADDRESS":
    case "RELATIVE_ADDRESS":
    case "LONG_ABSOLUTE_ADDRESS":
    case "REGISTER_EVEN_PAIR":
      result = value * 2;
      break;
    case "REGISTER_STARTR16":
      /* Register offset from R16 */
      result = 16 + value;
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

var toHex = function toHex(b) {
  var s = "";

  for (var i=b.byteLength-1;i>=0;i--) {
    if (b[i] < 0x10) {
      s += "0";
    }

    s += b[i].toString(16) + " ";
  }

  return s.trim();
};

var padl = function padl(s, c, l) {
  while (s.length < l) {
    s = c + s;
  }

  return s;
};

var padr = function padr(s, c, l) {
  while (s.length < l) {
    s = s + c;
  }

  return s;
};

var padle = function padle(s, c) {
  return padl(s, c, Math.ceil(s.length/2)*2);
};

var formatOperand = function formatOperand(operand) {
  switch (operand.type) {
    case "REGISTER":
    case "REGISTER_STARTR16":
      return "R" + padle(operand.value.toString(), "0");
    case "IO_REGISTER":
      return "$" + padle(operand.value.toString(), "0");
    case "BRANCH_ADDRESS":
    case "RELATIVE_ADDRESS":
      return "." + ((operand.value === 0) ? "" : (operand.value > 0) ? "+" : "") + operand.value;
    case "BIT":
      return operand.value;
    case "DATA":
      return "0x" + padle(operand.value.toString(16), "0");
    default:
      return JSON.stringify(operand);
      return "0x" + operand.value.toString(16);
  }
};

var formatInstruction = module.exports.formatInstruction = function formatInstruction(instruction) {
  return [
    padl(instruction.pos.toString(16), " ", 4),
    padr(toHex(instruction.buf), " ", 12),
    instruction.type,
    instruction.operands.map(formatOperand).join(", "),
  ].join("\t");
};
