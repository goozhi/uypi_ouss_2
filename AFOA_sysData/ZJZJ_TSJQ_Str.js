
function ZJZJ_TSJQ_Str(ZJZJ_BQEO) {
    ZJZJ_BQEO = ZJZJ_BQEO.replace(/\r/g, "").replace(/\/\/.*(?=\/\/line \d+)/g, "");
    var ZJZJ_cf_NINI = require('./ZJZJ_cf_NINI')
    var ZJZJ_7f_NINI = require('./ZJZJ_7f_NINI')
    var ZJZJ_3f_NINI = require('./ZJZJ_3f_NINI')
    var ZJZJ_3c_NINI = require('./ZJZJ_3c_NINI')
    var RJSE_MSOX = ""
    var RJSE_1 = ZJZJ_BQEO;
    var reg_cf_NINI = /.*,\s*cf\s*,.*/ig;
    var reg_7f_NINI = /.*,\s*7f\s*,.*/ig;
    var reg_3f_NINI = /.*,\s*3f\s*,.*/ig;
    var reg_3c_NINI = /.*,\s*3c\s*,.*/ig;
    var RJSE_cf_NINI = RJSE_1.match(reg_cf_NINI);
    var RJSE_7f_NINI = RJSE_1.match(reg_7f_NINI);
    var RJSE_3f_NINI = RJSE_1.match(reg_3f_NINI);
    var RJSE_3c_NINI = RJSE_1.match(reg_3c_NINI);
    if (RJSE_cf_NINI == null) {
    } else {
        RJSE_MSOX += ZJZJ_cf_NINI(RJSE_cf_NINI);
        RJSE_1 = RJSE_1.replace(reg_cf_NINI, "");
    }
    if (RJSE_7f_NINI == null) {
    } else {
        RJSE_MSOX += ZJZJ_7f_NINI(RJSE_7f_NINI);
        RJSE_1 = RJSE_1.replace(reg_7f_NINI, "");
    }
    if (RJSE_3f_NINI != null) {
        RJSE_MSOX += ZJZJ_3f_NINI(RJSE_3f_NINI);
        RJSE_1 = RJSE_1.replace(reg_3f_NINI, "")
    }
    if (RJSE_3c_NINI != null) {
        RJSE_MSOX += ZJZJ_3c_NINI(RJSE_3c_NINI);
        RJSE_1 = RJSE_1.replace(reg_3c_NINI, "")
    }
    var reg_Str_MCVN = /\$Str\((.*)\)(?:;|)/i;
    var reg_JTCO_EB = /\*\*\*/;
    var Str_MCVN = RJSE_1.match(reg_Str_MCVN);
    if (Str_MCVN == null) {
        RJSE_MSOX += "\n[Str LGPH MSOX]" + ZJZJ_BQEO.replace(/\n[\S\s]*/, '');
        RJSE_1 = RJSE_1.replace(/.*Str.*/i, "");
    } else {
        RJSE_1 = RJSE_1.replace(reg_Str_MCVN, "");
    };
    var JTCO_EB = RJSE_1.match(reg_JTCO_EB);
    if (JTCO_EB == null) {
        RJSE_MSOX += "\n[NRAP JTCO EB]"
    } else {
        RJSE_1 = RJSE_1.replace(reg_JTCO_EB, "")
    }
    var ZJZJ_LIQH_ZV_reg_VNWM = require('./ZJZJ_LIQH_ZV_reg_VNWM')
    var reg_BX = require('./reg_BX');
    var reg_BX_VXUX = new reg_BX();
    var VNWM_YHLD = reg_BX_VXUX.hang_VNWM_Str;
    var reg_NINI = /(?:^|\n)\*.{0,9999}/g;
    var NINI_VNWM = RJSE_1.match(reg_NINI);
    RJSE_1 = RJSE_1.replace(reg_NINI, '');
    if (NINI_VNWM != null) {
        RJSE_MSOX += ZJZJ_LIQH_ZV_reg_VNWM(NINI_VNWM.join(""), VNWM_YHLD);
    }
    if (/\$(?!\$)|(?:^|\n)\*|\{.+\}/.test(RJSE_1)) {
        RJSE_MSOX += "\n<ZJZJ Str TSJQ ZD VODY DK ACUN BQEO>" + ZJZJ_BQEO.match(/\/\/line \d+/) + " - " + ZJZJ_BQEO.match(/\/\/line \d+$/) + "\n" + RJSE_1 + "\n</ZJZJ Str TSJQ ZD VODY DK ACUN BQEO>";
    }
    return RJSE_MSOX;
}
module.exports = ZJZJ_TSJQ_Str;