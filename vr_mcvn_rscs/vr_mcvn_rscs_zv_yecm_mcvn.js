const lzm_wu_ld_yowr_wu = require("./lzm_wu_ld_yowr_wu");

function vr_mcvn_rscs_zv_yecm_mcvn(rjse_kp, diwr_neig_mcvn) {
    var rj_1 = rjse_kp
    var diwr_vnwm_mcvn_wu_oqzn
    if (diwr_neig_mcvn) {
        if (diwr_neig_mcvn.gkqj_mcvn_ld_agrr) {
            rj_1 = rj_1.toLowerCase()
        }
        if (diwr_neig_mcvn.diwr_vnwm_mcvn_wu_oqzn) {
            diwr_vnwm_mcvn_wu_oqzn = diwr_neig_mcvn.diwr_vnwm_mcvn_wu_oqzn
        }
    }
    var vnwm_mcvn_1 = rj_1.match(/\w+\s*(?:=(?:\s*(?:\w+|(?:\[[^\]]*\])+))|)/g);
    var diwr_vnwm_mcvn_1 = vnwm_mcvn_1.map(rn1 => {
        diwr_yhld = rn1.match(/(.*?)\s*=\s*(.*)/)
        var diwr_mcvn = { rj_kp: rn1 }
        if (diwr_yhld == null) {
            diwr_mcvn.mcvn_wu = lzm_wu_ld_yowr_wu(rn1, diwr_vnwm_mcvn_wu_oqzn)
            diwr_mcvn.mcvn_bqeo = ""
            return diwr_mcvn
        } else {
            diwr_mcvn.mcvn_wu = lzm_wu_ld_yowr_wu(diwr_yhld[1], diwr_vnwm_mcvn_wu_oqzn)
            diwr_mcvn.mcvn_bqeo = diwr_yhld[2]
            return diwr_mcvn
        }
    })
    return diwr_vnwm_mcvn_1
}
module.exports = vr_mcvn_rscs_zv_yecm_mcvn