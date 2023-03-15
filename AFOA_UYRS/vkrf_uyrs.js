const fs = require('fs');
const diwr_neig_zjzj = require('../AFOA_BX/diwr_neig_zjzj');
const nikc_ld_diwr_vkey_os = require('./nikc_ld_diwr_vkey_os');
const uz_ms = require('../AFOA_BX/uz_ms');
const uyrs_ld_peng_2 = require('./uyrs_ld_peng_2');
const uyrs_ld_peng_5 = require('./uyrs_ld_peng_5');
async function vkrf_uyrs(diwr_neig_kp) {
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
        diwr_slm= nikc_ld_diwr_vkey_os(diwr_neig_kp.nikc_uyrs)
        diwr_slm.neig = require(diwr_neig_kp.nikc_uyrs + '/project.json')
        diwr_slm.neig['当前文件夹属性'] = '工程'
        try{
            return await uyrs_ld_peng_5(diwr_slm)   
        }catch(err){
            throw err
        }
    }
}
module.exports = vkrf_uyrs;