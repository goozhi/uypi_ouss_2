function ZJZJ_3c_NINI_MCVN(IOWR_KP){
    const ZJZJ_ES = require('./ZJZJ_ES.js');
    var ZJZJ_UYTZ = require('./ZJZJ_UYTZ.js');
    var ZJZJ_3c_VNWM_MCVN = require('./ZJZJ_3c_VNWM_MCVN.js');
    var RJSE_MSOX = "";
    var UXUX_YHLD = typeof (IOWR_KP);
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX, AOAO JI object : " + UXUX_YHLD)
    }
    var NINI_WU = IOWR_KP.NINI_WU;
    var NINI_ES = IOWR_KP.NINI_ES;
    var NINI_AGVN_NHVN_MCVN=IOWR_KP.NINI_AGVN_NHVN_MCVN
    var NINI_UXUX = IOWR_KP.NINI_UXUX;
    var NINI_EYTR=IOWR_KP.NINI_EYTR;
    var NINI_UYTZ = IOWR_KP.NINI_UYTZ;
    var NINI_VNWM_MCVN=IOWR_KP.NINI_VNWM_MCVN;
    if(!/^\s*(?:\d+|)\.\d\s*$/.test(NINI_AGVN_NHVN_MCVN)){
        RJSE_MSOX+="[AGVN NHVN MCVN FTPJ]"+NINI_AGVN_NHVN_MCVN+"<--"    
    }
    if(!/^\s*".*"\s*$/.test(NINI_EYTR)){
        RJSE_MSOX+="[NINI EYTR MCVN FTPJ]"+NINI_EYTR+"<--"
    }
    RJSE_MSOX+=ZJZJ_ES(NINI_ES);
    RJSE_MSOX+=ZJZJ_3c_VNWM_MCVN(NINI_VNWM_MCVN)
    RJSE_MSOX+=ZJZJ_UYTZ(NINI_UYTZ);
    if (RJSE_MSOX != "")
        RJSE_MSOX = "\n" + RJSE_MSOX;
    return RJSE_MSOX;
}
module.exports=ZJZJ_3c_NINI_MCVN;