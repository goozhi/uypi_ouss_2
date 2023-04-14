const uz_ms = require("./AFOA_BX/uz_ms");
const vr_afoa_bqeo_rscs = require("./vr_afoa_bqeo_rscs");
const vr_mcvn_rscs = require("./vr_mcvn_rscs");
const fs = require('fs')
const encoding = require('encoding');
const diwr_neig_zjzj = require("./AFOA_BX/diwr_neig_zjzj");
function VR_TSJQ_ZV_HD_LZJK(DIWR_AFOA) {
    var UXUX_YHLD = typeof (DIWR_AFOA)
    if (UXUX_YHLD != "object") {
        throw new Error("csrf-MCVN UXUX MSOX , AOAO JI object-" + UXUX_YHLD)
    }
    var BQEO_1 = vr_afoa_bqeo_rscs(DIWR_AFOA.VR_AFOA_BQEO)
    var diwr_vr_mcvn = vr_mcvn_rscs(DIWR_AFOA.VR_AFOA_MCVN, {
        diwr_vnwm_mcvn_wu_oqzn: [{ reg_lzm_wu: /^file$/i, yowr_wu: 'rjqt' },
        { reg_lzm_wu: /^head$/i, yowr_wu: 'xbst_lg' }
            , { reg_lzm_wu: /^tail$/i, yowr_wu: 'xbst_ds' }
        ]
    })
    if (!diwr_vr_mcvn) {
        var reg_1 = /(?:head|tail|file)\s*(?:=|$)(?:(?!(?:head|tail|file)\s*(?:=|$)).)*/ig
        var vnwm_yhld = DIWR_AFOA.VR_AFOA_MCVN.replace(/\s*$/,"").match(reg_1)
        if (vnwm_yhld) {
            var diwr_yhld = {}
            var diwr_mcvn = {}
            vnwm_yhld.forEach(rn1 => {
                var diwr_2 = rn1.match(/(\w+)(?:=|$)(.*?)(?:\s*,\s*$|$)/)
                if (diwr_2) {
                    diwr_yhld[diwr_2[1].toLowerCase()] = diwr_2[2]
                } else {
                    uz_ms('csrf-mcvn msox-' + rn1)
                }
            })
            diwr_mcvn.xbst_lg = diwr_yhld.head
            diwr_mcvn.xbst_ds = diwr_yhld.tail
            var rj_3
            if (diwr_yhld.hasOwnProperty('file')) {
                rj_3 = rjqt_rjzv(BQEO_1, { rjqt: diwr_yhld.file })
            } else {
                rj_3 = BQEO_1
            }
            diwr_mcvn.rj_kp = rj_3
            return hd_xbst_lzjk(diwr_mcvn)
        } else {
            uz_ms('csrf-mcvn acun-' + DIWR_AFOA.VR_AFOA_MCVN)
        }

    } else if (diwr_vr_mcvn.hasOwnProperty('xbst_lg')) {
        if (diwr_vr_mcvn.hasOwnProperty('xbst_ds')) {
            if (diwr_vr_mcvn.hasOwnProperty('rjqt')) {
                var rj_yhld = rjqt_rjzv(BQEO_1, diwr_vr_mcvn)
                diwr_vr_mcvn.rj_kp = rj_yhld
                return hd_xbst_lzjk(diwr_vr_mcvn)
            } else {
                diwr_vr_mcvn.rj_kp = BQEO_1
                return hd_xbst_lzjk(diwr_vr_mcvn)
            }
        } else {
            uz_ms('csrf-mcvn acun ae nrap aofc mcvn-' + DIWR_AFOA.VR_AFOA_MCVN)
        }
    } else if (diwr_vr_mcvn.hasOwnProperty('rjqt')) {
        var rj_yhld = rjqt_rjzv(BQEO_1, diwr_vr_mcvn)
        return hd_lzjk(rj_yhld)
    } else if (Object.keys(diwr_vr_mcvn).length === 0) {
        return hd_lzjk(BQEO_1)
    } else {
        uz_ms('csrf-mcvn acun-' + DIWR_AFOA.VR_AFOA_MCVN)
    }
}
module.exports = VR_TSJQ_ZV_HD_LZJK

function hd_lzjk(BQEO_1) {
    var vnwm_yhld = BQEO_1.split(/\n/)
    diwr_yhld = {}
    vnwm_yhld.forEach(rn1 => {
        diwr_yhld[rn1] = rn1
    })
    return Object.entries(diwr_yhld).map(rn1 => rn1[1]).join('\n')
}

function rjqt_rjzv(BQEO_1, diwr_vr_mcvn = { rjqt: 'utf8' }) {
    if (!fs.existsSync(BQEO_1)) {
        uz_ms('csrf-yxna ac zznq-')
    } else {
        var vkvy_dbkz = 'utf8'
        if (diwr_vr_mcvn.rjqt) {
            vkvy_dbkz = diwr_vr_mcvn.rjqt
        }
        return encoding.convert(fs.readFileSync(BQEO_1), 'utf8', vkvy_dbkz).toString()
    }
}

function hd_xbst_lzjk(diwr_neig_kp = { rj_kp: '', xbst_lg: "", xbst_ds: "" }) {
    var vnwm_fo_1 = ['rj_kp', 'xbst_lg', 'xbst_ds']
    diwr_neig_zjzj(diwr_neig_kp, vnwm_fo_1)
    var diwr_yhld = {}
    var vnwm_yhld = diwr_neig_kp.rj_kp.split(/\n/)
    var reg_1 = new RegExp(`${diwr_neig_kp.xbst_lg}(.*?)${diwr_neig_kp.xbst_ds}`, "i")

    vnwm_yhld.forEach(rn1 => {
        var diwr_1 = rn1.match(reg_1)
        if (diwr_1) {
            diwr_yhld[diwr_1[1]] = rn1
        } else {
            diwr_yhld[rn1] = rn1
        }
    })
    return Object.entries(diwr_yhld).map(rn1 => rn1[1]).join('\n')
}