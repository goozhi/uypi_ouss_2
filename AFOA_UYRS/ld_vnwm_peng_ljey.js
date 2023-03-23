const uz_ms = require("../AFOA_BX/uz_ms")

function ld_vnwm_peng_ljey(diwr_non, diwr_vnwm_ljey = [], wm_xbiw = 'menu') {
    var vnwm_fo_1 = Object.keys(diwr_non)
    if (vnwm_fo_1.length) {
        var diwr_vnwm_bcxf = vnwm_fo_1.map(rn1 => {
            var goto_xbiw = 'sub'+Math.random().toString().replace(/\./, '')
            if (typeof (diwr_non[rn1]) === 'object') {
                ld_vnwm_peng_ljey(diwr_non[rn1], diwr_vnwm_ljey, goto_xbiw)
                return { bcxf: rn1, goto_xbiw }
            } else if (typeof (diwr_non[rn1]) === 'number') {
                return { bcxf: rn1, goto_xbiw: diwr_non[rn1] }
            }
            else {
                uz_ms('csrf-acun uxux-' + typeof (diwr_non[rn1]))
            }
        })
    } else {
        uz_ms('csrf-hmpc fo-')
    }
    diwr_vnwm_ljey.unshift({ wm_xbiw: wm_xbiw, diwr_vnwm_bcxf })
}
module.exports = ld_vnwm_peng_ljey