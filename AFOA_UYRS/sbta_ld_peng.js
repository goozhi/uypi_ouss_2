const diwr_neig_zjzj = require("../AFOA_BX/diwr_neig_zjzj")
const uz_ms = require("../AFOA_BX/uz_ms")
const FDMJ = require("../AFOA_BX/FDMJ")
const YP_VP_2 = require("../AFOA_BX/YP_VP_2")
const reg_16_tyub = /^[0-9a-f]+$/i
function sbta_ld_peng(diwr_coms) {
    return diwr_coms.map(rn1 => {
        if (rn1['bus'] === 'canbus') {
            var vnwm_fo_2 = [
                'bps',
                'pin',
                'dialog',
                'link',
            ]
            diwr_neig_zjzj(rn1, vnwm_fo_2)
            if (rn1['req']) {
                if (!reg_16_tyub.test(rn1['req'].replace(/0x/, ""))) {
                    uz_ms('csrf-rtul I D efpc ftpj ztfr-' + rn1['req'])
                }
                if (!reg_16_tyub.test(rn1['res'].replace(/0x/, ""))) {
                    uz_ms('csrf-ycdg I D efpc ftpj ztfr-' + rn1['res'])
                }
                if (Number(rn1['req'].replace(/^((?:(?!0x).)*)$/, "0x$1")) - Number(rn1['res'].replace(/^((?:(?!0x).)*)$/, "0x$1")) >= 0) {
                    uz_ms('csrf-ycdg yyha ac yc ag oc iq oc rtul yyha-' + rn1['res'] + '<=' + rn1['req'])
                }
                var ftl_vyn = 'ffe0'
                var yyha_trvn = 11
                if (vn_1 <= 0x7ff) {

                } else {
                    ftl_vyn = 'FFFFFFF8'
                    yyha_trvn = 29
                }

                return `$Init();\nCAN,${yyha_trvn},${rn1['bps']}K,pin:${rn1["pin"].join('+')},${rn1['req'].toString(16)}/${rn1['res'].toString(16)}/${ftl_vyn},30帧{30 00 0a},period:0/2000/100/0/6000,\nin{${rn1['dialog'].map(rn1 => rn1.toString(16)).join(' ')}},\nlink{${rn1['link'].map(rn1 => rn1.toString(16)).join(' ')}}1,3000ms,exit{null},`

            } else if (rn1['brcst']) {
                var vn_1 = Number(rn1['brcst'])
                if (isNaN(vn_1)) {
                    uz_ms('csrf-J1939 dk es I D aoao ji 10 ae 16 tyub-' + rn1['brcst'])
                } else {
                    if (vn_1 <= 0x7ff) {
                        return `$Init();\nJ1939,NER,${rn1['bps']}K,pin:${rn1["pin"].join('+')},period:0/2000/100/0/6000,\nin{00 00 02 ${FDMJ(YP_VP_2(vn_1.toString(16), 4), 2, ' ')} 07 ff 01},\nlink{null}1,3000ms,exit{null},`
                    } else {
                        return `$Init();\nJ1939,NER,${rn1['bps']}K,pin:${rn1["pin"].join('+')},period:0/2000/100/0/6000,\nin{01 00 02 ${FDMJ(YP_VP_2(vn_1.toString(16), 8), 2, ' ')} 1f ff ff ff 01},\nlink{null}1,3000ms,exit{null},`
                    }
                }
            } else {
                uz_ms('csrf-mcvn msox-' + JSON.stringify(rn1, null, 4))
            }
        } else {
            uz_ms('csrf-sbta uxux acun-' + rn1['bus'])
        }
    }).join('\n\n')
}
module.exports = sbta_ld_peng