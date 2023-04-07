const diwr_neig_zjzj = require("../AFOA_BX/diwr_neig_zjzj")
const uz_ms = require("../AFOA_BX/uz_ms")
const ZJZJ_TSJQ_Str = require("../AFOA_sysData/ZJZJ_TSJQ_Str")
const vr_ld_peng = require("./vr_ld_peng")

async function diwr_vnwy_tu_ld_peng(diwr_slm, diwr_neig_kp) {
    var vnwm_fo_1 = [
        'zkrs',
        'ljey_vkih'
    ]
    diwr_neig_zjzj(diwr_neig_kp, vnwm_fo_1)
    if (!diwr_slm.vnwm_vnwy) {
        uz_ms('csrf-vnwy tu vnwy lh vv-' + diwr_slm.yxna_yowr)
    }
    var rj_vr = diwr_slm.vnwm_vnwy.map(rn1=>rn1.bqeo).join('\n')
    var rj_peng 
    var vnwm_vnwy_tu_mcvn = []
    if(diwr_slm.neig['数据流参数']){
        vnwm_vnwy_tu_mcvn=diwr_slm.neig['数据流参数']
    }
    try{
        rj_peng=await vr_ld_peng({ bqeo: rj_vr, uxux: 'vnwy_tu' , vnwm_vnwy_tu_mcvn})
    }catch(err){
        if(err.message){
            err.message=diwr_slm.yxna_yowr+"\n"+err.message
        }else{
        }
        throw err
    }
    var RJSE_MSOX = await ZJZJ_TSJQ_Str(rj_peng)
    if (/\S/i.test(RJSE_MSOX)) {
        uz_ms(diwr_slm.yxna_yowr+'\n'+RJSE_MSOX);
    }
    return `+${diwr_neig_kp.ljey_vkih}[${diwr_neig_kp.zkrs}](Spec)\n${rj_peng}\n$$$$$$`
}
module.exports = diwr_vnwy_tu_ld_peng