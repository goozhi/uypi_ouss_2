const uz_ms = require("./AFOA_BX/uz_ms")
const csv_ldrg = require("./csv_ldrg")
const csv_rjvt = require("./csv_rjvt")
const vr_afoa_bqeo_rscs = require("./vr_afoa_bqeo_rscs")
const vr_mcvn_rscs = require("./vr_mcvn_rscs")

function VR_TSJQ_ZV_CSV_RJVT(diwr_afoa) {
    var bqeo_1 = vr_afoa_bqeo_rscs(diwr_afoa.VR_AFOA_BQEO)
    var diwr_vr_mcvn = vr_mcvn_rscs(diwr_afoa.VR_AFOA_MCVN, { diwr_vnwm_mcvn_wu_oqzn: [{ reg_lzm_wu: /^file$/ig, yowr_wu: "rjqt" }] })
    if (diwr_vr_mcvn) {
        if (diwr_vr_mcvn.hasOwnProperty('rjqt')) {
            return csv_rjvt(bqeo_1, diwr_vr_mcvn.rjqt)
        } else {
            uz_ms('csrf-v r mcvn ftpj-'+diwr_afoa.VR_AFOA_MCVN)
        }
    } else {
        return csv_ldrg(bqeo_1)
    }

}
module.exports = VR_TSJQ_ZV_CSV_RJVT