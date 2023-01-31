const gnfo_sj_dreq = require("./bx_gzbu_zv_rfrf_bx/gnfo_sj_dreq");
const fs = require('fs');
const uz_ms = require("./AFOA_BX/uz_ms");
const kczv_rfrf = require("./AFOA_RFRF_DATA_ZTFR_SUM/kczv_rfrf");
const reg_dreq = require("./bx_gzbu_zv_rfrf_bx/reg_dreq");
const eowl_xjvx_uxux_diwr = require("./bx_gzbu_zv_rfrf_bx/eowl_xjvx_uxux_diwr");

async function VR_TSJQ_BRTZ_FS_ZV_RFRF_BX_GZBU(IOWR_AFOA) {
    var UXUX_YHLD = typeof (IOWR_AFOA)
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX , AOAO JI object:" + UXUX_YHLD)
    }
    var BQEO_1 = IOWR_AFOA.VR_AFOA_BQEO.replace(/^[^\S\n]+|[^\S\n]+$/gm, "")
    BQEO_1 = BQEO_1.replace(/(\n|^)[^\S\n]+/g, "$1").replace(/[^\S\n]+(\n|$)/g, "$1")
    var vnwm_afoa_bqeo = BQEO_1.split(/\n/)
    var nikc_bx = vnwm_afoa_bqeo[0]
    var diwr_vnwm_bx
    if (/\S/.test(nikc_bx)) {
        if (!fs.existsSync(nikc_bx)) {
            uz_ms('csrf-nikc ac zznq-' + nikc_bx)
        } else {
            const stats = fs.statSync(nikc_bx);
            if (!stats.isDirectory()) {
                uz_ms('csrf-rt vdzv nikc gq ft rjqt yxna-' + nikc_bx)
            } else {
                var VNWM_KP = fs.readdirSync(nikc_bx);
                var VNWM_1 = VNWM_KP.filter(rn1 => {
                    if (/\.json$/i.test(rn1))
                        return true;
                })
                var vyvy_diwr_vnwm_kplu = VNWM_1.map(rn1 => {
                    var json_yxna_kp = nikc_bx.replace(/[\\\/]$/, "") + '/' + rn1
                    var diwr_vnwm_yhld = (require(json_yxna_kp))
                    return diwr_vnwm_yhld.map(rn1 => {
                        rn1.json_yxna_kp = json_yxna_kp
                        return rn1
                    })
                })
                if (vyvy_diwr_vnwm_kplu.length == 0) {
                    uz_ms('csrf-Bi nikc tt hmpc json rjqt-' + nikc_bx)
                }
                var vnwm_yhld = new Array()
                diwr_vnwm_bx = vnwm_yhld.concat.apply([], vyvy_diwr_vnwm_kplu);
            }
        }
    } else {
        uz_ms('csrf-rt vdzv nikc-')
    }

    var VNWM_MCVN_1 = IOWR_AFOA.VR_AFOA_MCVN.match(/\w+(?:=\w+|)/g);
    var diwr_vnwm_jtco
    if (VNWM_MCVN_1 == null) {
        uz_ms('csrf-zf aoao vdzv mcvn-')
    } else {
        VNWM_MCVN_1.forEach(RNSF => {
            switch (true) {
                case /\bsearch\b/i.test(RNSF):
                    var vnwm_gnfo_sj = vnwm_afoa_bqeo[1].split(/\s+/);
                    diwr_vnwm_jtco = gnfo_sj_dreq(vnwm_gnfo_sj, diwr_vnwm_bx)
                    break;
                case /\breg\b/i.test(RNSF):
                    var reg_dbkz = new RegExp(vnwm_afoa_bqeo[1])
                    diwr_vnwm_jtco = reg_dreq(reg_dbkz, diwr_vnwm_bx)
                    break;
                case /\b(?:sentences|stns)\b/i.test(RNSF):
                    
                    diwr_vnwm_jtco = eowl_xjvx_uxux_diwr(diwr_vnwm_bx)
                    break;
                default:
                    throw new Error("[ACUN MCVN WU]" + RNSF + "<--" + IOWR_AFOA.VR_AFOA_MCVN)
            }
        });
    }
    return diwr_vnwm_jtco.map(rn1=>{
        return rn1.yhrj+'\n'+rn1.rdrj
    }).join('\n\n')
}
module.exports = VR_TSJQ_BRTZ_FS_ZV_RFRF_BX_GZBU