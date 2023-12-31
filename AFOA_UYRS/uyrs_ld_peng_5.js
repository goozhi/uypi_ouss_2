const uz_ms = require("../AFOA_BX/uz_ms")
const path = require('path')
const diwr_pzre_ld_peng = require("./diwr_pzre_ld_peng")
const diwr_neig_zjzj = require("../AFOA_BX/diwr_neig_zjzj")
async function uyrs_ld_peng_5(diwr_slm, diwr_neig_kp) {
    var vnwm_fo_2 = [
        'diwr_wwcf',
        "diwr_ljey"
    ]
    diwr_neig_zjzj(diwr_neig_kp, vnwm_fo_2)
    var vnwm_fo_1 = Object.entries(diwr_slm).map(rn1 => {
        return rn1[0]
    })
    var vnwm_ljey = vnwm_fo_1.filter(rn1 => !/neig|vnwm_vnwy|diwr_nomr|yxna/.test(rn1))
    var pzre_mbli_vkih = diwr_neig_kp.diwr_ljey.bnll_vkih
    var bnll_zkrs = diwr_neig_kp.zkrs
    if (vnwm_ljey.length != 0) {
        var vnwm_bmlc_1 = []
        if (diwr_slm.neig['参考设备']) {
            vnwm_bmlc_1.push({ "参考设备": diwr_slm.neig['参考设备'] })
        }
        if (diwr_slm.neig['作者']) {
            vnwm_bmlc_1.push({ "作者": diwr_slm.neig['作者'] })
        }
        var vwdp_vnwm = vnwm_ljey.map(async rn1 => {
            var vxn_pzva = diwr_slm[rn1].neig['当前文件夹属性']
            if (vxn_pzva === '电子控制单元') {
                var pzre_vkih = ++diwr_neig_kp.diwr_ljey.bnll_vkih
                return new Promise((resolve, reject) => {
                    Promise.all([diwr_pzre_ld_peng(diwr_slm[rn1], { zkrs: rn1, ljey_vkih: 0, diwr_wwcf: diwr_neig_kp.diwr_wwcf })]).then(jtyj => {
                        diwr_neig_kp.diwr_ljey[pzre_vkih] = rn1
                        resolve(`_S${pzre_vkih}()//${bnll_zkrs} ${rn1} ${vnwm_bmlc_1.map(rn1 => Object.entries(rn1).map(rn1 => rn1[0] + ": " + rn1[1]).join('')).join(', ')}\n` + jtyj[0])
                    }).catch(err => {
                        reject(err)
                    })
                })
            } else if (vxn_pzva === '菜单名') {
                return new Promise((resolve, reject) => {
                    var diwr_neig_1 = Object.assign({}, diwr_neig_kp)
                    diwr_neig_1.zkrs = rn1
                    Promise.all([uyrs_ld_peng_5(diwr_slm[rn1], diwr_neig_1)]).then(jtyj => {
                        resolve("// 菜单名 " + rn1 + '\n\n' + jtyj[0])
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
                resolve(jtyj.join('\n\n\n\n'))
            }).catch(err => {
                reject(err)
            })
        })
    } else {
        uz_ms('csrf-rjqt tum hmpc vnwy-' + bnll_zkrs)
    }
}
module.exports = uyrs_ld_peng_5