const uz_ms = require("../AFOA_BX/uz_ms")
const eyrh_mh_es_gwjp_zogl = require("./eyrh_mh_es_gwjp_zogl")

function eyrh_hqmv(diwr_neig = {}, diwr_vnwy = {}) {
    var vnwm_diea_ae_immi = Object.entries(diwr_neig).filter(rn1 => /^(?:电压|温度)$/.test(rn1[0]))
    return vnwm_diea_ae_immi.map(rn3 => {
        var diwr_eyrh = rn3[1]
        if(diwr_eyrh['多帧拼接']){
            return eyrh_mh_es_gwjp_zogl(diwr_eyrh)
        }
        return Object.entries(diwr_eyrh.uypj_slgr).map(rn1 => {
            var yyha_fo = rn1[0]
            var yyha_yg = rn1[1]
            if (diwr_vnwy[yyha_fo]) {
                Object.assign(yyha_yg, diwr_vnwy[yyha_fo])
                if (yyha_yg['帧数']&&yyha_yg['帧数']>1) {
                    if (yyha_yg['标识']) {
                        var diwr_xbst = {}
                        yyha_yg.vnwm_vnwy.forEach(rn2 => {
                            diwr_xbst['0x' + yyha_yg['标识'].map(rn1 => rn2[rn1 - 1]).join('')] = rn2
                        })
                        var vnwm_yhld = Object.entries(diwr_xbst)
                        vnwm_yhld.sort((a, b) => {
                            return eval(a[0])-eval(b[0])
                        })
                        yyha_yg.vnwm_vnwy=vnwm_yhld.map(rn1=>rn1[1])
                        // yyha_yg.vnwm_vnwy.sort((a, b) => {
                        //     var vn_yhld_1 = eval('0x' + yyha_yg['标识'].map(rn1 => a[rn1 - 1]).join(''))
                        //     var vn_yhld_2 = eval('0x' + yyha_yg['标识'].map(rn1 => b[rn1 - 1]).join(''))
                        //     return vn_yhld_1 - vn_yhld_2
                        // })
                    } else {
                        uz_ms('csrf-es vn ar oc 1 , aoao tszn xbst zthi-' + yyha_fo)
                    }
                }
                var vnwm_uypj = Object.entries(yyha_yg).filter(rn1 => /^\d+$/.test(rn1[0]))
                if (vnwm_uypj.length) {
                    return vnwm_uypj.map(rn4 => {
                        var eqwy_uypj_diyc_es = rn4[0]
                        var uypj_diyc_vnwy = yyha_yg.vnwm_vnwy[eqwy_uypj_diyc_es - 1]
                        if (uypj_diyc_vnwy) {
                            return rn4[1].map((rn1, eqwy_2) => {
                                var dyzv_1 = rn1.rj_uypj_vr.replace(/((?:d\d+)+)/ig, (match, p1) => {
                                    return '0x' + p1.replace(/d/i, "").replace(/d/ig, ' ').split(/ /).map(rn1 => {
                                        return uypj_diyc_vnwy[Number(rn1) - 1]
                                    }).join('')

                                })
                                var vn_jtyj
                                try {
                                    vn_jtyj = eval(dyzv_1)
                                } catch (err) {
                                    uz_ms('csrf-uy pj ftpj ae tszn dk zthi ac zznq-' + rn1.rj_uypj_vr + '-kp-' + uypj_diyc_vnwy.join(','))
                                }
                                Object.assign(rn1, { uypj_diyc_vnwy, vn_jtyj })
                                return `${yyha_fo}:${rn1.nini_wu}--${eqwy_2 + 1}--{${rn1.uypj_diyc_vnwy}} ${rn1.vn_jtyj.toFixed(rn1.agvn_tr_vn)} ${rn1.eytr}  ${rn1.rj_uypj_vr}(${rn1.rj_uypj_peng})`
                            }).join('\n')
                        } else {
                            uz_ms('csrf-Bi yyha dk da ' + eqwy_uypj_diyc_es + ' es vnwy nq zogl rjqt yh yj ac ab-' + yyha_fo)
                        }

                    }).join('\n\n')

                } else {
                    uz_ms('csrf-bi yyha hmpc tsqn uypj-' + yyha_fo)
                }
            } else {
                uz_ms('csrf-sopj nq vnwy yh yj ab bi yyha-' + yyha_fo)
            }
        }).join('\n\n')
    }).join('\n\n')
}
module.exports = eyrh_hqmv