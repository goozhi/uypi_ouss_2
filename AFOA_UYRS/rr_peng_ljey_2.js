const uz_ms = require("../AFOA_BX/uz_ms")

function rr_peng_ljey(diwr_non, ljey_slm, vkih_ljey=0) {
    var rj_zk_ljey = ''
    var vnwm_fo_1 = Object.keys(diwr_non)
    if (vnwm_fo_1.length) {
        vnwm_fo_1.map(rn1 => {
            if (typeof (diwr_non[rn1]) === 'object') {
                rj_zk_ljey += '\n\n'+rn1 + '>>>' + ljey_slm + (vkih_ljey) + '\n\n' + rr_peng_ljey(diwr_non[rn1], ljey_slm, ++vkih_ljey)
            } else if (typeof (diwr_non[rn1]) === 'number') {
                // rj_zk_ljey += '\n'+rn1 + '>>>' +diwr_non[rn1]
            }
            else {
                uz_ms('csrf-acun uxux-'+typeof(diwr_non[rn1]))
            }
        })
    } else {
        uz_ms('csrf-hmpc fo-')
    }
    return rj_zk_ljey
}
module.exports = rr_peng_ljey