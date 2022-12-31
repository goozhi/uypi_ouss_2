var RJVT = function (YXNA_1, encoding_2) {
    var encoding_1 = 'utf8';
    if (encoding_2 != null) {
        encoding_1 = encoding_2;
    }
    var fs = require("fs");
    var RJSE_1 = fs.readFileSync(YXNA_1, encoding_1)
    return RJSE_1;
}
module.exports=RJVT