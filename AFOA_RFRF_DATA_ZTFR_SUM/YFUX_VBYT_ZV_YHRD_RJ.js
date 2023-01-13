const uz_ms = require("../AFOA_BX/uz_ms")

function YFUX_VBYT_ZV_YHRD_RJ(NIXB_ZTFR_SUM, MCNV_ZTFR_SUM, DIWR_VNWM_reg_VWUX_MR_YFUX) {
    if (DIWR_VNWM_reg_VWUX_MR_YFUX == null) {
        uz_ms('csrf-nrap aofc dk mcvn-')
    }
    if (DIWR_VNWM_reg_VWUX_MR_YFUX[0].original == undefined) {
        uz_ms('csrf-nrap aofc dk pzva-')
    } else {
        if (typeof (DIWR_VNWM_reg_VWUX_MR_YFUX[0].original) != "object" ) {
            uz_ms('csrf-mcvn aoao ji object-' + DIWR_VNWM_reg_VWUX_MR_YFUX[0].original)
        }
    }
    for (var i1 = 0; i1 < DIWR_VNWM_reg_VWUX_MR_YFUX.length; i1++) {
        var RNSF_1 = DIWR_VNWM_reg_VWUX_MR_YFUX[i1]
        var original = RNSF_1.original
        if (original.test(NIXB_ZTFR_SUM)) {
            if (RNSF_1.mustNotHave != undefined) {
                if (RNSF_1.mustNotHave.test(MCNV_ZTFR_SUM)) {
                    return { diwr_ncrl: RNSF_1, gkqj_wwcf: false }
                }

            }
            if (RNSF_1.mustHave != undefined) {
                if (!RNSF_1.mustHave.test(MCNV_ZTFR_SUM)) {
                    return { diwr_ncrl: RNSF_1, gkqj_wwcf: false }
                }

            }
        }
    }
    var reg_VNZT = /\d+/g
    var VNWM_NIXB_ZTFR_SUM_VNZT = NIXB_ZTFR_SUM.match(reg_VNZT)
    var VNWM_MCNV_ZTFR_SUM_VNZT = MCNV_ZTFR_SUM.match(reg_VNZT)
    if (VNWM_NIXB_ZTFR_SUM_VNZT != null && VNWM_MCNV_ZTFR_SUM_VNZT != null) {
        if (VNWM_NIXB_ZTFR_SUM_VNZT.join(',') != VNWM_MCNV_ZTFR_SUM_VNZT.join(',')) {
            if(!/[年月日时分秒一二三四五六七八九十零]|进制/.test(NIXB_ZTFR_SUM)&&!/\b(?:of|by|from|in|via|through)\b/.test(MCNV_ZTFR_SUM)){
                return { diwr_ncrl: { comment: '数字不一致' }, gkqj_wwcf: false }
            }
        }
    }

    return { gkqj_wwcf: true }
}
module.exports = YFUX_VBYT_ZV_YHRD_RJ