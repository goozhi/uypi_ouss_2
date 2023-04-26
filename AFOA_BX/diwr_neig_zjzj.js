const uz_ms = require("./uz_ms")

function diwr_neig_zjzj(diwr_neig_kp, vnwm_fo_1) {
    var reg_yhld = new RegExp(Object.keys(diwr_neig_kp).join('$|^'))
    var vnwm_yhld = vnwm_fo_1.filter(rn1 => !reg_yhld.test(rn1))
    if (vnwm_yhld.length)
        uz_ms('csrf-nrap nott mcvn-' + vnwm_yhld)
}
module.exports = diwr_neig_zjzj
