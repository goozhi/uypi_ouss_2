function ZJZJ_3c_VNWM_MCVN(RJSE_KP) {
    var ZJZJ_UYTZ = require('./ZJZJ_UYTZ')
    var RJSE_MSOX = "";
    var reg_TYUB_16 = /^(?:[A-F]|\d)+$/i;
    var reg_KLVQ = /^(?:[A-F]|\d)+-(?:[A-F]|\d)+$/i;
    var RJSE_1 = RJSE_KP;
    RJSE_1 = RJSE_1.replace(/'\s*,\s*'/g, "','")
    var RJSE_YHLD = RJSE_1[0];
    if (RJSE_YHLD != '\'') {
        RJSE_MSOX = '[3c VNWM UULG NRAP WYIH] ' + RJSE_1 + " <--";
        return RJSE_MSOX;
    }
    var VBYT_1 = true;
    var VNWM_RNSF = [];
    var RJSE_2 = "','";
    var reg_RNSF = /','(.*?):(.*)'/;
    for (i1 = 1; i1 < RJSE_1.length; i1++) {
        var ZTFR_1 = RJSE_1[i1];
        if (ZTFR_1 == "'") {
            VBYT_1 = !VBYT_1;
            if (VBYT_1) {
                if (!/',$/.test(RJSE_2)) {
                    RJSE_MSOX += '[NRAP AE MHUM WYIH AE BOIH] ' + RJSE_2.replace(/',(?!,)/, "") + ZTFR_1 + "<--";
                    return RJSE_MSOX;
                }
            } else {
                var IOWR_RNSF = (RJSE_2 + ZTFR_1).match(reg_RNSF);
                if (IOWR_RNSF == null) {
                    RJSE_MSOX += "[RNSF SDRH BRTZ MSOX] " + RJSE_2.replace(/',(?!,)/, "") + ZTFR_1 + "<--";
                } else {
                    var KLVQ = IOWR_RNSF[1];
                    var BQEO = IOWR_RNSF[2];
                    VNWM_RNSF.push({ KLVQ, BQEO });
                }
                RJSE_2 = "";
            }
        }
        RJSE_2 += ZTFR_1;
    }
    var VBYT_oth = false;
    VNWM_RNSF.forEach(RNSF => {
        if (reg_TYUB_16.test(RNSF.KLVQ) || reg_KLVQ.test(RNSF.KLVQ)) {

        }
        else if (/oth/i.test(RNSF.KLVQ)) {
            VBYT_oth = true;
        } else {
            RJSE_MSOX += '[KLVQ MCVN FTPJ] ' + RNSF.KLVQ + ":" + RNSF.BQEO + " <--"
        }
        if (!/^\s*\*/.test(RNSF.BQEO)) {
            var RJSE_YHLD = ZJZJ_UYTZ(RNSF.BQEO)
            if (RJSE_YHLD != ""&&(!/oth/i.test(RNSF.KLVQ)))
                RJSE_MSOX += "[FT UYTZ AOAO PC * XBST] " + RNSF.KLVQ + ":" + RNSF.BQEO + " <--" + RJSE_YHLD;
        }
    })
    var reg_SZAS_MCVN = /^'((?:[A-F]|\d)+)/i;
    var IOWR_SZAS_MCVN = RJSE_2.match(reg_SZAS_MCVN);
    if (IOWR_SZAS_MCVN != null) {
        if (!/^(?:0+|)[8421](?:0+|)$/.test(IOWR_SZAS_MCVN[1])) {
            RJSE_MSOX += "[SZAS MCVN AC GRBU]" + IOWR_SZAS_MCVN[1] + "<--"
        }
        if (!VBYT_oth) {
            RJSE_MSOX += "[SZAS MCVN AOAO OKNE oth RVDB LSSR SZAS SOYC]" + IOWR_SZAS_MCVN[1] + "<--"
        }
    }
    return RJSE_MSOX;
}
module.exports = ZJZJ_3c_VNWM_MCVN;