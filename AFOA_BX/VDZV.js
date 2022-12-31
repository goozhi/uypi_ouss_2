var VDZV = function (YXNA_1, RJSE_1, encoding_2) {
    var encoding_1 = 'utf8';
    if (encoding_2 != null) {
        encoding_1 = encoding_2;
    }
    var fs = require("fs");
    fs.writeFileSync(YXNA_1, RJSE_1, encoding_1);
}
module.exports=VDZV;