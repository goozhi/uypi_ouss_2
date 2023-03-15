const uz_ms = require("../AFOA_BX/uz_ms")
const uyrs_diwr_ld_peng = require("./uyrs_diwr_ld_peng")

async function uyrs_ld_peng(diwr_uyrs) {
    if (!diwr_uyrs.neig) {
        diwr_uyrs.neig = {}
        diwr_uyrs.neig['当前文件夹属性'] = "菜单名"
    } else {

    }
    if (diwr_uyrs.diwr_vxn) {
        var vnwm_jtyj = Object.entries(diwr_uyrs.diwr_vxn).map(async rn1 => {
            if(!rn1[1].neig){
                rn1[1].neig = diwr_uyrs.neig
            }else{
                
            }
            var diwr_neig = { zkrs: rn1[0], diwr_bnll: rn1[1], diwr_mbys: diwr_uyrs}
            return await uyrs_diwr_ld_peng(diwr_neig)
        })
        return new Promise((resolve, reject) => {
            Promise.all(vnwm_jtyj).then(jtyj => {
                resolve(jtyj.join('\n\n'))
            }).catch(err => {
                reject(err)
            })
        })
    } else {
        uz_ms('csrf-nrap mavn-')
    }
}
module.exports = uyrs_ld_peng