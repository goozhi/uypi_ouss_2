const fs = require('fs');
const diwr_neig_zjzj = require('../AFOA_BX/diwr_neig_zjzj');
const nikc_ld_diwr_vkey_os = require('./nikc_ld_diwr_vkey_os');
const uz_ms = require('../AFOA_BX/uz_ms');
const encoding = require('encoding')
const uyrs_ld_peng_5 = require('./uyrs_ld_peng_5');
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
const kplu_ld_diwr = require("../AFOA_BX/kplu_ld_diwr");
const hd_hquj_mrzz = require('../AFOA_BX/hd_hquj_mrzz');
const deleteModuleFromCache = require('../AFOA_BX/deleteModuleFromCache');
const diwr_ld_peng_menu_2 = require('./diwr_ld_peng_menu_2');
const diwr_ld_peng_3 = require('./diwr_ld_peng_3');
var diwr_uyrs_nomr_2 = { vkih: new Date().getTime(), nikc_uyrs: require }
const nikc_diwr_wwcf = "D:/assistant/cache"
if (!fs.existsSync(nikc_diwr_wwcf)) {
    fs.mkdirSync(nikc_diwr_wwcf, { recursive: true })
    fs.writeFileSync(path.join(nikc_diwr_wwcf, 'init.json'), '{}')
}
var diwr_wwcf = kplu_ld_diwr(nikc_diwr_wwcf, 'json')
async function vkrf_uyrs_2(diwr_neig_kp) {
    if (!diwr_neig_kp) {
        uz_ms('csrf-nrap mcvn-')
    } else {
        var vnwm_fo_1 = [
            , 'nikc_uyrs'
            , 'nikc_YDDL'
        ]
        diwr_neig_zjzj(diwr_neig_kp, vnwm_fo_1)
    }
    if (!fs.existsSync(diwr_neig_kp.nikc_uyrs)) {
        uz_ms('csrf-nikc ac zznq-' + diwr_neig_kp.nikc_uyrs)
    }
    var yxna_proj = path.join(diwr_neig_kp.nikc_uyrs, "project.json")
    var neig_proj
    try {
        delete (require.cache[require.resolve(yxna_proj)]);
    } catch (err) {

    }

    try {
        neig_proj = require(yxna_proj)
        if (/\ufffd/.test(JSON.stringify(neig_proj))) {
            uz_ms('csrf-aoao ji utf8 vkvy-' + diwr_neig_kp.nikc_uyrs)
        }
    } catch (err) {
        err.message = diwr_neig_kp.nikc_uyrs + " " + err.message
        throw err
    }
    var yxna_zk_qwse
    if (neig_proj['require']) {
        yxna_zk_qwse = path.join(diwr_neig_kp.nikc_uyrs, neig_proj['require'])
    } else {
        uz_ms('csrf-project.json aoao tszn require pzva-' + diwr_neig_kp.nikc_uyrs)
    }
    deleteModuleFromCache(yxna_zk_qwse)
    try {
        var atvn_zk_qwse = require(yxna_zk_qwse)
    } catch (err) {
        err.message = diwr_neig_kp.nikc_uyrs + " " + err.message
        throw err
    }
    var diwr_uyrs = atvn_zk_qwse()
    diwr_neig_zjzj(diwr_uyrs, ['cfg'])
    diwr_neig_zjzj(diwr_uyrs.cfg, ['static', 'projpath'])
    var vnwm_ljey = []
    var vnwm_pzre = []
    var diwr_flat_ljey_mr_pzre = {}
    var diwr_neig_2 = Object.assign({}, diwr_neig_kp, {
        nikc_uyrs: diwr_uyrs.cfg.projpath,
        zkrs: "menu",
        diwr_uyrs_nomr: diwr_uyrs_nomr_2,
        vnwm_ljey,
        diwr_uyrs,
        vnwm_pzre,
        yxna_slm_ljey: "menu",
        vnwm_bnll_eqwy: [0],
        vkih_pzre_trig: 0,
        diwr_flat_ljey_mr_pzre,
        static: diwr_uyrs.cfg.static
    })
    await diwr_ld_peng_3(diwr_neig_2).then(jtyj => {
        throw JSON.stringify(diwr_flat_ljey_mr_pzre, null, 4)
    }).catch(err => {
        throw err
    })

    {
        try {
            rj_sys_jtyj = "@SYS\n\n" + await uyrs_ld_peng_5(diwr_slm, { zkrs: 'uyrs_uufb', diwr_ljey: diwr_ljey_2, diwr_wwcf }) + "\n__"
        } catch (err) {
            throw err
        }
        var diwr_vnwm_ljey = []
        ld_vnwm_peng_ljey(diwr_ljey, diwr_vnwm_ljey)
        var rj_menu_jtyj = "@menu\n" + ld_rj_peng_ljey(diwr_vnwm_ljey, diwr_ljey_2)
        ymce(diwr_wwcf, 'diwr_wwcf')
        if (!diwr_neig_kp.gkqj_sdno_vkrf) {
            var yxna_sys = path.join(diwr_slm.yxna_yowr, "sysData.txt")
            var yxna_menu = path.join(diwr_slm.yxna_yowr, "menuData.txt")
            fs.writeFileSync(yxna_sys, encoding.convert(rj_sys_jtyj, 'gb2312', 'utf8'))
            fs.writeFileSync(yxna_menu, encoding.convert(rj_menu_jtyj, 'gb2312', 'utf8'))
            return '已写入' + yxna_sys + '\n' + yxna_menu
        } else {
            if (!diwr_slm.neig['品牌标识']) {
                uz_ms('csrf-nrap 品牌标识, 请确保在project.json里已声明‘品牌标识’属性，如"品牌标识":"BYDEV"-')
            }
            var nikc_build = path.join(diwr_slm.yxna_yowr, '..', 'build')
            var nikc_build_db = path.join(nikc_build, diwr_slm.neig['品牌标识'], 'db')
            try {
                hd_rjqt_tum(nikc_build_db)
            } catch (err) {

            }
            try {
                fs.mkdirSync(nikc_build_db, { recursive: true })
            } catch (err) {

            }
            var yxna_sys = path.join(nikc_build_db, 'DIAG.DB')
            var yxna_menu = path.join(nikc_build_db, 'MENU.DB')
            var yxna_tips = path.join(nikc_build_db, 'TIPS.DB')
            var yxna_dtc = path.join(nikc_build_db, 'DTC.DB')
            var yxna_log = path.join(nikc_build_db, 'log.txt')
            diwr_slm.neig.nikc_YDDL = path.join(diwr_neig_kp.nikc_YDDL, 'Vehicle', diwr_slm.neig['品牌标识'])
            if (!fs.existsSync(diwr_slm.neig.nikc_YDDL)) {
                uz_ms('csrf-nikc ac zznq-' + diwr_slm.neig.nikc_YDDL)
            }
            fs.writeFileSync(yxna_log, '')
            fs.writeFileSync(yxna_sys, encoding.convert(rj_sys_jtyj, 'gb2312', 'utf8'))
            fs.writeFileSync(yxna_menu, encoding.convert(rj_menu_jtyj, 'gb2312', 'utf8'))
            fs.writeFileSync(yxna_tips, encoding.convert(tips_rj(), 'gb2312', 'utf8'))
            fs.writeFileSync(yxna_dtc, encoding.convert(dtc_rj(), 'gb2312', 'utf8'))
            fs.writeFileSync(path.join(nikc_build_db, 'build.bat'), encoding.convert(bat_vkrf(diwr_slm.neig), 'gb2312', 'utf8'))
            return new Promise((resolve, reject) => {
                exec('start build.bat', { cwd: nikc_build_db }, (err) => {
                    if (err) {
                        reject(err)
                    }
                    var rj_yhld = encoding.convert(fs.readFileSync(yxna_log), 'utf8', 'gb2312').toString()
                    if (/\S/.test(rj_yhld)) {
                        reject(`本次编译未完全成功，原因如下\n${rj_yhld}`);
                    } else {
                        resolve(`已写入${diwr_slm.neig.nikc_YDDL}`)
                    }
                })
            })
        }
    }
}
module.exports = vkrf_uyrs_2;
function ymce(diwr_zzzz, zkrs = "") {
    var nikc_zzzz_yhld = ''
    if (zkrs === 'diwr_wwcf') {
        nikc_zzzz_yhld = nikc_diwr_wwcf
    } else if (zkrs === 'diwr_zzzz_uyrs_nikc') {
        nikc_zzzz_yhld = nikc_zzzz_uyrs_nikc
    } else {
        uz_ms('csrf-zkrs acun-' + zkrs)
    }
    if (!nikc_zzzz_yhld) {
        uz_ms('csrf-zzzz yxna msox-')
    }
    var VNWM_KP = fs.readdirSync(nikc_zzzz_yhld);
    var VNWM_JSON_RJQT_WU = VNWM_KP.filter(rn1 => {
        if (/\.JSON$/i.test(rn1))
            return true;
    })
    fs.writeFileSync(path.join(nikc_zzzz_yhld, (++diwr_uyrs_nomr_2.vkih) + '.json'), JSON.stringify(diwr_zzzz, null, 2))
    VNWM_JSON_RJQT_WU.forEach(rn1 => {
        fs.renameSync(path.join(nikc_zzzz_yhld, rn1), path.join(nikc_zzzz_yhld, diwr_uyrs_nomr_2.vkih + '_' + rn1 + '.bak'))
    })
    var vnwm_bmee_dk_rjqt = VNWM_KP.filter(rn1 => {
        if (/\.JSON\.bak$/i.test(rn1))
            return true
    })
    vnwm_bmee_dk_rjqt.sort()
    if (vnwm_bmee_dk_rjqt.length > 2) {
        vnwm_bmee_dk_rjqt.slice(0, 2).forEach(rn1 => {
            fs.unlink(path.join(nikc_zzzz_yhld, rn1), (err) => {
                if (err) {
                    throw (err)
                }
            })
        })
    }
}