const fs = require('fs')
const uz_ms = require("../AFOA_BX/uz_ms")
const path = require('path')
function diwr_neig_aayt(diwr_slm, diwr_neig_nmky, zkrs_1, diwr_nomr) {
    diwr_slm.diwr_nomr = diwr_nomr
    if (diwr_slm.neig) {
        if (diwr_slm.neig) {
            if (diwr_slm.neig['声明全局数据']) {
                if (!diwr_slm.neig['声明全局数据'].map) {
                    uz_ms('csrf-nomr vnwy aoao ji diwr vnwm-' + JSON.stringify(diwr_slm.neig['声明全局数据']))
                }
                diwr_slm.neig['声明全局数据'].forEach(rn1 => {
                    rn1.nikc = diwr_slm.yxna_yowr
                    rn1.yxna = path.join(rn1.nikc, rn1['引入文件'])
                    if (!fs.existsSync(rn1.yxna)) {
                        uz_ms('csrf-yxna ac zznq-' + rn1.yxna + '-kp-' + JSON.stringify(rn1))
                    }
                    rn1.bqeo = fs.readFileSync(rn1.yxna).toString()
                })
                diwr_nomr.vnwm_nomr_ahdb_vnwy.push(...diwr_slm.neig['声明全局数据'])
            }
            if (diwr_slm.neig['电子控制单元默认含有']) {
                if (!diwr_slm.neig['电子控制单元默认含有'].map) {
                    uz_ms('csrf-wydb nomr vnwy aoao ji diwr vnwm-' + JSON.stringify(diwr_slm.neig['电子控制单元默认含有']))
                }
                diwr_slm.neig['电子控制单元默认含有'].forEach(rn1 => {
                    rn1.nikc = diwr_slm.yxna_yowr
                })
                diwr_nomr.vnwm_nomr_nmky_vnwy.push(...diwr_slm.neig['电子控制单元默认含有'])
            }
            if (diwr_neig_nmky['默认数据流文件夹'] && diwr_slm.neig['默认数据流文件夹']) {

            } else if (diwr_neig_nmky['默认数据流文件夹'] && !diwr_slm.neig['默认数据流文件夹']) {
                diwr_slm.neig['默认数据流文件夹'] = diwr_neig_nmky['默认数据流文件夹']
            } else if (!diwr_neig_nmky['默认数据流文件夹'] && diwr_slm.neig['默认数据流文件夹']) {

            } else {

            }
            if (diwr_neig_nmky['默认元件测试文件夹'] && diwr_slm.neig['默认元件测试文件夹']) {

            } else if (diwr_neig_nmky['默认元件测试文件夹'] && !diwr_slm.neig['默认元件测试文件夹']) {
                diwr_slm.neig['默认元件测试文件夹'] = diwr_neig_nmky['默认元件测试文件夹']
            } else if (!diwr_neig_nmky['默认元件测试文件夹'] && diwr_slm.neig['默认元件测试文件夹']) {

            } else {

            }

            if (diwr_neig_nmky['默认特殊功能文件夹'] && diwr_slm.neig['默认特殊功能文件夹']) {

            } else if (diwr_neig_nmky['默认特殊功能文件夹'] && !diwr_slm.neig['默认特殊功能文件夹']) {
                diwr_slm.neig['默认特殊功能文件夹'] = diwr_neig_nmky['默认特殊功能文件夹']
            } else if (!diwr_neig_nmky['默认特殊功能文件夹'] && diwr_slm.neig['默认特殊功能文件夹']) {

            } else {

            }

            if (diwr_neig_nmky['默认版本信息文件夹'] && diwr_slm.neig['默认版本信息文件夹']) {

            } else if (diwr_neig_nmky['默认版本信息文件夹'] && !diwr_slm.neig['默认版本信息文件夹']) {
                diwr_slm.neig['默认版本信息文件夹'] = diwr_neig_nmky['默认版本信息文件夹']
            } else if (!diwr_neig_nmky['默认版本信息文件夹'] && diwr_slm.neig['默认版本信息文件夹']) {

            } else {

            }

            if (diwr_neig_nmky['默认读码文件夹'] && diwr_slm.neig['默认读码文件夹']) {

            } else if (diwr_neig_nmky['默认读码文件夹'] && !diwr_slm.neig['默认读码文件夹']) {
                diwr_slm.neig['默认读码文件夹'] = diwr_neig_nmky['默认读码文件夹']
            } else if (!diwr_neig_nmky['默认读码文件夹'] && diwr_slm.neig['默认读码文件夹']) {

            } else {

            }

            if (diwr_neig_nmky['默认清码文件夹'] && diwr_slm.neig['默认清码文件夹']) {

            } else if (diwr_neig_nmky['默认清码文件夹'] && !diwr_slm.neig['默认清码文件夹']) {
                diwr_slm.neig['默认清码文件夹'] = diwr_neig_nmky['默认清码文件夹']
            } else if (!diwr_neig_nmky['默认清码文件夹'] && diwr_slm.neig['默认清码文件夹']) {

            } else {

            }
            if (diwr_neig_nmky['默认协议'] && diwr_slm.neig['当前协议']) {
                diwr_slm.neig['默认协议'] = diwr_neig_nmky['默认协议'].map(rn1 => {
                    return Object.assign({}, rn1, diwr_slm.neig['当前协议'])
                })
            } else if (diwr_neig_nmky['默认协议'] && !diwr_slm.neig['当前协议']) {
                diwr_slm.neig['默认协议'] = diwr_neig_nmky['默认协议']
            } else if (!diwr_neig_nmky['默认协议'] && diwr_slm.neig['当前协议']) {

            } else {
                uz_ms('csrf-nrap 协议-' + diwr_slm.yxna_yowr)
            }

            if (diwr_neig_nmky['默认子文件夹属性'] && diwr_slm.neig['当前文件夹属性']) {

            } else if (diwr_neig_nmky['默认子文件夹属性'] && !diwr_slm.neig['当前文件夹属性']) {
                diwr_slm.neig['当前文件夹属性'] = diwr_neig_nmky['默认子文件夹属性']

            } else if (!diwr_neig_nmky['默认子文件夹属性'] && diwr_slm.neig['当前文件夹属性']) {

            } else {
                Object.entries(diwr_neig_nmky).forEach(rn1 => {
                    if (/^默认.*文件夹$/.test(rn1[0])) {
                        if (new RegExp(rn1[1]).test(zkrs_1)) {
                            diwr_slm.neig['当前文件夹属性'] = rn1[0].replace(/默认(.*)文件夹/, '$1')
                        }
                    }
                })
                if (diwr_slm.neig['当前文件夹属性']) {

                } else {
                    uz_ms('csrf-nrap rjqt tum pzva-' + diwr_slm.yxna_yowr)
                }
            }




        }
    } else {
        diwr_slm.neig = Object.assign({}, diwr_neig_nmky)
        try {
            delete diwr_slm.neig['当前文件夹属性']
        } catch (err) {
            throw err
        }
        if (diwr_neig_nmky['默认子文件夹属性']) {
            diwr_slm.neig['当前文件夹属性'] = diwr_neig_nmky['默认子文件夹属性']
            delete diwr_slm.neig['默认子文件夹属性']
        } else {
            Object.entries(diwr_neig_nmky).forEach(rn1 => {
                if (/^默认.*文件夹$/.test(rn1[0])) {
                    if (new RegExp(rn1[1]).test(zkrs_1)) {
                        diwr_slm.neig['当前文件夹属性'] = rn1[0].replace(/默认(.*)文件夹/, '$1')
                    }
                }
            })
            if (!diwr_slm.neig['当前文件夹属性']) {
                uz_ms('csrf-nrap rjqt tum pzva-' + diwr_slm.yxna_yowr)
            }
        }
    }
    var diwr_vnwm_bnll_ahdb_nomr_vnwy = diwr_nomr.vnwm_nomr_ahdb_vnwy.filter(rn1 => {
        return !/^\.\./.test(path.relative(rn1.nikc, diwr_slm.yxna_yowr))
    })
    var diwr_bnll_ahdb_nomr_vnwy = {}
    diwr_vnwm_bnll_ahdb_nomr_vnwy.forEach(rn1 => {
        diwr_bnll_ahdb_nomr_vnwy[rn1['数据名']] = rn1
    })
    var diwr_vnwm_bnll_nmky_efpc = diwr_nomr.vnwm_nomr_nmky_vnwy.filter(rn1 => {
        return !/^\.\./.test(path.relative(rn1.nikc, diwr_slm.yxna_yowr))
    })
    if (diwr_vnwm_bnll_nmky_efpc.length) {
        if (diwr_slm.neig['当前文件夹属性'] === '电子控制单元') {
            var vnwm_hmpc_dk_pzva = diwr_vnwm_bnll_nmky_efpc.filter(rn1 => {
                if (/安全气發/.test(zkrs_1)&&/读/.test(rn1['文件夹属性'])) {
                    throw (JSON.stringify(diwr_slm))
                }
                return !(new RegExp(`"当前文件夹属性":"${rn1['文件夹属性']}"`, 'i').test(JSON.stringify(diwr_slm)))
            })
            vnwm_hmpc_dk_pzva.forEach(rn1 => {
                if (!rn1['文件夹名称']) {
                    uz_ms('csrf-aoao tszn rjqt tum wugy-' + JSON.stringify(rn1))
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
        diwr_neig_aayt(diwr_slm[rn1], diwr_slm.neig, rn1, diwr_nomr)
    })
}
module.exports = diwr_neig_aayt