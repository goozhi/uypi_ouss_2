const uz_ms = require("../AFOA_BX/uz_ms")

function eyrh_hqmv(diwr_neig = {}, diwr_vnwy = {}) {
    var vnwm_diea_ae_immi = Object.entries(diwr_neig).filter(rn1 => /^(?:电压|温度)$/.test(rn1[0]))
    return vnwm_diea_ae_immi.map(rn3 => {
        var diwr_eyrh = rn3[1]
        return Object.entries(diwr_eyrh.uypj_slgr).map(rn1 => {
            var yyha_fo = rn1[0]
            var yyha_yg = rn1[1]
            if (diwr_vnwy[yyha_fo]) {
                Object.assign(yyha_yg, diwr_vnwy[yyha_fo])
                var vnwm_uypj = Object.entries(yyha_yg).filter(rn1 => /^\d+$/.test(rn1[0]))
                if (vnwm_uypj.length) {
                    return vnwm_uypj.map(rn4 => {
                        var eqwy_uypj_diyc_es = rn4[0]
                        var uypj_diyc_vnwy = yyha_yg.vnwm_vnwy[eqwy_uypj_diyc_es - 1]
                        if (uypj_diyc_vnwy) {
                            return rn4[1].map((rn1,eqwy_2) => {
                                var dyzv_1 = rn1.rj_uypj_vr.replace(/((?:d\d+)+)/ig, (match, p1) => {
                                    return '0x' + p1.replace(/d/i, "").replace(/d/ig, ' ').split(/ /).map(rn1 => {
                                        return uypj_diyc_vnwy[Number(rn1) - 1]
                                    }).join('')

                                })
                                var vn_jtyj
                                try {
                                    vn_jtyj = eval(dyzv_1)
                                } catch (err) {
                                    uz_ms('csrf-uypj ftpj-' + rn1)
                                }
                                Object.assign(rn1,{uypj_diyc_vnwy,vn_jtyj})
                                return `${yyha_fo}:${rn1.nini_wu}--${eqwy_2+1}--{${rn1.uypj_diyc_vnwy}}--${rn1.vn_jtyj.toFixed(rn1.agvn_tr_vn)} ${rn1.eytr} ${rn1.rj_uypj_peng}`
                            }).join('\n')
                        } else {
                            uz_ms('csrf-vnwy hmpc da ' + eqwy_uypj_diyc_es + ' es-' + yyha_fo)
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