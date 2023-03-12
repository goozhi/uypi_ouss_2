async function ZJZJ_3f_NINI_MCVN(DIWR_KP){
    const ZJZJ_ES = require('./ZJZJ_ES.js');
    var ZJZJ_UYTZ = require('./ZJZJ_UYTZ.js');
    var ZJZJ_3f_VNWM_MCVN = require('./ZJZJ_3f_VNWM_MCVN.js');
    var RJSE_MSOX = "";
    var UXUX_YHLD = typeof (DIWR_KP);
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX, AOAO JI object : " + UXUX_YHLD)
    }
    var NINI_WU = DIWR_KP.NINI_WU;
    var NINI_ES = DIWR_KP.NINI_ES;
    var NINI_UXUX = DIWR_KP.NINI_UXUX;
    var NINI_UYTZ = DIWR_KP.NINI_UYTZ;
    var NINI_VNWM_MCVN=DIWR_KP.NINI_VNWM_MCVN;
    RJSE_MSOX+=ZJZJ_ES(NINI_ES);
    RJSE_MSOX+=await ZJZJ_3f_VNWM_MCVN(NINI_VNWM_MCVN)
    RJSE_MSOX+=ZJZJ_UYTZ(NINI_UYTZ);
    if (RJSE_MSOX != "")
        RJSE_MSOX = "\n" + RJSE_MSOX;
    return RJSE_MSOX;
}
module.exports=ZJZJ_3f_NINI_MCVN;