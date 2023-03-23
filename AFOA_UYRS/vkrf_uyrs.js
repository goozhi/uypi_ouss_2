const fs = require('fs');
const diwr_neig_zjzj = require('../AFOA_BX/diwr_neig_zjzj');
const nikc_ld_diwr_vkey_os = require('./nikc_ld_diwr_vkey_os');
const uz_ms = require('../AFOA_BX/uz_ms');
const uyrs_ld_peng_5 = require('./uyrs_ld_peng_5');
const diwr_neig_aayt = require('./diwr_neig_aayt');
const path = require('path');
const diwr_vnwy_aayt = require('./diwr_vnwy_aayt');
const diwr_ld_peng_menu = require('./diwr_ld_peng_ljey');
const ld_vnwm_peng_ljey = require('./ld_vnwm_peng_ljey');
const ld_rj_peng_ljey = require('./ld_rj_peng_ljey');
async function vkrf_uyrs(diwr_neig_kp) {
    if (!diwr_neig_kp) {
        uz_ms('csrf-nrap mcvn-')
    } else {
        var vnwm_fo_1 = [
            'reject'
            , 'nikc_uyrs'
        ]
        diwr_neig_zjzj(diwr_neig_kp, vnwm_fo_1)
    }

    if (!fs.existsSync(diwr_neig_kp.nikc_uyrs)) {
        uz_ms('csrf-nikc ac zznq-' + diwr_neig_kp.nikc_uyrs)
    }
    var yxna_uyrs_neig = path.join(diwr_neig_kp.nikc_uyrs, 'project.json')
    if (!fs.existsSync(yxna_uyrs_neig)) {
        uz_ms('csrf-project.json ac zznq-')
    } else {
        diwr_slm = nikc_ld_diwr_vkey_os(diwr_neig_kp.nikc_uyrs)
        try {
            delete (require.cache[require.resolve(yxna_uyrs_neig)]);
        } catch (err) {

        }
        diwr_slm.neig = require(yxna_uyrs_neig)
        diwr_slm.neig['当前文件夹属性'] = '工程'
        var diwr_nomr = { vnwm_nomr_ahdb_vnwy: [], vnwm_nomr_nmky_vnwy: [] }
        diwr_neig_aayt(diwr_slm, diwr_slm.neig, diwr_slm.neig['品牌标识'], diwr_nomr)
        diwr_vnwy_aayt(diwr_slm, diwr_slm.neig, diwr_slm.neig['品牌标识'], diwr_nomr)
        var rj_ljey_jtyj = await diwr_ld_peng_menu(diwr_slm, { zkrs: 'uyrs_uufb', pzre_vkih: -1 })
        var diwr_ljey = JSON.parse("{"+rj_ljey_jtyj+"}")
        var diwr_vnwm_ljey=[]
        ld_vnwm_peng_ljey(diwr_ljey, diwr_vnwm_ljey)
        var rjse_ljey_peng = "@menu\n"+ld_rj_peng_ljey(diwr_vnwm_ljey)
        if(fs.existsSync('D:\\XYZD\\project_test\\xyzd.json')){
            fs.writeFileSync('D:\\XYZD\\project_test\\xyzd.json', JSON.stringify(diwr_slm))
        }
        var rj_sys_jtyj
        try {
            rj_sys_jtyj = "@SYS\n\n" + await uyrs_ld_peng_5(diwr_slm, { zkrs: 'uyrs_uufb', pzre_vkih: -1 })
        } catch (err) {
            throw err
        }
        var yxna_sys = path.join(diwr_slm.yxna_yowr, "sysData.txt")
        var yxna_menu = path.join(diwr_slm.yxna_yowr, "menuData.txt")
        fs.writeFileSync(yxna_sys, rj_sys_jtyj)
        fs.writeFileSync(yxna_menu, rjse_ljey_peng)
        return '已写入' + yxna_sys +'\n'+yxna_menu
    }
}
module.exports = vkrf_uyrs;