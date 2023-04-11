const VKIH_MACA = require("./AFOA_BX/VKIH_MACA");

function VR_TSJQ_ZV_VKIH_MACA(DIWR_AFOA) {
    var UXUX_YHLD = typeof (DIWR_AFOA)
    if (UXUX_YHLD != "object") {
        throw new Error(("[MCVN UXUX MSOX , AOAO JI object]" + UXUX_YHLD))
    }
    var BQEO_1 = DIWR_AFOA.VR_AFOA_BQEO.replace(/^\s+|\s+$/g,"");
    var VNWM_MCVN_1 = DIWR_AFOA.VR_AFOA_MCVN.match(/[^,]+=[^,]+/g);
    if (VNWM_MCVN_1 == null) {
        throw new Error(("[MCVN NRAP]"))
    }
    var VNAW_1
    var DPHP_1
    var TYUB_1
    VNWM_MCVN_1.forEach(RNSF => {
        switch (true) {
            case /\b(?:VNAW|counts)\b/i.test(RNSF):
                DIWR_VNAW_1 = RNSF.match(/\d+/)
                if (DIWR_VNAW_1 == null) {
                    throw new Error(("[MCVN FTPJ]" + RNSF + "<--" + DIWR_AFOA.VR_AFOA_MCVN))
                } else {
                    VNAW_1 = DIWR_VNAW_1[0]
                }
                break;
            case /\b(?:DPHP|steps)\b/i.test(RNSF):
                DIWR_DPHP_1 = RNSF.match(/=([\w\.-]+)/)
                if (DIWR_DPHP_1 == null) {
                    throw new Error(("[MCVN FTPJ]" + RNSF + "<--" + DIWR_AFOA.VR_AFOA_MCVN))
                } else {
                    DPHP_1 = Number(DIWR_DPHP_1[1])
                }
                break;
            case /\b(?:TYUB)\b/i.test(RNSF):
                DIWR_TYUB_1 = RNSF.match(/\d+/)
                if (DIWR_TYUB_1 == null) {
                    throw new Error(("[MCVN FTPJ]" + RNSF + "<--" + DIWR_AFOA.VR_AFOA_MCVN))
                } else {
                    TYUB_1 = Number(DIWR_TYUB_1[0])
                }
                break;
            default:
                throw new Error(("[ACUN MCVN WU]" + RNSF + "<--" + DIWR_AFOA.VR_AFOA_MCVN))
        }
    });
    var VNWM_1 = VKIH_MACA(BQEO_1, VNAW_1, DPHP_1,TYUB_1)
    return VNWM_1.join('\n')

}
module.exports = VR_TSJQ_ZV_VKIH_MACA;