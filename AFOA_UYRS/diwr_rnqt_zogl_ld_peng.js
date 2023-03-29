const diwr_neig_zjzj = require("../AFOA_BX/diwr_neig_zjzj")
const uz_ms = require("../AFOA_BX/uz_ms")
const ZJZJ_TSJQ_ZV_DW_CXAV_TSJQ = require("../AFOA_sysData/ZJZJ_TSJQ_ZV_DW_CXAV_TSJQ")

async function diwr_rnqt_zogl_ld_peng(diwr_slm, diwr_neig_kp) {
    var vnwm_fo_1 = [
        'zkrs',
        'ljey_vkih'
    ]
    diwr_neig_zjzj(diwr_neig_kp, vnwm_fo_1)
    if (!diwr_slm.vnwm_vnwy) {
        uz_ms('csrf-vnwy lh vv-' + diwr_slm.yxna_yowr)
    }
    var rj_peng = diwr_slm.vnwm_vnwy.map(rn1 => {
        if(/\.peng$/i.test(rn1.zkrs)){
            return rn1.bqeo
        }else{
            uz_ms('csrf-rnqt zogl ac huop bi ebwu-'+rn1.zkrs +'-kp-'+diwr_slm.yxna_yowr)
        }
    }).join('\n')
    var RJSE_MSOX = await ZJZJ_TSJQ_ZV_DW_CXAV_TSJQ(rj_peng, 'LJEY')
    if (/\S/i.test(RJSE_MSOX)) {
        uz_ms(diwr_slm.yxna_yowr+'\n'+RJSE_MSOX);
    }
    return `+${diwr_neig_kp.ljey_vkih}[${diwr_neig_kp.zkrs}](Spec)\n${rj_peng}\n$$$$$$`
}
module.exports = diwr_rnqt_zogl_ld_peng