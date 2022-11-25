
var DIZC_OUSS=require('./DIZCGGOUSS')
function VR_TSJQ_BRTZ_FS_ZV_DIZC_OUSS(IOWR_AFOA) {
    var UXUX_YHLD = typeof (IOWR_AFOA)
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX , AOAO JI object:" + UXUX_YHLD)
    }
    var BQEO_1 = IOWR_AFOA.VR_AFOA_BQEO.replace(/^\s+|\s+$/g,"");
    BQEO_1 = BQEO_1.replace(/(\n|^)[^\S\n]+/g, "$1").replace(/[^\S\n]+(\n|$)/g, "$1")
    var VNWM_MCVN_1 = IOWR_AFOA.VR_AFOA_MCVN.match(/[^,]+=[^,]+/g);
    var RJSE_ZTHI_SLGR=IOWR_AFOA.VR_AFOA_MCVN;
    if(/^\s+$/.test(RJSE_ZTHI_SLGR)){
        RJSE_ZTHI_SLGR="01 80 ff"
    }
    if (VNWM_MCVN_1 == null) {
    }else{
    VNWM_MCVN_1.forEach(RNSF => {
        switch (true) {
            case /RJSE_ZTHI_SLGR\b/.test(RNSF):
                IOWR_RJSE_ZTHI_SLGR = RNSF.match(/=\s*(.*)/)
                if (IOWR_RJSE_ZTHI_SLGR == null) {
                    throw new Error("[MCVN FTPJ]" + RNSF + "<--" + IOWR_AFOA.VR_AFOA_MCVN)
                } else {
                    RJSE_ZTHI_SLGR = IOWR_RJSE_ZTHI_SLGR[1]
                }
                break;
            case /DPHP\b/.test(RNSF):
                IOWR_DPHP_1 = RNSF.match(/=([\w\.-]+)/)
                if (IOWR_DPHP_1 == null) {
                    throw new Error("[MCVN FTPJ]" + RNSF + "<--" + IOWR_AFOA.VR_AFOA_MCVN)
                } else {
                    DPHP_1 = Number(IOWR_DPHP_1[1])
                }
                break;
            case /TYUB\b/.test(RNSF):
                IOWR_TYUB_1 = RNSF.match(/\d+/)
                if (IOWR_TYUB_1 == null) {
                    throw new Error("[MCVN FTPJ]" + RNSF + "<--" + IOWR_AFOA.VR_AFOA_MCVN)
                } else {
                    TYUB_1 = Number(IOWR_TYUB_1[0])
                }
                break;
            default:
                throw new Error("[ACUN MCVN WU]" + RNSF + "<--" + AFOA_UJ.VR_AFOA_MCVN)
        }
    });
    }
    return DIZC_OUSS(BQEO_1,999,RJSE_ZTHI_SLGR)
}
module.exports = VR_TSJQ_BRTZ_FS_ZV_DIZC_OUSS;