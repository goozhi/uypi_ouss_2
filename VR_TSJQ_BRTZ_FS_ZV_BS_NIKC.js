
const fs = require('fs')
const uz_ms = require('./AFOA_BX/uz_ms');
const vr_afoa_bqeo_rscs = require('./vr_afoa_bqeo_rscs');
const vr_mcvn_rscs = require('./vr_mcvn_rscs/index.js');
async function VR_TSJQ_BRTZ_FS_ZV_BS_NIKC(DIWR_AFOA, diwr_mcvn) {
    var UXUX_YHLD = typeof (DIWR_AFOA)
    if (UXUX_YHLD != "object") {
        uz_ms("csrf-MCVN UXUX MSOX , AOAO JI object:-" + UXUX_YHLD)
    }
    var BQEO_1 = vr_afoa_bqeo_rscs(DIWR_AFOA.VR_AFOA_BQEO)
    var diwr_vr_mcvn = vr_mcvn_rscs(DIWR_AFOA.VR_AFOA_MCVN, {
        diwr_vnwm_mcvn_wu_oqzn: [{ reg_lzm_wu: /^(?:name)$/i, yowr_wu: "rjqt_wuzt" }
        ]
    })
    var vnwm_rjqt_tum_wuzt_1 = BQEO_1.split('\n').filter(rn1 => /\S/.test(rn1))
    var nikc_dbkz_tszn = vnwm_rjqt_tum_wuzt_1[0].replace(/[\/\\]\s*$/, "")
    if (!fs.existsSync(nikc_dbkz_tszn)) {
        uz_ms('csrf-nikc ac zznq-' + nikc_dbkz_tszn)
    }
    var vnwm_rjqt_tum_wuzt_2 = Array.from(new Set(vnwm_rjqt_tum_wuzt_1.slice(1, 1000)))
    vnwm_rjqt_tum_wuzt_2.forEach(rn1 => {
        try {
            fs.mkdirSync(nikc_dbkz_tszn + '/' + rn1)
        } catch (err) {
            if (/file already exists/.test(err.message)) {
            } else {
                throw err
            }
        }
    })
    return '创建完成'
}
module.exports = VR_TSJQ_BRTZ_FS_ZV_BS_NIKC;