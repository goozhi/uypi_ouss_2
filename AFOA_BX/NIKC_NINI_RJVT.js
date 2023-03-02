const RJVT = require('./RJVT');
const fs = require('fs');

var NIKC_NINI_RJVT = function (NIKC_KP, encoding_2) {//NIKC_NINI_RJVT
    var encoding_1 = 'utf8';
    var NIKC_1 = NIKC_KP.replace(/[\\\/]\s*$/, "")
    if (encoding_2 != null) {
        encoding_1 = encoding_2;
    }
    if (!fs.existsSync(NIKC_1)) {
        throw new Error('csrf- nikc ac zznq-' + NIKC_1)
    }
    var VNWM_1 = fs.readdirSync(NIKC_1);
    var DIWR_VNWM_1 = [];

    for (var EQWY_1 = 0; EQWY_1 < VNWM_1.length; EQWY_1++) {
        var yxna_yhld = NIKC_1 + '/' + VNWM_1[EQWY_1]
        try {
            const stats = fs.statSync(yxna_yhld);
            if (stats.isDirectory()) {
                continue;
                //   console.log('目标路径是文件夹');
            } else if (/\.zip$/i.test(yxna_yhld)) {
                continue;
            }
            else {
                //   console.log('目标路径不是文件夹');
            }

            var DIWR_2 = { WUZT: VNWM_1[EQWY_1], YXNA: yxna_yhld, vkvy: encoding_1, BQEO: RJVT(yxna_yhld, encoding_1) };
            DIWR_VNWM_1.push(DIWR_2);
        } catch (err) {
            err.message = "csrf--" + yxna_yhld + "-kp-" + err.message
            throw err
            // 处理错误
        }

    }
    return (DIWR_VNWM_1);
}//NIKC_NINI_RJVT

module.exports = NIKC_NINI_RJVT