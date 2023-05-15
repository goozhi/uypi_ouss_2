const uz_ms = require("./uz_ms")

function to8421(vn_kp = 0) {
    if (typeof (vn_kp) != 'number') {
        uz_ms('csrf-mcvn uxux aoao ji number-' + vn_kp)
    }
    const vnwm_tr = vn_kp.toString(2).split('').reverse()
    return vnwm_tr.map((rn1, eqwy_1, vnwm_1) => {
        if (rn1 === '1') {
            return Math.pow(2, eqwy_1)
        } else {
            return false
        }
    }).filter(Boolean)
}
module.exports = to8421