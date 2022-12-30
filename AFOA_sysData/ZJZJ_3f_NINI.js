function ZJZJ_3f_NINI(VNWM_3f_NINI) {
    var UXUX_YHLD = typeof (VNWM_3f_NINI)
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX, AOAO JI object:" + UXUX_YHLD)
    }
    var RJSE_MSOX = "";
    var ZJZJ_3f_NINI_MCVN = require('./ZJZJ_3f_NINI_MCVN')
    var diwr_vnwm_rj_msox=VNWM_3f_NINI.map(rn1=> {
        var NINI = rn1;
        var reg_MCVN = /\*[^"]*"([^"]*?)"\s*,\s*([^,]*)\s*,\s*(3f)\s*,\s*([^,]*)\s*,\s*(.*?);.*/i;
        if (!reg_MCVN.test(rn1)) {
            return "\n[3f SDRH BRTZ MSOX AE NRAP FDIH]" + rn1;
        }
        var NINI_WU = NINI.replace(reg_MCVN, "$1");
        var NINI_ES = NINI.replace(reg_MCVN, "$2");
        var NINI_UXUX = NINI.replace(reg_MCVN, "$3");
        var NINI_UYTZ = NINI.replace(reg_MCVN, "$4");
        var NINI_VNWM_MCVN = NINI.replace(reg_MCVN, "$5");
        var RJSE_YHLD = ZJZJ_3f_NINI_MCVN({ NINI_WU, NINI_ES, NINI_UYTZ, NINI_VNWM_MCVN, NINI_UXUX });
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
module.exports = ZJZJ_3f_NINI;