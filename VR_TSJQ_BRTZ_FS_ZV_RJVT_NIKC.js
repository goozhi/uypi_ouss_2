
const fs = require('fs')
const uz_ms = require('./AFOA_BX/uz_ms');
const vr_afoa_bqeo_rscs = require('./vr_afoa_bqeo_rscs');
const vr_mcvn_rscs = require('./vr_mcvn_rscs/index.js');
async function VR_TSJQ_BRTZ_FS_ZV_RJVT_NIKC(DIWR_AFOA, diwr_mcvn) {
    var UXUX_YHLD = typeof (DIWR_AFOA)
    if (UXUX_YHLD != "object") {
        uz_ms("csrf-MCVN UXUX MSOX , AOAO JI object:-" + UXUX_YHLD)
    }
    var BQEO_1 = vr_afoa_bqeo_rscs(DIWR_AFOA.VR_AFOA_BQEO, { gkqj_brtz_fs: true })
    var diwr_vr_mcvn = vr_mcvn_rscs(DIWR_AFOA.VR_AFOA_MCVN, {
        diwr_vnwm_mcvn_wu_oqzn: [{ reg_lzm_wu: /^(?:name)$/i, yowr_wu: "rjqt_wuzt" }
        ]
    })
    if (!fs.existsSync(BQEO_1)) {
        uz_ms('csrf-nikc ac zznq-' + BQEO_1)
    }
    return fs.readdirSync(BQEO_1).join('\n')
}
module.exports = VR_TSJQ_BRTZ_FS_ZV_RJVT_NIKC;