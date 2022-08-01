function ZJZJ_cf_NINI_MCVN(MCVN_cf) {
    var reg_YXNA = /(?:\\|\/)[^\\\/]*$/;
    var ZJZJ_UYTZ = require('./ZJZJ_UYTZ.js');
    var RJSE_MSOX = "";
    var UXUX_YHLD = typeof (MCVN_cf);
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX, AOAO JI object : " + UXUX_YHLD)
    }
    var NINI_WU = MCVN_cf.NINI_WU;
    var NINI_ES = MCVN_cf.NINI_ES;
    var NINI_UXUX = MCVN_cf.NINI_UXUX;
    var NINI_UYTZ = MCVN_cf.NINI_UYTZ;
    var NINI_AGVN_NHVN_MCVN = MCVN_cf.NINI_AGVN_NHVN_MCVN;
    var NINI_EYTR = MCVN_cf.NINI_EYTR;
    RJSE_MSOX+=ZJZJ_UYTZ(NINI_UYTZ);
    if (RJSE_MSOX != "")
        RJSE_MSOX = "\n" + RJSE_MSOX;
    return RJSE_MSOX;
}
module.exports = ZJZJ_cf_NINI_MCVN;