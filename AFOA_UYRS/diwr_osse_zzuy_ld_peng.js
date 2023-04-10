const diwr_neig_zjzj = require("../AFOA_BX/diwr_neig_zjzj")
const uz_ms = require("../AFOA_BX/uz_ms")
const ZJZJ_TSJQ_Ecu = require("../AFOA_sysData/ZJZJ_TSJQ_Ecu")
const vr_ld_peng = require("./vr_ld_peng")

async function diwr_osse_zzuy_ld_peng(diwr_slm, diwr_neig_kp) {
    var vnwm_fo_1 = [
        'zkrs',
        'ljey_vkih'
    ]
    diwr_neig_zjzj(diwr_neig_kp, vnwm_fo_1)
    if (!diwr_slm.vnwm_vnwy) {
        uz_ms('csrf-osse zzuy vnwy lh vv-' + diwr_slm.yxna_yowr)
    }
    var rj_vr = diwr_slm.vnwm_vnwy.map(rn1 => rn1.bqeo).join('\n')
    var rj_peng
    try {
        rj_peng = await vr_ld_peng({ bqeo: rj_vr, uxux: 'osse_zzzz' })
    } catch (err) {
        if (err.message) {
            err.message = diwr_slm.yxna_yowr + "\n" + err.message
        } else {
        }
        throw err
    }
    var RJSE_MSOX = await ZJZJ_TSJQ_Ecu(rj_peng)
    if (/\S/i.test(RJSE_MSOX)) {
        uz_ms(diwr_slm.yxna_yowr + '\n' + RJSE_MSOX);
    }
    return `+${diwr_neig_kp.ljey_vkih}[${diwr_neig_kp.zkrs}](Spec)\n${rj_peng}\n$$$`
}
module.exports = diwr_osse_zzuy_ld_peng