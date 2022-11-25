
const EYRH_VNWY_RSCS = require("./EYRH_VNWY_RSCS");

function VR_TSJQ_BRTZ_FS_ZV_EYRH_VNWY_RSCS(IOWR_AFOA) {
    var UXUX_YHLD = typeof (IOWR_AFOA)
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX , AOAO JI object:" + UXUX_YHLD)
    }
    var BQEO_1 = IOWR_AFOA.VR_AFOA_BQEO.replace(/^\s+|\s+$/g, "")
    BQEO_1 = BQEO_1.replace(/(\n|^)[^\S\n]+/g, "$1").replace(/[^\S\n]+(\n|$)/g, "$1")
    var VNWM_MCVN_1 = IOWR_AFOA.VR_AFOA_MCVN.match(/[^,]+=[^,]+/g);
    var EY_ES_VNAW
    var CSRF_XBST_ZTHI
    var RJQT_MCVN
    if (VNWM_MCVN_1 == null) {
        // throw new Error("[MCVN NRAP]" + VR_AFOA_WU + "<--")
    } else {
        VNWM_MCVN_1.forEach(RNSF => {
            switch (true) {
                case /\b(EY_ES_VNAW|1)(?=\s*=)/i.test(RNSF):
                    IOWR_EY_ES_VNAW = RNSF.match(/(.*)\s*=\s*(.*)/)
                    if (IOWR_EY_ES_VNAW == null) {
                        throw new Error("[MCVN FTPJ]" + RNSF + "<--" + IOWR_AFOA.VR_AFOA_MCVN)
                    } else {
                        EY_ES_VNAW = IOWR_EY_ES_VNAW[2]
                    }
                    break;
                case /\b(CSRF_XBST_ZTHI|2)(?=\s*=)/i.test(RNSF):
                    IOWR_CSRF_XBST_ZTHI = RNSF.match(/(.*)\s*=\s*(.*)/)
                    if (IOWR_CSRF_XBST_ZTHI == null) {
                        throw new Error("[MCVN FTPJ]" + RNSF + "<--" + IOWR_AFOA.VR_AFOA_MCVN)
                    } else {
                        CSRF_XBST_ZTHI = IOWR_CSRF_XBST_ZTHI[2]
                    }
                    break;
                case /\b(RJQT_MCVN|9)(?=\s*=)/i.test(RNSF):
                    IOWR_RJQT_MCVN = RNSF.match(/(.*)\s*=\s*(.*)/)
                    if (IOWR_RJQT_MCVN == null) {
                        throw new Error("[MCVN FTPJ]" + RNSF + "<--" + IOWR_AFOA.VR_AFOA_MCVN)
                    } else {
                        RJQT_MCVN = IOWR_RJQT_MCVN[2]
                    }
                    break;
                default:
                    throw new Error("[ACUN MCVN WU]" + RNSF + "<--" + AFOA_UJ.VR_AFOA_MCVN)
            }
        });
    }
    var RJSE_1 = EYRH_VNWY_RSCS(BQEO_1, CSRF_XBST_ZTHI, RJQT_MCVN)
    return RJSE_1
}
module.exports = VR_TSJQ_BRTZ_FS_ZV_EYRH_VNWY_RSCS;