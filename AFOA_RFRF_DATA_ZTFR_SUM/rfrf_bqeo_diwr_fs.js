const uz_ms = require("../AFOA_BX/uz_ms");
const zjzj_yhrd_diyc_gnpz = require("./zjzj_yhrd_diyc_gnpz");
const fs = require('fs')

async function rfrf_bqeo_diwr_fs(bqeo_kp, diwr_mcvn) {
    var vkih = new Date().getTime()
    var bqeo_1 = bqeo_kp//.replace(/;\s*"/g, "\"");
    var reg_yhrd_diyc_slgr = /[^"]+"[^"]+"/gm;
    var reg_yhrd_diyc_eynh = /\s*([^"]+)"([^"]+)"/m;
    var vnwm_yhrd_diyc = bqeo_1.match(reg_yhrd_diyc_slgr);
    if (vnwm_yhrd_diyc == null) {
        uz_ms('csrf-ra oan cgne ab xaap yenh rfrf bqeo-' + bqeo_1)
    } else {
        if (!fs.existsSync(diwr_mcvn.YXNA_VNWM_reg_VWUX_MR_YFUX)) {
            throw new Error('csrf- nikc ac zznq-' + diwr_mcvn.YXNA_VNWM_reg_VWUX_MR_YFUX)
        }    
        var VNWM_KP = fs.readdirSync(diwr_mcvn.YXNA_VNWM_reg_VWUX_MR_YFUX);
        var VNWM_1 = VNWM_KP.filter(rn1 => {
            if (/\.js$/i.test(rn1))
                return true;
        })
        var vyvy_diwr_vnwm_reg = VNWM_1.map(rn1 => {
            var yxna_yhld = diwr_mcvn.YXNA_VNWM_reg_VWUX_MR_YFUX.replace(/[\\\/]$/, "") + '/' + rn1
            try{
                delete (require.cache[require.resolve(yxna_yhld)]);
            }catch(err){

            }
            return (require(yxna_yhld))
        })
        var vnwm_yhld = new Array()
        var DIWR_VNWM_reg_VWUX_MR_YFUX = vnwm_yhld.concat.apply([], vyvy_diwr_vnwm_reg);
        var diwr_vnwm_yhrd_diyc = vnwm_yhrd_diyc.map(async rn1 => {
            var diwr_yhrd_diyc_eynh = rn1.match(reg_yhrd_diyc_eynh)
            if (diwr_yhrd_diyc_eynh == null) {
                uz_ms('csrf-sdrh brtz msox-' + rn1)
            } else {
                var yhrj = diwr_yhrd_diyc_eynh[1]
                var rdrj = diwr_yhrd_diyc_eynh[2]

                try {
                    await zjzj_yhrd_diyc_gnpz({ yhrj, rdrj, DIWR_VNWM_reg_VWUX_MR_YFUX })
                } catch (err) {
                    uz_ms(err)
                }
                vkih++
                return { yhrj, rdrj , vkih}
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