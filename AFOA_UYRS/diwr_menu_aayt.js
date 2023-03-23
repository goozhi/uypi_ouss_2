const fs = require('fs')
const uz_ms = require("../AFOA_BX/uz_ms")
const path = require('path')
function diwr_menu_aayt(diwr_slm, diwr_neig_nmky, zkrs_1, diwr_nomr) {
    diwr_yhld = {}
    var vnwm_fo_1 = Object.keys(diwr_slm).filter(rn1 => !/diwr_nomr|vnwm_vnwy|neig|yxna_yowr|stats/.test(rn1)).map(rn1 => {
        return rn1
    })
    vnwm_fo_1.forEach(rn1=>{
        if (diwr_slm[rn1].neig['当前文件夹属性'] === '电子控制单元') {
            diwr_yhld[rn1]=99
        } else if (diwr_slm[rn1].neig['当前文件夹属性'] === '菜单名') {
            diwr_yhld[rn1]=diwr_menu_aayt(diwr_slm[rn1])
        }    
    })
    return diwr_yhld
}
module.exports = diwr_menu_aayt