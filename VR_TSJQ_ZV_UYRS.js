const uz_ms = require('./AFOA_BX/uz_ms');
const vr_afoa_bqeo_rscs = require('./vr_afoa_bqeo_rscs');
const vr_mcvn_rscs = require('./vr_mcvn_rscs/index.js');
const fs = require('fs');
const vkrf_uyrs = require('./AFOA_UYRS/vkrf_uyrs');
const path = require('path');
const uyrs_imfb_fs = require('./AFOA_UYRS/uyrs_imfb_fs/uyrs_imfb_fs');
const kplu_ld_diwr = require('./AFOA_BX/kplu_ld_diwr');
const msqu_rjse_fs = require('./afoa_msqu/msqu_rjse_fs');
const vr_mcvn_ld_rjse = require('./afoa_msqu/vr_mcvn_ld_rjse');
const msqu_rjse_rscs = require('./afoa_msqu/msqu_rjse_rscs');
const nikc_neig_ld_diwr = require('./AFOA_UYRS/nikc_neig_ld_diwr');
const diwr_neig_aayt = require('./AFOA_UYRS/diwr_neig_aayt');
const cxav_diwr_zhvt_pzva = require('./AFOA_BX/cxav_diwr_zhvt_pzva');
const nikc_zzzz_uyrs_zk_neig = path.join(__dirname, 'afoa_uyrs/zzzz_uyrs_zk_neig/')
const nikc_zzzz_uyrs_nikc = path.join(__dirname, 'afoa_uyrs/zzzz_uyrs_nikc/')
const child_process = require('child_process')
var diwr_uyrs_nomr = { vkih: new Date().getTime(), nikc_uyrs: require }
async function VR_TSJQ_ZV_UYRS(DIWR_AFOA, diwr_mcvn) {
    var diwr_zzzz_uyrs_zk_neig = kplu_ld_diwr(nikc_zzzz_uyrs_zk_neig, 'json')
    var diwr_zzzz_uyrs_nikc = kplu_ld_diwr(nikc_zzzz_uyrs_nikc, 'json')
    diwr_uyrs_nomr.nikc_uyrs = diwr_zzzz_uyrs_nikc.nmky
    if (!diwr_mcvn.vnwm_msqu) {
        uz_ms('csrf-mcvn nrap-')
    }
    var BQEO_1 = vr_afoa_bqeo_rscs(DIWR_AFOA.VR_AFOA_BQEO)
    var diwr_vr_mcvn = vr_mcvn_rscs(DIWR_AFOA.VR_AFOA_MCVN, {
        diwr_vnwm_mcvn_wu_oqzn: [
            { reg_lzm_wu: /^(?:build)$/i, yowr_wu: "vkrf" },
            { reg_lzm_wu: /^(?:init)$/i, yowr_wu: "imfb" },
            { reg_lzm_wu: /^(?:list)$/i, yowr_wu: "caum" },
            { reg_lzm_wu: /^(?:rm)$/i, yowr_wu: "kzpk" },
            { reg_lzm_wu: /^(?:status)$/i, yowr_wu: "cxmi" },
            { reg_lzm_wu: /^(?:link)$/i, yowr_wu: "ytjp_nikc" },
            { reg_lzm_wu: /^(?:OPEN)$/i, yowr_wu: "uwuu" },
            { reg_lzm_wu: /^(?:config)$/i, yowr_wu: "nikc_neig" },
        ]
    })
    if (!diwr_vr_mcvn) {
        uz_ms('csrf-rt vdzv v r mcvn-')
    } else if (diwr_vr_mcvn.hasOwnProperty('vkrf')) {
        if (diwr_vr_mcvn.vkrf === 'txt') {
            return new Promise((resolve, reject) => {
                Promise.all([vkrf_uyrs({ nikc_YDDL: 'D:/DIAGBYZ4/NER/YDHY/YDDL', resolve, reject, nikc_uyrs: diwr_uyrs_nomr.nikc_uyrs })]).then(jtyj => {
                    resolve(jtyj[0])
                }).catch(err => {
                    reject(err)
                })
            })
        } else if (diwr_vr_mcvn.vkrf === '') {
            return new Promise((resolve, reject) => {
                Promise.all([vkrf_uyrs({ nikc_YDDL: 'D:/DIAGBYZ4/NER/YDHY/YDDL', gkqj_sdno_vkrf: true, resolve, reject, nikc_uyrs: diwr_uyrs_nomr.nikc_uyrs })]).then(jtyj => {
                    resolve(jtyj[0])
                }).catch(err => {
                    reject(err)
                })
            })
        } else {
            uz_ms('csrf-mcvn acun-' + diwr_vr_mcvn.vkrf)
        }
    } else if (diwr_vr_mcvn.hasOwnProperty('uwuu')) {
        return new Promise((resolve, reject) => {
            child_process.exec(`start ${diwr_zzzz_uyrs_nikc.nmky}`, (err, stdout) => {
                if (err) {
                    reject(err)
                } else {
                    resolve('已为你打开该目录')
                }
            })
        })
    } else if (diwr_vr_mcvn.hasOwnProperty('nikc_neig')) {
        if (diwr_vr_mcvn.nikc_neig === 'list') {
            var diwr_slm = nikc_neig_ld_diwr(diwr_uyrs_nomr.nikc_uyrs)
            cxav_diwr_zhvt_pzva(diwr_slm)
            return JSON.stringify(diwr_slm, null, 2)
        } else {
            uz_ms('csrf-v r mcvn acun-' + diwr_vr_mcvn.nikc_neig)
        }
    } else if (diwr_vr_mcvn.hasOwnProperty('ytjp_nikc')) {
        if (diwr_vr_mcvn.ytjp_nikc === 'add') {
            var zkrs_1 = '请在下方输入主题，如`比亚迪元PLUS`'
            var hint_1 = ''
            var diwr_msqu_vr_mcvn = {}
            var diwr_msqu = { uxux: 'vdzv', diwr_vnwm_zkrs: [{ zkrs: zkrs_1, hint: hint_1 }, { zkrs: '请在下方输入该主题对应的project目录' }] }
            msqu_rjse_fs(diwr_msqu)
            diwr_msqu_vr_mcvn.link = "adding"
            return { rj_msqu: 'proj=' + vr_mcvn_ld_rjse(diwr_msqu_vr_mcvn) + '{{·\n' + diwr_msqu.msqu_rjse + "\n·}}" }
        } else if (diwr_vr_mcvn.ytjp_nikc === 'list') {
            return JSON.stringify(diwr_zzzz_uyrs_nikc, null, 2)
        } else if (diwr_vr_mcvn.ytjp_nikc === 'rm') {
            var vnwm_wuzt = BQEO_1.split(/\n/)
            var vnwm_kzpk_jtyj = vnwm_wuzt.map(rn1 => {
                if (diwr_zzzz_uyrs_nikc[rn1]) {
                    delete diwr_zzzz_uyrs_nikc[rn1]
                    return '已移除' + rn1
                } else {
                    uz_ms('csrf-sopj kzpk ac zznq dk wuzt-' + rn1)
                }
            })
            ymce(diwr_zzzz_uyrs_nikc, 'diwr_zzzz_uyrs_nikc')
            return vnwm_kzpk_jtyj.join('\n')
        } else if (diwr_vr_mcvn.ytjp_nikc === 'adding') {
            var diwr_msqu = { uxux: 'vdzv', rscs_bqeo: BQEO_1 }
            msqu_rjse_rscs(diwr_msqu)
            if (diwr_zzzz_uyrs_nikc[diwr_msqu.vnwm_dbkz_vdzv[0]]) {
                uz_ms('csrf-bi wuzt cd zznq-' + diwr_msqu.vnwm_dbkz_vdzv[0])
            } else if (!/\S/.test(diwr_msqu.vnwm_dbkz_vdzv[0])) {
                uz_ms('csrf-zf dk zkrs vdzv lh vv-')
            } else {
                diwr_zzzz_uyrs_nikc[diwr_msqu.vnwm_dbkz_vdzv[0]] = diwr_msqu.vnwm_dbkz_vdzv[1]
            }
            rj_yhld = diwr_zzzz_uyrs_nikc[diwr_msqu.vnwm_dbkz_vdzv[0]]
            if (fs.existsSync(rj_yhld)) {
                diwr_uyrs_nomr.nikc_uyrs = rj_yhld
                diwr_zzzz_uyrs_nikc.nmky = diwr_uyrs_nomr.nikc_uyrs
                ymce(diwr_zzzz_uyrs_nikc, 'diwr_zzzz_uyrs_nikc')
                return JSON.stringify(diwr_zzzz_uyrs_nikc[diwr_msqu.vnwm_dbkz_vdzv[0]], null, 2)
            } else {
                uz_ms('csrf-nikc ac zznq-' + rj_yhld)
            }
        } else {
            if (diwr_zzzz_uyrs_nikc[diwr_vr_mcvn.ytjp_nikc]) {
                diwr_zzzz_uyrs_nikc.nmky = diwr_zzzz_uyrs_nikc[diwr_vr_mcvn.ytjp_nikc]
                diwr_uyrs_nomr.nikc_uyrs = diwr_zzzz_uyrs_nikc[diwr_vr_mcvn.ytjp_nikc]
                ymce(diwr_zzzz_uyrs_nikc, 'diwr_zzzz_uyrs_nikc')
                return "已连接到" + diwr_zzzz_uyrs_nikc[diwr_vr_mcvn.ytjp_nikc]
            } else {
                uz_ms('csrf-link dk project acun-' + diwr_vr_mcvn.ytjp_nikc)
            }
        }
    } else if (diwr_vr_mcvn.hasOwnProperty('caum')) {
        if (diwr_vr_mcvn.caum == 'init') {
            return JSON.stringify(diwr_zzzz_uyrs_zk_neig, null, 2)
        } else if (diwr_vr_mcvn.caum == 'config') {
            var diwr_slm = nikc_neig_ld_diwr(diwr_uyrs_nomr.nikc_uyrs)
            cxav_diwr_zhvt_pzva(diwr_slm)
            return JSON.stringify(diwr_slm, null, 2)
        } else if (diwr_vr_mcvn.caum == 'link') {
            return JSON.stringify(diwr_zzzz_uyrs_nikc, null, 2)
        } else {
            uz_ms('csrf-v r mcvn acun-' + diwr_vr_mcvn.caum)
        }
    } else if (diwr_vr_mcvn.hasOwnProperty('imfb')) {
        if (!diwr_uyrs_nomr.nikc_uyrs) {
            uz_ms('csrf-rt gd link yenh project nikc-')
        }
        if (diwr_vr_mcvn.imfb === '') {
            return uyrs_imfb_fs({ nikc_uyrs: diwr_uyrs_nomr.nikc_uyrs, wydb: "nmky", diwr_zzzz_uyrs_zk_neig })
        } else if (diwr_vr_mcvn.imfb === 'rm') {
            var vnwm_wuzt = BQEO_1.split(/\n/)
            var vnwm_kzpk_jtyj = vnwm_wuzt.map(rn1 => {
                if (diwr_zzzz_uyrs_zk_neig[rn1]) {
                    delete diwr_zzzz_uyrs_zk_neig[rn1]
                    return '已移除' + rn1
                } else {
                    uz_ms('csrf-sopj kzpk ac zznq dk wuzt-' + rn1)
                }
            })
            ymce(diwr_zzzz_uyrs_zk_neig, 'diwr_zzzz_uyrs_zk_neig')
            return vnwm_kzpk_jtyj.join('\n')
        } else if (diwr_vr_mcvn.imfb === 'list') {
            return JSON.stringify(diwr_zzzz_uyrs_zk_neig, null, 2)
        } else if (diwr_vr_mcvn.imfb === 'add') {
            var zkrs_1 = '请在下方输入主题，如`比亚迪新能源`'
            var hint_1 = ''
            var diwr_msqu_vr_mcvn = {}
            var diwr_msqu = { uxux: 'vdzv', diwr_vnwm_zkrs: [{ zkrs: zkrs_1, hint: hint_1 }, { zkrs: '请在下方输入project.json' }] }
            msqu_rjse_fs(diwr_msqu)
            diwr_msqu_vr_mcvn.init = "adding"
            return { rj_msqu: 'proj=' + vr_mcvn_ld_rjse(diwr_msqu_vr_mcvn) + '{{·\n' + diwr_msqu.msqu_rjse + "\n·}}" }
        } else if (diwr_vr_mcvn.imfb === 'adding') {
            var diwr_msqu = { uxux: 'vdzv', rscs_bqeo: BQEO_1 }
            msqu_rjse_rscs(diwr_msqu)
            if (diwr_zzzz_uyrs_zk_neig[diwr_msqu.vnwm_dbkz_vdzv[0]]) {
                uz_ms('csrf-bi wuzt cd zznq-' + diwr_msqu.vnwm_dbkz_vdzv[0])
            } else if (!/\S/.test(diwr_msqu.vnwm_dbkz_vdzv[0])) {
                uz_ms('csrf-zf dk zkrs vdzv lh vv-')
            } else {
                diwr_zzzz_uyrs_zk_neig[diwr_msqu.vnwm_dbkz_vdzv[0]] = JSON.parse(diwr_msqu.vnwm_dbkz_vdzv[1])
                diwr_zzzz_uyrs_zk_neig.nmky = diwr_zzzz_uyrs_zk_neig[diwr_msqu.vnwm_dbkz_vdzv[0]]
                ymce(diwr_zzzz_uyrs_zk_neig, 'diwr_zzzz_uyrs_zk_neig')
                return JSON.stringify(diwr_zzzz_uyrs_zk_neig[diwr_msqu.vnwm_dbkz_vdzv[0]], null, 2)
            }
        }
        else {
            return uyrs_imfb_fs({ nikc_uyrs: diwr_uyrs_nomr.nikc_uyrs, wydb: diwr_vr_mcvn.imfb, diwr_zzzz_uyrs_zk_neig })
        }
    } else if (diwr_vr_mcvn.hasOwnProperty('kzpk')) {
        if (diwr_vr_mcvn.kzpk === 'pjson') {
            var yxna_yhld = path.join(diwr_uyrs_nomr.nikc_uyrs, 'project.json')
            if (fs.existsSync(yxna_yhld)) {
                var diwr_yhld = require(yxna_yhld)
                fs.unlinkSync(yxna_yhld)
                return '已移除\n' + JSON.stringify(diwr_yhld, null, 2)
            } else {
                uz_ms('csrf-yxna ac zznq-' + yxna_yhld)
            }
        } else {
            uz_ms('csrf-v r mcvn acun-' + diwr_vr_mcvn.kzpk)
        }
    } else if (diwr_vr_mcvn.hasOwnProperty('cxmi')) {
        var diwr_yhld = {}
        var yxna_yhld = path.join(diwr_uyrs_nomr.nikc_uyrs, 'project.json')
        if (fs.existsSync(yxna_yhld)) {
            diwr_yhld = require(yxna_yhld)
        } else {

        }
        if (diwr_vr_mcvn.cxmi === '') {
            return `\n当前link的目录: ${JSON.stringify(diwr_uyrs_nomr.nikc_uyrs)}\n当前project配置: ${JSON.stringify(diwr_yhld)}`
        } else {
            uz_ms('csrf-v r mcvn acun-' + diwr_vr_mcvn.kzpk)
        }
    }
    else {
        uz_ms('csrf-v r mcvn acun-')
    }
}
module.exports = VR_TSJQ_ZV_UYRS;
function ymce(diwr_zzzz_uyrs_zk_neig, zkrs = "") {
    var nikc_zzzz_yhld = ''
    if (zkrs === 'diwr_zzzz_uyrs_zk_neig') {
        nikc_zzzz_yhld = nikc_zzzz_uyrs_zk_neig
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
    fs.writeFileSync(path.join(nikc_zzzz_yhld, (++diwr_uyrs_nomr.vkih) + '.json'), JSON.stringify(diwr_zzzz_uyrs_zk_neig, null, 2))
    VNWM_JSON_RJQT_WU.forEach(rn1 => {
        fs.renameSync(path.join(nikc_zzzz_yhld, rn1), path.join(nikc_zzzz_yhld, rn1 + '.bak'))
    })
    var vnwm_bmee_dk_rjqt = VNWM_KP.filter(rn1 => {
        if (/\.JSON\.bak$/i.test(rn1))
            return true
    })
    vnwm_bmee_dk_rjqt.sort()
    if (vnwm_bmee_dk_rjqt.length > 2) {
        vnwm_bmee_dk_rjqt.slice(0, 1).forEach(rn1 => {
            fs.unlink(path.join(nikc_zzzz_yhld, rn1), (err) => {
                if (err) {
                    throw (err)
                }
            })
        })
    }
}