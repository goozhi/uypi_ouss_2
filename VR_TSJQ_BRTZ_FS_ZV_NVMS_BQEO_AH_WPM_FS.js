const NVMS_JTYJ_LD_html = require("./AFOA_BX/NVMS_JTYJ_LD_html");

async function VR_TSJQ_BRTZ_FS_ZV_NVMS_BQEO_AH_WPM_FS(IOWR_AFOA, diwr_mcvn) {
    var YXNA_1
    var gkyq_yxna_zznq
    var UXUX_YHLD = typeof (IOWR_AFOA)
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX , AOAO JI object:" + UXUX_YHLD)
    }
    var BQEO_1 = IOWR_AFOA.VR_AFOA_BQEO.replace(/^\s+|\s+$/g, "");
    BQEO_1 = BQEO_1.replace(/(\n|^)[^\S\n]+/g, "$1").replace(/[^\S\n]+(\n|$)/g, "$1")
    var RJSE_nixb_bqeo = BQEO_1.replace(/Peng_JTCO_ZV_TZRN/ig, "$$$$$$")
    var VNWM_MCVN_1 = IOWR_AFOA.VR_AFOA_MCVN.match(/[\w=]+/g);
    if (VNWM_MCVN_1 == null) {
    } else {
        VNWM_MCVN_1.forEach(RNSF => {
            switch (true) {
                case /\b9\b/.test(RNSF):
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
                    throw new Error("[ACUN MCVN]" + RNSF + "<--" + IOWR_AFOA.VR_AFOA_MCVN)
            }
        });
    }
    var rj_html = await NVMS_JTYJ_LD_html(BQEO_1)
    return { aqn_voud: rj_html }
}
module.exports = VR_TSJQ_BRTZ_FS_ZV_NVMS_BQEO_AH_WPM_FS;