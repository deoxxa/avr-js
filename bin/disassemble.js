#!/usr/bin/env node

var fs = require("fs");

var Disassembler = require("../disassembler");

var d = new Disassembler({
  data: fs.readFileSync(process.argv[2]),
});

for (var r = d.next(); r != null; r = d.next()) {
  console.log("%s: [%s] %s %j", r.pos.toString(16), r.buf.toString("hex"), r.type, r.operands);
}
