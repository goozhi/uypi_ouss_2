const fs = require('fs')
const uz_ms = require("../AFOA_BX/uz_ms")
const path = require('path')
function diwr_menu_aayt(diwr_slm, diwr_neig_nmky, zkrs_1, diwr_nomr) {
    if (diwr_slm.neig['当前文件夹属性'] === '电子控制单元') {
        console.log(zkrs_1)
    }else if(diwr_slm.neig['当前文件夹属性'] === '菜单名') {
        console.log(zkrs_1)
    }
    Object.keys(diwr_slm).filter(rn1 => !/diwr_nomr|vnwm_vnwy|neig|yxna_yowr|stats/.test(rn1)).map(rn1 => {
        diwr_menu_aayt(diwr_slm[rn1], diwr_slm.neig, rn1, diwr_nomr)
    })
}
module.exports = diwr_menu_aayt