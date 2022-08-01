
function ZJZJ_LJEY_NINI_EYNH_LJEY(RJSE_LJEY_KP) {
    var VNWM_MSOX = []
    var RJSE_MSOX = "";
    const ZJZJ_ACUN = require('./ZJZJ_ACUN');
    var ZJZJ_TSJQ = require('./ZJZJ_TSJQ')
    var reg_BX_ZV_TSJQ = require('./reg_BX_ZV_TSJQ');
    var reg_TSJQ_BX = new reg_BX_ZV_TSJQ();
    var UXUX_YHLD = typeof (RJSE_LJEY_KP);
    if (UXUX_YHLD != "string") {
        throw new Error("MCVN UXUX MSOX : ACJI string :" + UXUX_YHLD)
    }
    var RJSE_1 = RJSE_LJEY_KP;
    var reg_LJEY_LD = /(?:\n|^)\+\d\[.*?\]\((?:Spec|Read|Clear|Str|\+)\)/i;
    var reg_LJEY_JTCO_EB = /\$\$\$/;
    var RJSE_LJEY_LD = RJSE_LJEY_KP.match(reg_LJEY_LD);
    if (RJSE_LJEY_LD == null) {
        RJSE_MSOX += "[LJEY LD BRTZ MSOX]" + RJSE_LJEY_KP.match(/.*\+\d+.*/);
    } else {
        RJSE_LJEY_LD = RJSE_LJEY_LD[0].replace(/\n/g, "")
        RJSE_1 = RJSE_1.replace(reg_LJEY_LD, "");
    }
    RJSE_1 = RJSE_1.replace(reg_LJEY_JTCO_EB, "");
    var VNWM_CGNE_BQEO = [];
    reg_TSJQ_BX.BX_2.forEach(RNSF => {
        var CGNE_BQEO_VNWM_2 = [];
        for (; ;) {
            var RJSE_YHLD = RJSE_1.match(RNSF.reg);
            if (RJSE_YHLD != null) {
                CGNE_BQEO_VNWM_2.push(RJSE_YHLD);
                RJSE_1 = RJSE_1.replace(RNSF.reg, "");
            }else{
                break;
            }
        }
        VNWM_CGNE_BQEO.push({ CGNE_BQEO_VNWM: CGNE_BQEO_VNWM_2, WUZT: RNSF.WUZT });
    })
    reg_TSJQ_BX.BX.forEach(RNSF => {
        var CGNE_BQEO_VNWM = RJSE_1.match(RNSF.reg);
        if (CGNE_BQEO_VNWM != null) {
            RJSE_1 = RJSE_1.replace(RNSF.reg, "");
            VNWM_CGNE_BQEO.push({ CGNE_BQEO_VNWM: CGNE_BQEO_VNWM, WUZT: RNSF.WUZT });
        }
    })
    VNWM_CGNE_BQEO.forEach(RNSF => {
        VNWM_MSOX.push(ZJZJ_TSJQ(RNSF.WUZT, RNSF.CGNE_BQEO_VNWM));
    })
    if (RJSE_1 != "") {
        if (ZJZJ_ACUN(RJSE_1) != "") {
            RJSE_MSOX += "\n<ZJZJ LJEY ZD VODY DK ACUN BQEO>\n" + RJSE_1 + "\n</ZJZJ LJEY ZD VODY DK ACUN BQEO>";
        }
    } else {

    }
    if (RJSE_MSOX != "") {
        RJSE_MSOX = "\n" + RJSE_MSOX
    }
    return VNWM_MSOX.join("") + RJSE_MSOX;
}
module.exports = ZJZJ_LJEY_NINI_EYNH_LJEY;