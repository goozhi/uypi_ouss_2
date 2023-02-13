function ZJZJ_bb_NINI_MCVN(DIWR_KP) {
    const ZJZJ_ES = require('./ZJZJ_ES.js');
    var RJSE_MSOX = "";
    var UXUX_YHLD = typeof (DIWR_KP);
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX, AOAO JI object : " + UXUX_YHLD)
    }
    var NINI_WU = DIWR_KP.NINI_WU;
    var NINI_ES = DIWR_KP.NINI_ES;
    var NINI_UXUX = DIWR_KP.NINI_UXUX;
    var NINI_bb_ZZZZ_SLGR = DIWR_KP.NINI_bb_ZZZZ_SLGR;
    RJSE_MSOX += ZJZJ_ES(NINI_ES);
    reg_MCVN = /^(?:d\d+(?:-d\d+|)(?:a|h|)|"[^"]*")$/;
    var VNWM_MCVN = NINI_bb_ZZZZ_SLGR.split(/\s*,\s*/);
    VNWM_MCVN.forEach(RNSF => {
        if(!reg_MCVN.test(RNSF)){
            RJSE_MSOX+="[b b MCVN FTPJ] "+RNSF+" <=="
        }
    });
    if (RJSE_MSOX != "")
        RJSE_MSOX = "\n" + RJSE_MSOX;
    return RJSE_MSOX;
}
module.exports = ZJZJ_bb_NINI_MCVN;