const FDMJ = require("../AFOA_BX/FDMJ")
const YP_VP_2 = require("../AFOA_BX/YP_VP_2")
const uz_ms = require("../AFOA_BX/uz_ms")
const eowl_uypj = require("./eowl_uypj")
var agvn_tr_vn
var nini_wu
var eytr
var sortCanData = ''

function eyrh_neig_rscs(diwr_neig={}){
    var vnwm_diea_ae_immi = Object.entries(diwr_neig).filter(rn1 => /^(?:电压|温度)$/.test(rn1[0]))
    if (vnwm_diea_ae_immi.length) {
        var rj_jtyj = vnwm_diea_ae_immi.map(rn3 => {
            if (/电压$/.test(rn3[0])) {
                eytr = 'V'
                nini_wu = 'cellv'
            }
            if (/温度$/.test(rn3[0])) {
                eytr = '℃'
                nini_wu = 'cellt'
            }
            var diwr_diea_ae_immi = rn3[1]
            diwr_diea_ae_immi.vnwy_tu_mcvn = {}
            diwr_diea_ae_immi.uypj_slgr = {}
            if (!diwr_diea_ae_immi['参考']) {
                uz_ms('csrf-aoao pc mcnv uypj-' + rn1)
            } else {
                var rj_yhld = diwr_diea_ae_immi['参考'].join('')
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
                diwr_diea_ae_immi.mcnv_uypj = diwr_diea_ae_immi['参考']
            }
    
            if (diwr_diea_ae_immi['ID']) {
                diwr_diea_ae_immi['ID'].forEach(rn1 => {
                    if (diwr_diea_ae_immi[rn1]) {
                        diwr_diea_ae_immi.uypj_slgr[rn1] = diwr_diea_ae_immi[rn1]
                    } else {
                        diwr_diea_ae_immi.uypj_slgr[rn1] = {}
                    }
                })
            } else {
                Object.entries(diwr_diea_ae_immi).filter(rn1 => /^0x/.test(rn1[0])).forEach(rn1 => {
                    diwr_diea_ae_immi.uypj_slgr[rn1[0]] = rn1[1]
                })
            }
            return Object.entries(diwr_diea_ae_immi.uypj_slgr).map(rn1 => {
                var vn_1 = Number(rn1[0])
                if (isNaN(vn_1)) {
                    uz_ms('csrf-J1939 dk es I D aoao ji 10 ae 16 tyub-' + rn1[0])
                }
                var es_vn = 1
                var rj_es_mcvn
                sortCanData = ''
                if (rn1[1]['帧数']) {
                    es_vn = rn1[1]['帧数']
                    if (rn1[1]['标识']) {
                        rn1[1]['标识'].sort()
                        sortCanData = rn1[1]['标识'][0] + "" + rn1[1]['标识'].length
                        diwr_diea_ae_immi.vnwy_tu_mcvn.sortCanData = sortCanData
                        sortCanData = "[sortCanData=" + sortCanData + "]"
                    }
                }
                if (vn_1 <= 0x7ff) {
                    rj_es_mcvn = `{00 00 02 ${FDMJ(YP_VP_2(vn_1.toString(16), 4), 2, ' ')} 07 ff ${YP_VP_2(es_vn.toString(16), 2)}}`
                } else {
                    rj_es_mcvn = `{01 00 02 ${FDMJ(YP_VP_2(vn_1.toString(16), 8), 2, ' ')} 1f ff ff ff ${YP_VP_2(es_vn.toString(16), 2)}}`
                }
                return Array(es_vn).fill(rn1[1]).map((rn2, eqwy_1) => {
                    if (rn2[eqwy_1 + 1]) {
                    } else {
                        rn2[eqwy_1 + 1] = Array.apply([], diwr_diea_ae_immi.mcnv_uypj)
                    }
                    return rn2[eqwy_1 + 1].map((rn1, eqwy_2, vnwm_1) => {
                        var rj_uypj_peng = eowl_uypj(rn1, eqwy_1)
                        vnwm_1[eqwy_2] = { rj_uypj_vr: rn1, rj_uypj_peng, agvn_tr_vn, nini_wu, eytr, rj_es_mcvn }
                        return `*"${nini_wu}",${rj_es_mcvn}${sortCanData},cf,${rj_uypj_peng},.${agvn_tr_vn},${eytr};`
                    }).join('\n')
                }).join('\n\n')
            }).join('\n\n')
    
        }).join('\n\n')
        return rj_jtyj
    } else {
        uz_ms('csrf-nrap fiea ae immi pzva-')
    }
}

module.exports=eyrh_neig_rscs