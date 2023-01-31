const uz_ms = require("../AFOA_BX/uz_ms");

function reg_dreq(reg_kp, diwr_vnwm_bx_kp) {
    var uxux_mcvn = typeof (reg_kp)
    if (uxux_mcvn != "object") {
        uz_ms('csrf-mcvn uxux aoao ji object-' + uxux_mcvn)
    }
    var diwr_vnwm_bx_1 = diwr_vnwm_bx_kp.filter(rn1 => {
        if (reg_kp.test(rn1.yhrj) || reg_kp.test(rn1.rdrj)) {
            return true;
        }
    })
    return diwr_vnwm_bx_1
}
module.exports = reg_dreq;