const fs = require('fs');
const diwr_neig_zjzj = require('../AFOA_BX/diwr_neig_zjzj');
const nikc_ld_diwr_vkey_os = require('./nikc_ld_diwr_vkey_os');
const uz_ms = require('../AFOA_BX/uz_ms');
const encoding = require('encoding')
const diwr_neig_aayt = require('./diwr_neig_aayt');
const path = require('path');
const diwr_vnwy_aayt = require('./diwr_vnwy_aayt');
const diwr_ld_peng_menu = require('./diwr_ld_peng_ljey');
const ld_vnwm_peng_ljey = require('./ld_vnwm_peng_ljey');
const ld_rj_peng_ljey = require('./ld_rj_peng_ljey');
const bat_vkrf = require('./bat_vkrf');
const { exec } = require('child_process');
const tips_rj = require('./tips_rj');
const hd_rjqt_tum = require('../AFOA_BX/hd_rjqt_tum');
const dtc_rj = require('./dtc_rj');
const cxav_diwr_pzva_zhvt_ab_vnwm = require('../AFOA_BX/cxav_diwr_pzva_zhvt_ab_vnwm');
const eyrh_neig_rscs = require('./eyrh_neig_rscs');
const vo_vyn_ld_diwr = require('./vo_vyn_ld_diwr');
const eyrh_hqmv = require('./eyrh_hqmv');
async function eyrh_zogl(diwr_neig_kp) {
    if (!diwr_neig_kp) {
        uz_ms('csrf-nrap mcvn-')
    } else {
        var vnwm_fo_1 = [
            'reject'
            , 'nikc_uyrs'
            , 'nikc_YDDL'
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
        if (fs.existsSync('D:\\XYZD\\project_test')) {
            fs.writeFileSync('D:\\XYZD\\project_test\\xyzd.json', JSON.stringify(diwr_slm, null, 2))
        }
        var vnwm_eyrh_nikc = []
        cxav_diwr_pzva_zhvt_ab_vnwm(vnwm_eyrh_nikc, diwr_slm, '当前文件夹属性', '单体')
        vnwm_eyrh_nikc.map(rn1 => {
            try {
                eyrh_neig_rscs(rn1)
            } catch (err) {
                if (err.message) {
                    err.message = rn1.yxna_yowr + '\n' + err.message
                }
                throw err
            }
            if (rn1['测试']) {
                var yxna_1 = path.join(rn1.yxna_yowr, rn1['测试'])
                if (!fs.existsSync(yxna_1)) {
                    uz_ms('csrf-zogl dk yxna ac zznq-' + yxna_1)
                } else {
                    var rj_vo_vyn = fs.readFileSync(yxna_1).toString()
                    var diwr_vnwy = vo_vyn_ld_diwr(rj_vo_vyn, yxna_1)
                    var rj_nvcm
                    try {
                        rj_nvcm = eyrh_hqmv(rn1, diwr_vnwy)
                    } catch (err) {
                        if (err.message) {
                            err.message = rn1.yxna_yowr + '\n' + err.message
                        }
                        throw err
                    }
                    fs.writeFileSync(path.join(rn1.yxna_yowr, './单体测试报告.txt'), rj_nvcm)
                }
            }
        })
        return "测试完成，请在"+diwr_neig_kp.nikc_uyrs+"中的单体文件夹查看报告"
    }
}
module.exports = eyrh_zogl;