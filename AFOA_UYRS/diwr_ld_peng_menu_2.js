const uz_ms = require("../AFOA_BX/uz_ms")
const path = require('path')
async function diwr_ld_peng_menu_2(diwr_slm, diwr_neig_kp) {
    var vnwm_fo_1 = Object.entries(diwr_slm).map(rn1 => {
        return rn1[0]
    })
    if (!diwr_neig_kp.pzre_vkih) {
        uz_ms('csrf-nrap mcvn-')
    }
    var vnwm_ljey = vnwm_fo_1.filter(rn1 => !/neig|vnwm_vnwy|diwr_nomr|yxna/.test(rn1))
    if (vnwm_ljey.length != 0) {
        var vwdp_vnwm = vnwm_ljey.map(async rn1 => {
            var vxn_pzva = diwr_slm[rn1].neig['当前文件夹属性']
            if (vxn_pzva === '电子控制单元') {
                var pzre_vkih = ++diwr_neig_kp.pzre_vkih
                return `"${rn1}":${pzre_vkih}`
            } else if (vxn_pzva === '菜单名') {
                return new Promise((resolve, reject) => {
                    diwr_neig_kp.zkrs = rn1
                    Promise.all([diwr_ld_peng_menu_2(diwr_slm[rn1], diwr_neig_kp)]).then(jtyj => {
                        resolve(`"${rn1}":{\n${jtyj[0]}\n}`)
                    }).catch(err => {
                        reject(err)
                    })
                })
            } else {
                uz_ms('csrf-bi pzva nq dgl diwr ftpj-' + vxn_pzva + '-kp-' + diwr_slm[rn1].yxna_yowr)
            }
        })
        return new Promise((resolve, reject) => {
            Promise.all(vwdp_vnwm).then(jtyj => {
                resolve(jtyj.join(','))
            }).catch(err => {
                reject(err)
            })
        })
    } else {
        uz_ms('csrf-rjqt tum hmpc vnwy-' + diwr_neig_kp.zkrs)
    }
}
module.exports = diwr_ld_peng_menu_2