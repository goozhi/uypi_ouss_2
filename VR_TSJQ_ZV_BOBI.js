const wdbu_jfrs = require('./afoa_bobi/rsgm/wdbu_jfrs');
const uz_ms = require('./AFOA_BX/uz_ms');
const vr_afoa_bqeo_rscs = require('./vr_afoa_bqeo_rscs');
const vr_mcvn_rscs = require('./vr_mcvn_rscs/index.js');
const msqu_rjse_fs = require('./afoa_msqu/msqu_rjse_fs');
const msqu_rjse_rscs = require('./afoa_msqu/msqu_rjse_rscs');
const kplu_ld_vnwm = require('./AFOA_BX/kplu_ld_vnwm');
const fs = require('fs')
async function VR_TSJQ_ZV_BOBI(DIWR_AFOA, diwr_mcvn) {
    diwr_vnwm_kplu_bobi = [
        { rj_jfrs_kp: 'hello', wldg_uxux: 'ztfr_sum', vkih: '1677307242290', dbkz_wu: 'ravc', rj_wldg: "hello" }
    ]
    var nikc_kplu = __dirname + '/afoa_bobi/kplu'
    if (!fs.existsSync(nikc_kplu)) {
        fs.mkdirSync(nikc_kplu)
        fs.writeFileSync(nikc_kplu + '/diwr_vnwm_kplu.json', JSON.stringify(diwr_vnwm_kplu_bobi))
    } else {
        diwr_vnwm_kplu_bobi = kplu_ld_vnwm(nikc_kplu, 'json')
    }

    var UXUX_YHLD = typeof (DIWR_AFOA)
    if (UXUX_YHLD != "object") {
        uz_ms("csrf-MCVN UXUX MSOX , AOAO JI object:-" + UXUX_YHLD)
    }
    var BQEO_1 = vr_afoa_bqeo_rscs(DIWR_AFOA.VR_AFOA_BQEO)
    var diwr_vr_mcvn = vr_mcvn_rscs(DIWR_AFOA.VR_AFOA_MCVN, {
        diwr_vnwm_mcvn_wu_oqzn: [
            { reg_lzm_wu: /^(?:ask)$/i, yowr_wu: "jfrs" },
            { reg_lzm_wu: /^(?:adding)$/i, yowr_wu: "ukyp_yh" },
            { reg_lzm_wu: /^(?:list)$/i, yowr_wu: "caum" },
            { reg_lzm_wu: /^(?:delete)$/i, yowr_wu: "hd" },
            { reg_lzm_wu: /^(?:add)$/i, yowr_wu: "ukyp" }
        ]
    })
    if (diwr_vr_mcvn.hasOwnProperty('jfrs') || Object.keys(diwr_vr_mcvn).length == 0) {
        var jtyj = await wdbu_jfrs({ dbkz_wu: process.env.USERNAME, rj_jfrs_kp: BQEO_1, diwr_vnwm_kplu_bobi })
        if (jtyj.gkqj_di_mb) {
            if (jtyj.wldg_uxux === 'ztfr_sum') {
                return jtyj.rj_wldg
            } else {
                uz_ms('csrf-acun uxux-')
            }
        } else if (jtyj.csrf === 'stst') {
            if (!jtyj.diwr_vnwm_stst) {
                uz_ms('csrf-nrap mcvn-')
            } else {
                var diwr_vnwm_stst_1 = jtyj.diwr_vnwm_stst.slice(0, 3)
                if (diwr_vnwm_stst_1.map(rn1 => { return rn1.wldg_uxux }).indexOf('afoa') == -1) {
                    return diwr_vnwm_stst_1[0].rj_wldg
                }
                return diwr_vnwm_stst_1.map(rn1 => {
                    return rn1.rj_jfrs_kp
                }).join('\n')
            }
        } else {
            uz_ms('csrf-mcvn ftpj-' + jtyj)
        }
    } else if (diwr_vr_mcvn.hasOwnProperty('ukyp')) {
        var diwr_msqu = { uxux: 'vdzv', diwr_vnwm_zkrs: [{ zkrs: '请输入问题' }, { zkrs: '请输入回答' }] }
        msqu_rjse_fs(diwr_msqu)
        return { rj_msqu: 'bobi=adding{{\n' + diwr_msqu.msqu_rjse + "\n}}" }
    } else if (diwr_vr_mcvn.hasOwnProperty('ukyp_yh')) {
        var diwr_msqu = { uxux: 'vdzv', diwr_vnwm_zkrs: [{ zkrs: '请输入问题' }, { zkrs: '请输入回答' }], rscs_bqeo: BQEO_1 }
        msqu_rjse_rscs(diwr_msqu)
        diwr_yhld = {}
        diwr_yhld.wldg_uxux = 'ztfr_sum'
        diwr_yhld.dbkz_wu = process.env.USERNAME
        diwr_yhld.rj_jfrs_kp = diwr_msqu.vnwm_dbkz_vdzv[0]
        diwr_yhld.rj_wldg = diwr_msqu.vnwm_dbkz_vdzv[1].replace(/Peng_JTCO_ZV_TZRN/g, "$$$$$$")
        diwr_yhld.vkih = new Date().getTime()
        diwr_vnwm_kplu_bobi.push(diwr_yhld)
        ymce()
        return JSON.stringify(diwr_yhld)
    } else if (diwr_vr_mcvn.hasOwnProperty('caum')) {
        return diwr_vnwm_kplu_bobi.map(rn1 => rn1.vkih + '\n' + rn1.rj_jfrs_kp).join('\n\n')
    } else if (diwr_vr_mcvn.hasOwnProperty('hd')) {
        var vnwm_vn_hd = BQEO_1.split(/\s+/)
        var diwr_yhld = {}
        diwr_vnwm_kplu_bobi.forEach(rn1 => {
            diwr_yhld[rn1.vkih] = rn1
        })
        var diwr_vnwm_ybkc_hd = []
        vnwm_vn_hd.forEach(rn1 => {
            if (diwr_yhld[rn1]) {
                delete diwr_yhld[rn1]
                diwr_vnwm_ybkc_hd.push(diwr_yhld[rn1])
            } else {
                uz_ms('csrf-vkih ac zznq-' + rn1)
            }
        })
        diwr_vnwm_kplu_bobi = Object.entries(diwr_yhld).map(rn1 => rn1[1])
        ymce()
        return JSON.stringify(diwr_vnwm_ybkc_hd)
    }
    else {
        uz_ms('csrf-MCVN ACUN-' + JSON.stringify(diwr_vr_mcvn))
    }
    function ymce() {
        var VNWM_KP = fs.readdirSync(nikc_kplu);
        var VNWM_JSON_RJQT_WU = VNWM_KP.filter(rn1 => {
            if (/\.JSON$/i.test(rn1))
                return true;
        })
        fs.writeFileSync(nikc_kplu + '/' + (new Date().getTime()) + '.json', JSON.stringify(diwr_vnwm_kplu_bobi))
        VNWM_JSON_RJQT_WU.forEach(rn1 => {
            fs.renameSync(nikc_kplu + '/' + rn1, nikc_kplu + '/' + rn1 + '.bak')
        })
    }
}
module.exports = VR_TSJQ_ZV_BOBI;