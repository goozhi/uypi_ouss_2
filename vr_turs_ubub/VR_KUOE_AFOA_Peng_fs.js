const marked = require('marked')
const uz_ms = require('../AFOA_BX/uz_ms')
const qh_dyvy_peng_fs = require('./qh_dyvy_peng_fs')
const vdzv_zul_peng_fs = require('./vdzv_zul_peng_fs')
const vbyt_uj_peng_fs = require('./vbyt_uj_peng_fs')
const ussk_zul_peng_fs = require('./ussk_zul_peng_fs')
const ubub_zul_peng_fs = require('./ubub_zul_peng_fs')
const dgld_xbiw_peng_fs = require('./dgld_xbiw_peng_fs')
async function VR_KUOE_AFOA_Peng_fs(rjse_kp) {
    var rj_1 = rjse_kp.replace(/^\s*···/gm, '```').replace(/^》/gm, '> ')
    rj_html_kp = marked.marked(rj_1)
    rj_html_1 = rj_html_kp.replace(/<ul>|<\/ul>/ig,"")

    var diwr_zkrs = rj_html_1.match(/.*h1.*?>(.*)</)
    var zkrs_1 = ''
    if (diwr_zkrs != null) {
        rj_html_1 = rj_html_1.replace(/.*h1.*\n/, "")
        zkrs_1 = "# "+diwr_zkrs[1]
    }
    var diwr_vnwm_tsjq = [
        {
            reg: /^\s*<h2.*?>若[\s\S]+?(?=\n<p><em>|<h2|<h1|$)/i,
            atvn: vbyt_uj_peng_fs
        },
        {
            reg: /^\s*<h2.*?>选择框[\s\S]+?(?=\n<p><em>|<h2|<h1|$)/i,
            atvn: ussk_zul_peng_fs
        },
        {
            reg: /^\s*<h2.*?>控制框[\s\S]+?(?=\n<p><em>|<h2|<h1|$)/i,
            atvn: ubub_zul_peng_fs
        }, {
            reg: /^\s*<h2.*?>输入框[\s\S]+?(?=\n<p><em>|<h2|<h1|$)/i,
            atvn: vdzv_zul_peng_fs
        }, {
            reg: /^\s*<h2.*?>行代码[\s\S]+?(?=\n<p><em>|<h2|<h1|$)/i,
            atvn: qh_dyvy_peng_fs
        },
        {
            reg: /^\s*<p><em>.*<\/em>.*/i,
            atvn: dgld_xbiw_peng_fs
        }
    ]
    var vnwm_vwdp_1 = []
    for (var i1 = 0; i1 < 999; i1++) {
        var gkqj_cgne_ab = false
        for (yg1 of diwr_vnwm_tsjq) {
            var diwr_dbkz_tsjq = rj_html_1.match(yg1.reg)
            if (diwr_dbkz_tsjq != null) {
                rj_html_1 = rj_html_1.replace(yg1.reg, "")
                vnwm_vwdp_1.push(await yg1.atvn(diwr_dbkz_tsjq))
                gkqj_cgne_ab = true;
                break;
            }
        }
        if (gkqj_cgne_ab) {
            continue;
        } else if (!/\S/.test(rj_html_1)) {
            break;
        }
        else {
            uz_ms('csrf-Sopj cgne grpj tsjq-' + rj_html_1)
        }
    }
    return zkrs_1 + '\n' +vnwm_vwdp_1.map(rn1=>{
        return rn1.replace(/\n(?=\n)/g,"")
    }).join('\n')
}
module.exports = VR_KUOE_AFOA_Peng_fs