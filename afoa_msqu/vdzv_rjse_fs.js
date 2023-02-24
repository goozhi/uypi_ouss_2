const uz_ms = require("../AFOA_BX/uz_ms")

function vdzv_rjse_fs(diwr_neig_mcvn) {
    if(!diwr_neig_mcvn){
        uz_ms('csrf-nrap mcvn-')
    }
    if (typeof (diwr_neig_mcvn.diwr_vnwm_zkrs) != "object") {
        uz_ms('csrf-mcvn aoao ji object-')
    }
    diwr_neig_mcvn.msqu_rjse = diwr_neig_mcvn.diwr_vnwm_zkrs.map(rn1 => {
        var hint = '\n'
        if (rn1.hint) {
            hint += rn1.hint
        }
        var msqu_rjse = 'zkrs-' + rn1.zkrs.replace(/\n+$/, "") + '-vdzv-' + hint
        return msqu_rjse
    }).join('\n')
    return true
}
module.exports = vdzv_rjse_fs