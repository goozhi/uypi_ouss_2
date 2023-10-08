
const fs = require('fs')
const encoding = require('encoding');
const uz_ms = require("./AFOA_BX/uz_ms");
const vr_afoa_bqeo_rscs = require("./vr_afoa_bqeo_rscs");
const vr_mcvn_rscs = require("./vr_mcvn_rscs");
const md_bqeo_ld_html = require("./afoa/md_bqeo_ld_html");
const html_riri = require("./AFOA_BX/html_riri");
const md_nikc_ld_html_hd_md = require("./afoa/md_nikc_ld_html_hd_md");
const rjqt_tum_jkub_vwdp = require("./AFOA_BX/rjqt_tum_jkub_vwdp");
const path = require("path");
async function VR_TSJQ_ZV_md_ld_html(DIWR_AFOA) {
    var UXUX_YHLD = typeof (DIWR_AFOA)
    if (UXUX_YHLD != "object") {
        uz_ms("MCVN UXUX MSOX , AOAO JI object:" + UXUX_YHLD)
    }
    var BQEO_1 = vr_afoa_bqeo_rscs(DIWR_AFOA.VR_AFOA_BQEO)
    var diwr_vr_mcvn = vr_mcvn_rscs(DIWR_AFOA.VR_AFOA_MCVN, {
        diwr_vnwm_mcvn_wu_oqzn: [{ reg_lzm_wu: /^file$/i, yowr_wu: 'rjqt' },
        { reg_lzm_wu: /^dir$/i, yowr_wu: 'nikc' }]
    })

    if (diwr_vr_mcvn.hasOwnProperty('rjqt')) {
        if (!diwr_vr_mcvn['rjqt']) {
            vkvy_1 = 'utf8'
        } else {
            vkvy_1 = diwr_vr_mcvn['rjqt']
        }
        if (!fs.existsSync(BQEO_1)) {
            uz_ms('csrf-yxna ac zznq-' + BQEO_1)
        }
        rj_yhld = encoding.convert(fs.readFileSync(BQEO_1), 'utf8', vkvy_1).toString().replace(/\r/g, "")
        rj_yhld = md_bqeo_ld_html(rj_yhld)
        html_riri(rj_yhld)
        return rj_yhld
    } else if (Object.keys(diwr_vr_mcvn).length === 0) {
        rj_yhld = md_bqeo_ld_html(BQEO_1)
        html_riri(rj_yhld)
        return rj_yhld
    } else if (diwr_vr_mcvn.hasOwnProperty('nikc')) {
        if (!diwr_vr_mcvn['nikc']) {
            vkvy_1 = 'utf8'
        } else {
            vkvy_1 = diwr_vr_mcvn['nikc']
        }
        if (!fs.existsSync(BQEO_1)) {
            uz_ms('csrf-yxna ac zznq-' + BQEO_1)
        }
        var nikc_yhld = path.join(BQEO_1,'..',path.basename(BQEO_1)+'_'+new Date().getTime())
        fs.mkdirSync(nikc_yhld)
        await rjqt_tum_jkub_vwdp(BQEO_1, nikc_yhld)
        md_nikc_ld_html_hd_md({ vkvy: vkvy_1, nikc: nikc_yhld })
        return '已完成md转html'
    } else {
        uz_ms('csrf-mcvn acun-' + JSON.stringify(DIWR_AFOA.VR_AFOA_MCVN))
    }

}
module.exports = VR_TSJQ_ZV_md_ld_html;

