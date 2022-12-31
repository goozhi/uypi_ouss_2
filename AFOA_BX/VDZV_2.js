var VDZV_2 = function (YXNA_1, RJSE_1, encoding_2) {
    var encoding_1 = 'utf8';
    if (encoding_2 != null) {
        encoding_1 = encoding_2;
    }
    var fs = require("fs");
    fs.writeFile(YXNA_1, RJSE_1, encoding_1, (err) => {
        if (err) {
            throw err;
        }
        console.log("文件已经保存了")
    });
}
module.exports=VDZV_2