const fs = require('fs')
const encoding = require('encoding');
const UYPI_RFRF_BRTZ_FS = require('./UYPI_RFRF_BRTZ_FS');
const CE_EBWU_LD_YHRJ = require('./AFOA_BX/CE_EBWU_LD_YHRJ');
const path = require('path');
function VR_TSJQ_BRTZ_FS_ZV_UYPI_RFRF_BRTZ_FS(DIWR_AFOA) {
    var YXNA_1
    var gkyq_yxna_zznq
    var UXUX_YHLD = typeof (DIWR_AFOA)
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX , AOAO JI object:" + UXUX_YHLD)
    }
    var BQEO_1 = DIWR_AFOA.VR_AFOA_BQEO.replace(/^\s+|\s+$/g, "");
    BQEO_1 = BQEO_1.replace(/(\n|^)[^\S\n]+/g, "$1").replace(/[^\S\n]+(\n|$)/g, "$1")
    var RJSE_nixb_bqeo = BQEO_1.replace(/Peng_JTCO_ZV_TZRN/ig, "$$$$$$")
    var VNWM_MCVN_1 = DIWR_AFOA.VR_AFOA_MCVN.match(/[\w=]+/g);
    var VKVY;
    if (VNWM_MCVN_1 == null) {

    } else {
        VNWM_MCVN_1.forEach(RNSF => {
            switch (true) {
                case /\b9\b/.test(RNSF):
                    var DIWR_YHLD = RNSF.match(/=\s*([^\s]*)/)
                    if (DIWR_YHLD != null) {
                        VKVY = DIWR_YHLD[1]
                    } else {
                        VKVY = "utf8"
                    }
                    YXNA_1 = BQEO_1.replace(/"/g, "")
                    if (!fs.existsSync(YXNA_1)) {
                        throw new Error('[YXNA AC ZZNQ]' + YXNA_1 + "<--")
                    }
                    RJSE_nixb_bqeo = encoding.convert(fs.readFileSync(YXNA_1), "utf8", VKVY).toString()
                    gkyq_yxna_zznq = true;
                    break;
                default:
                    throw new Error("[ACUN MCVN]" + RNSF + "<--" + DIWR_AFOA.VR_AFOA_MCVN)
            }
        });
    }
    var rjse_jtyp_1 = UYPI_RFRF_BRTZ_FS(RJSE_nixb_bqeo)
    if (gkyq_yxna_zznq) {
        fs.writeFileSync(YXNA_1.replace(/(\.\w+)$/, "_fix_$1"), encoding.convert(rjse_jtyp_1, VKVY, 'utf8'))
    }
    if (rjse_jtyp_1.length > 60000) {
        return CE_EBWU_LD_YHRJ("rjqt nw ar , rt nq bi yxna yh zjhq ") + path.dirname(YXNA_1)
    } else {
        return rjse_jtyp_1
    }
}
module.exports = VR_TSJQ_BRTZ_FS_ZV_UYPI_RFRF_BRTZ_FS;