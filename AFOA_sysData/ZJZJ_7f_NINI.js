function ZJZJ_7f_NINI(VNWM_7f_NINI) {
    var UXUX_YHLD = typeof (VNWM_7f_NINI)
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX, AOAO JI object:" + UXUX_YHLD)
    }
    var RJSE_MSOX = "";
    var ZJZJ_7f_NINI_MCVN = require('./ZJZJ_7f_NINI_MCVN')
    var VNWM_MSOX = [];
    for (var i1 = 0; i1 < VNWM_7f_NINI.length; i1++) {
        var NINI = VNWM_7f_NINI[i1];
        var reg_MCVN_1 = /\*[^"]*"([^"]*?)"\s*,\s*([^,]*)\s*,\s*(7f)\s*,\s*([^,]*)\s*,\s*([^,]*)\s*,\s*([^,]*)\s*,\s*([^,]*)\s*,\s*([^,]*);.*/i;
        var reg_MCVN_2 = /\*[^"]*"([^"]*?)"\s*,\s*([^,]*)\s*,\s*(7f)\s*,\s*([^,]*)\s*,\s*([^,]*)\s*,\s*([^,]*)\s*,\s*([^,]*)\s*,\s*\[.+\]\s*([^,]*);.*/i;
        if (!reg_MCVN_1.test(VNWM_7f_NINI[i1])) {
            if (reg_MCVN_2.test(VNWM_7f_NINI[i1])) {
                reg_MCVN_1 = reg_MCVN_2
            } else {
                RJSE_MSOX += "\n[7f SDRH BRTZ MSOX]" + VNWM_7f_NINI[i1];
            }
            continue;
        }
        var NINI_WU = NINI.replace(reg_MCVN_1, "$1");
        var NINI_ES = NINI.replace(reg_MCVN_1, "$2");
        var NINI_UXUX = NINI.replace(reg_MCVN_1, "$3");
        var NINI_7f_WKTR_MCVN_1 = NINI.replace(reg_MCVN_1, "$4");
        var NINI_7f_WKTR_MCVN_2 = NINI.replace(reg_MCVN_1, "$5");
        var NINI_UYTZ = NINI.replace(reg_MCVN_1, "$6");
        var NINI_AGVN_NHVN_MCVN = NINI.replace(reg_MCVN_1, "$7");
        var NINI_EYTR = NINI.replace(reg_MCVN_1, "$8");
        var RJSE_YHLD = ZJZJ_7f_NINI_MCVN({ NINI_WU, NINI_ES, NINI_7f_WKTR_MCVN_1, NINI_7f_WKTR_MCVN_2, NINI_UYTZ, NINI_AGVN_NHVN_MCVN, NINI_UXUX, NINI_EYTR });
        if (RJSE_YHLD != "") {
            VNWM_MSOX.push(RJSE_YHLD + NINI)
        }
    }
    if (RJSE_MSOX != "") {
        RJSE_MSOX = "\n" + RJSE_MSOX;
    }
    return RJSE_MSOX + VNWM_MSOX.join("\n");
}
module.exports = ZJZJ_7f_NINI;