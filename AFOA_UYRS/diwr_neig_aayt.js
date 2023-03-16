const uz_ms = require("../AFOA_BX/uz_ms")
function diwr_neig_aayt(diwr_slm, diwr_neig_nmky, zkrs_1) {
    if (diwr_slm.neig) {
        if (diwr_slm.neig) {
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
                // if(diwr_neig_nmky['默认子文件夹属性']==='数据流'){
                //     throw JSON.stringify(diwr_slm)
                // }

            } else if (!diwr_neig_nmky['默认子文件夹属性'] && diwr_slm.neig['当前文件夹属性']) {

            } else {
                Object.entries(diwr_neig_nmky).forEach(rn1 => {
                    if (/^默认.*文件夹$/.test(rn1[0])) {
                        if (new RegExp(rn1[1]).test(zkrs_1)) {
                            diwr_slm.neig['当前文件夹属性'] = rn1[1]
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
        // delete diwr_slm.neig['当前文件夹属性']
        if (diwr_neig_nmky['默认子文件夹属性']) {
            diwr_slm.neig['当前文件夹属性'] = diwr_neig_nmky['默认子文件夹属性']
            delete diwr_slm.neig['默认子文件夹属性']
        } else {
            Object.entries(diwr_neig_nmky).forEach(rn1 => {
                if (/^默认.*文件夹$/.test(rn1[0])) {
                    if (new RegExp(rn1[1]).test(zkrs_1)) {
                        diwr_slm.neig['当前文件夹属性'] = rn1[1]
                    }
                }
            })
            if(!diwr_slm.neig['当前文件夹属性']){
                uz_ms('csrf-nrap rjqt tum pzva-' + diwr_slm.yxna_yowr)
            }
        }
    }
    Object.keys(diwr_slm).filter(rn1 => !/vnwm_vnwy|neig|yxna_yowr|stats/.test(rn1)).map(rn1 => {
        diwr_neig_aayt(diwr_slm[rn1], diwr_slm.neig, rn1)
    })
}
module.exports = diwr_neig_aayt