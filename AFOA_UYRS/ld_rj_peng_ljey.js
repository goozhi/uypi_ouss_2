const uz_ms = require("../AFOA_BX/uz_ms")

function ld_rj_peng_ljey(vnwm_ljey_peng = [], diwr_ljey_2 = {}) {
    return vnwm_ljey_peng.map(rn2 => {
        rn2.diwr_vnwm_bcxf.sort((a, b) => (a.bcxf > b.bcxf) ? 1 : -1)
        return `_${rn2.wm_xbiw}()[请选择测试项]\n${rn2.diwr_vnwm_bcxf.map(rn1 => {
            if (diwr_ljey_2[rn1.goto_xbiw]) {
                if (diwr_ljey_2[rn1.goto_xbiw] != rn1.bcxf) {
                    uz_ms('csrf-sys vkih ss menu dk ac yewo-' + rn1.bcxf + ":" + rn1.goto_xbiw + "!=" + diwr_ljey_2[rn1.goto_xbiw] + rn1.goto_xbiw)
                }
            }    
            return "*\"" + rn1.bcxf + '",' + rn1.goto_xbiw + ';'
        }).join('\n')}\n***`
    }).join('\n\n')
}
module.exports = ld_rj_peng_ljey