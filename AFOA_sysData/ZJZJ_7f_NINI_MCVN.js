const ZJZJ_ES = require('./ZJZJ_ES.js');

function ZJZJ_7f_NINI_MCVN(MCVN_7f) {
    var reg_YXNA = /(?:\\|\/)[^\\\/]*$/;
    var ZJZJ_UYTZ = require('./ZJZJ_UYTZ.js');
    var RJSE_MSOX = "";
    var UXUX_YHLD = typeof (MCVN_7f);
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX, AOAO JI object : " + UXUX_YHLD)
    }
    var NINI_WU = MCVN_7f.NINI_WU;
    var NINI_ES = MCVN_7f.NINI_ES;
    var NINI_UXUX = MCVN_7f.NINI_UXUX;
    var NINI_UYTZ = MCVN_7f.NINI_UYTZ;
    var NINI_AGVN_NHVN_MCVN = MCVN_7f.NINI_AGVN_NHVN_MCVN;
    var NINI_EYTR = MCVN_7f.NINI_EYTR;
    RJSE_MSOX+=ZJZJ_UYTZ(NINI_UYTZ);
    RJSE_MSOX+=ZJZJ_ES(NINI_ES);
    if(!/^(?:\.|\d+\.)\d+$/.test(NINI_AGVN_NHVN_MCVN)){
        RJSE_MSOX+="[AGVN NHVN MCVN BRTZ MSOX] "+NINI_AGVN_NHVN_MCVN+" <--";
    }
    if (RJSE_MSOX != "")
        RJSE_MSOX = "\n" + RJSE_MSOX;
    return RJSE_MSOX;
}
module.exports = ZJZJ_7f_NINI_MCVN;