const ZJZJ_ACUN = require("./ZJZJ_ACUN");
const ZJZJ_ES = require("./ZJZJ_ES");

function ZJZJ_TSJQ_Input(RJSE_KP) {
    var RJSE_MSOX = "";
    var RJSE_1 = RJSE_KP;
    var UXUX_YHLD = typeof (RJSE_KP)
    if (UXUX_YHLD != "string") {
        throw new Error("MCVN UXUX MSOX, AOAO JI string:" + UXUX_YHLD)
    }
    var reg_MCVN = /\$Input\((.*?)\)/i;
    var reg_BUTTON_MCVN = /".*".*/g;
    var IOWR_YHLD = RJSE_1.match(reg_MCVN);
    if (IOWR_YHLD == null) {
        return "\n[input SDRH BRTZ MSOX] " + RJSE_KP;
    } else {
        var RJSE_MCVN = IOWR_YHLD[1];
        var VNWM_MCVN = RJSE_MCVN.split(/\s*,\s*/);
        var UXUX = VNWM_MCVN[0];
        if (UXUX == "10") {
            if (!/,range=/.test(RJSE_MCVN)) {
                RJSE_MSOX += "[10 UXUX AOAO TSZN range MCVN]"
            }
        } else if (UXUX == "16") {
            if (!/,len=\d+/.test(RJSE_MCVN)) {
                RJSE_MSOX += "[BI UXUX AOAO TSZN len MCVN]"
            }
        } else if (UXUX == "0a") {
            if (!/,len=\d+/.test(RJSE_MCVN)) {
                RJSE_MSOX += "[BI UXUX AOAO TSZN len MCVN]"
            }
        } else {
            RJSE_MSOX += "[AOAO TSZN UXUX MCVN] " + RJSE_MCVN + " <--";
            RJSE_MSOX = "\n" + RJSE_MSOX + RJSE_KP;
            return RJSE_MSOX;
        }
        VNWM_MCVN.forEach(RNSF => {
            switch (true) {
                case /^10$/.test(RNSF):
                    break;
                case /^16$/.test(RNSF):
                    break;
                case /^0a$/.test(RNSF):
                    break;
                case /^len=\d+$/.test(RNSF):
                    break;
                case /^range=(?:\+|-|)\d+(?:\.\d+|)(?:\+|-|)\d+(?:\.\d+|)$/.test(RNSF):
                    break;
                case /^again$/.test(RNSF):
                    break;
                case /^f\[\d+\]$/.test(RNSF):
                    break;
                case /^m\[\d+\]$/.test(RNSF):
                    break;
                case /^t\d+=.*val.*$/.test(RNSF):
                    break;
                default:
                    RJSE_MSOX += "[input MCVN FTPJ] " + RNSF + "<--"
            }
        });
        RJSE_1 = RJSE_1.replace(reg_MCVN, "")
    }
    if (RJSE_MSOX != "") {
        RJSE_MSOX = "\n" + RJSE_MSOX + RJSE_KP.match(/.*/);
    }
    var VNWM_YHLD = RJSE_1.match(reg_BUTTON_MCVN);
    if (VNWM_YHLD == null) {
    } else {
        VNWM_YHLD.forEach(RNSF => {
            if (!/^\s*"[^"\n]+"[A-Z]\w*/i.test(RNSF)) {
                RJSE_MSOX += "\n[DGLD MCVN BRTZ MSOX] " + RNSF + " <--";
            }
            else if (!/".*"\w+;/.test(RNSF)) {
                // RJSE_MSOX += "\n[DGLD MCVN NRAP FDIH] " + RNSF + " <--"
            }
        });
        RJSE_1 = RJSE_1.replace(reg_BUTTON_MCVN, "")
    }
    var reg_ES = /^\s*(\{.*?\})/;
    var IOWR_YHLD = RJSE_1.match(reg_ES)
    if (IOWR_YHLD == null) {
    } else {
        var ES = IOWR_YHLD[1];
        var RJSE_YHLD = ZJZJ_ES(ES)
        if (RJSE_YHLD != "")
            RJSE_MSOX = "\n" + RJSE_YHLD + RJSE_1.match(/^.*/);
        RJSE_1 = RJSE_1.replace(reg_ES, "");
    }

    var RJSE_YHLD = RJSE_1.replace(/(?:;+|)\/\/.*/g, "")
    if (RJSE_YHLD != "") {
        // RJSE_1 = ZJZJ_ACUN(RJSE_1);
        RJSE_YHLD = RJSE_YHLD.replace(/^\s+$/, "")
        if (RJSE_YHLD != "")
            RJSE_MSOX += "\n<ZJZJ Input ZD VODY YNDF TSJQ>\n" + RJSE_1 + "\n</ZJZJ Input ZD VODY YNDF TSJQ>";
    }
    if (RJSE_MSOX != "") {
        RJSE_MSOX = "\n" + RJSE_MSOX;
    }
    return RJSE_MSOX;
}
module.exports = ZJZJ_TSJQ_Input;