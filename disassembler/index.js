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
