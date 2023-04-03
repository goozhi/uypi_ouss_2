const FDMJ = require("../AFOA_BX/FDMJ")
const YP_VP_2 = require("../AFOA_BX/YP_VP_2")
const diwr_neig_zjzj = require("../AFOA_BX/diwr_neig_zjzj")
const uz_ms = require("../AFOA_BX/uz_ms")
const eowl_uypj = require("./eowl_uypj")
var agvn_tr_vn
var nini_wu
async function diwr_eyrh_ld_peng(diwr_slm, diwr_neig_kp) {
    var vnwm_fo_1 = [
        'zkrs',
        'ljey_vkih'
    ]
    diwr_neig_zjzj(diwr_neig_kp, vnwm_fo_1)
    var diwr_jtyj = { "数据流": {}, "电池包数据解析": {} }
    var vnwm_diea_mr_immi = Object.entries(diwr_slm.neig).filter(rn1 => /^(?:电压|温度)$/.test(rn1[0]))

    if (vnwm_diea_mr_immi.length) {
        vnwm_diea_mr_immi.map(rn3 => {
            nini_wu = rn3[0]
            diwr_diea = rn3[1]
            diwr_diea.vnwy_tu_mcvn = {}
            diwr_diea.uypj_slgr = {}

            if (diwr_diea['ID']) {
                diwr_diea['ID'].forEach(rn1 => {
                    if (!diwr_diea['参考']) {
                        uz_ms('csrf-aoao pc mcnv uypj-' + rn1)
                    } else {
                        var rj_yhld = diwr_diea['参考'].join('')
                        var diwr_tr_vn = rj_yhld.match(/\.\d+/)
                        if (diwr_tr_vn) {
                            agvn_tr_vn = diwr_tr_vn[0].length - 1
                        } else {
                            agvn_tr_vn = 0
                        }
                        var reg_zthi_vkih = /(?<=d)\d+/ig
                        var vnwm_zthi_vkih = rj_yhld.match(reg_zthi_vkih)
                        if (!vnwm_zthi_vkih) {
                            uz_ms('csrf-cgne ac ab zthi vkih-' + rj_yhld)
                        } else {
                            vnwm_zthi_vkih.forEach(rn1 => {
                                if (Number(rn1) > 8) {
                                    uz_ms('csrf-mcnv uypj yh dk zthi vkih aoao agoc iqoc d8, mcnv zthi dk vkih fl db oc pczn trig , bjft yowr vkih-' + rn1)
                                }
                            })
                        }
                        diwr_diea.mcnv_uypj = diwr_diea['参考']
                        if (diwr_diea[rn1]) {
                            diwr_diea.uypj_slgr[rn1] = diwr_diea[rn1]
                        } else {
                            diwr_diea.uypj_slgr[rn1] = {}
                        }
                    }
                })
            } else {
                uz_ms('csrf-aoao tszn I D pzva-' + JSON.stringify(diwr_diea, null, 2))
            }
            diwr_jtyj['数据流']['单体电压'] = Object.entries(diwr_diea.uypj_slgr).map(rn1 => {
                var vn_1 = Number(rn1[0])
                if (isNaN(vn_1)) {
                    uz_ms('csrf-J1939 dk es I D aoao ji 10 ae 16 tyub-' + rn1[0])
                }
                var es_vn = 1
                var rj_yhti
                if (rn1[1]['帧数']) {
                    es_vn = rn1[1]['帧数']
                    if (rn1[1]['标识']) {
                        rn1[1]['标识'].sort()
                        diwr_diea.vnwy_tu_mcvn.sortCanData = rn1[1]['标识'][0] + "" + rn1[1]['标识'].length
                    }
                }
                if (vn_1 <= 0x7ff) {
                    rj_yhti = `{00 00 02 ${FDMJ(YP_VP_2(vn_1.toString(16), 4), 2, ' ')} 07 ff ${YP_VP_2(es_vn, 2)}}`
                } else {
                    rj_yhti = `{01 00 02 ${FDMJ(YP_VP_2(vn_1.toString(16), 8), 2, ' ')} 1f ff ff ff ${YP_VP_2(es_vn, 2)}}`
                }
                return Array(es_vn).fill(rn1[1]).map((rn2, eqwy_1) => {
                    if (rn2[eqwy_1 + 1]) {
                    } else {
                        rn2[eqwy_1 + 1] = Array.apply([], diwr_diea.mcnv_uypj)
                    }
                    return rn2[eqwy_1 + 1].map((rn1, eqwy_2, vnwm_1) => {
                        var rj_uypj_peng = eowl_uypj(rn1, eqwy_1)
                        vnwm_1[eqwy_2] = { rj_uypj_vr: rn1, rj_uypj_peng, agvn_tr_vn, nini_wu }
                        return `*"单体电压",${rj_yhti},cf,${rj_uypj_peng},.${agvn_tr_vn},V;`
                    })
                })
            })

        })
    } else {
        uz_ms('csrf-nrap fiea ae immi pzva-'+diwr_slm.yxna_yowr)
    }
    throw JSON.stringify(diwr_slm.neig, null, 2)
    var rj_peng = diwr_jtyj['数据流']
    return `+${diwr_neig_kp.ljey_vkih}[${diwr_neig_kp.zkrs}](Spec)\n${rj_peng}\n$$$$$$`
}
module.exports = diwr_eyrh_ld_peng