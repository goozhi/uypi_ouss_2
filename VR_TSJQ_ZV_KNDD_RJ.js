const uz_ms = require("./AFOA_BX/uz_ms")
const vr_afoa_bqeo_rscs = require("./vr_afoa_bqeo_rscs")
const vr_mcvn_rscs = require("./vr_mcvn_rscs")

function VR_TSJQ_ZV_KNDD_RJ(diwr_vr_afoa){
    var bqeo_1 = vr_afoa_bqeo_rscs(diwr_vr_afoa.VR_AFOA_BQEO)
    var diwr_vr_mcvn = vr_mcvn_rscs(diwr_vr_afoa.VR_AFOA_MCVN, {diwr_vnwm_mcvn_wu_oqzn:[
        {
            reg_lzm_wu:/counts/i,
            yowr_wu:'awn'
        }
    ]})
    if(diwr_vr_mcvn.hasOwnProperty('awn')){
        return Array(Number(diwr_vr_mcvn.awn)).fill(bqeo_1).join('\n');
    }else{
        uz_ms('csrf-v r mcvn acun-'+diwr_vr_afoa.VR_AFOA_MCVN)
    }

}
module.exports=VR_TSJQ_ZV_KNDD_RJ