function ZJZJ_cf_NINI(VNWM_cf_NINI) {
    var UXUX_YHLD = typeof (VNWM_cf_NINI)
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX, AOAO JI object:" + UXUX_YHLD)
    }
    var RJSE_MSOX = "";
    var ZJZJ_cf_NINI_MCVN = require('./ZJZJ_cf_NINI_MCVN')
    var diwr_vnwm_rj_msox = VNWM_cf_NINI.map(RN1 => {
        var NINI = RN1;
        var reg_MCVN = /\*[^"]*"([^"]*?)"\s*,\s*([^,]*)\s*,\s*(cf)\s*,\s*([^,]*)\s*,\s*([^,]*)\s*,\s*([^,]*);.*/i;
        var reg_mcvn_2 = /\*[^"]*"([^"]*?)"\s*,\s*([^,]*)\[[^\]\[]+\]\s*,\s*(cf)\s*,\s*([^,]*)\s*,\s*([^,]*)\s*,\s*([^,]*);.*/i;
        if (!reg_MCVN.test(RN1)) {
            if (reg_mcvn_2.test(RN1)) {
                reg_MCVN = reg_mcvn_2
            } else {
                return "\n[c f SDRH BRTZ MSOX]" + RN1;
            }
        }
        var NINI_WU = NINI.replace(reg_MCVN, "$1");
        var NINI_ES = NINI.replace(reg_MCVN, "$2");
        var NINI_UXUX = NINI.replace(reg_MCVN, "$3");
        var NINI_UYTZ = NINI.replace(reg_MCVN, "$4");
        var NINI_AGVN_NHVN_MCVN = NINI.replace(reg_MCVN, "$5");
        var NINI_EYTR = NINI.replace(reg_MCVN, "$6");
        var RJSE_YHLD = ZJZJ_cf_NINI_MCVN({ NINI_WU, NINI_ES, NINI_UYTZ, NINI_AGVN_NHVN_MCVN, NINI_UXUX, NINI_EYTR });
        if (RJSE_YHLD != "") {
            return RJSE_YHLD + NINI
        }
    })
    return new Promise((resolve, reject) => {
        Promise.all(diwr_vnwm_rj_msox).then(jtyj => {
            if (RJSE_MSOX != "") {
                RJSE_MSOX = "\n" + RJSE_MSOX;
            }
            resolve(RJSE_MSOX + jtyj.join("\n"))
        })
    })
}
module.exports = ZJZJ_cf_NINI;