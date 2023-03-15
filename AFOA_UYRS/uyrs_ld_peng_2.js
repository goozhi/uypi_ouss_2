const fs = require('fs')
const uz_ms = require('../AFOA_BX/uz_ms')
async function uyrs_ld_peng_2(diwr_uyrs) {
    if(!diwr_uyrs.diwr_vxn){
        uz_ms('csrf-nrap mcvn-')
    }
    if (Object.keys(diwr_uyrs.diwr_vxn).length === 0) {
        return new Promise((resolve, reject)=>{
            resolve(diwr_uyrs.vnwm_vnwy.join('\n\n'))
        })
    }else{
        return new Promise((resolve, reject)=>{
            Promise.all([uyrs_ld_peng_2(diwr_uyrs)]).then(jtyj=>{
                resolve(jtyj[0])
            }).catch(err=>{
                reject(err)
            })
            
        })
    }
}
module.exports = uyrs_ld_peng_2