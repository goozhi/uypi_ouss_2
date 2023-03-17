const uz_ms = require("../AFOA_BX/uz_ms")
const path = require('path')
const sbta_ld_peng = require("./sbta_ld_peng")
const pzva_ld_peng = require("./diwr_pzre_ld_peng")
async function uyrs_ld_peng_5(diwr_slm, diwr_neig_kp) {
    var vnwm_fo_1 = Object.entries(diwr_slm).map(rn1 => {
        return rn1[0]
    })
    if (!diwr_neig_kp.pzre_vkih) {
        uz_ms('csrf-nrap mcvn-')
    }
    var vnwm_ljey = vnwm_fo_1.filter(rn1 => !/neig|vnwm_vnwy|yxna/.test(rn1))

    if (vnwm_ljey.length != 0) {
        var vwdp_vnwm = vnwm_ljey.map(async rn1 => {
            var vxn_pzva = diwr_slm[rn1].neig['当前文件夹属性']
            if (vxn_pzva === '电子控制单元') {
                var pzre_vkih = ++diwr_neig_kp.pzre_vkih
                try {
                    rjse_sbta = sbta_ld_peng(diwr_slm[rn1].neig)
                    rjse_pzre = rjse_sbta
                } catch (err) {
                    err.message = diwr_slm[rn1].yxna_yowr + ": " + err.message
                    throw err
                }
                return new Promise((resolve, reject) => {
                    yxna_1 = path.join(diwr_neig_kp.zkrs, rn1)
                    Promise.all([pzva_ld_peng(diwr_slm[rn1], { zkrs: rn1 })]).then(jtyj => {
                        resolve(`_S${pzre_vkih}()//${rn1}` + '\n\n' + rjse_sbta + '\n$$$$$$\n\n' + jtyj[0])
                    }).catch(err => {
                        reject(err)
                    })
                })
            } else if (vxn_pzva === '菜单名') {
                return new Promise((resolve, reject) => {
                    diwr_neig_kp.zkrs = rn1
                    Promise.all([uyrs_ld_peng_5(diwr_slm[rn1], diwr_neig_kp)]).then(jtyj => {
                        resolve("// 菜单名 " + rn1 + '\n\n' + jtyj[0]).join('\n\n')
                    }).catch(err => {
                        reject(err)
                    })
                })
            } else if (vxn_pzva === '数据流') { } else if (vxn_pzva === '版本信息') { } else if (vxn_pzva === '元件测试') { } else if (vxn_pzva === '特殊功能') { } else if (vxn_pzva === '读码') { } else if (vxn_pzva === '清码') {

            } else {
                uz_ms('csrf-bi pzva nq dgl ftpj-' + vxn_pzva + '-kp-' + diwr_slm[rn1].yxna_yowr)
            }
        })
        return new Promise((resolve, reject) => {
            Promise.all(vwdp_vnwm).then(jtyj => {
                resolve(jtyj.join('\n\n-----\n\n'))
            }).catch(err => {
                reject(err)
            })
        })
    } else {
        uz_ms('csrf-rjqt tum hmpc vnwy-' + diwr_neig_kp.zkrs)
    }
}
module.exports = uyrs_ld_peng_5