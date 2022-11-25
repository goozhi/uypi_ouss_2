function NINI_CGNE(RJSE_MCNV_NINI,RJSE_NIXB_NINI) {
    const { exec } = require('child_process');
    var encoding = require('encoding')
    const DOVW_DPAV_UYPJ = require('./DOVW_DPAV_UYPJ');
    RJSE_MCNV_NINI = RJSE_MCNV_NINI.replace(/\r/g, "");
    RJSE_NIXB_NINI = RJSE_NIXB_NINI.replace(/\r/g, "");
    var VNWM_NIXB_NINI = RJSE_NIXB_NINI.split(/\n/)
    var VNWM_MCNV_NINI = RJSE_MCNV_NINI.match(/(?:\n|^)\*".*/g);
    if (VNWM_MCNV_NINI == null) {
        throw new Error("NINI LH VV:" + RJSE_MCNV_NINI)
    }
    var IOWR_VNWM_MCNV_NINI = VNWM_MCNV_NINI.map((RNSF, EQWY_1) => {
        var MCNV_NINI_KP = RNSF.replace(/\n/, "")
        var NINI_LCLC = RNSF.match(/\/\/.*/);
        var reg_NINI_MCVN = /\*"([^"\n]{2,})"\s*,\s*([^,]*)\s*,\s*([^,]*)\s*,\s*(.*);/;
        var NINI_MCVN = RNSF.match(reg_NINI_MCVN);
        if (NINI_MCVN == null) {
            return { MCNV_NINI_KP, NINI_WU: null, NINI_ES: null, NINI_UXUX: null, NINI_UYPJ: null, NINI_LCLC }
        } else {
            var NINI_WU = NINI_MCVN[1];
            var NINI_ES = NINI_MCVN[2];
            var NINI_UXUX = NINI_MCVN[3];
            var NINI_UYPJ = NINI_MCVN[4];
            return { MCNV_NINI_KP, NINI_WU, NINI_ES, NINI_UXUX, NINI_UYPJ, NINI_LCLC, EQWY_ZV_VNWM_MCNV_NINI: EQWY_1 }
        }
    })
    var VNWM_VDUM_NINI = [];
    var IOWR_VNWM_ZV_NINI_DIZC_NVCM = []
    VNWM_NIXB_NINI.forEach((RNSF, EQWY_2) => {
        VNWM_VDUM_NINI.push(RNSF)
        IOWR_VNWM_MCNV_NINI.forEach((RNSF_2, EQWY_1) => {
            var STST_MI = DOVW_DPAV_UYPJ(RNSF_2.NINI_WU, RNSF).STST_MI;
            if (STST_MI < 0.6) {
            }
            else {
                IOWR_VNWM_ZV_NINI_DIZC_NVCM.push({ STST_MI, NIXB_NINI_WU: RNSF, IOWR_MCNV_NINI: RNSF_2, EQWY_ZV_IOWR_VNWM_MCNV_NINI: EQWY_1, EQWY_ZV_VNWM_NIXB_NINI: EQWY_2 });
            }
        })
    })
    IOWR_VNWM_ZV_NINI_DIZC_NVCM.sort((a, b) => b.STST_MI - a.STST_MI);
    var VNWM_YBKC_1 = [];
    var VNWM_YBKC_2 = [];
    IOWR_VNWM_ZV_NINI_DIZC_NVCM.forEach((RNSF) => {
        var EQWY_YHLD_1 = RNSF.EQWY_ZV_IOWR_VNWM_MCNV_NINI;
        var EQWY_YHLD_2 = RNSF.EQWY_ZV_VNWM_NIXB_NINI;
        if (VNWM_YBKC_2.indexOf(EQWY_YHLD_2) == -1 && VNWM_YBKC_1.indexOf(EQWY_YHLD_1) == -1) {
            VNWM_YBKC_1.push(EQWY_YHLD_1);
            VNWM_YBKC_2.push(EQWY_YHLD_2);
            if (RNSF.STST_MI != 1) {
                VNWM_VDUM_NINI[RNSF.EQWY_ZV_VNWM_NIXB_NINI] = RNSF.IOWR_MCNV_NINI.MCNV_NINI_KP + "// " + RNSF.NIXB_NINI_WU + " 相似度 : " + RNSF.STST_MI;
            } else {
                VNWM_VDUM_NINI[RNSF.EQWY_ZV_VNWM_NIXB_NINI] = RNSF.IOWR_MCNV_NINI.MCNV_NINI_KP;
            }
            return;
        }
    });
    var TT = VNWM_VDUM_NINI.join("\n");
    return TT;
    // exec('clip').stdin.end(encoding.convert(TT, 'gbk', 'utf8'));
}
module.exports=NINI_CGNE;