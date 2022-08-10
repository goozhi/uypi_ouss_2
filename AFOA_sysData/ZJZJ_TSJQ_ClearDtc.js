function ZJZJ_TSJQ_ClearDtc(ZJZJ_BQEO_KP) {
    var RJSE_MSOX = "";
    const ZJZJ_ACUN = require('./ZJZJ_ACUN');
    var ZJZJ_ES = require("./ZJZJ_ES");
    var RJSE_1 = ZJZJ_BQEO_KP;
    var reg_ClearDtc_LD_MCVN = /\$ClearDtc\((.*)\)(?:;|)(?:\n|)/i;
    var ClearDtc_LD_MCVN = RJSE_1.match(reg_ClearDtc_LD_MCVN);
    if (ClearDtc_LD_MCVN == null) {
        RJSE_MSOX += "\n[ClearDtc LGPH MSOX]" + ZJZJ_BQEO_KP.replace(/\n[\S\s]*/, '');
    } else {
        RJSE_1 = RJSE_1.replace(reg_ClearDtc_LD_MCVN, "");
    };
    var reg_ES = /\{.+\}(?:;|)(?:\s*\/\/line \d+|)/;
    var ES = RJSE_1.match(reg_ES);
    if (ES == null) {
        RJSE_MSOX += "[ESIH YJ AC AB]" + RJSE_1;
    } else {
        RJSE_MSOX += ZJZJ_ES(ES[0]);
        RJSE_1 = RJSE_1.replace(reg_ES, "");
    }
    if (RJSE_1 != "") {
        RJSE_1 = ZJZJ_ACUN(RJSE_1);
        if (RJSE_1 != "") {
            RJSE_MSOX += "\n<ClearDtc DK ACUN BQEO>\n" + RJSE_1 + "\n</ClearDtc DK ACUN DK BQEO>"
        }
    }
    if (RJSE_MSOX != "") {
        RJSE_MSOX = "\n" + RJSE_MSOX;
    }
    return RJSE_MSOX;

}
module.exports = ZJZJ_TSJQ_ClearDtc;