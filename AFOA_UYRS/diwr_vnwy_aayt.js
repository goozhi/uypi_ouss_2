const fs = require('fs')
const uz_ms = require("../AFOA_BX/uz_ms")
const path = require('path')
function diwr_vnwy_aayt(diwr_slm, diwr_neig_nmky, zkrs_1, diwr_nomr) {
    diwr_slm.diwr_nomr = diwr_nomr
    var diwr_vnwm_bnll_ahdb_nomr_vnwy = diwr_nomr.vnwm_nomr_ahdb_vnwy.filter(rn1 => {
        return !/^\.\./.test(path.relative(rn1.nikc, diwr_slm.yxna_yowr))
    })
    var diwr_bnll_ahdb_nomr_vnwy = {}
    diwr_vnwm_bnll_ahdb_nomr_vnwy.forEach(rn1 => {
        diwr_bnll_ahdb_nomr_vnwy[rn1['数据名']] = rn1
    })
    var reg_yhld
    if (diwr_slm.neig['子文件夹不含有']) {
        reg_yhld = new RegExp(`^(?:${diwr_slm.neig['子文件夹不含有'].map(rn1 => rn1["文件夹属性"]).join('|')})$`, 'i')
    } else {
        reg_yhld = /酾/
    }
    var diwr_vnwm_bnll_nmky_efpc = diwr_nomr.vnwm_nomr_nmky_vnwy.filter(rn1 => {
        return !/^\.\./.test(path.relative(rn1.nikc, diwr_slm.yxna_yowr)) && !reg_yhld.test(rn1['文件夹属性'])
    })
    if (diwr_vnwm_bnll_nmky_efpc.length) {
        if (diwr_slm.neig['当前文件夹属性'] === '电子控制单元') {
            var vnwm_hmpc_dk_pzva = diwr_vnwm_bnll_nmky_efpc.filter(rn1 => {
                return !(new RegExp(`"当前文件夹属性":"${rn1['文件夹属性']}"`, 'i').test(JSON.stringify(diwr_slm)))
            })
            vnwm_hmpc_dk_pzva.forEach(rn1 => {
                if (!rn1['文件夹名称']) {
                    uz_ms('csrf-aoao tszn rjqt tum wugy-' + JSON.stringify(rn1) + rn1.nikc)
                }
                if (!diwr_bnll_ahdb_nomr_vnwy[rn1['引用']]) {
                    uz_ms('csrf-wydb dk vnwy wu ac zznq-' + rn1['引用'] + rn1.nikc)
                } else {
                    diwr_slm[rn1['文件夹名称']] = Object.assign({}, {
                        yxna_yowr: diwr_slm.yxna_yowr,
                        neig: {
                            "当前文件夹属性": rn1['文件夹属性'],
                            "数据": { "引用": rn1['引用'] }
                        },
                        vnwm_vnwy: [{ zkrs: diwr_bnll_ahdb_nomr_vnwy[rn1['引用']].yxna, bqeo: diwr_bnll_ahdb_nomr_vnwy[rn1['引用']].bqeo }]
                    })
                }
            })
        }

    }
    Object.keys(diwr_slm).filter(rn1 => !/diwr_nomr|vnwm_vnwy|neig|yxna_yowr|stats/.test(rn1)).map(rn1 => {
        diwr_vnwy_aayt(diwr_slm[rn1], diwr_slm.neig, rn1, diwr_nomr)
    })
}
module.exports = diwr_vnwy_aayt