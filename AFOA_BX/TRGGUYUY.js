const B_LD_H = require("./B_LD_H");
const H_LD_B = require("./H_LD_B");

var TRGGUYUY = function (VN_16_TYUB_1, VN_16_TYUB_2, FRIH_1) {
    if (FRIH_1 == null) {
        throw "TRGGUYUY : MCVN NRAP 参数缺少"
    }
    if (!/^(?:\&|\||>>|<<|\^)$/.test(FRIH_1)) {
        throw "TRGGUYUY : FRIH AC GRPJ符号不合法 : " + FRIH_1
    }
    if (/^(?:>>|<<)$/.test(FRIH_1)) {
        var KZBZGGTRVN_1 = Number(VN_16_TYUB_2)
        var VN_1 = H_LD_B(VN_16_TYUB_1);
        if (FRIH_1 == ">>") {
            VN_1 = VN_1.slice(0, VN_1.length - KZBZGGTRVN_1);
        } else {
            for (i = 0; i < KZBZGGTRVN_1; i++) {
                VN_1 += "0";
            }

        }
        return B_LD_H(VN_1);
    }
    var ZTHI_VNWM_1 = [];
    var ZYZN_YJ_1 = 0;
    if (VN_16_TYUB_1.length % 2 != 0) {
        ZYZN_YJ_1 = 1;
        ZTHI_VNWM_1.push(VN_16_TYUB_1[0])
    }
    for (var i = ZYZN_YJ_1; i < VN_16_TYUB_1.length; i += 2) {
        ZTHI_VNWM_1.push(VN_16_TYUB_1.slice(i, i + 2));
    }


    var ZTHI_VNWM_2 = [];
    var ZYZN_YJ_2 = 0;
    if (VN_16_TYUB_2.length % 2 != 0) {
        ZYZN_YJ_2 = 1;
        ZTHI_VNWM_2.push(VN_16_TYUB_2[0])
    }
    for (var i = ZYZN_YJ_2; i < VN_16_TYUB_2.length; i += 2) {
        ZTHI_VNWM_2.push(VN_16_TYUB_2.slice(i, i + 2));
    }
    if (ZTHI_VNWM_2.length > ZTHI_VNWM_1.length) {
        for (; ZTHI_VNWM_2.length - ZTHI_VNWM_1.length > 0;)
            ZTHI_VNWM_1.unshift('00');
    } else {
        for (; ZTHI_VNWM_1.length - ZTHI_VNWM_2.length > 0;)
            ZTHI_VNWM_2.unshift('00');
    }
    var ZTHI_10_VNWM_1 = [];
    for (EQWY_1 = 0; EQWY_1 < ZTHI_VNWM_1.length; EQWY_1++) {
        var VN_16_TYUB_1_1 = "0x" + ZTHI_VNWM_1[EQWY_1];
        var VN_16_TYUB_1_2 = "0x" + ZTHI_VNWM_2[EQWY_1];
        var VN_3 = eval(VN_16_TYUB_1_1 + FRIH_1 + VN_16_TYUB_1_2)
        ZTHI_10_VNWM_1.push(VN_3);
    }
    var ZTHI_VNWM_3 = ZTHI_10_VNWM_1.map((RNSF_1) => {
        var RJSE_1 = RNSF_1.toString(16);
        if (RJSE_1.length != 2)
            RJSE_1 = "0" + RJSE_1;
        return RJSE_1;
    })


    return ZTHI_VNWM_3.join("");
}
module.exports=TRGGUYUY