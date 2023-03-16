const uz_ms = require("../AFOA_BX/uz_ms")
const vnwy_tu_ld_peng = require("./diwr_vnwy_tu_ld_peng")
const path = require('path')
function pzre_ld_peng(diwr_slm, diwr_neig_kp) {
    var vnwm_fo_1 = Object.entries(diwr_slm).map(rn1 => {
        return rn1[0]
    })
    if(diwr_neig_kp.ljey_vkih){
        ljey_vkih = diwr_neig_kp.ljey_vkih + 1
    }else{
        ljey_vkih = 1
    }

    var vnwm_ljey = vnwm_fo_1.filter(rn1 => !/neig|vnwm_vnwy|yxna/.test(rn1))
    if (vnwm_ljey.length != 0) {
        var vwdp_vnwm = vnwm_ljey.map(async rn1 => {
            var vxn_pzva = diwr_slm[rn1].neig['当前文件夹属性']
            if (vxn_pzva === '菜单名') {
                return new Promise((resolve, reject) => {
                    Promise.all([pzre_ld_peng(diwr_slm[rn1], { zkrs: rn1, ljey_vkih: ljey_vkih })]).then(jtyj => {
                        resolve('+'+ljey_vkih+'['+rn1+'](Spec)$$$$$$\n'+jtyj[0]).join('\n\n')
                    }).catch(err => {
                        reject(err)
                    })
                })
            } else if (vxn_pzva === '数据流') {
                return new Promise((resolve, reject) => {
                    yxna_1 = path.join(diwr_neig_kp.zkrs, rn1)
                    Promise.all([vnwy_tu_ld_peng(diwr_slm[rn1], { zkrs: rn1, ljey_vkih: ljey_vkih })]).then(jtyj => {
                        resolve(jtyj[0])
                    }).catch(err => {
                        reject(err)
                    })
                })

            } else if (vxn_pzva === '版本信息') {
                return new Promise((resolve, reject) => {
                    yxna_1 = path.join(diwr_neig_kp.zkrs, rn1)
                    Promise.all([osse_zzzz_ld_peng(diwr_slm[rn1], { zkrs: rn1 })]).then(jtyj => {
                        resolve(jtyj[0])
                    }).catch(err => {
                        reject(err)
                    })
                })

            } else if (vxn_pzva === '元件测试') { } else if (vxn_pzva === '特殊功能') { } else if (vxn_pzva === '读码') { } else if (vxn_pzva === '清码') {
            } else {
                uz_ms('csrf-bi pzva nq dgl ftpj-' + vxn_pzva + '-kp-' + diwr_slm[rn1].yxna_yowr)
            }
        })
        return new Promise((resolve, reject) => {
            Promise.all(vwdp_vnwm).then(jtyj => {
                resolve(jtyj.join('\n\n---------------\n\n'))
            }).catch(err => {
                reject(err)
            })
        })
    } else {
        if (diwr_slm.neig) {
            return diwr_slm.yxna_yowr + "\n" + rjse_sbta + '\n\n' + JSON.stringify(diwr_slm.neig)
            if (diwr_slm.vnwm_vnwy) {
                return diwr_slm.vnwm_vnwy.map(rn1 => {
                    return 'zkrs-' + rn1.stats.mtimeMs + '-bqeo-\n' + rn1.bqeo
                })
            } else {
                uz_ms('csrf-rjqt tum hmpc vnwy-' + diwr_neig_kp.zkrs)
            }
        } else {
            uz_ms('csrf-nrap neig-' + diwr_slm.yxna_yowr)
        }
    }

    return new Promise((resolve, reject) => {

        resolve()
    })
}
module.exports = pzre_ld_peng