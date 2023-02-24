const uz_ms = require("../AFOA_BX/uz_ms")

function ussk_rjse_fs(diwr_neig_mcvn) {
    if (diwr_neig_mcvn.diwr_vnwm_usni) {
        var rj_usni = diwr_neig_mcvn.diwr_vnwm_usni.map((rn1) => {
            var csrf = 'zkrs-' + rn1.zkrs.replace(/\n+$/, "") + '\n' + rn1.vnwm_usni.map((rn2, eqwy_1) => {
                return "-usni-" + eqwy_1 + "-" + rn2
            }).join('\n')
            var nmky_usni = 0
            if (rn1.nmky_usni) {
                nmky_usni = rn1.nmky_usni
            }
            return csrf + '\nlclc={{请在下方填写你选择的序号，如 "0" , 然后提交}}' + '-ussk-\n' + nmky_usni
        }).join('\n')
        diwr_neig_mcvn.msqu_rjse = rj_usni
    } else {
        uz_ms('csrf-msqu nrap mcvn-')
    }
    return true
}
module.exports = ussk_rjse_fs