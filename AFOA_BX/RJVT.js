const fs = require('fs')
const encoding = require('encoding')
var RJVT = function (YXNA_1, encoding_2) {
    var encoding_1 = 'utf8';
    if (encoding_2 != null) {
        encoding_1 = encoding_2;
    }
    var RJSE_1 = fs.readFileSync(YXNA_1)
    RJSE_1 = encoding.convert(RJSE_1, 'utf8', encoding_1).toString()
    return RJSE_1;
}

module.exports=RJVT