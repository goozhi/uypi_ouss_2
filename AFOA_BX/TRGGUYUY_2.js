const TRGGUYUY = require("./TRGGUYUY");

var TRGGUYUY_2 = function (RJSE_UYTZ) {
    var reg_1 = /\W+/;
    var FRIH_1 = RJSE_UYTZ.match(reg_1);
    if (FRIH_1 == null) {
        throw "TRGGUYUY_2 : YJ AC AB FRIH: 找不到符号 :" + RJSE_UYTZ;
    } else {
        FRIH_1 = FRIH_1[0];
    }
    var VNWM_1 = RJSE_UYTZ.split(reg_1);
    var VN_16_TYUB_1 = VNWM_1[0].replace('0x', '');
    var VN_16_TYUB_2 = VNWM_1[1].replace('0x', '');
    return TRGGUYUY(VN_16_TYUB_1, VN_16_TYUB_2, FRIH_1)
}
module.exports=TRGGUYUY_2