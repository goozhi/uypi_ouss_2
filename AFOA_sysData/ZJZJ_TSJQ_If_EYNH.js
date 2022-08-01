
function ZJZJ_TSJQ_If_EYNH(RJSE_IF_TSJQ_KP) {
    var UXUX_YHLD = typeof (RJSE_IF_TSJQ_KP);
    if (UXUX_YHLD != "string") {
        throw new Error("MCVN UXUX RJSE_MSOX, AOAO JI string:" + UXUX_YHLD)
    }
    var VNWM_MSOX = [];
    var RJSE_MSOX = "";
    const ZJZJ_ACUN = require('./ZJZJ_ACUN');
    var ZJZJ_TSJQ = require('./ZJZJ_TSJQ')
    var reg_BX_ZV_TSJQ = require('./reg_BX_ZV_TSJQ');
    var reg_TSJQ_BX = new reg_BX_ZV_TSJQ();
    var UXUX_YHLD = typeof (RJSE_IF_TSJQ_KP);
    if (UXUX_YHLD != "string") {
        throw new Error("MCVN UXUX MSOX : ACJI string :" + UXUX_YHLD)
    }
    var RJSE_1 = RJSE_IF_TSJQ_KP;
    var reg_If_Elseif_MCVN = /\$(?:If|Elseif)\((.*)\).*/ig;
    var sheng_1 = "$1";
    var reg_Else = /\$Else\(\)(?:;|)/i;
    var reg_Endif = /\$Endif\(\)(?:;|)/i;
    RJSE_1 = RJSE_1.replace(reg_Else, "");
    RJSE_1 = RJSE_1.replace(reg_Endif, "");
    var VNWM_1 = RJSE_1.match(reg_If_Elseif_MCVN);
    if (VNWM_1 == null) {
        if (/^\s*$/.test(RJSE_IF_TSJQ_KP)) {
            return "";
        }
        if (RJSE_1.match(/\/\/line \d+/) == null) {
            throw new Error("HMPC STLZ QHIH :" + RJSE_IF_TSJQ_KP)
        }
        RJSE_MSOX += "\n[If TSJQ MSOX]" + RJSE_1.match(/\/\/line \d+/);
    } else {
        var VNWM_2 = VNWM_1.map(RNSF => {
            return RNSF.replace(reg_If_Elseif_MCVN, sheng_1).split(/(?:&&|\|\|)/);
        });
        var reg_MCVN = /^\s*f\[\d+\]\[\d+\]\s*:\s*\w+\s*$/;
        for (var i1 = 0; i1 < VNWM_2.length; i1++) {
            var VNWM_3 = VNWM_2[i1];
            for (var i2 = 0; i2 < VNWM_3.length; i2++) {
                if (!reg_MCVN.test(VNWM_3[i2])) {
                    RJSE_MSOX += "\n[If TSJQ MCVN BRTZ MSOX]" + VNWM_3[i2] + "<--" + VNWM_1[i1];
                }
            }
        }
        RJSE_1 = RJSE_1.replace(reg_If_Elseif_MCVN, "");
    }
    var VNWM_CGNE_BQEO = [];
    reg_TSJQ_BX.BX_2.forEach(RNSF => {
        var CGNE_BQEO_VNWM_2 = [];
        for (; ;) {
            var RJSE_YHLD = RJSE_1.match(RNSF.reg);
            if (RJSE_YHLD != null) {
                CGNE_BQEO_VNWM_2.push(RJSE_YHLD);
                RJSE_1 = RJSE_1.replace(RNSF.reg, "");
            } else {
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
            RJSE_MSOX += "\n<ZJZJ IF TSJQ ZD VODY DK ACUN BQEO 不明内容>\n" + RJSE_1 + "\n</ZJZJ IF TSJQ ZD VODY DK ACUN BQEO 不明内容>";
        }
    } else {

    }
    if (RJSE_MSOX != "") {
        RJSE_MSOX = "\n" + RJSE_MSOX
    }
    return VNWM_MSOX.join("") + RJSE_MSOX;
}
module.exports = ZJZJ_TSJQ_If_EYNH;