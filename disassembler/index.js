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

Disassembler.prototype.parse = function parse(data) {
  return this.withData(data).all();
};

Disassembler.prototype.has = function has(n) {
  return this.data.length - this.offset >= n;
};

Disassembler.prototype.next = function next() {
  if (!this.has(2)) {
    return null;
  }

  var instruction = this.data.readUInt16LE(this.offset);

  var def = util.lookupDefinition(instruction);
  if (def === null) {
    return null;
  }

  if (!this.has(def[1])) {
    return null;
  }

  var operands = new Array(def[3]);

  var res = {
    offset: this.offset,
    raw: instruction,
    type: def[0],
    operands: operands,
  };

  for (var n=0;n<def[3];n++) {
    var operandValue = util.bitsFromMask(def[4][n], instruction);

    if (def[5][n] === "LONG_ABSOLUTE_ADDRESS") {
      operandValue = (operandValue << 16) + this.data.readUInt16LE(this.offset + 2);
    }

    operands[n] = util.parseOperand(def[5][n], operandValue);
  }

  this.offset += def[1];

  return res;
};

Disassembler.prototype.all = function all() {
  var res = [];

  for (var r = this.next(); r != null; r = this.next()) {
    res.push(r);
  }

  return res;
};
