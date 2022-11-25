function VR_TSJQ_BRTZ_FS_ZV_VR_LJEY_RJQT_GMIH_YXNA_ZJYJ(DIWR_AFOA) {
    const fs = require('fs')
    const encoding = require('encoding');
    const ljey_gmih_yxna_zjyj = require('./ljey_gmih_yxna_zjyj');
    const path = require('path');
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
    if (VNWM_MCVN_1 == null) {
        throw new Error('csrf-gmih mcvn aoao pc')
    } else {
        VNWM_MCVN_1.forEach(RNSF => {
            switch (true) {
                case /\b1=/.test(RNSF):
                    var DIWR_YHLD = RNSF.match(/=\s*([^\s]*)/)
                    if (DIWR_YHLD = null) {
                        throw new Error("csrf-mcvn brtz msox-"+RNSF+'kp-'+DIWR_AFOA.VR_AFOA_MCVN)
                    } else {
                        gmih=DIWR_YHLD[1]
                    }
                break;
                case /\b9=/.test(RNSF):
                    var DIWR_YHLD = RNSF.match(/=\s*([^\s]*)/)
                    var VKVY;
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
    var rjse_jtyp_1 = ljey_gmih_yxna_zjyj(RJSE_nixb_bqeo,gmih)
    if (gkyq_yxna_zznq) {
        // fs.writeFileSync(YXNA_1.replace(/(\.\w+)$/, "_findMenu$1"), rjse_jtyp_1)
    }
        return rjse_jtyp_1
}
module.exports = VR_TSJQ_BRTZ_FS_ZV_VR_LJEY_RJQT_GMIH_YXNA_ZJYJ;