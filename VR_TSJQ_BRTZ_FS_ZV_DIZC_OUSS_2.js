
const uz_ms = require('./AFOA_BX/uz_ms');
var DIZC_OUSS_2 = require('./DIZC_OUSS_2');
const vr_afoa_bqeo_rscs = require('./vr_afoa_bqeo_rscs');
const vr_mcvn_rscs = require('./vr_mcvn_rscs/index.js');
var ZTHI_YG_VDUM = require('./ZTHI_YG_VDUM')
async function VR_TSJQ_BRTZ_FS_ZV_DIZC_OUSS_2(DIWR_AFOA) {
    var UXUX_YHLD = typeof (DIWR_AFOA)
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX , AOAO JI object:" + UXUX_YHLD)
    }
    var BQEO_1 = vr_afoa_bqeo_rscs(DIWR_AFOA.VR_AFOA_BQEO)
    var diwr_vr_mcvn = vr_mcvn_rscs(DIWR_AFOA.VR_AFOA_MCVN, {
        diwr_vnwm_mcvn_wu_oqzn: [{ reg_lzm_wu: /^(?:9|max)$/i, yowr_wu: "okwk_zthi" }
            , { reg_lzm_wu: /^(?:32|asc)$/i, yowr_wu: "asc" }]
    })
    var VNWM_ZTHI_MCVN_1
    var RJSE_ZTHI_SLGR
    if (!diwr_vr_mcvn) {
        VNWM_ZTHI_MCVN_1 = DIWR_AFOA.VR_AFOA_MCVN.match(/\[.*?\]/g);
        if (VNWM_ZTHI_MCVN_1 == null) {
            uz_ms('csrf-acun mcvn-'+DIWR_AFOA.VR_AFOA_MCVN)
        } else {
            VNWM_ZTHI_MCVN_1.forEach(RNSF => {
                switch (true) {
                    case /^\[\d+=\w+(?: \d+=\w+)*\]$/.test(RNSF):
                        break;
                    default:
                        throw new Error("[ACUN MCVN]" + RNSF + "<--" + DIWR_AFOA.VR_AFOA_MCVN)
                }
            });
            RJSE_ZTHI_SLGR = DIWR_AFOA.VR_AFOA_MCVN;
        }
    } else if (Object.keys(diwr_vr_mcvn) == 0) {
        RJSE_ZTHI_SLGR = "[4=01][4=0x10] [4=0xff]"
    } else {
        if (diwr_vr_mcvn.asc) {
            RJSE_ZTHI_SLGR = "[" + ZTHI_YG_VDUM("32").map(RNSF => {
                return RNSF.ZTHI_VKIH + "=" + RNSF.DIYC_YG
            }).join(' ') + "]"

        } else if (diwr_vr_mcvn.okwk_zthi) {
            if (diwr_vr_mcvn.okwk_zthi == "") {
                RJSE_ZTHI_SLGR = "okwk_zthi=1 0X10 0XFF"
            } else {
                RJSE_ZTHI_SLGR = "okwk_zthi=" + diwr_vr_mcvn.okwk_zthi
            }
        }

    }
    return await DIZC_OUSS_2(BQEO_1, 999, RJSE_ZTHI_SLGR)
}
module.exports = VR_TSJQ_BRTZ_FS_ZV_DIZC_OUSS_2;