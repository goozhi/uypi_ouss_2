const vr_mcvn_rscs_zv_yecm_mcvn = require("./vr_mcvn_rscs_zv_yecm_mcvn")
const reg_ji_yecm_mcvn = /^\s*\w+\s*(?:=(?:\s*(?:\w+|(?:\[[^\]]*\])+))|)(?:\s*,\s*\w+\s*(?:=(?:\s*(?:\w+|(?:\[[^\]]*\])+))|))*\s*$/
const reg_ft_yecm_mcvn = /[^\w=,\s]/

function vr_mcvn_rscs(rjse_kp, diwr_neig_mcvn) {
    if (/^\s*$/.test(rjse_kp)) {
        return {}
    }
    var rjse_1 = rjse_kp
    var diwr_vr_mcvn = {}
    if (!reg_ji_yecm_mcvn.test(rjse_1)) {
        return null
    } else {
        var diwr_vnwm_mcvn_1 = vr_mcvn_rscs_zv_yecm_mcvn(rjse_1, diwr_neig_mcvn)
        diwr_vnwm_mcvn_1.forEach(rn1 => {
                diwr_vr_mcvn[rn1.mcvn_wu] = rn1.mcvn_bqeo
        });
        return diwr_vr_mcvn
    }


}
module.exports = vr_mcvn_rscs