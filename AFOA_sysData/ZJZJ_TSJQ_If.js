const ZJZJ_UYTZ = require('./ZJZJ_UYTZ');

function ZJZJ_TSJQ_If_EYNH(RJSE_IF_TSJQ_KP) {
    var ZJZJ_TSJQ_ZV_DW_CXAV_TSJQ=require('./ZJZJ_TSJQ_ZV_DW_CXAV_TSJQ')
    var UXUX_YHLD = typeof (RJSE_IF_TSJQ_KP);
    if (UXUX_YHLD != "string") {
        throw new Error("MCVN UXUX RJSE_MSOX, AOAO JI string:" + UXUX_YHLD)
    }
    var RJSE_MSOX = "";
    var UXUX_YHLD = typeof (RJSE_IF_TSJQ_KP);
    if (UXUX_YHLD != "string") {
        throw new Error("MCVN UXUX MSOX : ACJI string :" + UXUX_YHLD)
    }
    var RJSE_1 = RJSE_IF_TSJQ_KP;
    var reg_If_Elseif_MCVN = /\$(?:If|Elseif)\(([^\)]*)\)\s*(?:;|).*/ig;
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
        var reg_MCVN = /^([^:]*?):\s*(?:\w+-\w+|\w+)(?:,(?:\w+-\w+|\w+))*\s*$/;
        for (var i1 = 0; i1 < VNWM_2.length; i1++) {
            var VNWM_3 = VNWM_2[i1];
            for (var i2 = 0; i2 < VNWM_3.length; i2++) {
                var IOWR_YHLD=VNWM_3[i2].match(reg_MCVN);
                if (IOWR_YHLD==null) {
                    RJSE_MSOX += "\n[If TSJQ MCVN SDRH BRTZ MSOX] " + VNWM_3[i2] + " <--" + VNWM_1[i1];
                }else{
                    var RJSE_YHLD=ZJZJ_UYTZ(IOWR_YHLD[1]);
                    if(RJSE_YHLD!=""){
                        RJSE_MSOX+=RJSE_YHLD+"<--"+VNWM_1[i1];
                    }
                }
            }
        }
        RJSE_1 = RJSE_1.replace(reg_If_Elseif_MCVN, "");
    }
    RJSE_MSOX+=ZJZJ_TSJQ_ZV_DW_CXAV_TSJQ(RJSE_1,"If");
    if (RJSE_MSOX != "") {
        RJSE_MSOX = "\n" + RJSE_MSOX
    }
    return RJSE_MSOX;
}
module.exports = ZJZJ_TSJQ_If_EYNH;