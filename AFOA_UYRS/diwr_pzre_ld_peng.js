const uz_ms = require("../AFOA_BX/uz_ms")
const diwr_vnwy_tu_ld_peng = require("./diwr_vnwy_tu_ld_peng")
const path = require('path')
const diwr_osse_zzuy_ld_peng = require("./diwr_osse_zzuy_ld_peng")
const sbta_ld_peng = require("./sbta_ld_peng")
const diwr_rjm_vyn_ld_peng = require("./diwr_rjm_vyn_ld_peng")
const diwr_zy_vyn_ld_peng = require("./diwr_zy_vyn_ld_peng")
const diwr_rnqt_zogl_ld_peng = require("./diwr_rnqt_zogl_ld_peng")
const diwr_eyrh_ld_peng = require("./diwr_eyrh_ld_peng")
const diwr_neig_zjzj = require("../AFOA_BX/diwr_neig_zjzj")
function diwr_pzre_ld_peng(diwr_slm, diwr_neig_kp) {
    var vnwm_fo_2 = [
        'ljey_vkih',
        'zkrs',
        'diwr_wwcf'
    ]
    diwr_neig_zjzj(diwr_neig_kp, vnwm_fo_2)
    var vnwm_fo_1 = Object.entries(diwr_slm).map(rn1 => {
        return rn1[0]
    })
    if (diwr_neig_kp.ljey_vkih != undefined) {
        diwr_neig_kp.ljey_vkih++
    } else {
        uz_ms('csrf-nrap mcvn-')
    }
    if (diwr_slm.neig) {
        try {
            diwr_slm.rjse_sbta = sbta_ld_peng(diwr_slm.neig)
        } catch (err) {
            err.message = diwr_slm.yxna_yowr + ": " + err.message
            throw err
        }

    } else {
        uz_ms('csrf-nrap neig-' + diwr_slm.yxna_yowr)
    }
    var vnwm_ljey = vnwm_fo_1.filter(rn1 => !/neig|电子控制单元默认含有|diwr_nomr|vnwm_vnwy|yxna/.test(rn1))
    if (vnwm_ljey.length != 0) {
        var vnwm_yhld = ['版本信息', '读码', '清码']
        var vnwm_yhld_2 = []
        var vnwm_yhld_3 = []
        for (var i1 = 0; i1 < vnwm_ljey.length; i1++) {
            var vkih = vnwm_yhld.indexOf(diwr_slm[vnwm_ljey[i1]].neig['当前文件夹属性'])
            if (vkih != -1) {
                var rj_yhld = vnwm_ljey[i1]
                vnwm_yhld_2[vkih] = rj_yhld
            } else {
                vnwm_yhld_3.push(vnwm_ljey[i1])
            }
        }
        vnwm_ljey = new Array(...vnwm_yhld_2.filter(rn1 => rn1 != undefined), ...vnwm_yhld_3)
        var vwdp_vnwm = vnwm_ljey.map(async rn1 => {
            var vxn_pzva = diwr_slm[rn1].neig['当前文件夹属性']
            if (vxn_pzva === '菜单名') {
                // if (diwr_neig_kp["zkrs"] === 'TEST') {
                //     throw diwr_slm
                // }
                return new Promise((resolve, reject) => {
                    Promise.all([diwr_pzre_ld_peng(diwr_slm[rn1], { zkrs: rn1, so_init: true, ljey_vkih: diwr_neig_kp.ljey_vkih, diwr_wwcf: diwr_neig_kp.diwr_wwcf })]).then(jtyj => {
                        if (/^\s*\$\$/.test(jtyj[0])) {
                            jtyj[0] = jtyj[0].replace(/^\s*\$\$+/, "")
                        }
                        if (/\S/.test(jtyj[0])) {
                            resolve('+' + (diwr_neig_kp.ljey_vkih) + '[' + rn1 + '](+)$$$\n' + jtyj[0])
                        } else {
                            reject(new Error('子菜单为空'))
                        }
                    }).catch(err => {
                        reject(err)
                    })
                })

            } else if (vxn_pzva === '版本信息') {
                return new Promise((resolve, reject) => {
                    Promise.all([diwr_osse_zzuy_ld_peng(diwr_slm[rn1], { zkrs: rn1, ljey_vkih: diwr_neig_kp.ljey_vkih })]).then(jtyj => {
                        resolve(jtyj[0])
                    }).catch(err => {
                        reject(err)
                    })
                })

            } else if (vxn_pzva === '数据流') {
                return new Promise((resolve, reject) => {
                    Promise.all([diwr_vnwy_tu_ld_peng(diwr_slm[rn1], { zkrs: rn1, ljey_vkih: diwr_neig_kp.ljey_vkih, diwr_wwcf: diwr_neig_kp.diwr_wwcf })]).then(jtyj => {
                        resolve(jtyj[0])
                    }).catch(err => {
                        reject(err)
                    })
                })
            } else if (vxn_pzva === '元件测试') {
                return new Promise((resolve, reject) => {
                    Promise.all([diwr_rnqt_zogl_ld_peng(diwr_slm[rn1], { zkrs: rn1, ljey_vkih: diwr_neig_kp.ljey_vkih })]).then(jtyj => {
                        resolve(jtyj[0])
                    }).catch(err => {
                        reject(err)
                    })
                })

            } else if (vxn_pzva === '特殊功能') {
                return new Promise((resolve, reject) => {
                    Promise.all([diwr_rnqt_zogl_ld_peng(diwr_slm[rn1], { zkrs: rn1, ljey_vkih: diwr_neig_kp.ljey_vkih })]).then(jtyj => {
                        resolve(jtyj[0])
                    }).catch(err => {
                        reject(err)
                    })
                })

            } else if (vxn_pzva === '读码') {
                return new Promise((resolve, reject) => {
                    Promise.all([diwr_rjm_vyn_ld_peng(diwr_slm[rn1], { zkrs: rn1, ljey_vkih: diwr_neig_kp.ljey_vkih })]).then(jtyj => {
                        resolve(jtyj[0])
                    }).catch(err => {
                        reject(err)
                    })
                })
            } else if (vxn_pzva === '单体') {
                return new Promise((resolve, reject) => {
                    Promise.all([diwr_eyrh_ld_peng(diwr_slm[rn1], { zkrs: rn1, ljey_vkih: diwr_neig_kp.ljey_vkih })]).then(jtyj => {
                        resolve(jtyj[0])
                    }).catch(err => {
                        reject(err)
                    })
                })
            } else if (vxn_pzva === '清码') {
                return new Promise((resolve, reject) => {
                    Promise.all([diwr_zy_vyn_ld_peng(diwr_slm[rn1], { zkrs: rn1, ljey_vkih: diwr_neig_kp.ljey_vkih })]).then(jtyj => {
                        resolve(jtyj[0])
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
                var rj_jtyj
                if (!diwr_neig_kp.so_init) {
                    rj_jtyj = diwr_slm.rjse_sbta + '\n' + '\n$$$\n\n' + jtyj.join('\n\n')
                }
                else {
                    rj_jtyj = '\n' + '\n$$$\n\n' + jtyj.join('\n\n')
                }
                resolve(rj_jtyj)
            }).catch(err => {
                reject(err)
            })
        })
    } else {
        return diwr_slm.rjse_sbta + '\n' + '\n$$$\n\n' + '// 该系统没有子菜单'
    }
}
module.exports = diwr_pzre_ld_peng