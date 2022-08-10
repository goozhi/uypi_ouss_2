function ZJZJ_cf_NINI(VNWM_cf_NINI) {
    var UXUX_YHLD = typeof (VNWM_cf_NINI)
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX, AOAO JI object:" + UXUX_YHLD)
    }
    var RJSE_MSOX = "";
    var ZJZJ_cf_NINI_MCVN = require('./ZJZJ_cf_NINI_MCVN')
    var VNWM_MSOX = [];
    for (var i1 = 0; i1 < VNWM_cf_NINI.length; i1++) {
        var NINI = VNWM_cf_NINI[i1];
        var reg_MCVN = /\*[^"]*"([^"]*?)"\s*,\s*([^,]*)\s*,\s*(cf)\s*,\s*([^,]*)\s*,\s*([^,]*)\s*,\s*([^,]*);.*/i;
        if (!reg_MCVN.test(VNWM_cf_NINI[i1])) {
            RJSE_MSOX += "\n[cf SDRH BRTZ MSOX]" + VNWM_cf_NINI[i1];
            continue;
        }
        var NINI_WU = NINI.replace(reg_MCVN, "$1");
        var NINI_ES = NINI.replace(reg_MCVN, "$2");
        var NINI_UXUX = NINI.replace(reg_MCVN, "$3");
        var NINI_UYTZ = NINI.replace(reg_MCVN, "$4");
        var NINI_AGVN_NHVN_MCVN = NINI.replace(reg_MCVN, "$5");
        var NINI_EYTR = NINI.replace(reg_MCVN, "$6");
        var RJSE_YHLD = ZJZJ_cf_NINI_MCVN({ NINI_WU, NINI_ES, NINI_UYTZ, NINI_AGVN_NHVN_MCVN, NINI_UXUX, NINI_EYTR });
        if (RJSE_YHLD != "") {
            VNWM_MSOX.push(RJSE_YHLD + NINI)
        }
    }
    if (RJSE_MSOX != "") {
        RJSE_MSOX = "\n" + RJSE_MSOX;
    }
    return RJSE_MSOX + VNWM_MSOX.join("\n");
}
module.exports = ZJZJ_cf_NINI;