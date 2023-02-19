const uz_ms = require("../AFOA_BX/uz_ms");
const ussk_uxux_rscs = require("./ussk_uxux_rscs");
const vdzv_uxux_rscs = require("./vdzv_uxux_rscs");

function msqu_rjse_rscs(diwr_neig_mcvn){
    var UXUX_YHLD = typeof(diwr_neig_mcvn)

    if(UXUX_YHLD!='object'){
        uz_ms('csrf-mcvn uxux aoao ji object-'+UXUX_YHLD)
    }
    switch(diwr_neig_mcvn.uxux){
        case "vdzv":
            vdzv_uxux_rscs(diwr_neig_mcvn)
            break;
        case "ussk":
            ussk_uxux_rscs(diwr_neig_mcvn)
            break;
        default:
            uz_ms('csrf-mcvn uxux acun-'+diwr_neig_mcvn.uxux)
    }
    return true
}
module.exports=msqu_rjse_rscs