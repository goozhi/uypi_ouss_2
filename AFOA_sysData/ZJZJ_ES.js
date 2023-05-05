function ZJZJ_ES(RJSE_ES_KP) {
    var RJSE_1 = RJSE_ES_KP;
    var RJSE_MSOX = ""
    var UXUX_YHLD = typeof (RJSE_ES_KP);
    if (UXUX_YHLD != "string") {
        throw new Error("MCVN UXUX MSOX, AOAO JI string:" + UXUX_YHLD);
    }
    reg_ES = /^\{(.*)\}(?:;|)(?:\/\/.*|)/;
    var DIWR_ZTIH = RJSE_1.match(reg_ES);

    if (DIWR_ZTIH == null) {
        RJSE_MSOX += "[ES DK SDRH BRTZ MSOX] " + RJSE_1 + " <--";
    } else {
        var RJSE_ZTIH = DIWR_ZTIH[1];
        var VNWM_ZTIH = RJSE_ZTIH.split(/\s/);
        var reg_ZTIH = /^(?:[0-9]|[A-F]){1,2}$/i;
        var reg_f_VNWM = /^f\[\d+\]\[\d+\](?:\d+|)$/;
        VNWM_ZTIH.forEach(RNSF => {
            switch (true) {
                case reg_ZTIH.test(RNSF):
                    break;
                case reg_f_VNWM.test(RNSF):
                    break;
                case /^t\d+(?:-t\d+|)$/.test(RNSF):
                    break;
                default:
                    RJSE_MSOX += "[ES DK BRTZ MSOX] " + RNSF + " <--";
            }
        });
        RJSE_1 = RJSE_1.replace(reg_ES, "");
    }
    if (RJSE_1 != "") {
        reg_MCVN = /^\[.*\](?=\s*$)/;
        var DIWR_MCVN = RJSE_1.match(reg_MCVN);
        if (DIWR_MCVN == null) {
            RJSE_MSOX += "[ZJZJ ES ZD VODY ACUN BQEO] " + RJSE_1 + "<=="
        } else {
        }
    }
    if (RJSE_MSOX != "") {
        RJSE_MSOX = "\n" + RJSE_MSOX + RJSE_ES_KP;
    }
    return RJSE_MSOX;
}
module.exports = ZJZJ_ES;