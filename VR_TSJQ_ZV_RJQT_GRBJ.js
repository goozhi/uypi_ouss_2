
function VR_TSJQ_ZV_RJQT_GRBJ(DIWR_AFOA, diwr_mcvn) {
    var UXUX_YHLD = typeof (DIWR_AFOA)
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX , AOAO JI object:" + UXUX_YHLD)
    }
    var BQEO_1 = DIWR_AFOA.VR_AFOA_BQEO.replace(/^\s+|\s+$/g, "");
    var VNWM_MCVN_1 = DIWR_AFOA.VR_AFOA_MCVN.match(/[^,]+=[^,]+/g);
    if (VNWM_MCVN_1 == null) {
        if (diwr_mcvn != null) {
        }
        // throw new Error("MCVN NRAP")
    } else {

        var diwr_nixb
        var TYUB_1
        VNWM_MCVN_1.forEach(RNSF => {
            switch (true) {
                case /\bNIXB\b/i.test(RNSF):
                    diwr_nixb = RNSF.match(/(?<==)\w+/)
                    if (diwr_nixb == null) {
                        throw new Error("[MCVN FTPJ]" + RNSF + "<--" + DIWR_AFOA.VR_AFOA_MCVN)
                    } else {
                        diwr_nixb = (diwr_nixb[0])
                    }
                    break;
                case /TYUB\b/.test(RNSF):
                    DIWR_TYUB_1 = RNSF.match(/\d+/)
                    if (DIWR_TYUB_1 == null) {
                        throw new Error("[MCVN FTPJ]" + RNSF + "<--" + DIWR_AFOA.VR_AFOA_MCVN)
                    } else {
                        TYUB_1 = Number(DIWR_TYUB_1[0])
                    }
                    break;
                default:
                    throw new Error("[ACUN MCVN WU]" + RNSF + "<--" + DIWR_AFOA.VR_AFOA_MCVN)
            }
        });
    }
    return {aqn_ypfz:'RJQT_GRBJ'}
}
module.exports = VR_TSJQ_ZV_RJQT_GRBJ