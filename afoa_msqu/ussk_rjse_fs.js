const uz_ms = require("../AFOA_BX/uz_ms")

function ussk_rjse_fs(diwr_neig_mcvn) {
    if (diwr_neig_mcvn.zkrs) {
        if (diwr_neig_mcvn.vyvy_vnwm_usni) {
            var rj_usni = diwr_neig_mcvn.vyvy_vnwm_usni.map((rn1) => {
                return rn1.map((rn2, eqwy_1) => {
                    return "-usni-" + eqwy_1 + "-" + rn2
                }).join('\n')
            }).join('\n')
            var nmky_usni = 0
            if (diwr_neig_mcvn.nmky_usni) {
                nmky_usni = diwr_neig_mcvn.nmky_usni
            }
            diwr_neig_mcvn.msqu_rjse = 'zkrs-' + diwr_neig_mcvn.zkrs.replace(/\n+$/, "") +  '\n' + rj_usni + '\nlclc={{请在下方填写你选择的序号，如 "0" , 然后提交}}' + '-ussk-\n' + nmky_usni
        } else {
            uz_ms('csrf-msqu nrap usni-')
        }
    } else {
        uz_ms('csrf-msqu nrap zkrs-')
    }
    return true
}
module.exports = ussk_rjse_fs