#!/usr/bin/env node

var fs = require("fs");

var Core = require("../core"),
    Disassembler = require("../disassembler"),
    toArrayBuffer = require("../vendor/toarraybuffer");

var c = new Core({
  program: new DataView(toArrayBuffer(fs.readFileSync(process.argv[2]))),
});

setInterval(function() {
  console.log("before pc=%d", c.pc);
  console.log(Disassembler.formatInstruction(c.peek()));
  c.step();
  console.log("after pc=%d", c.pc);
  console.log("");
}, 100);
