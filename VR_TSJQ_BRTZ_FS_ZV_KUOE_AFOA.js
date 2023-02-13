const VR_KUOE_AFOA_Peng_fs = require('./vr_turs_ubub/VR_KUOE_AFOA_Peng_fs')

function VR_TSJQ_BRTZ_FS_ZV_KUOE_AFOA(DIWR_AFOA) {
    var UXUX_YHLD = typeof (DIWR_AFOA)
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX , AOAO JI object:" + UXUX_YHLD)
    }
    var BQEO_KP = DIWR_AFOA.VR_AFOA_BQEO.replace(/^\s+|\s+$/g, "")
    var BQEO_1 = BQEO_KP
    BQEO_1 = BQEO_1.replace(/(\n|^)[^\S\n]+/g, "$1").replace(/[^\S\n]+(\n|$)/g, "$1")
    var VNWM_MCVN_1 = DIWR_AFOA.VR_AFOA_MCVN.match(/[^,]+=[^,]+/g);
    var line
    var weight
    if (VNWM_MCVN_1 == null) {
        // throw new Error("[MCVN NRAP]"+VR_AFOA_WU+"<--")
    } else {
        VNWM_MCVN_1.forEach(RNSF => {
            switch (true) {
                case /line\b/i.test(RNSF):
                    DIWR_line = RNSF.match(/(.*)\s*=\s*(.*)/)
                    if (DIWR_line == null) {
                        throw new Error("[MCVN FTPJ]" + RNSF + "<--" + DIWR_AFOA.VR_AFOA_MCVN)
                    } else {
                        line = DIWR_line[2]
                    }
                    break;
                case /weight\b/i.test(RNSF):
                    DIWR_weight = RNSF.match(/(.*)\s*=\s*(.*)/)
                    if (DIWR_weight == null) {
                        throw new Error("[MCVN FTPJ]" + RNSF + "<--" + DIWR_AFOA.VR_AFOA_MCVN)
                    } else {
                        weight = DIWR_weight[2]
                    }
                    break;
                default:
                    throw new Error("[ACUN MCVN WU]" + RNSF + "<--" + DIWR_AFOA.VR_AFOA_MCVN)
            }
        });
    }
    return VR_KUOE_AFOA_Peng_fs(BQEO_1)
}
module.exports = VR_TSJQ_BRTZ_FS_ZV_KUOE_AFOA;