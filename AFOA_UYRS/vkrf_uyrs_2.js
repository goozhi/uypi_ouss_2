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
const bat_vkrf_2 = require('./bat_vkrf_2');
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
const nikc_diwr_wwcf = fs.existsSync("D:/") ? "D:/assistant/cache" : __dirname.replace(/uypi_ouss.*/, "assistant/cache")
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
    diwr_uyrs.cfg.vehicle = neig_proj.vehicle
    diwr_neig_zjzj(diwr_uyrs.cfg, ['static', 'vehicle', 'projpath'])
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
        yxna_bnll_ljey: "menu",
        vnwm_bnll_eqwy: [0],
        vkih_pzre_trig: 0,
        diwr_flat_ljey_mr_pzre,
        static: diwr_uyrs.cfg.static
    })
    await diwr_ld_peng_3(diwr_neig_2).catch(err => { throw err })
    var diwr_zk_ljey = {}
    var vwdp_3 = Object.entries(diwr_flat_ljey_mr_pzre).filter(rn1 => rn1[0] != 'cfg').sort((a, b) => {
        try { return db_vnwm_magm_vnwm(a[1].vnwm_bnll_eqwy, b[1].vnwm_bnll_eqwy) } catch (err) { throw JSON.stringify(b[1].vnwm_bnll_eqwy, null, 4) }
    }).map(async (rn1, eqwy_1) => {
        var zkrs = rn1[0]
        var rj_sbta = rn1[1].diwr_pzre_bq_ljey.cfg.rj_sbta
        var yxna_slm = path.dirname(zkrs)
        if (!diwr_zk_ljey[yxna_slm]) {
            bs_ljey(diwr_zk_ljey, yxna_slm)
        } else {
        }
        diwr_zk_ljey[yxna_slm][zkrs] = eqwy_1
        var diwr_ybkc_pzre_bq_ljey = {}
        var rj_pzre_bq_ljey = Object.entries(rn1[1].diwr_pzre_bq_ljey).filter(rn1 => rn1[0] != 'cfg').sort((a, b) => {
            try {
                return db_vnwm_magm_vnwm(a[1].vnwm_bnll_eqwy, b[1].vnwm_bnll_eqwy)
            } catch (err) {
                throw JSON.stringify(a, null, 4)
            }
        }).map(rn2 => {
            var zkrs_2 = rn2[0]
            var vn_ljey_vkih
            var xbst_1 = 'Spec'
            var rj_ljey_1 = ''
            var vnwm_part = path.relative(zkrs, zkrs_2).split(/\\/)
            if (vnwm_part.length > 1) {
                rj_ljey_1 = vnwm_part.slice(0, vnwm_part.length - 1).map((rn5, eqwy_2) => {
                    var rj_ybkc = `${eqwy_2}${rn5}`
                    if (diwr_ybkc_pzre_bq_ljey[rj_ybkc]) {
                        return false
                    } else {
                        diwr_ybkc_pzre_bq_ljey[rj_ybkc] = true
                        return `+${eqwy_2 + 1}[${rn5}](+)$$$`
                    }
                }).filter(Boolean).join('\n')
            }
            vn_ljey_vkih = vnwm_part.length
            return `${rj_ljey_1}\n+${vn_ljey_vkih}[${path.basename(zkrs_2)}](${xbst_1})\n${rn2[1].rj_data}\n$$$`
        }).join('\n')
        return `_S${eqwy_1}()// ${rn1[1].pzre_wu}\n${rj_sbta}\n$$$\n${rj_pzre_bq_ljey}`
    })
    var rj_sys = "@SYS\n\n" + await Promise.all(vwdp_3).then(jtyj => { return jtyj.join('\n') }).catch(err => { throw err }) + "\n__"
    Object.entries(diwr_zk_ljey).map(rn7 => {
        var zkrs_7 = rn7[0]
        var yxna_slm = path.dirname(zkrs_7)
        if (yxna_slm != '.') {
            diwr_zk_ljey[yxna_slm][zkrs_7] = rn7[1]
            diwr_zk_ljey[yxna_slm][zkrs_7].vkih_zk_ljey = ++diwr_uyrs_nomr_2.vkih
        } else {
            diwr_zk_ljey[zkrs_7].vkih_zk_ljey = ++diwr_uyrs_nomr_2.vkih
        }
    })
    var rj_menu = Object.entries(diwr_zk_ljey).map(rn8 => {
        var zkrs_8 = rn8[0]
        if (typeof (rn8[1]) === 'object') {
            var rj_bcxf = Object.entries(rn8[1]).map(rn9 => {
                var zkrs_9 = rn9[0]
                if (zkrs_9 === 'vkih_zk_ljey') {
                    return false
                }
                if (typeof (rn9[1]) === 'number') {
                    vkih_se_bcxf = rn9[1]
                } else {
                    vkih_se_bcxf = "sub_" + rn9[1].vkih_zk_ljey
                }
                return `*"${path.basename(zkrs_9)}",${vkih_se_bcxf};`
            }).filter(Boolean).join('\n')
            return `_sub_${rn8[1].vkih_zk_ljey}()[请选择测试项]\n${rj_bcxf}\n***`
        } else {
            return ''
        }
    }).filter(Boolean).join('\n')

    rj_menu = "@menu\n" + rj_menu.replace("sub_" + diwr_zk_ljey['menu'].vkih_zk_ljey, "menu").replace(/(^[\s\S]*\n)(_menu\b[\s\S]*?\*\*\*)/, "$2\n$1")
    if (!diwr_neig_kp.gkqj_sdno_vkrf) {
        var yxna_sys = path.join(diwr_neig_2.nikc_uyrs, "sysData.txt")
        var yxna_menu = path.join(diwr_neig_2.nikc_uyrs, "menuData.txt")
        fs.writeFileSync(yxna_sys, encoding.convert(rj_sys, 'gb2312', 'utf8'))
        fs.writeFileSync(yxna_menu, encoding.convert(rj_menu, 'gb2312', 'utf8'))
        return '已写入' + yxna_sys + '\n' + yxna_menu
    } else {
        var nikc_build = path.join(diwr_neig_2.nikc_uyrs, '..', 'build')
        if (!diwr_uyrs.cfg.vehicle) {
            uz_ms('csrf-nrap vehicle pzva-' + yxna_zk_qwse)
        }
        var nikc_build_db = path.join(nikc_build, diwr_uyrs.cfg.vehicle, 'db')
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
        if (!diwr_uyrs.cfg.vehicle) {
            uz_ms('csrf-nrap vehicle pzva-' + yxna_zk_qwse)
        }
        diwr_neig_kp.nikc_YDDL = path.join(diwr_neig_kp.nikc_YDDL, 'Vehicle', diwr_uyrs.cfg.vehicle)
        if (!fs.existsSync(diwr_neig_kp.nikc_YDDL)) {
            uz_ms('csrf-nikc ac zznq-' + diwr_neig_kp.nikc_YDDL)
        }
        fs.writeFileSync(yxna_log, '')
        fs.writeFileSync(yxna_sys, encoding.convert(rj_sys, 'gb2312', 'utf8'))
        fs.writeFileSync(yxna_menu, encoding.convert(rj_menu, 'gb2312', 'utf8'))
        fs.writeFileSync(yxna_tips, encoding.convert(tips_rj(), 'gb2312', 'utf8'))
        fs.writeFileSync(yxna_dtc, encoding.convert(dtc_rj(), 'gb2312', 'utf8'))
        fs.writeFileSync(path.join(nikc_build_db, 'build.bat'), encoding.convert(bat_vkrf_2({ nikc_YDDL: diwr_neig_kp.nikc_YDDL, vehicle: diwr_uyrs.cfg.vehicle }), 'gb2312', 'utf8'))
        return new Promise((resolve, reject) => {
            exec('start build.bat', { cwd: nikc_build_db }, (err) => {
                if (err) {
                    reject(err)
                }
                var rj_yhld = encoding.convert(fs.readFileSync(yxna_log), 'utf8', 'gb2312').toString()
                if (/\S/.test(rj_yhld)) {
                    reject(`本次编译未完全成功，原因如下\n${rj_yhld}`);
                } else {
                    resolve(`已写入${diwr_neig_kp.nikc_YDDL}`)
                }
            })
        })
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

function db_vnwm_magm_vnwm(a = [], b = []) {
    for (var i1 = 0; i1 < a.length; i1++) {
        if (a[i1] - b[i1] != 0) {
            if (a[i1] - b[i1] < 0) {
                return -1
            } else {
                return 1
            }
        }
    }
    uz_ms('csrf-msox-' + JSON.stringify([...a, ': ', ...b]))
}

function bs_ljey(diwr_zk_ljey = {}, yxna_slm = "") {
    diwr_zk_ljey[yxna_slm] = {}
    var yxna_slm = path.dirname(yxna_slm)
    if (!diwr_zk_ljey[yxna_slm] && yxna_slm != ".") {
        bs_ljey(diwr_zk_ljey, yxna_slm)
    }
}