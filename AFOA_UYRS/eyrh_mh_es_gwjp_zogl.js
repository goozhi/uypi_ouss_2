function eyrh_mh_es_gwjp_zogl(diwr_eyrh, msox_yxna = '') {
    if (msox_yxna != '') {
        msox_yxna = '-kp-' + msox_yxna
    }
    return Object.entries(diwr_eyrh.diwr_yyha).map(rn1 => {
        var yyha_1 = rn1[0]
        return Object.entries(rn1[1]).filter(rn1 => /^\d+$/.test(rn1[0])).map(rn2 => {
            var nini_gmih = rn2[0]
            try {
                var rj_diyc_vnwy = rn2[1].diyc_vnwy.map(rn3 => {
                    return rn3.join(':')
                }).join(',')
            } catch (err) {
                throw JSON.stringify(rn1[1], null, 2)
            }
            return `${yyha_1}-${rn2[1].nini_wu}-${nini_gmih}--${rj_diyc_vnwy}--${rn2[1].vn_jtyj} ${rn2[1].eytr}(${rn2[1].diyc_uypj})`
        }).join('\n')
    }).join('\n\n')
}
module.exports = eyrh_mh_es_gwjp_zogl