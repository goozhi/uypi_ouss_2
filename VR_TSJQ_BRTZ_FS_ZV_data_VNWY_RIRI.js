

var ZSGGTRGGYJGGEYRH=require('./ZSGGTRGGYJGGEYRH')
function VR_TSJQ_BRTZ_FS_ZV_data_VNWY_RIRI(DIWR_AFOA) {
    var UXUX_YHLD = typeof (DIWR_AFOA)
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX , AOAO JI object:" + UXUX_YHLD)
    }
    var BQEO_1 = DIWR_AFOA.VR_AFOA_BQEO.replace(/^\s+|\s+$/g,"");
    BQEO_1 = BQEO_1.replace(/(\n|^)[^\S\n]+/g, "$1").replace(/[^\S\n]+(\n|$)/g, "$1")
    var VNWM_MCVN_1 = DIWR_AFOA.VR_AFOA_MCVN.match(/[=\w]+/g);
    var RJSE_ZTHI_SLGR=DIWR_AFOA.VR_AFOA_MCVN;
    var rjse_jtyj;
    if (VNWM_MCVN_1 == null) {
        rjse_jtyj=ZSGGTRGGYJGGEYRH(BQEO_1)
    }else{
    VNWM_MCVN_1.forEach(RNSF => {
        switch (true) {
            case /^9=.*$/.test(RNSF):

                break;
            default:
                throw new Error("[ACUN MCVN]" + RNSF + "<--" + DIWR_AFOA.VR_AFOA_MCVN)
        }
    });
    }
    return rjse_jtyj
}
module.exports = VR_TSJQ_BRTZ_FS_ZV_data_VNWY_RIRI;