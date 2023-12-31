const diax_zv_diwr_lh_mcvn = require('./AFOA_BX/diax_zv_diwr_lh_mcvn');
const uz_ms = require('./AFOA_BX/uz_ms');
var NINI_SIIH_DIAX = require('./NINI_SIIH_DIAX');
const vr_afoa_bqeo_rscs = require('./vr_afoa_bqeo_rscs');
const vr_mcvn_rscs = require('./vr_mcvn_rscs');

function VR_TSJQ_BRTZ_FS_ZV_SIIH_DIAX(DIWR_AFOA) {
    var UXUX_YHLD = typeof (DIWR_AFOA)
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX , AOAO JI object:" + UXUX_YHLD)
    }
    var bqeo_1 = vr_afoa_bqeo_rscs(DIWR_AFOA.VR_AFOA_BQEO)
    var diwr_vr_mcvn = vr_mcvn_rscs(DIWR_AFOA.VR_AFOA_MCVN, { diwr_vnwm_mcvn_wu_oqzn: [{ reg_lzm_wu: /^mid$/i, yowr_wu: "yhti_diax" }, { reg_lzm_wu: /^left$/i, yowr_wu: "rz_diax" }] })
    if (!Object.keys(diwr_vr_mcvn).length || diwr_vr_mcvn.hasOwnProperty('yhti_diax')) {
        var vnwm_1 = bqeo_1.split(/\n/)
        var vnwm_2 = vnwm_1.map((rn1, eqwy_1) => {
            var diwr_yhld = rn1.match(/(.*?)\s*(\{.*)/)
            if (diwr_yhld) {
                return [diwr_yhld[1], { rj_nixb: diwr_yhld[1], rj_kp: rn1, rj_yndf: diwr_yhld[2] }]
            } else {
                return [".", { rj_nixb: false, rj_kp: rn1 }]
            }
        })
        const diwr_uni = Object.fromEntries(vnwm_2)
        diax_zv_diwr_lh_mcvn(diwr_uni)

        return vnwm_2.map(rn1 => {
            if (!rn1[1].rj_nixb) {
                return rn1[1].rj_kp
            } else {
                var zkrs = rn1[0]
                return `${diwr_uni[zkrs].aqn_yp_vvbr}${zkrs}${rn1[1].rj_yndf}`
            }
        }).join('\n')
    } else if (diwr_vr_mcvn.hasOwnProperty('rz_diax')) {
        return NINI_SIIH_DIAX(DIWR_AFOA.VR_AFOA_BQEO.replace(/(\s+$|^\s+)/g, ""));
    } else {
        uz_ms('csrf-v r mcvn acun-' + DIWR_AFOA.VR_AFOA_MCVN)
    }
}
module.exports = VR_TSJQ_BRTZ_FS_ZV_SIIH_DIAX