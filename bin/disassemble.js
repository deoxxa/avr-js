#!/usr/bin/env node

var fs = require("fs");

var Disassembler = require("../disassembler"),
    toArrayBuffer = require("../vendor/toarraybuffer");

var d = new Disassembler({
  data: new DataView(toArrayBuffer(fs.readFileSync(process.argv[2]))),
});

for (var r = d.next(); r != null; r = d.next()) {
  console.log(Disassembler.formatInstruction(r));
}
