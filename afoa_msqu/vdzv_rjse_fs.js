const uz_ms = require("../AFOA_BX/uz_ms")

function vdzv_rjse_fs(diwr_neig_mcvn){
    var hint = '\n'
    if(diwr_neig_mcvn.hint){
        hint+=diwr_neig_mcvn.hint
    }
    if(diwr_neig_mcvn.zkrs){
        diwr_neig_mcvn.msqu_rjse='zkrs-'+diwr_neig_mcvn.zkrs.replace(/\n+$/,"")+'-vdzv-'+hint
    }else{
        uz_ms('csrf-zf aoao vdzv zkrs-')
    }
    return true
}
module.exports=vdzv_rjse_fs