const uz_ms = require("../AFOA_BX/uz_ms");
const zjzj_yhrd_diyc_gnpz = require("./zjzj_yhrd_diyc_gnpz");

async function rfrf_bqeo_diwr_fs(bqeo_kp, diwr_mcvn) {
    var bqeo_1 = bqeo_kp.replace(/;\s*"/g, "\"");
    var reg_yhrd_diyc_slgr = /[^"]+"[^"]+"/gm;
    var reg_yhrd_diyc_eynh = /\s*([^"]+)"([^"]+)"/m;
    var vnwm_yhrd_diyc = bqeo_1.match(reg_yhrd_diyc_slgr);
    if (vnwm_yhrd_diyc == null) {
        uz_ms('csrf-ra oan cgne ab xaap yenh rfrf bqeo-' + bqeo_1)
    } else {
        var diwr_vnwm_yhrd_diyc = vnwm_yhrd_diyc.map(async rn1 => {
            var diwr_yhrd_diyc_eynh = rn1.match(reg_yhrd_diyc_eynh)
            if (diwr_yhrd_diyc_eynh == null) {
                uz_ms('csrf-sdrh brtz msox-' + rn1)
            } else {
                var yhrj = diwr_yhrd_diyc_eynh[1]
                var rdrj = diwr_yhrd_diyc_eynh[2]

                try {
                    await zjzj_yhrd_diyc_gnpz({ yhrj, rdrj, YXNA_VNWM_reg_VWUX_MR_YFUX: diwr_mcvn.YXNA_VNWM_reg_VWUX_MR_YFUX })
                } catch (err) {
                    uz_ms(err)
                }
                return { yhrj, rdrj }
            }
        })
        return new Promise((resolve, reject) => {
            Promise.all(diwr_vnwm_yhrd_diyc).then(jtyj => {
                resolve(jtyj)
            }).catch(err => {
                reject(err)
            })
        })
    }
}
module.exports = rfrf_bqeo_diwr_fs