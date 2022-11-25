function NINI_CGNE_ZV_NINI_WU_MR_ES(RJSE_MCNV_NINI, RJSE_NIXB_NINI, CQPI_FR) {
    const YFUX_VBYT_ZV_NINI_WU=require('./YFUX_VBYT_ZV_NINI_WU')
    const STST_MI_UYPJ = require('./STST_MI_UYPJ');
    RJSE_MCNV_NINI = RJSE_MCNV_NINI.replace(/\r/g, "");
    RJSE_NIXB_NINI = RJSE_NIXB_NINI.replace(/\r/g, "").replace(/^\s*\n/,"").replace(/(?:\n)\s*(?=\n|$)/g, "").replace(/\*\"(.*?)\"\s*,(.*?),.*/g, "$1$2");
    var VNWM_NIXB_NINI = RJSE_NIXB_NINI.split(/\n/);
    var reg_Str_TSJQ;
    if (String(CQPI_FR).toLowerCase() == "str") {
        reg_Str_TSJQ = /\$Str\b(?:(?!\$)[\S\s])+?\*\*\*/ig
    } else {
        reg_Str_TSJQ = /\$Ecu\b(?:(?!\$)[\S\s])+?\*\*\*/ig
    }
    var VNWM_MCNV_Str_TSJQ = RJSE_MCNV_NINI.match(reg_Str_TSJQ);
    var reg_Str_NINI = /(?:\n|^)\*".*/g;
    if (VNWM_MCNV_Str_TSJQ == null) {
        var VNWM_YHLD = RJSE_MCNV_NINI.match(reg_Str_NINI);
        if (VNWM_YHLD == null) {
            return RJSE_NIXB_NINI;
        } else {
            VNWM_MCNV_Str_TSJQ = [VNWM_YHLD.join("\n")]
        }
    }
    VNWM_MCNV_Str_TSJQ.reverse();
    var VNWM_YBKC_1 = [];
    var VNWM_YBKC_2 = [];
    var IOWR_VNWM_MCNV_NINI = []
    var VNWM_VDUM_NINI = [];
    var IOWR_VNWM_ZV_NINI_DIZC_NVCM = []
    for (var i1 = 0; i1 < VNWM_MCNV_Str_TSJQ.length; i1++) {
        var VNWM_MCNV_NINI = VNWM_MCNV_Str_TSJQ[i1].match(reg_Str_NINI);
        if (VNWM_MCNV_NINI == null) {
            continue
        }
        VNWM_MCNV_NINI.forEach((RNSF, EQWY_1) => {
            var MCNV_NINI_KP = RNSF.replace(/\n/, "")
            var reg_NINI_MCVN = /\*"([^"\n]{2,})"\s*,\s*([^,]*)\s*,\s*([^,]*)\s*,\s*(.*?);/;
            var NINI_MCVN = RNSF.match(reg_NINI_MCVN);
            if (NINI_MCVN == null) {
                // return { MCNV_NINI_KP, NINI_WU: null, NINI_ES: null, NINI_UXUX: null, NINI_UYPJ: null, NINI_LCLC }
            } else {
                var NINI_WU = NINI_MCVN[1];
                var NINI_ES = NINI_MCVN[2];
                var NINI_UXUX = NINI_MCVN[3];
                var NINI_UYPJ = NINI_MCVN[4];
                IOWR_VNWM_MCNV_NINI.push({ MCNV_NINI_KP, NINI_WU, NINI_ES, NINI_UXUX, NINI_UYPJ, EQWY_ZV_VNWM_MCNV_NINI: EQWY_1 })
            }
        })

    }
    VNWM_NIXB_NINI.forEach((RNSF, EQWY_2) => {
        VNWM_VDUM_NINI.push(RNSF)
        var reg_ES = /\{(.*?)\}/
        var IOWR_ES = RNSF.match(reg_ES);
        if (IOWR_ES !== null) {
            var NIXB_NINI_WU = RNSF.replace(reg_ES, "")
            for (var EQWY_1 = 0; EQWY_1 < IOWR_VNWM_MCNV_NINI.length; EQWY_1++) {
                var NIXB_NINI_ES = IOWR_ES[1].replace(/(\w{2})(?=\w{2})/g, "$1 ");
                var ES_STST_MI = STST_MI_UYPJ(IOWR_VNWM_MCNV_NINI[EQWY_1].NINI_ES.replace(/[\}\{]/g, "").toLowerCase(), NIXB_NINI_ES.toLowerCase());
                if (ES_STST_MI < 0.72) {
                } else {
                    var STST_MI = STST_MI_UYPJ(IOWR_VNWM_MCNV_NINI[EQWY_1].NINI_WU.replace(/\s/g, "").toLowerCase(), NIXB_NINI_WU.replace(/\s/g, "").toLowerCase());
                    if (STST_MI < 0.55) {
                    } else if (STST_MI == 1) {
                        VNWM_VDUM_NINI[EQWY_2] = IOWR_VNWM_MCNV_NINI[EQWY_1].MCNV_NINI_KP;
                        VNWM_YBKC_2.push(EQWY_2);
                        VNWM_YBKC_1.push(EQWY_1);
                        return;
                    }
                    else {
                        IOWR_VNWM_ZV_NINI_DIZC_NVCM.push({ STST_MI, NIXB_NINI_WU: NIXB_NINI_WU, IOWR_MCNV_NINI: IOWR_VNWM_MCNV_NINI[EQWY_1], EQWY_ZV_IOWR_VNWM_MCNV_NINI: EQWY_1, EQWY_ZV_VNWM_NIXB_NINI: EQWY_2 });
                    }
                }
            }

        } else {
            for (var EQWY_1 = 0; EQWY_1 < IOWR_VNWM_MCNV_NINI.length; EQWY_1++) {
                var STST_MI = STST_MI_UYPJ(IOWR_VNWM_MCNV_NINI[EQWY_1].NINI_WU.replace(/\s/g, "").toLowerCase(), RNSF.replace(/\s/g, "").toLowerCase());
                if (STST_MI < 0.55) {
                } else if (STST_MI == 1) {
                    VNWM_VDUM_NINI[EQWY_2] = IOWR_VNWM_MCNV_NINI[EQWY_1].MCNV_NINI_KP;
                    VNWM_YBKC_2.push(EQWY_2);
                    VNWM_YBKC_1.push(EQWY_1);
                    return;
                }
                else {
                    IOWR_VNWM_ZV_NINI_DIZC_NVCM.push({ STST_MI, NIXB_NINI_WU: RNSF, IOWR_MCNV_NINI: IOWR_VNWM_MCNV_NINI[EQWY_1], EQWY_ZV_IOWR_VNWM_MCNV_NINI: EQWY_1, EQWY_ZV_VNWM_NIXB_NINI: EQWY_2 });
                }
            }

        }
    })
    IOWR_VNWM_ZV_NINI_DIZC_NVCM.sort((a, b) => b.STST_MI - a.STST_MI);
    IOWR_VNWM_ZV_NINI_DIZC_NVCM.forEach((RNSF) => {
        var EQWY_YHLD_1 = RNSF.EQWY_ZV_IOWR_VNWM_MCNV_NINI;
        var EQWY_YHLD_2 = RNSF.EQWY_ZV_VNWM_NIXB_NINI;
        if (VNWM_YBKC_2.indexOf(EQWY_YHLD_2) == -1 && VNWM_YBKC_1.indexOf(EQWY_YHLD_1) == -1) {
            if(YFUX_VBYT_ZV_NINI_WU(RNSF.NIXB_NINI_WU,RNSF.IOWR_MCNV_NINI.NINI_WU)){
                VNWM_YBKC_1.push(EQWY_YHLD_1);
                VNWM_YBKC_2.push(EQWY_YHLD_2);
                VNWM_VDUM_NINI[RNSF.EQWY_ZV_VNWM_NIXB_NINI] = RNSF.NIXB_NINI_WU.replace(/\s+$/, "") + " 相似度 : " + RNSF.STST_MI.toFixed(3) + " " + RNSF.IOWR_MCNV_NINI.MCNV_NINI_KP;    
            }
            return;
        }
    });
    var TT = VNWM_VDUM_NINI.join("\n");
    return TT;
}
module.exports = NINI_CGNE_ZV_NINI_WU_MR_ES;