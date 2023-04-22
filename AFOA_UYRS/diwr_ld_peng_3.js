const diwr_neig_zjzj = require("../AFOA_BX/diwr_neig_zjzj")
const uz_ms = require("../AFOA_BX/uz_ms")

async function diwr_ld_peng_3(diwr_neig_kp = { zkrs: "", diwr_uyrs_nomr, nikc_bnll: "", diwr_uyrs: {}, vnwm_ljey: [], vnwm_pzre: [] }) {
    var vnwm_fo_1 = [
        'nikc_bnll',
        'diwr_uyrs',
        'vnwm_ljey',
        'zkrs',
        'diwr_uyrs_nomr',
        'vnwm_pzre'
    ]
    var diwr_bnll = { nikc_bnll: path.join(diwr_neig_kp.nikc_bnll, zkrs) }
    diwr_neig_zjzj(diwr_neig_kp, vnwm_fo_1)
    if (diwr_neig_kp.diwr_uyrs.type) {
        if (diwr_neig_kp.diwr_uyrs.type === 'unit') {
            var diwr_neig_yhld = Object.assign({}, diwr_neig_kp, diwr_bnll)
            vnwm_pzre.push(diwr_neig_yhld)
        } else if (diwr_neig_kp.diwr_uyrs.type === 'menu') {
            vnwm_bcxf = Object.entries(diwr_neig_kp.diwr_uyrs).map(rn1 => `*"${rn1[0]}",sub${++diwr_uyrs_nomr.vkih};`)
            var diwr_yhld = Object.assign({}, { vnwm_bcxf, vkih_ljey: ++diwr_uyrs_nomr.vkih })
            vnwm_ljey.push(diwr_yhld)
            Object.entries(diwr_neig_kp).map(rn1 => {
                diwr_bnll.zkrs = rn1[0]
                diwr_bnll.diwr_uyrs = rn1[1]
            })
            var diwr_neig_yhld = Object.assign({}, diwr_neig_kp, diwr_bnll)
            diwr_ld_peng_3()    
        } else {
            uz_ms('csrf-msox-')
        }
    } else {
        uz_ms('csrf-msox type-')
    }
}
module.exports = diwr_ld_peng_3