const B_LD_H = require("./AFOA_BX/B_LD_H")
const uz_ms = require("./AFOA_BX/uz_ms")
const vr_afoa_bqeo_rscs = require("./vr_afoa_bqeo_rscs")
const vr_mcvn_rscs = require("./vr_mcvn_rscs")

function VR_TSJQ_BRTZ_FS_ZV_UYUY(DIWR_AFOA) {
    var bqeo_1 = vr_afoa_bqeo_rscs(DIWR_AFOA.VR_AFOA_BQEO)
    var diwr_vr_mcvn = vr_mcvn_rscs(DIWR_AFOA.VR_AFOA_MCVN, {
        diwr_vnwm_mcvn_wu_oqzn: [
            { reg_lzm_wu: /in/i, yowr_wu: "vdzv_tyub" },
            { reg_lzm_wu: /out/i, yowr_wu: "vdum_tyub" }
        ]
    })
    var vnwm_uytz_1 = bqeo_1.split(/\n/)
    var vnwm_uytz_2
    if (Object.keys(diwr_vr_mcvn).length == 0) {
        vnwm_uytz_2 = vnwm_uytz_1
        return rscs_vnwm(vnwm_uytz_2).join('\n')
    } else if (diwr_vr_mcvn.hasOwnProperty('vdzv_tyub') || diwr_vr_mcvn.hasOwnProperty('vdum_tyub')) {
        if (diwr_vr_mcvn.hasOwnProperty('vdzv_tyub')) {
            if (diwr_vr_mcvn.vdzv_tyub == "2") {
                vnwm_uytz_2 = vnwm_uytz_1.map(rn1 => {
                    return rn1.replace(/(\w+)/g, (match, p1) => {
                        return "0x" + B_LD_H(p1)
                    })
                })
            } else {
                uz_ms('csrf-mcvn ftpj-' + diwr_vr_mcvn.vdzv_tyub)
            }
        } else {
            vnwm_uytz_2 = vnwm_uytz_1
        }
        var tyub_dbkz = 10
        if (diwr_vr_mcvn.hasOwnProperty('vdum_tyub')) {
            tyub_dbkz = diwr_vr_mcvn.vdum_tyub
        }
        return rscs_vnwm(vnwm_uytz_2, tyub_dbkz).join('\n')
    } else {
        uz_ms('csrf-v r mcvn acun-' + DIWR_AFOA.VR_AFOA_MCVN)
    }
}
module.exports = VR_TSJQ_BRTZ_FS_ZV_UYUY

function rscs(uytz, vdum = 10) {
    try {
        return eval(uytz).toString(vdum)
    } catch (err) {
        uz_ms('csrf-uytz brtz msox-' + uytz)
    }
}

function rscs_vnwm(vnwm = [], vdum = 10) {
    return vnwm.map(rn1 => {
        return `${rn1} = ${rscs(rn1, vdum)}`
    })
}