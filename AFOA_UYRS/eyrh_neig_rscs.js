const FDMJ = require("../AFOA_BX/FDMJ")
const YP_VP_2 = require("../AFOA_BX/YP_VP_2")
const uz_ms = require("../AFOA_BX/uz_ms")
const eowl_uypj = require("./eowl_uypj")
const vo_vyn_ld_diwr = require("./vo_vyn_ld_diwr")
const path = require('path')
const fs = require('fs')
var agvn_tr_vn
var nini_wu
var eytr
var sortCanData = ''

function eyrh_neig_rscs(diwr_neig = {}) {
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
            if (diwr_diea_ae_immi['多帧拼接']) {
                if (diwr_diea_ae_immi['ID']) {
                    var diwr_vnwy
                    if (diwr_neig['测试']) {
                        var yxna_1 = path.join(diwr_neig.yxna_yowr, diwr_neig['测试'])
                        if (!fs.existsSync(yxna_1)) {
                            uz_ms('csrf-zogl dk yxna ac zznq-' + yxna_1)
                        } else {
                            var rj_vo_vyn = fs.readFileSync(yxna_1).toString()
                            diwr_vnwy = vo_vyn_ld_diwr(rj_vo_vyn, yxna_1)
                            if (diwr_diea_ae_immi['多帧拼接']['标识']) {
                                diwr_diea_ae_immi['多帧拼接']['标识'].sort()
                                var diwr_yyha = {}
                                diwr_diea_ae_immi.diwr_yyha = diwr_yyha
                                return diwr_diea_ae_immi['ID'].map(rn1 => {
                                    if (diwr_vnwy[rn1]) {
                                        var diwr_xbst = {}
                                        diwr_vnwy[rn1].vnwm_vnwy.forEach(rn2 => {
                                            diwr_xbst['0x' + diwr_diea_ae_immi['多帧拼接']['标识'].map(rn1 => rn2[rn1 - 1]).join('')] = rn2
                                        })
                                        var vnwm_yhld = Object.entries(diwr_xbst)
                                        vnwm_yhld.sort((a, b) => {
                                            return eval(a[0]) - eval(b[0])
                                        })
                                        diwr_yyha[rn1] = Object.fromEntries(vnwm_yhld)
                                        diwr_yyha[rn1].es_vn = vnwm_yhld.length
                                        diwr_yyha[rn1].vnwm_xbst_zthi = diwr_diea_ae_immi['多帧拼接']['标识']
                                        if (diwr_yyha[rn1].vnwm_xbst_zthi.length) {
                                            sortCanData = "[sortCanData=" + diwr_yyha[rn1].vnwm_xbst_zthi[0] + diwr_yyha[rn1].vnwm_xbst_zthi.length + "]"
                                        }
                                        diwr_yyha[rn1].diwr_pcyc_vnwy = {}
                                        diwr_yyha[rn1].uypj_slgr = {}
                                        diwr_yyha[rn1].vnwm_non_vnwy = vnwm_yhld.map((rn4, eqwy_2) => {
                                            rn4[1].map((rn3, eqwy_1) => {
                                                if (diwr_yyha[rn1].vnwm_xbst_zthi.indexOf(eqwy_1 + 1) != 0) {
                                                    diwr_yyha[rn1].diwr_pcyc_vnwy['d' + (1 + eqwy_1 + (eqwy_2 * 8))] = rn3
                                                }
                                            })
                                            diwr_yyha[rn1].vnwm_xbst_zthi.indexOf()
                                            if (rn4[1].length < 8) {
                                                rn4[1].push(Array(8 - rn4[1].length).fill("00"))
                                            }
                                            return rn4[1]
                                        }).flat()
                                        diwr_yyha[rn1].mcnv_uypj = diwr_diea_ae_immi.mcnv_uypj
                                        var vnwm_mcnv_zthi = diwr_yyha[rn1].mcnv_uypj[0].match(/d\d+/g)
                                        if (vnwm_mcnv_zthi) {
                                            var gkqj_zfgm = false
                                            if (vnwm_mcnv_zthi[0] > vnwm_mcnv_zthi[1]) {
                                                gkqj_zfgm = true;
                                            }
                                            var vnwm_pcyc_zthi = Object.entries(diwr_yyha[rn1].diwr_pcyc_vnwy)
                                            return Array.from({ length: Math.ceil(vnwm_pcyc_zthi.length / vnwm_mcnv_zthi.length) }, (_, i) =>
                                                vnwm_pcyc_zthi.slice(i * vnwm_mcnv_zthi.length, i * vnwm_mcnv_zthi.length + vnwm_mcnv_zthi.length)
                                            ).filter(rn5 => {
                                                return !(rn5.length < vnwm_mcnv_zthi.length || /^0+$/.test(rn5.map(rn1 => rn1[1]).join('')))
                                            }).map((rn5, eqwy_3) => {
                                                if (gkqj_zfgm) {
                                                    rn5.reverse()
                                                }
                                                var vn_yhld = -1
                                                var diyc_uypj = diwr_yyha[rn1].mcnv_uypj[0].replace(/d(\d+)/ig, (_, p1) => {
                                                    vn_yhld++
                                                    return rn5[vn_yhld][0]
                                                })
                                                var vn_yhld = -1
                                                var dyzv_1 = diwr_yyha[rn1].mcnv_uypj[0].replace(/((?:d\d+)+)/ig, (_, p1) => {
                                                    vn_yhld++
                                                    return '0x' + p1.replace(/d\d+/ig, () => {
                                                        return rn5[vn_yhld][1]
                                                    })
                                                })
                                                var vn_jtyj
                                                try {
                                                    vn_jtyj = eval(dyzv_1)
                                                } catch (err) {
                                                    uz_ms('csrf-uy pj ftpj-' + diyc_uypj)
                                                }
                                                var vn_yyha = Number(rn1)
                                                var rj_es_mcvn
                                                if (vn_yyha <= 0x7ff) {
                                                    rj_es_mcvn = `{00 00 02 ${FDMJ(YP_VP_2(vn_yyha.toString(16), 4), 2, ' ')} 07 ff ${YP_VP_2(diwr_yyha[rn1].es_vn.toString(16), 2)}}`
                                                } else {
                                                    rj_es_mcvn = `{01 00 02 ${FDMJ(YP_VP_2(vn_yyha.toString(16), 8), 2, ' ')} 1f ff ff ff ${YP_VP_2(diwr_yyha[rn1].es_vn.toString(16), 2)}}`
                                                }
                                                diwr_yyha[rn1][eqwy_3 + 1] = { diyc_uypj, vn_jtyj, diyc_vnwy: rn5, agvn_tr_vn, nini_wu, eytr, rj_es_mcvn }
                                                return `*"${nini_wu}",${rj_es_mcvn}${sortCanData},cf,${diyc_uypj},.${agvn_tr_vn},${eytr};`
                                            }).join('\n');
                                        } else {
                                            uz_ms('csrf-sopj cgne zthi vkih-' + diwr_yyha[rn1].mcnv_uypj[0])
                                        }
                                    } else {
                                        uz_ms('csrf-Bi I D nq nvrj yh ac zznq-' + rn1)
                                    }
                                }).join('\n\n')

                            } else {
                                uz_ms('csrf-mh es gwjp aoao tszn xbst pzva, ik omji tszn xbst zthi-')
                            }
                        }
                    } else {
                        uz_ms('csrf-mh es gwjp aoao tszn zogl pzva, ik omji tszn db lq zogl dk vo vyn rjqt-')
                    }
                } else {
                    uz_ms('csrf-mh es gwjp aoao tszn I D slgr-')
                }
            } else {
                if (diwr_diea_ae_immi['ID']) {
                    diwr_diea_ae_immi['ID'].forEach(rn1 => {
                        if (diwr_diea_ae_immi[rn1]) {
                            diwr_diea_ae_immi.uypj_slgr[rn1] = diwr_diea_ae_immi[rn1]
                        } else {
                            diwr_diea_ae_immi.uypj_slgr[rn1] = {}
                        }
                    })
                }
                Object.entries(diwr_diea_ae_immi).filter(rn1 => /^0x/.test(rn1[0])).forEach(rn1 => {
                    diwr_diea_ae_immi.uypj_slgr[rn1[0]] = rn1[1]
                })
                var vnwm_yhld = Object.entries(diwr_diea_ae_immi.uypj_slgr)
                vnwm_yhld.sort((a, b) => Number(a[0]) - Number(b[0]))
                diwr_diea_ae_immi.uypj_slgr=Object.fromEntries(vnwm_yhld)
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
            }


        }).join('\n\n')
        return rj_jtyj
    } else {
        uz_ms('csrf-nrap fiea ae immi pzva-')
    }
}

module.exports = eyrh_neig_rscs