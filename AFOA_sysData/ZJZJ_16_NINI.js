function ZJZJ_16_NINI(VNWM_16_NINI) {
    var RJSE_MSOX = "";
    var UXUX_YHLD = typeof (VNWM_16_NINI)
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX, AOAO JI object:" + UXUX_YHLD)
    }
    var ZJZJ_16_NINI_MCVN = require('./ZJZJ_16_NINI_MCVN')
    var VNWM_MSOX = [];
    for (var i1 = 0; i1 < VNWM_16_NINI.length; i1++) {
        var NINI = VNWM_16_NINI[i1];
        var reg_SDRH = /\*[^"]*"([^"]*?)"\s*,\s*([^,]*)\s*,\s*(16)\s*,\s*(.*?);.*/i;
        if (!reg_SDRH.test(VNWM_16_NINI[i1])) {
            RJSE_MSOX += "\n[16 SDRH BRTZ MSOX AE NRAP FDIH]" + VNWM_16_NINI[i1];
            continue;
        }
        var NINI_WU = NINI.replace(reg_SDRH, "$1");
        var NINI_ES = NINI.replace(reg_SDRH, "$2");
        var NINI_UXUX = NINI.replace(reg_SDRH, "$3");
        var NINI_PCYC_ZTHI_SLGR = NINI.replace(reg_SDRH, "$4");
        var RJSE_YHLD = ZJZJ_16_NINI_MCVN({ NINI_WU, NINI_ES, NINI_PCYC_ZTHI_SLGR,  NINI_UXUX });
        if (RJSE_YHLD != "") {
            VNWM_MSOX.push(RJSE_YHLD + NINI)
        }
    }
    if (RJSE_MSOX != "") {
        RJSE_MSOX = "\n" + RJSE_MSOX;
    }
    return RJSE_MSOX + VNWM_MSOX.join("\n");
}
module.exports = ZJZJ_16_NINI;