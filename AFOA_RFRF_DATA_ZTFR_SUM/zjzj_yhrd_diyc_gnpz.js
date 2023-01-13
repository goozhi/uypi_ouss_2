const uz_ms = require("../AFOA_BX/uz_ms");
const YFUX_VBYT_ZV_YHRD_RJ = require("./YFUX_VBYT_ZV_YHRD_RJ");
const fs = require('fs')
async function zjzj_yhrd_diyc_gnpz(diwr_mcvn) {
    if (typeof (diwr_mcvn) != "object") {
        uz_ms('csrf-mcvn aoao ji object-' + diwr_mcvn)
    }
    if (!fs.existsSync(diwr_mcvn.YXNA_VNWM_reg_VWUX_MR_YFUX)) {
        throw new Error('csrf- nikc ac zznq-' + diwr_mcvn.YXNA_VNWM_reg_VWUX_MR_YFUX)
    }
    var VNWM_KP = fs.readdirSync(diwr_mcvn.YXNA_VNWM_reg_VWUX_MR_YFUX);
    var VNWM_1 = VNWM_KP.filter(rn1 => {
        if (/\.js$/i.test(rn1))
            return true;
    })
    var vyvy_diwr_vnwm_reg = VNWM_1.map(rn1 => {
        return (require(diwr_mcvn.YXNA_VNWM_reg_VWUX_MR_YFUX.replace(/[\\\/]$/, "") + '/' + rn1))
    })
    var vnwm_yhld = new Array()
    var DIWR_VNWM_reg_VWUX_MR_YFUX = vnwm_yhld.concat.apply([], vyvy_diwr_vnwm_reg);

    var diwr_yhld = YFUX_VBYT_ZV_YHRD_RJ(diwr_mcvn.yhrj, diwr_mcvn.rdrj, DIWR_VNWM_reg_VWUX_MR_YFUX)
    if (!diwr_yhld.gkqj_wwcf) {
        var bmlc = ""
        if (diwr_yhld.diwr_ncrl != null) {
            for(fo1 in diwr_yhld.diwr_ncrl){
                bmlc+="\n"+fo1+":"+diwr_yhld.diwr_ncrl[fo1]
            }
        }
        uz_ms('csrf-ac oan wwcf dk ztfr sum-' + diwr_mcvn.yhrj + "\n" + diwr_mcvn.rdrj + bmlc)
    } else {
        return true;
    }
}
module.exports = zjzj_yhrd_diyc_gnpz