const diwr_neig_zjzj = require("../AFOA_BX/diwr_neig_zjzj")
const uz_ms = require("../AFOA_BX/uz_ms")

async function uyrs_diwr_ld_peng(diwr_neig_kp) {
    var vnwm_fo_1 = [
        'zkrs',
        'diwr_bnll',
        'diwr_mbys'
    ]
    diwr_neig_zjzj(diwr_neig_kp, vnwm_fo_1)
    return new Promise((resolve, reject) => {
        if (diwr_neig_kp.neig) {
            if(diwr_neig_kp["当前文件夹属性"]==="菜单名"){
                
            }else{
                
            }
            resolve(neig)
        } else {
            try {
                uz_ms('csrf-mcvn nrap-')
            } catch (err) {
                reject(err)
            }
        }
    })
}
module.exports = uyrs_diwr_ld_peng