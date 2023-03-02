
const uz_ms = require('./AFOA_BX/uz_ms');
var DIZC_OUSS_2 = require('./DIZC_OUSS_2');
const diwr_sopc_zkrs = require('./msqu_dizc_ouss/diwr_sopc_zkrs');
const vr_afoa_bqeo_rscs = require('./vr_afoa_bqeo_rscs');
const vr_mcvn_rscs = require('./vr_mcvn_rscs/index.js');
var ZTHI_YG_VDUM = require('./ZTHI_YG_VDUM')
async function VR_TSJQ_BRTZ_FS_ZV_DIZC_OUSS_2(DIWR_AFOA, diwr_mcvn) {
    var UXUX_YHLD = typeof (DIWR_AFOA)
    if (UXUX_YHLD != "object") {
        uz_ms("csrf-MCVN UXUX MSOX , AOAO JI object:-" + UXUX_YHLD)
    }
    var BQEO_1 = vr_afoa_bqeo_rscs(DIWR_AFOA.VR_AFOA_BQEO).replace(/^\/\/.*/gm,"该项目已被注释掉{999998}33 4 请忽略该项目")
    var diwr_vr_mcvn = vr_mcvn_rscs(DIWR_AFOA.VR_AFOA_MCVN, {
        diwr_vnwm_mcvn_wu_oqzn: [{ reg_lzm_wu: /^(?:9|max)$/i, yowr_wu: "okwk_zthi" }
            , { reg_lzm_wu: /^(?:32|asc)$/i, yowr_wu: "asc" }, { reg_lzm_wu: /^(?:help)$/i, yowr_wu: "help" }]
    })
    var VNWM_ZTHI_MCVN_1
    var RJSE_ZTHI_SLGR
    if (!diwr_vr_mcvn) {
        VNWM_ZTHI_MCVN_1 = DIWR_AFOA.VR_AFOA_MCVN.match(/\[.*?\]/g);
        if (VNWM_ZTHI_MCVN_1 == null) {
            uz_ms('csrf-acun mcvn-' + DIWR_AFOA.VR_AFOA_MCVN)
        } else {
            VNWM_ZTHI_MCVN_1.forEach(RNSF => {
                switch (true) {
                    case /^\[\d+=\w+(?: \d+=\w+)*\]$/.test(RNSF):
                        break;
                    default:
                        uz_ms("csrf-ACUN MCVN-" + RNSF + "<--" + DIWR_AFOA.VR_AFOA_MCVN)
                }
            });
            RJSE_ZTHI_SLGR = DIWR_AFOA.VR_AFOA_MCVN;
        }
    } else if (Object.keys(diwr_vr_mcvn) == 0) {
        diwr_vr_mcvn.zthi_dbkz_znzk = "[4=01][4=0x10] [4=0xff]"
        RJSE_ZTHI_SLGR = diwr_vr_mcvn.zthi_dbkz_znzk
    } else {
        if (diwr_vr_mcvn.hasOwnProperty("help")) {
            diwr_mcvn.diwr_vr_mcvn = diwr_vr_mcvn
            var diwr_msqu_zkrs = new diwr_sopc_zkrs(diwr_mcvn.vnwm_msqu)
            diwr_mcvn.diwr_vr_mcvn = diwr_vr_mcvn
            diwr_mcvn.vr_bqeo = BQEO_1
            if (!diwr_vr_mcvn.msqu_zkrs) {
                if (!/\S/.test(BQEO_1)) {
                    diwr_mcvn.diwr_vr_mcvn.msqu_zkrs = 'vdzv_vr_bqeo'
                } else {
                    diwr_mcvn.diwr_vr_mcvn.msqu_zkrs = 'ussk_dizc_rstz'
                }
                return diwr_msqu_zkrs.ce_zkrs(diwr_mcvn)
            } else {
                if(diwr_mcvn.vnwm_msqu.length===0){
                    uz_ms('csrf-mcvn nrap-')
                }
                var zkrs_wdbu_jtyj = await diwr_msqu_zkrs.wdbu_zkrs(diwr_mcvn)
                if (zkrs_wdbu_jtyj) {
                    return zkrs_wdbu_jtyj
                }else{
                    BQEO_1 = diwr_mcvn.diwr_msqu_zzzz.vr_okpy_bqeo
                }
            }
        }
        if (diwr_vr_mcvn.asc != undefined) {
            RJSE_ZTHI_SLGR = "[" + ZTHI_YG_VDUM("32").map(RNSF => {
                return RNSF.ZTHI_VKIH + "=" + RNSF.DIYC_YG
            }).join(' ') + "]"

        } else if (diwr_vr_mcvn.okwk_zthi != undefined) {
            if (diwr_vr_mcvn.okwk_zthi == "") {
                RJSE_ZTHI_SLGR = "okwk_zthi=1 0X10 0XFF"
            } else {
                RJSE_ZTHI_SLGR = "okwk_zthi=" + diwr_vr_mcvn.okwk_zthi.replace(/[\]\[]/g, "")
            }
        } else if (diwr_vr_mcvn.zthi_dbkz_znzk != undefined) {
            RJSE_ZTHI_SLGR = diwr_vr_mcvn.zthi_dbkz_znzk
        }
        else {
            uz_ms('csrf-V R mcvn acun-' + JSON.stringify(diwr_vr_mcvn))
        }

    }
    return await DIZC_OUSS_2(BQEO_1, 999, RJSE_ZTHI_SLGR)
}
module.exports = VR_TSJQ_BRTZ_FS_ZV_DIZC_OUSS_2;