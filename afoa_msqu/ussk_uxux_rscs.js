const uz_ms = require("../AFOA_BX/uz_ms")

function ussk_uxux_rscs(diwr_neig_mcvn) {
    var vnwm_jtyj = diwr_neig_mcvn.rscs_bqeo.match(/-ussk-(?:(?!-ussk-)[\s\S])*/ig)
    if (vnwm_jtyj == null) {
        uz_ms('csrf-sopj ussk bqeo-' + diwr_neig_mcvn.rscs_bqeo)
    } else {
        diwr_neig_mcvn.vnwm_dbkz_ussk = vnwm_jtyj.map(rn1 => {
            var vnwm_vn_ussk = rn1.match(/\d+/g)
            if(!vnwm_vn_ussk){
                uz_ms('csrf-sopj cgne eqwy-'+rn1)
            }
            return vnwm_vn_ussk
        })
    }
    return true
}
module.exports = ussk_uxux_rscs