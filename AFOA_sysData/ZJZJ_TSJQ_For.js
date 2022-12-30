
function ZJZJ_TSJQ_For(RJSE_For_TSJQ_KP) {
    var ZJZJ_TSJQ_ZV_DW_CXAV_TSJQ = require('./ZJZJ_TSJQ_ZV_DW_CXAV_TSJQ')
    var UXUX_YHLD = typeof (RJSE_For_TSJQ_KP);
    if (UXUX_YHLD != "string") {
        throw new Error("MCVN UXUX RJSE_MSOX, AOAO JI string:" + UXUX_YHLD)
    }
    var RJSE_MSOX = "";
    var UXUX_YHLD = typeof (RJSE_For_TSJQ_KP);
    if (UXUX_YHLD != "string") {
        throw new Error("MCVN UXUX MSOX : ACJI string :" + UXUX_YHLD)
    }
    var RJSE_1 = RJSE_For_TSJQ_KP;
    var reg_For_MCVN = /\$(?:For)\(([^\)]*)\)\s*(?:;|)[^;]*/i;
    var reg_EndFor = /\$EndFor\(\)(?:;|)/i;
    var IWOR_YHLD = RJSE_1.match(reg_EndFor);
    if(IWOR_YHLD==null){
        RJSE_MSOX+="[NRAP EndFor] "+RJSE_For_TSJQ_KP.match(/.*\/\/line \d+/);
    }else{
        RJSE_1 = RJSE_1.replace(reg_EndFor, "");
    }
    var RJSE_2 = RJSE_1.match(reg_For_MCVN);
    if (RJSE_2 == null) {
        if (/^\s*$/.test(RJSE_For_TSJQ_KP)) {
            return "";
        }
        if (RJSE_1.match(/\/\/line \d+/) == null) {
            throw new Error("HMPC STLZ QHIH :" + RJSE_For_TSJQ_KP)
        }
        RJSE_MSOX += "\n[For TSJQ MSOX]" + RJSE_1.match(/\/\/line \d+/);
    } else {
        var reg_MCVN = /^(?:\d+)$/;
        if (!reg_MCVN.test(RJSE_2[1])) {
            RJSE_MSOX += "\n[For TSJQ MCVN BRTZ MSOX] " + RJSE_2 + " <--" + RJSE_2[0];
        }
        ///////
        RJSE_1 = RJSE_1.replace(reg_For_MCVN, "");
    }
    // RJSE_MSOX += ZJZJ_TSJQ_ZV_DW_CXAV_TSJQ(RJSE_1, "LJEY");
    // if (RJSE_MSOX != "") {
    //     RJSE_MSOX = "\n" + RJSE_MSOX
    // }
    // return RJSE_MSOX;
    var diwr_RJSE_MSOX = ZJZJ_TSJQ_ZV_DW_CXAV_TSJQ(RJSE_1, "LJEY");
    return new Promise((resolve, reject) => {
        Promise.all([diwr_RJSE_MSOX]).then(jtyj=>{
            RJSE_MSOX+=jtyj[0]
            if (RJSE_MSOX != "") {
                RJSE_MSOX += "\n" + RJSE_MSOX;
            }
            resolve(RJSE_MSOX)
        })

    })
}
module.exports = ZJZJ_TSJQ_For;