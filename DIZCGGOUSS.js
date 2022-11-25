function DIZC_OUSS(RJSE_1, YE_aU_QHVN, RJSE_ZTHI_SLGR) {
    var ZJZJ_TSJQ_Str = require('./AFOA_sysData/ZJZJ_TSJQ_Str');
    var VR_EBWU_AFOA_BRTZ_FS = require('./VR_EBWU_AFOA_BRTZ_FS')
    var RJSE_KP = RJSE_1;
    RJSE_1 = VR_EBWU_AFOA_BRTZ_FS(RJSE_1)
    var RJSE_YHLD;
    var VNWM_YHLD_2 = RJSE_1.split('\n')
    var RJSE_YHLD_2 = VNWM_YHLD_2.map((RNSF, EQWY_1) => {
        return RNSF + "//line " + EQWY_1
    }).join('\n')
    if (/\$Str\b/i.test(RJSE_YHLD_2)) {
        RJSE_YHLD = RJSE_YHLD_2
    } else {
        RJSE_YHLD = "$Str()\n" + RJSE_YHLD_2 + "\n***"
    }
    var RJSE_MSOX = ZJZJ_TSJQ_Str(RJSE_YHLD)
    if (RJSE_MSOX != "") {
        return RJSE_MSOX
    }
    RJSE_1 = RJSE_1.replace(/\r/g, "").replace(/(?:\n|^)[^\S\n]*\/\/.*/g, "").replace(/\n(?=\n)/g, "")
    if (YE_aU_QHVN == null) {
        throw new Error("MCVN NRAP");
    }
    if (isNaN(YE_aU_QHVN)) {
        throw new Error("VNZT MCVN JI NaN")
    }
    var VNWM_ZTHI_SLGR;
    if (RJSE_ZTHI_SLGR == null || RJSE_ZTHI_SLGR == "") {
        VNWM_ZTHI_SLGR = null;
    } else {
        VNWM_ZTHI_SLGR = RJSE_ZTHI_SLGR.split(/\s+/);
    }
    var NINI_HQTB = require('./NINI_HQTB')
    var NINI_SIIH_DIAX = require('./NINI_SIIH_DIAX')
    RJSE_1 = RJSE_1.replace(/^((?!\*").)*/, "");
    var RJSE_YHLD_2 = NINI_HQTB(RJSE_1, VNWM_ZTHI_SLGR);
    var RJSE_YHLD = NINI_SIIH_DIAX(RJSE_YHLD_2);
    var VNWM_YHLD = RJSE_YHLD.split(/\n/);
    var VN_1 = Math.floor(VNWM_YHLD.length / YE_aU_QHVN);
    for (var EQWY_1 = 0; EQWY_1 < VN_1; EQWY_1++) {
        VNWM_YHLD.splice(YE_aU_QHVN * (EQWY_1 + 1) + EQWY_1, 0, "");
    }
    return VNWM_YHLD.join("\n");

}
module.exports = DIZC_OUSS;