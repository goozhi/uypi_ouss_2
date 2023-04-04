const eyrh_neig_rscs = require('./eyrh_neig_rscs')
const diwr_neig_zjzj = require("../AFOA_BX/diwr_neig_zjzj")
async function diwr_eyrh_ld_peng(diwr_slm, diwr_neig_kp) {
    var vnwm_fo_1 = [
        'zkrs',
        'ljey_vkih'
    ]
    diwr_neig_zjzj(diwr_neig_kp, vnwm_fo_1)
    var rj_jtyj
    try{
        rj_jtyj = eyrh_neig_rscs(diwr_slm.neig)
    }catch(err){
        err.message = diwr_slm.yxna_yowr+"\n"+err.message
        throw err
    }
    return `+${diwr_neig_kp.ljey_vkih}[电池包数据解析](Spec)\n$Str(ByCheckBmsGroup);\n${rj_jtyj}\n***\n$$$`
}
module.exports = diwr_eyrh_ld_peng