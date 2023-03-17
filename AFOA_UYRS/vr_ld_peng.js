const diwr_neig_zjzj = require("../AFOA_BX/diwr_neig_zjzj")
const uz_ms = require("../AFOA_BX/uz_ms")
const VR_TSJQ_BRTZ_FS_ZV_OSSE_ZZUY = require("../VR_TSJQ_BRTZ_FS_ZV_OSSE_ZZUY")
const VR_TSJQ_BRTZ_FS_ZV_VNWY_TU = require("../VR_TSJQ_BRTZ_FS_ZV_VNWY_TU")

async function vr_ld_peng(diwr_neig_kp) {
    var vnwm_fo_1 = ['bqeo', 'uxux']
    diwr_neig_zjzj(diwr_neig_kp, vnwm_fo_1)
    if (diwr_neig_kp.uxux === 'vnwy_tu') {
        return await VR_TSJQ_BRTZ_FS_ZV_VNWY_TU({ VR_AFOA_MCVN: "", VR_AFOA_BQEO: diwr_neig_kp.bqeo })
    } else if (diwr_neig_kp.uxux === 'osse_zzzz') {
        return await VR_TSJQ_BRTZ_FS_ZV_OSSE_ZZUY({ VR_AFOA_MCVN: "", VR_AFOA_BQEO: diwr_neig_kp.bqeo })
    } else {
        uz_ms('csrf-uxux acun-')
    }
}
module.exports = vr_ld_peng