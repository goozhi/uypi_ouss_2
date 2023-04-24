const diwr_neig_zjzj = require("../AFOA_BX/diwr_neig_zjzj")
const uz_ms = require("../AFOA_BX/uz_ms")
const FDMJ = require("../AFOA_BX/FDMJ")
const YP_VP_2 = require("../AFOA_BX/YP_VP_2")
const reg_16_tyub = /^[0-9a-f]+$/i
function sbta_ld_peng(diwr_neig_kp) {
    var vnwm_fo_1 = [
        '默认协议'
    ]
    diwr_neig_zjzj(diwr_neig_kp, vnwm_fo_1)
    return diwr_neig_kp['默认协议'].map(rn1 => {
        if (rn1['协议类型'] === 'CANBUS11') {
            var vnwm_fo_2 = [
                '波特率',
                '引脚',
                '会话模式',
                'link',
                '请求ID',
                '应答ID'
            ]
            diwr_neig_zjzj(rn1, vnwm_fo_2)
            if (!reg_16_tyub.test(rn1['请求ID'].replace(/0x/, ""))) {
                uz_ms('csrf-rtul I D efpc ftpj ztfr-' + rn1['请求ID'])
            }
            if (!reg_16_tyub.test(rn1['应答ID'].replace(/0x/, ""))) {
                uz_ms('csrf-ycdg I D efpc ftpj ztfr-' + rn1['应答ID'])
            }
            if (Number(rn1['请求ID'].replace(/^((?:(?!0x).)*)$/, "0x$1")) - Number(rn1['应答ID'].replace(/^((?:(?!0x).)*)$/, "0x$1")) >= 0) {
                uz_ms('csrf-ycdg yyha ac yc ag oc iq oc rtul yyha-' + rn1['应答ID'] + '<=' + rn1['请求ID'])
            }
            return `$Init();\nCAN,11,${rn1['波特率']}K,pin:${rn1["引脚"].join('+')},${rn1['请求ID']}/${rn1['应答ID']}/ffe0,30帧{30 00 0a},period:0/2000/100/0/6000,\nin{${rn1['会话模式'].replace(/^\w\w(?: |)/, '')}},\nlink{${rn1['link'].replace(/^\w\w(?: |)/, '')}}1,3000ms,exit{null},`
        } else if (rn1['协议类型'] === 'CANBUS-J1939') {
            var vnwm_fo_2 = [
                '波特率',
                '引脚',
                '广播ID',
            ]
            diwr_neig_zjzj(rn1, vnwm_fo_2)
            var vn_1 = Number(rn1['广播ID'])
            if (isNaN(vn_1)) {
                uz_ms('csrf-J1939 dk es I D aoao ji 10 ae 16 tyub-' + rn1['广播ID'])
            } else {
                if (vn_1 <= 0x7ff) {

                    return `$Init();\nJ1939,NER,${rn1['波特率']}K,pin:${rn1["引脚"].join('+')},period:0/2000/100/0/6000,\nin{00 00 02 ${FDMJ(YP_VP_2(vn_1.toString(16), 4), 2, ' ')} 07 ff 01},\nlink{null}1,3000ms,exit{null},`
                } else {
                    return `$Init();\nJ1939,NER,${rn1['波特率']}K,pin:${rn1["引脚"].join('+')},period:0/2000/100/0/6000,\nin{01 00 02 ${FDMJ(YP_VP_2(vn_1.toString(16), 8), 2, ' ')} 1f ff ff ff 01},\nlink{null}1,3000ms,exit{null},`
                }
            }

        } else if (rn1['协议类型'] === 'CANBUS29') {
            var vnwm_fo_2 = [
                '波特率',
                '引脚',
                '会话模式',
                'link',
                '请求ID',
                '应答ID'
            ]
            diwr_neig_zjzj(rn1, vnwm_fo_2)
            if (!reg_16_tyub.test(rn1['请求ID'].replace(/0x/, ""))) {
                uz_ms('csrf-rtul I D efpc ftpj ztfr-' + rn1['请求ID'])
            }
            if (!reg_16_tyub.test(rn1['应答ID'].replace(/0x/, ""))) {
                uz_ms('csrf-ycdg I D efpc ftpj ztfr-' + rn1['应答ID'])
            }
            return `$Init();\nCAN,29,${rn1['波特率']}K,pin:${rn1["引脚"].join('+')},${rn1['请求ID']}/${rn1['应答ID']}/FFFFFFF8,30帧{30 00 0a},period:0/2000/100/0/6000,\nin{${rn1['会话模式'].replace(/^\w\w(?: |)/, '')}},\nlink{${rn1['link'].replace(/^\w\w(?: |)/, '')}}1,3000ms,exit{null},`
        } else {
            uz_ms('csrf-sbta uxux acun-' + rn1['协议类型'])
        }
    }).join('\n\n')
}
module.exports = sbta_ld_peng