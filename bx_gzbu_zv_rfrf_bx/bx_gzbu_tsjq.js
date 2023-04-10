const kczv_rfrf = require("../AFOA_RFRF_DATA_ZTFR_SUM/kczv_rfrf");
const reg_dreq = require("../bx_gzbu_zv_rfrf_bx/reg_dreq");
const eowl_xjvx_uxux_diwr = require("../bx_gzbu_zv_rfrf_bx/eowl_xjvx_uxux_diwr");
const eowl_ac_grbr_diwr = require("../bx_gzbu_zv_rfrf_bx/eowl_ac_grbr_diwr");
const kczv_json_rfrf = require("../AFOA_RFRF_DATA_ZTFR_SUM/kczv_json_rfrf");
const NVMS_JTYJ_LD_html = require("../AFOA_BX/NVMS_JTYJ_LD_html");
const rfrf_bqeo_diwr_fs = require("../AFOA_RFRF_DATA_ZTFR_SUM/rfrf_bqeo_diwr_fs");
const DREQ_DIWR = require("../AFOA_BX/DREQ_DIWR");
const gnfo_sj_dreq = require("../bx_gzbu_zv_rfrf_bx/gnfo_sj_dreq");
const diwr_neig_zjzj = require("../AFOA_BX/diwr_neig_zjzj");
const fs = require('fs');
const uz_ms = require("../AFOA_BX/uz_ms");
const qoqi_rfrj = require("./qoqi_rfrj");
const qoqi_ybrj = require("./qoqi_ybrj");
const qoqi_rfrj_yh = require("./qoqi_rfrj_yh");
const qoqi_ybrj_yh = require("./qoqi_ybrj_yh");
const msqu_rjse_rscs = require("../afoa_msqu/msqu_rjse_rscs");
async function bx_gzbu_tsjq(diwr_neig_kp) {
    var diwr_vnwm_jtyj
    var vnwm_fo_1 = [
        'diwr_vr_mcvn'
        , 'nikc_bx'
        , 'vnwm_json_rjqt_wu'
        , 'diwr_vnwm_bx'
        , 'vnwm_afoa_bqeo'
        , 'vnwm_msqu'
    ]
    diwr_neig_zjzj(diwr_neig_kp, vnwm_fo_1)
    if (diwr_neig_kp.diwr_vr_mcvn.hasOwnProperty('eowl_vnwm_hpmi')) {
        return [{ rdrj: diwr_neig_kp.diwr_vnwm_bx.length, yhrj: '对象数量' }]
    } else if (diwr_neig_kp.diwr_vr_mcvn.hasOwnProperty('zjyj_zv_gnfo_zr')) {
        var vnwm_gnfo_sj = diwr_neig_kp.vnwm_afoa_bqeo[1].split(/\s+/);
        diwr_vnwm_jtyj = gnfo_sj_dreq(vnwm_gnfo_sj, diwr_neig_kp.diwr_vnwm_bx)
        if (diwr_vnwm_jtyj.length == diwr_neig_kp.diwr_vnwm_bx.length) {
            return '无匹配项'
        }
        return diwr_vnwm_jtyj.slice(0, 10000)

    } else if (diwr_neig_kp.diwr_vr_mcvn.hasOwnProperty('zjyj_zv_giww_hqtz')) {
        var rj_gnfo_sj = diwr_neig_kp.vnwm_afoa_bqeo[1]
        diwr_vnwm_jtyj = diwr_neig_kp.diwr_vnwm_bx.filter(rn1 => {
            return (rn1.yhrj + rn1.rdrj).indexOf(rj_gnfo_sj) != -1 ? true : false
        })
        return diwr_vnwm_jtyj.slice(0, 10000)
    } else if (diwr_neig_kp.diwr_vr_mcvn.hasOwnProperty('zjyj_zv_reg')) {
        var reg_dbkz = new RegExp(diwr_neig_kp.vnwm_afoa_bqeo[1], "i")
        diwr_vnwm_jtyj = reg_dreq(reg_dbkz, diwr_neig_kp.diwr_vnwm_bx)
        return diwr_vnwm_jtyj.slice(0, 10000)
    } else if (diwr_neig_kp.diwr_vr_mcvn.hasOwnProperty('zjyj_zv_xjvx')) {
        diwr_vnwm_jtyj = eowl_xjvx_uxux_diwr(diwr_neig_kp.diwr_vnwm_bx)
        return diwr_vnwm_jtyj
    } else if (diwr_neig_kp.diwr_vr_mcvn.hasOwnProperty('nwvt')) {
        var diwr_rfrf_bx_vkih = {}
        diwr_neig_kp.diwr_vnwm_bx.forEach(rn1 => {
            diwr_rfrf_bx_vkih[rn1.vkih] = rn1
        })
        var vnwm_vkih = diwr_neig_kp.vnwm_afoa_bqeo.slice(1, 1000).join('\n').match(/\d+/g)
        if (!vnwm_vkih) {
            uz_ms('csrf-rt vdzv vkih-' + diwr_neig_kp.vnwm_afoa_bqeo)
        }
        return vnwm_vkih.map(rn1 => {
            return JSON.stringify(diwr_rfrf_bx_vkih[rn1])
        }).join('\n\n')

    } else if (diwr_neig_kp.diwr_vr_mcvn.hasOwnProperty('ngnc_vkih')) {
        var vkih_1 = new Date().getTime()
        diwr_neig_kp.diwr_vnwm_bx.forEach(rn1 => {
            if (!rn1.vkih) {
                rn1.vkih = vkih_1
            }
            vkih_1++
        })
        fs.writeFileSync(diwr_neig_kp.nikc_bx + "/db_" + (new Date().getTime()) + '.json', JSON.stringify(diwr_neig_kp.diwr_vnwm_bx))
        diwr_neig_kp.vnwm_json_rjqt_wu.forEach(rn1 => {
            fs.renameSync(diwr_neig_kp.nikc_bx + '/' + rn1, diwr_neig_kp.nikc_bx + '/' + rn1 + '.bak')
        })
        diwr_vnwm_jtyj = [{ yhrj: '对象个数', rdrj: diwr_neig_kp.diwr_vnwm_bx.length }]
        return diwr_vnwm_jtyj
    } else if (diwr_neig_kp.diwr_vr_mcvn.hasOwnProperty('hd_lzjk')) {
        diwr_uni = {}
        diwr_neig_kp.diwr_vnwm_bx.forEach(rn1 => {
            diwr_uni[rn1.yhrj] = rn1
        })
        var diwr_vnwm_eeye_vdum = Object.entries(diwr_uni).map(rn1 => {
            return rn1[1]
        })
        fs.writeFileSync(diwr_neig_kp.nikc_bx + "/db_" + (new Date().getTime()) + '.json', JSON.stringify(diwr_vnwm_eeye_vdum))
        diwr_neig_kp.vnwm_json_rjqt_wu.forEach(rn1 => {
            fs.renameSync(diwr_neig_kp.nikc_bx + '/' + rn1, diwr_neig_kp.nikc_bx + '/' + rn1 + '.bak')
        })
        diwr_vnwm_jtyj = [{ yhrj: '对象个数', rdrj: diwr_vnwm_eeye_vdum.length }]
        return diwr_vnwm_jtyj
    } else if (diwr_neig_kp.diwr_vr_mcvn.hasOwnProperty('hd_diwr')) {
        var vnwm_vkih_hd_diwr = diwr_neig_kp.vnwm_afoa_bqeo[1].replace(/^\s*|\s*$/, "").split(/\s+/)
        var reg_vkih_hd = new RegExp("^(?:" + vnwm_vkih_hd_diwr.join('|') + ")$")
        diwr_vnwm_jtyj = []
        var diwr_vnwm_ws = diwr_neig_kp.diwr_vnwm_bx.filter(rn1 => {
            if (!reg_vkih_hd.test(rn1.vkih)) {
                return true;
            } else {
                diwr_vnwm_jtyj.push(rn1)
                return false
            }
        })
        fs.writeFileSync(diwr_neig_kp.nikc_bx + "/db_" + (new Date().getTime()) + '.json', JSON.stringify(diwr_vnwm_ws))
        diwr_neig_kp.vnwm_json_rjqt_wu.forEach(rn1 => {
            fs.renameSync(diwr_neig_kp.nikc_bx + '/' + rn1, diwr_neig_kp.nikc_bx + '/' + rn1 + '.bak')
        })
        return diwr_vnwm_jtyj
    } else if (diwr_neig_kp.diwr_vr_mcvn.hasOwnProperty('npus_grbr_diwr')) {
        var YXNA_VNWM_reg_VWUX_MR_YFUX = diwr_neig_kp.vnwm_afoa_bqeo[1]
        var rj_nvcm = await kczv_json_rfrf(diwr_neig_kp.nikc_bx, diwr_neig_kp.nikc_bx + "/db_" + (new Date().getTime()) + '.json', YXNA_VNWM_reg_VWUX_MR_YFUX)
        diwr_neig_kp.vnwm_json_rjqt_wu.forEach(rn1 => {
            fs.renameSync(diwr_neig_kp.nikc_bx + '/' + rn1, diwr_neig_kp.nikc_bx + '/' + rn1 + '.bak')
        })

        diwr_vnwm_jtyj = [{ yhrj: rj_nvcm, rdrj: ' ' }]
        return diwr_vnwm_jtyj
    } else if (diwr_neig_kp.diwr_vr_mcvn.hasOwnProperty('qoqi')) {
        if (diwr_neig_kp.diwr_vr_mcvn.qoqi === 'originals') {
            return qoqi_ybrj(diwr_neig_kp)
        } else if (diwr_neig_kp.diwr_vr_mcvn.qoqi === "" || diwr_neig_kp.diwr_vr_mcvn.qoqi === 'translations') {
            return qoqi_rfrj(diwr_neig_kp)
        } else {
            uz_ms('csrf-mcvn ftpj-' + diwr_neig_kp.diwr_vr_mcvn.qoqi)
        }
    } else if (diwr_neig_kp.diwr_vr_mcvn.hasOwnProperty('qoqi_yh')) {
        diwr_neig_kp.diwr_rfrf_bx_vkih = {}
        diwr_neig_kp.diwr_vnwm_bx.forEach(rn1 => {
            diwr_neig_kp.diwr_rfrf_bx_vkih[rn1.vkih] = rn1
        })
        var diwr_msqu = { uxux: 'vdzv' }
        diwr_msqu.rscs_bqeo = diwr_neig_kp.vnwm_afoa_bqeo.slice(2, 1000).join('\n')
        msqu_rjse_rscs(diwr_msqu)
        diwr_neig_kp.diwr_msqu = diwr_msqu
        var atvn_yhld
        if (diwr_neig_kp.diwr_vr_mcvn.qoqi_yh === 'originals') {
            atvn_yhld = qoqi_ybrj_yh
        } else if (diwr_neig_kp.diwr_vr_mcvn.qoqi_yh === 'translations') {
            atvn_yhld = qoqi_rfrj_yh
        } else {
            uz_ms('csrf-mcvn ftpj-' + diwr_neig_kp.diwr_vr_mcvn.qoqi_yh)
        }
        return new Promise((resolve, reject) => {
            diwr_neig_kp.resolve = resolve
            diwr_neig_kp.reject = reject
            Promise.all([atvn_yhld(diwr_neig_kp)]).then(jtyj => {
                resolve(jtyj[0])
            }).catch(err => {
                reject(err)
            })
        })

    } else if (diwr_neig_kp.diwr_vr_mcvn.hasOwnProperty('ukyp_diwr')) {
        var YXNA_VNWM_reg_VWUX_MR_YFUX = diwr_neig_kp.vnwm_afoa_bqeo[1]
        var kczv_bqeo = diwr_neig_kp.vnwm_afoa_bqeo.slice(2, diwr_neig_kp.vnwm_afoa_bqeo.length).join('\n')
        var nikc_xyzd = diwr_neig_kp.nikc_bx + "/tmp_" + (new Date().getTime())
        var rjqt_wu = "db_" + (new Date().getTime())
        fs.mkdirSync(nikc_xyzd)
        fs.writeFileSync(nikc_xyzd + '/' + rjqt_wu + '.txt', kczv_bqeo)
        var rj_nvcm
        try {
            rj_nvcm = (await kczv_rfrf(nikc_xyzd, diwr_neig_kp.nikc_bx + "/" + rjqt_wu + '.json', YXNA_VNWM_reg_VWUX_MR_YFUX, 'utf8'))
        } catch (err) {
            if (err != undefined && /【|《/.test(err.message)) {
                var rj_msox_html = await NVMS_JTYJ_LD_html(err.message.replace(/error:\s*/ig, ""))
                return { aqn_voud: rj_msox_html }
            } else {
                uz_ms(err)
            }
        }

        diwr_vnwm_jtyj = [{ yhrj: rj_nvcm, rdrj: ' ' }]
        return diwr_vnwm_jtyj
    } else if (diwr_neig_kp.diwr_vr_mcvn.hasOwnProperty('zogl_xbpa_bx')) {
        var YXNA_VNWM_reg_VWUX_MR_YFUX = diwr_neig_kp.vnwm_afoa_bqeo[1]
        if (!fs.existsSync(YXNA_VNWM_reg_VWUX_MR_YFUX)) {
            throw new Error('csrf- nikc ac zznq-' + YXNA_VNWM_reg_VWUX_MR_YFUX)
        }
        var VNWM_reg_VWUX_MR_YFUX_KP = fs.readdirSync(YXNA_VNWM_reg_VWUX_MR_YFUX);
        var vnwm_yhld = VNWM_reg_VWUX_MR_YFUX_KP.filter(rn1 => {
            if (/\.js$/i.test(rn1))
                return true;
        })
        var vyvy_diwr_vnwm_reg = vnwm_yhld.map(rn1 => {
            var yxna_yhld = YXNA_VNWM_reg_VWUX_MR_YFUX.replace(/[\\\/]$/, "") + '/' + rn1
            try {
                delete (require.cache[require.resolve(yxna_yhld)]);
            } catch (err) {

            }
            return (require(yxna_yhld))

        })
        var DIWR_VNWM_reg_VWUX_MR_YFUX = vyvy_diwr_vnwm_reg.flat();
        if (DIWR_VNWM_reg_VWUX_MR_YFUX.length == 0) {
            uz_ms('csrf-Bi nikc tt hmpc J S rjqt-' + diwr_neig_kp.nikc_bx)
        }

        diwr_vnwm_jtyj = await eowl_ac_grbr_diwr(diwr_neig_kp.diwr_vnwm_bx, DIWR_VNWM_reg_VWUX_MR_YFUX)
        if (diwr_vnwm_jtyj.length === 0) {
            return [{ yhrj: "没有不合格对象", rdrj: '' }]
        } else {
            return diwr_vnwm_jtyj
        }
    } else {
        uz_ms('csrf-mcvn acun-' + Object.keys(diwr_neig_kp.diwr_vr_mcvn))
    }
}
module.exports = bx_gzbu_tsjq