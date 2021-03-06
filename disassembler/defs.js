module.exports = [
  ["break", 2, 0x9598, 0, [0x0000, 0x0000], ["NONE", "NONE"]],
  ["clc", 2, 0x9488, 0, [0x0000, 0x0000], ["NONE", "NONE"]],
  ["clh", 2, 0x94d8, 0, [0x0000, 0x0000], ["NONE", "NONE"]],
  ["cli", 2, 0x94f8, 0, [0x0000, 0x0000], ["NONE", "NONE"]],
  ["cln", 2, 0x94a8, 0, [0x0000, 0x0000], ["NONE", "NONE"]],
  ["cls", 2, 0x94c8, 0, [0x0000, 0x0000], ["NONE", "NONE"]],
  ["clt", 2, 0x94e8, 0, [0x0000, 0x0000], ["NONE", "NONE"]],
  ["clv", 2, 0x94b8, 0, [0x0000, 0x0000], ["NONE", "NONE"]],
  ["clz", 2, 0x9498, 0, [0x0000, 0x0000], ["NONE", "NONE"]],
  ["eicall", 2, 0x9519, 0, [0x0000, 0x0000], ["NONE", "NONE"]],
  ["eijmp", 2, 0x9419, 0, [0x0000, 0x0000], ["NONE", "NONE"]],
  ["elpm", 2, 0x95d8, 0, [0x0000, 0x0000], ["NONE", "NONE"]],
  ["icall", 2, 0x9509, 0, [0x0000, 0x0000], ["NONE", "NONE"]],
  ["ijmp", 2, 0x9409, 0, [0x0000, 0x0000], ["NONE", "NONE"]],
  ["lpm", 2, 0x95c8, 0, [0x0000, 0x0000], ["NONE", "NONE"]],
  ["nop", 2, 0x0000, 0, [0x0000, 0x0000], ["NONE", "NONE"]],
  ["ret", 2, 0x9508, 0, [0x0000, 0x0000], ["NONE", "NONE"]],
  ["reti", 2, 0x9518, 0, [0x0000, 0x0000], ["NONE", "NONE"]],
  ["sec", 2, 0x9408, 0, [0x0000, 0x0000], ["NONE", "NONE"]],
  ["seh", 2, 0x9458, 0, [0x0000, 0x0000], ["NONE", "NONE"]],
  ["sei", 2, 0x9478, 0, [0x0000, 0x0000], ["NONE", "NONE"]],
  ["sen", 2, 0x9428, 0, [0x0000, 0x0000], ["NONE", "NONE"]],
  ["ses", 2, 0x9448, 0, [0x0000, 0x0000], ["NONE", "NONE"]],
  ["set", 2, 0x9468, 0, [0x0000, 0x0000], ["NONE", "NONE"]],
  ["sev", 2, 0x9438, 0, [0x0000, 0x0000], ["NONE", "NONE"]],
  ["sez", 2, 0x9418, 0, [0x0000, 0x0000], ["NONE", "NONE"]],
  ["sleep", 2, 0x9588, 0, [0x0000, 0x0000], ["NONE", "NONE"]],
  ["spm", 2, 0x95e8, 0, [0x0000, 0x0000], ["NONE", "NONE"]],
  ["spm", 2, 0x95f8, 1, [0x0000, 0x0000], ["ZP", "NONE"]],
  ["wdr", 2, 0x95a8, 0, [0x0000, 0x0000], ["NONE", "NONE"]],
  ["des", 2, 0x940b, 1, [0x00f0, 0x0000], ["DES_ROUND", "NONE"]],
  ["asr", 2, 0x9405, 1, [0x01f0, 0x0000], ["REGISTER", "NONE"]],
  ["bclr", 2, 0x9488, 1, [0x0070, 0x0000], ["BIT", "NONE"]],
  ["brcc", 2, 0xf400, 1, [0x03f8, 0x0000], ["BRANCH_ADDRESS", "NONE"]],
  ["brcs", 2, 0xf000, 1, [0x03f8, 0x0000], ["BRANCH_ADDRESS", "NONE"]],
  ["breq", 2, 0xf001, 1, [0x03f8, 0x0000], ["BRANCH_ADDRESS", "NONE"]],
  ["brge", 2, 0xf404, 1, [0x03f8, 0x0000], ["BRANCH_ADDRESS", "NONE"]],
  ["brhc", 2, 0xf405, 1, [0x03f8, 0x0000], ["BRANCH_ADDRESS", "NONE"]],
  ["brhs", 2, 0xf005, 1, [0x03f8, 0x0000], ["BRANCH_ADDRESS", "NONE"]],
  ["brid", 2, 0xf407, 1, [0x03f8, 0x0000], ["BRANCH_ADDRESS", "NONE"]],
  ["brie", 2, 0xf007, 1, [0x03f8, 0x0000], ["BRANCH_ADDRESS", "NONE"]],
  ["brlo", 2, 0xf000, 1, [0x03f8, 0x0000], ["BRANCH_ADDRESS", "NONE"]],
  ["brlt", 2, 0xf004, 1, [0x03f8, 0x0000], ["BRANCH_ADDRESS", "NONE"]],
  ["brmi", 2, 0xf002, 1, [0x03f8, 0x0000], ["BRANCH_ADDRESS", "NONE"]],
  ["brne", 2, 0xf401, 1, [0x03f8, 0x0000], ["BRANCH_ADDRESS", "NONE"]],
  ["brpl", 2, 0xf402, 1, [0x03f8, 0x0000], ["BRANCH_ADDRESS", "NONE"]],
  ["brsh", 2, 0xf400, 1, [0x03f8, 0x0000], ["BRANCH_ADDRESS", "NONE"]],
  ["brtc", 2, 0xf406, 1, [0x03f8, 0x0000], ["BRANCH_ADDRESS", "NONE"]],
  ["brts", 2, 0xf006, 1, [0x03f8, 0x0000], ["BRANCH_ADDRESS", "NONE"]],
  ["brvc", 2, 0xf403, 1, [0x03f8, 0x0000], ["BRANCH_ADDRESS", "NONE"]],
  ["brvs", 2, 0xf003, 1, [0x03f8, 0x0000], ["BRANCH_ADDRESS", "NONE"]],
  ["bset", 2, 0x9408, 1, [0x0070, 0x0000], ["BIT", "NONE"]],
  ["call", 4, 0x940e, 1, [0x01f1, 0x0000], ["LONG_ABSOLUTE_ADDRESS", "NONE"]],
  // ["clr", 2, 0x2400, 1, [0x01f0, 0x020f], ["REGISTER", "REGISTER_GHOST"]],
  ["com", 2, 0x9400, 1, [0x01f0, 0x0000], ["REGISTER", "NONE"]],
  ["dec", 2, 0x940a, 1, [0x01f0, 0x0000], ["REGISTER", "NONE"]],
  ["inc", 2, 0x9403, 1, [0x01f0, 0x0000], ["REGISTER", "NONE"]],
  ["jmp", 4, 0x940c, 1, [0x01f1, 0x0000], ["LONG_ABSOLUTE_ADDRESS", "NONE"]],
  ["lpm", 2, 0x9004, 2, [0x01f0, 0x0000], ["REGISTER", "Z"]],
  ["lpm", 2, 0x9005, 2, [0x01f0, 0x0000], ["REGISTER", "ZP"]],
  // ["lsl", 2, 0x0c00, 1, [0x01f0, 0x020f], ["REGISTER", "REGISTER_GHOST"]],
  ["lsr", 2, 0x9406, 1, [0x01f0, 0x0000], ["REGISTER", "NONE"]],
  ["neg", 2, 0x9401, 1, [0x01f0, 0x0000], ["REGISTER", "NONE"]],
  ["pop", 2, 0x900f, 1, [0x01f0, 0x0000], ["REGISTER", "NONE"]],
  ["xch", 2, 0x9204, 2, [0x0000, 0x01f0], ["Z", "REGISTER"]],
  ["las", 2, 0x9205, 2, [0x0000, 0x01f0], ["Z", "REGISTER"]],
  ["lac", 2, 0x9206, 2, [0x0000, 0x01f0], ["Z", "REGISTER"]],
  ["lat", 2, 0x9207, 2, [0x0000, 0x01f0], ["Z", "REGISTER"]],
  ["push", 2, 0x920f, 1, [0x01f0, 0x0000], ["REGISTER", "NONE"]],
  ["rcall", 2, 0xd000, 1, [0x0fff, 0x0000], ["RELATIVE_ADDRESS", "NONE"]],
  ["rjmp", 2, 0xc000, 1, [0x0fff, 0x0000], ["RELATIVE_ADDRESS", "NONE"]],
  // ["rol", 2, 0x1c00, 1, [0x01f0, 0x020f], ["REGISTER", "REGISTER_GHOST"]],
  ["ror", 2, 0x9407, 1, [0x01f0, 0x0000], ["REGISTER", "NONE"]],
  ["ser", 2, 0xef0f, 1, [0x00f0, 0x0000], ["REGISTER_STARTR16", "NONE"]],
  ["swap", 2, 0x9402, 1, [0x01f0, 0x0000], ["REGISTER", "NONE"]],
  // ["tst", 2, 0x2000, 1, [0x01f0, 0x020f], ["REGISTER", "REGISTER_GHOST"]],
  ["adc", 2, 0x1c00, 2, [0x01f0, 0x020f], ["REGISTER", "REGISTER"]],
  ["add", 2, 0x0c00, 2, [0x01f0, 0x020f], ["REGISTER", "REGISTER"]],
  ["adiw", 2, 0x9600, 2, [0x0030, 0x00cf], ["REGISTER_EVEN_PAIR_STARTR24", "DATA"]],
  ["and", 2, 0x2000, 2, [0x01f0, 0x020f], ["REGISTER", "REGISTER"]],
  ["andi", 2, 0x7000, 2, [0x00f0, 0x0f0f], ["REGISTER_STARTR16", "DATA"]],
  ["bld", 2, 0xf800, 2, [0x01f0, 0x0007], ["REGISTER", "BIT"]],
  ["brbc", 2, 0xf400, 2, [0x0007, 0x03f8], ["BIT", "BRANCH_ADDRESS"]],
  ["brbs", 2, 0xf000, 2, [0x0007, 0x03f8], ["BIT", "BRANCH_ADDRESS"]],
  ["bst", 2, 0xfa00, 2, [0x01f0, 0x0007], ["REGISTER", "BIT"]],
  ["cbi", 2, 0x9800, 2, [0x00f8, 0x0007], ["IO_REGISTER", "BIT"]],
  // ["cbr", 2, 0x7000, 2, [0x00f0, 0x0f0f], ["REGISTER_STARTR16", "COMPLEMENTED_DATA"]],
  ["cp", 2, 0x1400, 2, [0x01f0, 0x020f], ["REGISTER", "REGISTER"]],
  ["cpc", 2, 0x0400, 2, [0x01f0, 0x020f], ["REGISTER", "REGISTER"]],
  ["cpi", 2, 0x3000, 2, [0x00f0, 0x0f0f], ["REGISTER_STARTR16", "DATA"]],
  ["cpse", 2, 0x1000, 2, [0x01f0, 0x020f], ["REGISTER", "REGISTER"]],
  ["elpm", 2, 0x9006, 2, [0x01f0, 0x0000], ["REGISTER", "Z"]],
  ["elpm", 2, 0x9007, 2, [0x01f0, 0x0000], ["REGISTER", "ZP"]],
  ["eor", 2, 0x2400, 2, [0x01f0, 0x020f], ["REGISTER", "REGISTER"]],
  ["fmul", 2, 0x0308, 2, [0x0070, 0x0007], ["REGISTER_STARTR16", "REGISTER_STARTR16"]],
  ["fmuls", 2, 0x0380, 2, [0x0070, 0x0007], ["REGISTER_STARTR16", "REGISTER_STARTR16"]],
  ["fmulsu", 2, 0x0388, 2, [0x0070, 0x0007], ["REGISTER_STARTR16", "REGISTER_STARTR16"]],
  ["in", 2, 0xb000, 2, [0x01f0, 0x060f], ["REGISTER", "DATA"]],
  ["ld", 2, 0x900c, 2, [0x01f0, 0x0000], ["REGISTER", "X"]],
  ["ld", 2, 0x900d, 2, [0x01f0, 0x0000], ["REGISTER", "XP"]],
  ["ld", 2, 0x900e, 2, [0x01f0, 0x0000], ["REGISTER", "MX"]],
  ["ld", 2, 0x8008, 2, [0x01f0, 0x0000], ["REGISTER", "Y"]],
  ["ld", 2, 0x9009, 2, [0x01f0, 0x0000], ["REGISTER", "YP"]],
  ["ld", 2, 0x900a, 2, [0x01f0, 0x0000], ["REGISTER", "MY"]],
  ["ld", 2, 0x8000, 2, [0x01f0, 0x0000], ["REGISTER", "Z"]],
  ["ld", 2, 0x9001, 2, [0x01f0, 0x0000], ["REGISTER", "ZP"]],
  ["ld", 2, 0x9002, 2, [0x01f0, 0x0000], ["REGISTER", "MZ"]],
  ["ldd", 2, 0x8008, 2, [0x01f0, 0x2c07], ["REGISTER", "YPQ"]],
  ["ldd", 2, 0x8000, 2, [0x01f0, 0x2c07], ["REGISTER", "ZPQ"]],
  ["ldi", 2, 0xe000, 2, [0x00f0, 0x0f0f], ["REGISTER_STARTR16", "DATA"]],
  ["lds", 4, 0x9000, 2, [0x01f0, 0x0000], ["REGISTER", "LONG_ABSOLUTE_ADDRESS"]],
  ["lds", 2, 0xA000, 2, [0x00f0, 0x070f], ["REGISTER_STARTR16", "DATA"]],
  ["mov", 2, 0x2c00, 2, [0x01f0, 0x020f], ["REGISTER", "REGISTER"]],
  ["movw", 2, 0x0100, 2, [0x00f0, 0x000f], ["REGISTER_EVEN_PAIR", "REGISTER_EVEN_PAIR"]],
  ["mul", 2, 0x9c00, 2, [0x01f0, 0x020f], ["REGISTER", "REGISTER"]],
  ["muls", 2, 0x0200, 2, [0x00f0, 0x000f], ["REGISTER_STARTR16", "REGISTER_STARTR16"]],
  ["mulsu", 2, 0x0300, 2, [0x0070, 0x0007], ["REGISTER_STARTR16", "REGISTER_STARTR16"]],
  ["or", 2, 0x2800, 2, [0x01f0, 0x020f], ["REGISTER", "REGISTER"]],
  ["ori", 2, 0x6000, 2, [0x00f0, 0x0f0f], ["REGISTER_STARTR16", "DATA"]],
  ["out", 2, 0xb800, 2, [0x060f, 0x01f0], ["IO_REGISTER", "REGISTER"]],
  ["sbc", 2, 0x0800, 2, [0x01f0, 0x020f], ["REGISTER", "REGISTER"]],
  ["sbci", 2, 0x4000, 2, [0x00f0, 0x0f0f], ["REGISTER_STARTR16", "DATA"]],
  ["sbi", 2, 0x9a00, 2, [0x00f8, 0x0007], ["IO_REGISTER", "BIT"]],
  ["sbic", 2, 0x9900, 2, [0x00f8, 0x0007], ["IO_REGISTER", "BIT"]],
  ["sbis", 2, 0x9b00, 2, [0x00f8, 0x0007], ["IO_REGISTER", "BIT"]],
  ["sbiw", 2, 0x9700, 2, [0x0030, 0x00cf], ["REGISTER_EVEN_PAIR_STARTR24", "DATA"]],
  ["sbr", 2, 0x6000, 2, [0x00f0, 0x0f0f], ["REGISTER_STARTR16", "DATA"]],
  ["sbrc", 2, 0xfc00, 2, [0x01f0, 0x0007], ["REGISTER", "BIT"]],
  ["sbrs", 2, 0xfe00, 2, [0x01f0, 0x0007], ["REGISTER", "BIT"]],
  ["st", 2, 0x920c, 2, [0x0000, 0x01f0], ["X", "REGISTER"]],
  ["st", 2, 0x920d, 2, [0x0000, 0x01f0], ["XP", "REGISTER"]],
  ["st", 2, 0x920e, 2, [0x0000, 0x01f0], ["MX", "REGISTER"]],
  ["st", 2, 0x8208, 2, [0x0000, 0x01f0], ["Y", "REGISTER"]],
  ["st", 2, 0x9209, 2, [0x0000, 0x01f0], ["YP", "REGISTER"]],
  ["st", 2, 0x920a, 2, [0x0000, 0x01f0], ["MY", "REGISTER"]],
  ["st", 2, 0x8200, 2, [0x0000, 0x01f0], ["Z", "REGISTER"]],
  ["st", 2, 0x9201, 2, [0x0000, 0x01f0], ["ZP", "REGISTER"]],
  ["st", 2, 0x9202, 2, [0x0000, 0x01f0], ["MZ", "REGISTER"]],
  ["std", 2, 0x8208, 2, [0x2c07, 0x01f0], ["YPQ", "REGISTER"]],
  ["std", 2, 0x8200, 2, [0x2c07, 0x01f0], ["ZPQ", "REGISTER"]],
  ["sts", 4, 0x9200, 2, [0x0000, 0x01f0], ["LONG_ABSOLUTE_ADDRESS", "REGISTER"]],
  ["sts", 2, 0xA800, 2, [0x00f0, 0x070f], ["REGISTER_STARTR16", "DATA"]],
  ["sub", 2, 0x1800, 2, [0x01f0, 0x020f], ["REGISTER", "REGISTER"]],
  ["subi", 2, 0x5000, 2, [0x00f0, 0x0f0f], ["REGISTER_STARTR16", "DATA"]],
  [".dw", 2, 0x0000, 1, [0xffff, 0x0000], ["RAW_WORD", "NONE"]],
  [".db", 1, 0x0000, 1, [0x00ff, 0x0000], ["RAW_BYTE", "NONE"]],
];
