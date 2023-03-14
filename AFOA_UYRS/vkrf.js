const fs = require('fs');
const diwr_neig_zjzj = require('../AFOA_BX/diwr_neig_zjzj');
const nikc_ld_diwr = require('../AFOA_BX/nikc_ld_diwr');
const uz_ms = require('../AFOA_BX/uz_ms');
async function vkrf(diwr_neig_kp) {
    if (!diwr_neig_kp) {
        uz_ms('csrf-nrap mcvn-')
    } else {
        var vnwm_fo_1 = [
            'reject'
            , 'nikc_uyrs'
        ]
        diwr_neig_zjzj(diwr_neig_kp, vnwm_fo_1)
    }

    if (!fs.existsSync(diwr_neig_kp.nikc_uyrs)) {
        uz_ms('csrf-nikc ac zznq-' + diwr_neig_kp.nikc_uyrs)
    }
    diwr_neig_kp.nikc_uyrs = diwr_neig_kp.nikc_uyrs.replace(/(?:\\|\/)$/, "")
    if (!fs.existsSync(diwr_neig_kp.nikc_uyrs + '/project.json')) {
        uz_ms('csrf-project.json ac zznq-')
    } else {
        var diwr_neig_uyrs = require(diwr_neig_kp.nikc_uyrs + '/project.json')
        var vnwm_uyrs_nikc_kp = fs.readdirSync(diwr_neig_kp.nikc_uyrs)
        var vnwm_uyrs_nikc_1 = vnwm_uyrs_nikc_kp.filter(rn1 => {
            return !/^\./.test(rn1) && fs.statSync(diwr_neig_kp.nikc_uyrs + '/' + rn1).isDirectory()
        })
        diwr_neig_uyrs.zul = { slm: "project", vnwm_vxn: vnwm_uyrs_nikc_1 }
        throw await nikc_ld_diwr(diwr_neig_kp.nikc_uyrs)
    }
}
module.exports = vkrf;