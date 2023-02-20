
const uz_ms = require('./AFOA_BX/uz_ms');
const msqu_rjse_fs = require('./afoa_msqu/msqu_rjse_fs');
const msqu_rjse_rscs = require('./afoa_msqu/msqu_rjse_rscs');
var DIZC_OUSS_2 = require('./DIZC_OUSS_2');
const vr_afoa_bqeo_rscs = require('./vr_afoa_bqeo_rscs');
const vr_mcvn_rscs = require('./vr_mcvn_rscs/index.js');
var ZTHI_YG_VDUM = require('./ZTHI_YG_VDUM')
const vyvy_vnwm_usni_1 = [['根据开发者设置的默认值设置每个项目的最高字节的值', '自定义每个项目的最高字节的值', '自定义任意字节的值', "使用30-39模式"]]
async function VR_TSJQ_BRTZ_FS_ZV_DIZC_OUSS_2(DIWR_AFOA, diwr_mcvn) {
    var UXUX_YHLD = typeof (DIWR_AFOA)
    if (UXUX_YHLD != "object") {
        uz_ms("csrf-MCVN UXUX MSOX , AOAO JI object:-" + UXUX_YHLD)
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
                        uz_ms("csrf-ACUN MCVN-" + RNSF + "<--" + DIWR_AFOA.VR_AFOA_MCVN)
                }
            });
            RJSE_ZTHI_SLGR = DIWR_AFOA.VR_AFOA_MCVN;
        }
    } else if (Object.keys(diwr_vr_mcvn) == 0) {
        RJSE_ZTHI_SLGR = "[4=01][4=0x10] [4=0xff]"
    } else {
        if (diwr_vr_mcvn.hasOwnProperty("help")) {
            if (!diwr_vr_mcvn.msqu_zkrs) {
                var zkrs = "你将进行数据流项目对比，请选择以下功能进行数据流对比。"
                var diwr_zzzz_msqu_yhld = { uxux: "ussk", zkrs: zkrs, vyvy_vnwm_usni: vyvy_vnwm_usni_1 }
                msqu_rjse_fs(diwr_zzzz_msqu_yhld)
                var eqwy_vnwm_msqu = diwr_mcvn.vnwm_msqu.length;
                diwr_mcvn.vnwm_msqu.push(diwr_zzzz_msqu_yhld)
                diwr_vr_mcvn.msqu_zkrs = "ussk_dizc_rstz"
                diwr_vr_mcvn.eqwy_vnwm_msqu = eqwy_vnwm_msqu
                var rj_diwr_vr_mcvn = Object.entries(diwr_vr_mcvn).map(rn1 => { return rn1[1] ? rn1.join('=') : rn1[0] }).join(',')
                return { rjse_msqu: '99=' + rj_diwr_vr_mcvn + '{{\n' + diwr_zzzz_msqu_yhld.msqu_rjse + "\n}}", gkqj_tmtm_ybkc: false }
            }
            else if (diwr_vr_mcvn.msqu_zkrs) {
                var diwr_zzzz_msqu_yhld = diwr_mcvn.vnwm_msqu[Number(diwr_vr_mcvn.eqwy_vnwm_msqu)]
                if (diwr_mcvn.vnwm_msqu.length === 0) {
                    uz_ms('csrf-msqu vwcj-')
                }
                if (diwr_vr_mcvn.msqu_zkrs === "ussk_dizc_rstz") {
                    diwr_zzzz_msqu_yhld.rscs_bqeo = BQEO_1
                    msqu_rjse_rscs(diwr_zzzz_msqu_yhld)
                    var vn_dbkz_vdzv = diwr_zzzz_msqu_yhld.vnwm_dbkz_ussk[0][0]
                    switch (vyvy_vnwm_usni_1[0][vn_dbkz_vdzv]) {
                        case "根据开发者设置的默认值设置每个项目的最高字节的值":
                            diwr_vr_mcvn.okwk_zthi = ""
                            break;
                        case "自定义每个项目的最高字节的值":
                            diwr_vr_mcvn.msqu_zkrs = "jc_znzk_okih_ztih_dk_yg"
                            return;
                        case "自定义任意字节的值":
                            diwr_zzzz_msqu_yhld.uxux = "vdzv"
                            diwr_zzzz_msqu_yhld.zkrs = "请自定义字节的值，如以下参数表示将d4设为0x10、d5设为0x20作为一组数据；将d4设为0xff作为一组数据"
                            diwr_zzzz_msqu_yhld.hint = "[4=0x10 5=0x20][4=0xff]"
                            msqu_rjse_fs(diwr_zzzz_msqu_yhld)
                            diwr_vr_mcvn.msqu_zkrs = "jc_znzk_ymyi_ztih_dk_yg"
                            var rj_diwr_vr_mcvn = Object.entries(diwr_vr_mcvn).map(rn1 => { return rn1[1] ? rn1.join('=') : rn1[0] }).join(',')
                            return { rjse_msqu: "99=" + rj_diwr_vr_mcvn + "{{\n" + diwr_zzzz_msqu_yhld.msqu_rjse + "\n}}", gkqj_tmtm_ybkc: false }
                        case "使用30-39模式":
                            diwr_vr_mcvn.asc = ""
                            break;
                        default:
                            uz_ms('csrf-usni acun-' + vyvy_vnwm_usni_1[0][vn_dbkz_vdzv])
                    }
                    if (diwr_zzzz_msqu_yhld.vr_bqeo) {
                        BQEO_1 = diwr_zzzz_msqu_yhld.vr_bqeo
                    } else {
                        diwr_vr_mcvn.msqu_zkrs = "vdzv_vr_bqeo"
                        var rj_diwr_vr_mcvn = Object.entries(diwr_vr_mcvn).map(rn1 => { return rn1[1] ? rn1.join('=') : rn1[0] }).join(',')
                        diwr_zzzz_msqu_yhld.uxux = "vdzv"
                        diwr_zzzz_msqu_yhld.zkrs = "请输入数据流项目，比如以下示例"
                        diwr_zzzz_msqu_yhld.hint = "示例项目{220204}=9\n示例项目{220204}3f 4 a b c"
                        msqu_rjse_fs(diwr_zzzz_msqu_yhld)
                        return { rjse_msqu: "99=" + rj_diwr_vr_mcvn + "{{\n" + diwr_zzzz_msqu_yhld.msqu_rjse + "\n}}", gkqj_tmtm_ybkc: false }
                    }
                } else if (diwr_vr_mcvn.msqu_zkrs === "vdzv_vr_bqeo") {
                    diwr_zzzz_msqu_yhld.rscs_bqeo = BQEO_1
                    msqu_rjse_rscs(diwr_zzzz_msqu_yhld)
                    BQEO_1 = diwr_zzzz_msqu_yhld.vnwm_dbkz_vdzv[0]
                } else if (diwr_vr_mcvn.msqu_zkrs === "jc_znzk_ymyi_ztih_dk_yg") {
                    uz_ms('csrf-rsgm nsm wdfs yc ja zkrs ss atvn oqzn yeup, kqud ah fywy zkrs badb atvn. Ik omji zkrs dgld.-')
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
                RJSE_ZTHI_SLGR = "okwk_zthi=" + diwr_vr_mcvn.okwk_zthi.replace(/[\]\[]/g,"")
            }
        }

    }
    return await DIZC_OUSS_2(BQEO_1, 999, RJSE_ZTHI_SLGR)
}
module.exports = VR_TSJQ_BRTZ_FS_ZV_DIZC_OUSS_2;