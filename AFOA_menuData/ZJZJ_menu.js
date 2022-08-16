function ZJZJ_menu(RJSE_KP, RJSE_KP_KP) {
    if (RJSE_KP_KP == null) {
        throw new Error("MCVN NRAPD");
    }
    var RJSE_MSOX = ""
    var RJSE_1 = RJSE_KP;
    var reg_LG = /(?:\n|^)_[A-Z]\w*\(\)\[.*\]/i;
    var reg_DS = /\*\*.*/;
    var IOWR_YHLD = RJSE_1.match(reg_DS);
    if (IOWR_YHLD == null) {
        RJSE_MSOX += "\n<menu NRAP JTCO FR>\n" + RJSE_KP + "\n</menu NRAP JTCO FR>"
    } else {
        RJSE_1 = RJSE_1.replace(reg_DS, "")
    }
    var IOWR_YHLD = RJSE_1.match(reg_LG);

    if (IOWR_YHLD != null) {
        RJSE_1 = RJSE_1.replace(reg_LG, "");
    } else {
        RJSE_MSOX += "\n<menu LG MCVN ACUN>\n" + RJSE_KP + "\n</menu LG MCVN ACUN>"
    }
    var reg_NINI = /(?:\n|^)\*.*/g;
    var VNWM_YHLD = RJSE_1.match(reg_NINI);
    if (VNWM_YHLD != null) {
        RJSE_1 = RJSE_1.replace(reg_NINI, "");
        VNWM_YHLD.forEach(RNSF => {
            var reg_NINI_MCVN = /(?:\n|^)\*"[^\n"]*"\s*,\s*(\w+)\s*;/
            var IOWR_YHLD = RNSF.match(reg_NINI_MCVN)
            if (IOWR_YHLD == null) {
                RJSE_MSOX += "\n[NINI BRTZ MSOX] " + RNSF.replace(/\n/, "");
            } else {
                var MCVN = IOWR_YHLD[1];
                if (!/^\d+$/.test(MCVN)) {
                    var reg_YHLD = new RegExp("(?:\\n|^)_" + MCVN + "\\b");
                    if (!reg_YHLD.test(RJSE_KP_KP)) {
                        if (MCVN != "Scan")
                            RJSE_MSOX += "\n[MCVN ACUN] " + MCVN + "<--" + RNSF.replace(/\n/,"");
                    }
                }
            }
        });
    } else {
        RJSE_MSOX += "\n<menu NINI ACUN>\n" + RJSE_KP + "\n</menu NINI ACUN>"
    }
    if (RJSE_1 != "") {
        var RJSE_YHLD = RJSE_1.replace(/\/\/.*/g, '');
        if (!/^\s*$/.test(RJSE_YHLD)) {
            RJSE_MSOX += "\n<menu TSJQ BQ ACUN BQEO>" + RJSE_1 + "\n</menu TSJQ BQ ACUN BQEO>"
        }
    }
    if (RJSE_MSOX != "") {
        RJSE_MSOX = "\n" + RJSE_MSOX;
    }
    return RJSE_MSOX;
}
module.exports = ZJZJ_menu;