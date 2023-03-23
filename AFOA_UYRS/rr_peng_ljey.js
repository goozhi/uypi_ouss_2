const uz_ms = require("../AFOA_BX/uz_ms")

function rr_peng_ljey(diwr_non, ljey_slm, vkih_ljey = 0) {
    var rj_zk_ljey = ''
    var vnwm_fo_1 = Object.keys(diwr_non)
    if (vnwm_fo_1.length) {
        rj_zk_ljey += "括起来start\n" + vnwm_fo_1.map(rn1 => {
            return rn1
        }).join('\n') + '\n括起来end\n'
    } else {
        uz_ms('csrf-hmpc fo-')
    }
    return rj_zk_ljey
}
module.exports = rr_peng_ljey