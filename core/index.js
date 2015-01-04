var util = require("../disassembler/util");

var le = (function() {
  var buffer = new ArrayBuffer(2);
  new DataView(buffer).setInt16(0, 256, true);
  return new Int16Array(buffer)[0] === 256;
})();

var Core = module.exports = function Core(options) {
  options = options || {};

  this.memory = (typeof options.memory === "number") ? options.memory : 256;

  this.program = options.program || new DataView(new ArrayBuffer(0));

  this.m = new ArrayBuffer(0xff + this.memory);
  this.v = new DataView(this.m);
  this.reg = new Uint8Array(this.m, 0x00, 0x1f);
  this.io = new Uint8Array(this.m, 0x20, 0x5f);
  this.mem = new Uint8Array(this.m, 0x60);

  this.pc = 0;
  this.sp = this.memory - 1;
};

Core.prototype = Object.create(null, {
  sreg: {
    get: function() { return this.io[0x3f]; },
    set: function(v) { this.io[0x3f] = v; },
  },
  sp: {
    get: function() {
      return this.v.getUint16(0x5d, le);
    },
    set: function(v) {
      this.v.setUint16(0x5d, v, le);
    },
  },
});

Core.prototype.peek = function peek() {
  return util.read(this.program, this.pc*2);
};

Core.prototype.step = function step() {
  var instruction = this.peek();
  if (instruction === null) {
    throw new Error("instruction was null");
  }

  var pc = this.pc;

  switch (instruction.type) {
  case "nop":
    pc = pc + 1;
    break;
  case "sbi":
    pc = pc + 1;
    this.io[instruction.operands[0].value] &= Math.pow(2, instruction.operands[1].value);
    break;
  case "cbi":
    pc = pc + 1;
    this.io[instruction.operands[0].value] &= ~Math.pow(2, instruction.operands[1].value);
    break;
  case "rcall":
    pc = pc + instruction.operands[0].value + 1;
    this.mem[this.sp-2] = (pc & 0x00ff);
    this.mem[this.sp-1] = (pc & 0xff00) >> 8;
    this.sp -= 2;
    break;
  case "ret":
    this.sp += 2;
    pc = this.mem[this.sp-2] + (this.mem[this.sp-1] << 8);
    break;
  case "in":
    pc = pc + 1;
    this.reg[instruction.operands[0].value] = this.io[instruction.operands[1].value];
    break;
  case "out":
    pc = pc + 1;
    this.io[instruction.operands[0].value] = this.reg[instruction.operands[1].value];
    break;
  case "ldi":
    pc = pc + 1;
    this.reg[instruction.operands[0].value] = instruction.operands[1].value;
    break;
  case "eor":
    pc = pc + 1;
    this.reg[instruction.operands[0].value] = this.reg[instruction.operands[0].value] ^ this.reg[instruction.operands[1].value];
    break;
  default:
    throw new Error("unhandled instruction: " + instruction.type);
  }

  this.pc = pc;
};
