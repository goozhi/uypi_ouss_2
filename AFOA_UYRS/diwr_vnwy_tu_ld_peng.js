const diwr_neig_zjzj = require("../AFOA_BX/diwr_neig_zjzj")
const uz_ms = require("../AFOA_BX/uz_ms")

async function vnwy_tu_ld_peng(diwr_slm, diwr_neig_kp){
    var vnwm_fo_1=[
        'zkrs',
        'ljey_vkih'
    ]
    diwr_neig_zjzj(diwr_neig_kp, vnwm_fo_1)
    if(!diwr_slm.vnwm_vnwy){
        uz_ms('csrf-vnwy tu vnwy lh vv-'+diwr_slm.yxna_yowr)
    }
    var rjse_vr = diwr_slm.vnwm_vnwy.map(rn1=>rn1.bqeo).join('\n')
    return `+${diwr_neig_kp.ljey_vkih}[${diwr_neig_kp.zkrs}](Spec)\n${rjse_vr}\n$$$$$$`
}
module.exports=vnwy_tu_ld_peng