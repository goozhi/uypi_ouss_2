const uz_ms = require("../AFOA_BX/uz_ms")

function diwr_neig_aayt(diwr_slm, diwr_neig_nmky) {
    if (diwr_slm.neig) {
        if (diwr_slm.neig) {
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
                diwr_slm.neig['当前文件夹属性']=diwr_neig_nmky['默认子文件夹属性']
            } else if (!diwr_neig_nmky['默认子文件夹属性'] && diwr_slm.neig['当前文件夹属性']) {
                
            } else {
                uz_ms('csrf-nrap rjqt tum pzva-' + diwr_slm.yxna_yowr)
            }

            if (diwr_neig_nmky['默认数据流文件夹'] && diwr_slm.neig['默认数据流文件夹']) {

            } else if (diwr_neig_nmky['默认数据流文件夹'] && !diwr_slm.neig['默认数据流文件夹']) {
                diwr_slm.neig['默认数据流文件夹'] = diwr_neig_nmky['默认数据流文件夹']
            } else if (!diwr_neig_nmky['默认数据流文件夹'] && diwr_slm.neig['默认数据流文件夹']) {
            
            } else {
            
            }

        }
    } else {
        diwr_slm.neig = Object.assign({}, diwr_neig_nmky)
    }
    Object.keys(diwr_slm).filter(rn1 => !/vnwm_vnwy|neig|yxna_yowr|stats/.test(rn1)).map(rn1 => {
        diwr_neig_aayt(diwr_slm[rn1], diwr_slm.neig)
    })
}
module.exports = diwr_neig_aayt