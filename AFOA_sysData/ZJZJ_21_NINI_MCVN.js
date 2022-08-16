const ZJZJ_ES = require('./ZJZJ_ES.js');

function ZJZJ_21_NINI_MCVN(MCVN_21) {
    var ZJZJ_UYTZ = require('./ZJZJ_UYTZ.js');
    var RJSE_MSOX = "";
    var UXUX_YHLD = typeof (MCVN_21);
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX, AOAO JI object : " + UXUX_YHLD)
    }
    var NINI_WU = MCVN_21.NINI_WU;
    var NINI_ES = MCVN_21.NINI_ES;
    var NINI_UXUX = MCVN_21.NINI_UXUX;
    var NINI_UYTZ = MCVN_21.NINI_UYTZ;
    var NINI_KXUX_YJ = MCVN_21.NINI_KXUX_YJ;
    var NINI_CXMI_YJ=MCVN_21.NINI_CXMI_YJ;
    RJSE_MSOX+=ZJZJ_UYTZ(NINI_UYTZ);
    RJSE_MSOX+=ZJZJ_ES(NINI_ES);
    var reg_KXUX_YJ=/^(?:0+|)[8421](?:0+|)$/;
    if(!reg_KXUX_YJ.test(NINI_KXUX_YJ)){
        RJSE_MSOX+="[21 KXUX YJ BRTZ MSOX AE AC GRBU] "+NINI_KXUX_YJ+" <=="
    }
    var reg_CXMI = /^[^,\n]+\|[^,\n]+$/;
    if(!reg_CXMI.test(NINI_CXMI_YJ)){
        RJSE_MSOX+="[21 CXMI MCVN BRTZ MSOX] "+NINI_CXMI_YJ+" <=="
    }
    if (RJSE_MSOX != "")
        RJSE_MSOX = "\n" + RJSE_MSOX;
    return RJSE_MSOX;
}
module.exports = ZJZJ_21_NINI_MCVN;