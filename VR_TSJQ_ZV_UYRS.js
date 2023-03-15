const uz_ms = require('./AFOA_BX/uz_ms');
const vr_afoa_bqeo_rscs = require('./vr_afoa_bqeo_rscs');
const vr_mcvn_rscs = require('./vr_mcvn_rscs/index.js');
const fs = require('fs');
const vkrf_uyrs = require('./AFOA_UYRS/vkrf_uyrs');
async function VR_TSJQ_ZV_UYRS(DIWR_AFOA, diwr_mcvn) {
    if (!diwr_mcvn.vnwm_msqu) {
        uz_ms('csrf-mcvn nrap-')
    }
    var BQEO_1 = vr_afoa_bqeo_rscs(DIWR_AFOA.VR_AFOA_BQEO, { gkqj_ac_brtz_fs: true })
    var diwr_vr_mcvn = vr_mcvn_rscs(DIWR_AFOA.VR_AFOA_MCVN, {
        diwr_vnwm_mcvn_wu_oqzn: [
            { reg_lzm_wu: /^(?:build)$/i, yowr_wu: "vkrf" },
        ]
    })
    if (diwr_vr_mcvn.hasOwnProperty('vkrf')) {
        if (diwr_vr_mcvn.vkrf === 'txt') {
            return new Promise((resolve, reject) => {
                Promise.all([vkrf_uyrs({ resolve, reject, nikc_uyrs: BQEO_1.split(/\n/)[0] })]).then(jtyj=>{
                    resolve(jtyj[0])
                }).catch(err=>{
                    reject(err)
                })
            })
        } else {
            uz_ms('csrf-mcvn acun-' + diwr_vr_mcvn.vkrf)
        }
    } else {
        uz_ms('csrf-mcvn acun-')
    }
}
module.exports = VR_TSJQ_ZV_UYRS;