const ZJZJ_ACUN = require("./ZJZJ_ACUN");

function ZJZJ_TSJQ_InputBox(RJSE_KP) {
    var RJSE_MSOX = "";
    var RJSE_1 = RJSE_KP;
    var UXUX_YHLD = typeof (RJSE_KP)
    if (UXUX_YHLD != "string") {
        throw new Error("MCVN UXUX MSOX, AOAO JI string:" + UXUX_YHLD)
    }
    var reg_MCVN = /\$InputBox\((.*?)\)(?:;|)/i;
    var reg_BUTTON_MCVN = /".*".*/g;
    var DIWR_YHLD = RJSE_1.match(reg_MCVN);
    if (DIWR_YHLD == null) {
        return "\n[inputBox SDRH BRTZ MSOX] " + RJSE_KP;
    } else {
        var RJSE_MCVN = DIWR_YHLD[1];
        var VNWM_MCVN = RJSE_MCVN.split(/\s*,\s*/);
        var UXUX = VNWM_MCVN[0];
        if (UXUX == "10") {
            if (!/,range=/.test(RJSE_MCVN)) {
                RJSE_MSOX += "[10 UXUX AOAO TSZN range MCVN]"
            }
        } else if (UXUX == "16") {
            if (!/,len=\d+/.test(RJSE_MCVN)) {
                RJSE_MSOX += "[BI UXUX AOAO TSZN l e n MCVN]"
            }
        } else if (UXUX == "0a") {
            if (!/,len=\d+/.test(RJSE_MCVN)) {
                RJSE_MSOX += "[BI UXUX AOAO TSZN l e n MCVN]"
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
                case /^f\[\d+\]\[\d+\]=.*val.*$/.test(RNSF):
                    break;
                default:
                    RJSE_MSOX += "[inputBox MCVN FTPJ] " + RNSF + "<--"
            }
        });
        RJSE_1 = RJSE_1.replace(reg_MCVN, "")
    }
    if (RJSE_MSOX != "") {
        RJSE_MSOX = "\n" + RJSE_MSOX + RJSE_KP.match(/.*/);
    }
    var VNWM_YHLD = RJSE_1.match(reg_BUTTON_MCVN);
    if (VNWM_YHLD == null) {
        RJSE_MSOX += "\n<InputBox AOAO PC DGLD MCVN LSSR FICR>\n" + RJSE_KP + "\n</InputBox AOAO PC DGLD MCVN LSSR FICR>"
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
    var RJSE_YHLD = RJSE_1.replace(/\/\/line \d+(?:\n|$)/g, "")
    if (RJSE_YHLD != "") {
        // RJSE_1 = ZJZJ_ACUN(RJSE_1);
        RJSE_YHLD = RJSE_YHLD.replace(/^\s+$/, "")
        if (RJSE_YHLD != "")
            RJSE_MSOX += "\n<ZJZJ InputBox ZD VODY YNDF TSJQ>\n" + RJSE_1 + "\n</ZJZJ InputBox ZD VODY YNDF TSJQ>";
    }
    if (RJSE_MSOX != "") {
        RJSE_MSOX = "\n" + RJSE_MSOX;
    }
    return RJSE_MSOX;
}
module.exports = ZJZJ_TSJQ_InputBox;