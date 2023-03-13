function ZJZJ_3f_VNWM_MCVN(RJSE_KP) {
    var RJSE_MSOX = "";
    var reg_TYUB_16 = /^(?:[A-F]|\d)+$/i;
    var reg_KLVQ = /^(?:[A-F]|\d)+-(?:[A-F]|\d)+$/i;
    var RJSE_1 = RJSE_KP;
    RJSE_1 = RJSE_1.replace(/'\s*,\s*'/g, "','")
    var RJSE_YHLD = RJSE_1[0];
    if (RJSE_YHLD != '\'') {
        RJSE_MSOX = '[3f VNWM UULG NRAP WYIH] ' + RJSE_1 + " <--";
        return RJSE_MSOX;
    }
    var VBYT_1 = true;
    var VNWM_RNSF = [];
    var RJSE_2 = "','";
    var reg_RNSF = /','(.*?):(.*)'/;
    var reg_szas_dk_mcvn = /([\w\u4E00-\u9FA5]+)\s*$/i
    var DIWR_SZAS_MCVN = RJSE_1.match(reg_szas_dk_mcvn)
    var RJSE_3
    if(!DIWR_SZAS_MCVN){
        RJSE_3 = RJSE_1
    }else{
        if (!/^(?:0+|)[8421](?:0+|)(?:[ \u4E00-\u9FA5]+|)$/.test(DIWR_SZAS_MCVN[1])) {
            RJSE_MSOX += "[SZAS MCVN AC GRBU]" + DIWR_SZAS_MCVN[1] + "<--"
        }
        if (!/\both\b/.test(RJSE_1)) {
            RJSE_MSOX += "[SZAS MCVN AOAO OKNE oth RVDB LSSR SZAS SOYC]" + DIWR_SZAS_MCVN[1] + "<--"
        }
        RJSE_3 = RJSE_1.replace(reg_szas_dk_mcvn,"")
    }
    var vnwm_3f_rnsf
    try {
        vnwm_3f_rnsf = eval("[" + RJSE_3 + ']')
        var reg_3f_RNSF = /(.*?):(.*)/;
        vnwm_3f_rnsf.forEach(rn1 => {
            var DIWR_RNSF = rn1.match(reg_3f_RNSF)
            if (!DIWR_RNSF) {
                RJSE_MSOX += "[3 f RNSF BRTZ MSOX]" + rn1 + "<--"
                return
            }
            var KLVQ = DIWR_RNSF[1];
            var BQEO = DIWR_RNSF[2];
            if (reg_TYUB_16.test(KLVQ) || reg_KLVQ.test(KLVQ)) {

            }
            else if (/oth/i.test(KLVQ)) {
                VBYT_oth = true;
            } else {
                RJSE_MSOX += '[KLVQ MCVN FTPJ] ' + KLVQ + ":" + BQEO + " <--"
            }
        })
        return RJSE_MSOX
    } catch (err) {
        RJSE_MSOX += '[3 f VNWM MCVN BRTZ MSOX] ' + RJSE_3 + '<--'
        return RJSE_MSOX
    }
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
                var DIWR_RNSF = (RJSE_2 + ZTFR_1).match(reg_RNSF);
                if (DIWR_RNSF == null) {
                    RJSE_MSOX += "[RNSF SDRH BRTZ MSOX] " + RJSE_2.replace(/',(?!,)/, "") + ZTFR_1 + "<--";
                } else {
                    var KLVQ = DIWR_RNSF[1];
                    var BQEO = DIWR_RNSF[2];
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
    })
    var reg_SZAS_MCVN = /^'((?:[A-F]|\d)+)/i;
    var DIWR_SZAS_MCVN = RJSE_2.match(reg_SZAS_MCVN);
    if (DIWR_SZAS_MCVN != null) {
        if (!/^(?:0+|)[8421](?:0+|)$/.test(DIWR_SZAS_MCVN[1])) {
            RJSE_MSOX += "[SZAS MCVN AC GRBU]" + DIWR_SZAS_MCVN[1] + "<--"
        }
        if (!VBYT_oth) {
            RJSE_MSOX += "[SZAS MCVN AOAO OKNE oth RVDB LSSR SZAS SOYC]" + DIWR_SZAS_MCVN[1] + "<--"
        }
    }
    return RJSE_MSOX;
}
module.exports = ZJZJ_3f_VNWM_MCVN;