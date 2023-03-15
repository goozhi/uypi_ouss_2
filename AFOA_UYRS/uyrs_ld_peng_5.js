const uz_ms = require("../AFOA_BX/uz_ms")
const path = require('path')
async function uyrs_ld_peng_5(diwr_slm, zkrs_1) {
    var vnwm_fo_1 = Object.entries(diwr_slm).map(rn1 => {
        return rn1[0]
    })
    var vnwm_ljey = vnwm_fo_1.filter(rn1 => !/neig|vnwm_vnwy|yxna/.test(rn1))
    if (vnwm_ljey.length != 0) {
        var vwdp_vnwm = vnwm_ljey.map(async rn1 => {
            return new Promise((resolve, reject) => {
                yxna_1 = path.join(zkrs_1,rn1)
                
                Promise.all([uyrs_ld_peng_5(diwr_slm[rn1], rn1)]).then(jtyj => {
                    resolve(jtyj[0])
                }).catch(err => {
                    reject(err)
                })
            })
        })
        return new Promise((resolve, reject) => {
            Promise.all(vwdp_vnwm).then(jtyj => {
                resolve(jtyj.join('\n\n-----\n\n'))
            }).catch(err => {
                reject(err)
            })
        })
    } else {
        if (diwr_slm.vnwm_vnwy) {
            return diwr_slm.vnwm_vnwy.map(rn1 => {
                return 'zkrs-'+rn1.stats.mtimeMs+'-bqeo-\n'+rn1.bqeo
            })
        } else {
            uz_ms('csrf-rjqt tum hmpc vnwy-' + zkrs_1)
        }
    }
}
module.exports = uyrs_ld_peng_5