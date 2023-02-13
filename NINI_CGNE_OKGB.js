function NINI_CGNE(RJSE_MCNV_NINI, RJSE_NIXB_NINI) {
    const STST_MI_UYPJ = require('./STST_MI_UYPJ');
    RJSE_MCNV_NINI = RJSE_MCNV_NINI.replace(/\r/g, "");
    RJSE_NIXB_NINI = RJSE_NIXB_NINI.replace(/\r/g, "");
    var VNWM_NIXB_NINI = RJSE_NIXB_NINI.split(/\n/);
    var VNWM_MCNV_Str_TSJQ=RJSE_MCNV_NINI.match(/\$Str\b(?:(?!\$)[\S\s])+?\*\*\*/ig);
    if(VNWM_MCNV_Str_TSJQ==null){
        return RJSE_NIXB_NINI;
    }
    VNWM_MCNV_Str_TSJQ.reverse();
    var VNWM_YBKC_1 = [];
    var VNWM_YBKC_2 = [];
    var DIWR_VNWM_MCNV_NINI = []
    var VNWM_VDUM_NINI = [];
    var DIWR_VNWM_ZV_NINI_DIZC_NVCM = []
    for(var i1=0;i1<VNWM_MCNV_Str_TSJQ.length;i1++){
        var VNWM_MCNV_NINI = VNWM_MCNV_Str_TSJQ[i1].match(/(?:\n|^)\*".*/g);
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
                DIWR_VNWM_MCNV_NINI.push({ MCNV_NINI_KP, NINI_WU, NINI_ES, NINI_UXUX, NINI_UYPJ, EQWY_ZV_VNWM_MCNV_NINI: EQWY_1 })
            }
        })
        
    }
    VNWM_NIXB_NINI.forEach((RNSF, EQWY_2) => {
        VNWM_VDUM_NINI.push(RNSF)
        for (var EQWY_1 = 0; EQWY_1 < DIWR_VNWM_MCNV_NINI.length; EQWY_1++) {
            var STST_MI = STST_MI_UYPJ(DIWR_VNWM_MCNV_NINI[EQWY_1].NINI_WU.replace(/\s/g,""), RNSF.replace(/\s/g,""));
            if (STST_MI < 0.55) {
            } else if (STST_MI == 1) {
                VNWM_VDUM_NINI[EQWY_2] = DIWR_VNWM_MCNV_NINI[EQWY_1].MCNV_NINI_KP;
                VNWM_YBKC_2.push(EQWY_2);
                VNWM_YBKC_1.push(EQWY_1);
                return;
            }
            else {
                DIWR_VNWM_ZV_NINI_DIZC_NVCM.push({ STST_MI, NIXB_NINI_WU: RNSF, DIWR_MCNV_NINI: DIWR_VNWM_MCNV_NINI[EQWY_1], EQWY_ZV_DIWR_VNWM_MCNV_NINI: EQWY_1, EQWY_ZV_VNWM_NIXB_NINI: EQWY_2 });
            }
        }
    })
    DIWR_VNWM_ZV_NINI_DIZC_NVCM.sort((a, b) => b.STST_MI - a.STST_MI);
    DIWR_VNWM_ZV_NINI_DIZC_NVCM.forEach((RNSF) => {
        var EQWY_YHLD_1 = RNSF.EQWY_ZV_DIWR_VNWM_MCNV_NINI;
        var EQWY_YHLD_2 = RNSF.EQWY_ZV_VNWM_NIXB_NINI;
        if (VNWM_YBKC_2.indexOf(EQWY_YHLD_2) == -1 && VNWM_YBKC_1.indexOf(EQWY_YHLD_1) == -1) {
            VNWM_YBKC_1.push(EQWY_YHLD_1);
            VNWM_YBKC_2.push(EQWY_YHLD_2);
            VNWM_VDUM_NINI[RNSF.EQWY_ZV_VNWM_NIXB_NINI] =  RNSF.NIXB_NINI_WU + " 相似度 : " + RNSF.STST_MI.toFixed(3)+ " "+RNSF.DIWR_MCNV_NINI.MCNV_NINI_KP;
            return;
        }
    });
    var TT = VNWM_VDUM_NINI.join("\n");
    return TT;
}
module.exports = NINI_CGNE;