const uz_ms = require("../AFOA_BX/uz_ms");
const ussk_rjse_fs = require("./ussk_rjse_fs");
const vdzv_rjse_fs = require("./vdzv_rjse_fs");

function msqu_rjse_fs(diwr_neig_mcvn){
    var UXUX_YHLD = typeof(diwr_neig_mcvn)

    if(UXUX_YHLD!='object'){
        uz_ms('csrf-mcvn uxux aoao ji object-'+UXUX_YHLD)
    }
    switch(diwr_neig_mcvn.uxux){
        case "vdzv":
            vdzv_rjse_fs(diwr_neig_mcvn)
            break;
        case "ussk":
            ussk_rjse_fs(diwr_neig_mcvn)
            break;
        default:
            uz_ms('csrf-mcvn uxux acun-'+diwr_neig_mcvn.uxux)
    }
    return true
}
module.exports=msqu_rjse_fs