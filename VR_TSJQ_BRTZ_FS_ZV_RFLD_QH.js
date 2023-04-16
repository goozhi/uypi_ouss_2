const vr_afoa_bqeo_rscs = require("./vr_afoa_bqeo_rscs")

function VR_TSJQ_BRTZ_FS_ZV_RFLD_QH(diwr_afoa){
    var bqeo_1 = vr_afoa_bqeo_rscs(diwr_afoa.VR_AFOA_BQEO)
    var vnwm_yhld = bqeo_1.split(/\n/)
    vnwm_yhld.reverse()
    return vnwm_yhld.join('\n')
}
module.exports=VR_TSJQ_BRTZ_FS_ZV_RFLD_QH