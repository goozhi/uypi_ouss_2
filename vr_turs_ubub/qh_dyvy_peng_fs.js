const uz_ms = require("../AFOA_BX/uz_ms")
const aovc_peng_fs = require("./aovc_peng_fs")
const cf_wvvy_peng_fs = require("./cf_wvvy_peng_fs")
const dgld_peng_fs = require("./dgld_peng_fs")
const dzvv_peng_fs = require("./dzvv_peng_fs")
const es_vnwm_jktr_peng_fs = require("./es_vnwm_jktr_peng_fs")
const iq_peng_fs = require("./iq_peng_fs")
const lcyi_peng_fs = require("./lcyi_peng_fs")
const rstu_uj_csrf = require("./rstu_uj_csrf")
const uwbf_peng_fs = require("./uwbf_peng_fs")
const voud_peng_fs = require("./voud_peng_fs")

function qh_dyvy_peng_fs(diwr_match) {
    if (typeof (diwr_match) != 'object') {
        uz_ms('csrf-mcvn uxux aoao ji object-' + diwr_match)
    } else if (diwr_match == null) {
        uz_ms('csrf-mcvn uxux aoao ji ft n u l l-' + diwr_match)
    }
    var rj_html_1 = diwr_match[0].replace(/.*h2.*\n.*ul.*\n/, "").replace(/\n.*<\/ul>.*/, "").replace(/.*h2.*/,"")
    var diwr_vnwm_tsjq = [
        {
            reg: /^\s*<li>发送.*/i,
            atvn: voud_peng_fs
        }, {
            reg: /^\s*<li>打印.*/i,
            atvn: uwbf_peng_fs
        }, {
            reg: /^\s*<li>须知.*/i,
            atvn: aovc_peng_fs
        }, {
            reg: /^\s*<li>注意.*/i,
            atvn: lcyi_peng_fs
        }, {
            reg: /^\s*<li>等.*/i,
            atvn: iq_peng_fs
        }, {
            reg: /^\s*<li>帧数组复位.*/i,
            atvn: es_vnwm_jktr_peng_fs
        }, {
            reg: /^\s*<li>过密码.*/i,
            atvn: cf_wvvy_peng_fs
        }, {
            reg: /^\s*<li>跳转.*/i,
            atvn: dgld_peng_fs
        }, {
            reg: /^\s*<li>点击.*/i,
            atvn: dzvv_peng_fs
        }, {
            reg: /^\s*<p>.*<\/p>/i,
            atvn: rstu_uj_csrf
        }
    ]
    var vnwm_1 = rj_html_1.split('\n')
    var vnwm_2 = vnwm_1.map(rn1 => {
        if(!/\S/.test(rn1)){
            return ""
        }
        for (yg1 of diwr_vnwm_tsjq) {
            var diwr_yhld = rn1.match(yg1.reg)
            if (diwr_yhld != null) {
                return yg1.atvn(diwr_yhld)
            }
        }
        uz_ms('csrf-msox-'+rn1)
    });
    return vnwm_2.join('\n')
}
module.exports = qh_dyvy_peng_fs