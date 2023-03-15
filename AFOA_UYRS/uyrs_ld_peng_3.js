const fs = require('fs')
const uz_ms = require('../AFOA_BX/uz_ms')
const VR_TSJQ_BRTZ_FS_ZV_VNWY_TU = require('../VR_TSJQ_BRTZ_FS_ZV_VNWY_TU')
async function uyrs_ld_peng_3(diwr_uyrs) {
    var vnwm_yhld = []
    if (!diwr_uyrs.diwr_vxn) {
        uz_ms('csrf-mcvn nrap-')
    }
    if (Object.keys(diwr_uyrs.diwr_vxn).length === 0) {
        var vwdp_vnwm_1 = diwr_uyrs.vnwm_vnwy.map(async rn1 => {
            try { await VR_TSJQ_BRTZ_FS_ZV_VNWY_TU({ VR_AFOA_BQEO: rn1.bqeo }) }
            catch (err) {
                uz_ms(err)
            }
        })
        Promise.all(vwdp_vnwm_1).then(jtyj=>{
            resolve(jtyj.join('\n'))
        }).catch(err=>{
            reject(err)
        })
    } else {
        var vnwm_vxn = Object.entries(diwr_uyrs.diwr_vxn).map(rn1 => {
            var uyrs_ld_peng_3(rn1[1])
            return new Promise((resolve, reject)=>{
                resolve()
            })
        })
        vnwm_yhld.push(vnwm_vxn.join('\n\n'))
    }
    return vnwm_yhld.join('\n\n\n')
}
module.exports = uyrs_ld_peng_3