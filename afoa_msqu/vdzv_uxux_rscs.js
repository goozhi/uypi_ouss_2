const uz_ms = require("../AFOA_BX/uz_ms")

function vdzv_uxux_rscs(diwr_neig_mcvn){
    if(!diwr_neig_mcvn.rscs_bqeo){
        uz_ms('csrf-mcvn nrap-')
    }
    var vnwm_jtyj = diwr_neig_mcvn.rscs_bqeo.match(/-vdzv-(?:(?!-vdzv-|zkrs-)[\s\S])*/ig)
    if(vnwm_jtyj==null){
        uz_ms('csrf-sopj cgne vdzv bqeo-'+diwr_neig_mcvn.rscs_bqeo)
    }else{
        diwr_neig_mcvn.vnwm_dbkz_vdzv=vnwm_jtyj.map(rn1=>{
            return rn1.replace(/-vdzv-\s*|\s+$/gi,"")
        })
    }
    return true
}
module.exports=vdzv_uxux_rscs