
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
            uz_ms('csrf-acun mcvn-' + DIWR_AFOA.VR_AFOA_MCVN)
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
        var vnwm_usni_1 = ['根据开发者设置的默认值设置每个项目的最高字节的值', '设置d4为开发者设置的默认值', '你自己设置最高字节的值']
        if (diwr_vr_mcvn.help) {
            if (!diwr_vr_mcvn.msqu_zkrs) {
                var zkrs = "你将进行数据流项目对比，请选择以下功能进行数据流对比。"
                var rj_2 = msqu_rjse_fs({ uxux: "ussk", zkrs: zkrs, vnwm_usni: vnwm_usni_1 })
                var gmih_vnwm_msqu = vnwm_msqu.length;
                vnwm_msqu.push(diwr_zzzz_msqu)
                return '99=msqu_zkrs=ussk_dizc_rstz,gmih_vnwm_msqu=' + gmih_vnwm_msqu + '{{\n' + rj_2 + "\n}}"
            }
            else if (diwr_vr_mcvn.msqu_zkrs) {
                if (diwr_vr_mcvn.msqu_zkrs === "ussk_dizc_rstz") {
                    var vn_dbkz_ussk = msqu_rjse_rscs({ uxux: "ussk", rscs_bqeo: BQEO_1 })
                    if (vnwm_msqu[diwr_vr_mcvn.gmih_vnwm_msqu].vr_bqeo) {
                        BQEO_1 = vnwm_msqu[diwr_vr_mcvn.gmih_vnwm_msqu].vr_bqeo
                    } else {
                        diwr_vr_mcvn.msqu_zkrs = "vdzv_vr_bqeo"
                        for(fo1 in diwr_vr_mcvn){
                            vnwm_yhld.push(fo1+"="+diwr_vr_mcvn[fo1])
                        }//lgz
                        var rj_diwr_vr_mcvn = vnwm_yhld.join(',')
                        var rj_yhld = msqu_rjse_fs({ uxux: "vdzv", zkrs: "请输入数据流项目，比如以下示例", hint: "示例项目{220204}=9" })
                        return "99=" + rj_diwr_vr_mcvn + "{{\n" + rj_yhld + "\n}}"
                    }
                    switch (vnwm_usni_1[vn_dbkz_ussk]) {
                        case "根据开发者设置的默认值设置每个项目的最高字节的值":
                            diwr_vr_mcvn.okwk_zthi = ""
                            break;
                        case "设置d4为开发者设置的默认值":
                            RJSE_ZTHI_SLGR = "[4=01][4=0x10] [4=0xff]"
                            break;
                        case "你自己设置最高字节的值":
                            return
                        case "使用30-39模式":
                            diwr_vr_mcvn.asc = ""
                            return
                        default:
                            uz_ms('csrf-usni acun-')
                    }
                } else if (diwr_vr_mcvn.msqu_zkrs === "vdzv_vr_bqeo") {
                    BQEO_1 = msqu_rjse_rscs(BQEO_1)
                }
            }
        }
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