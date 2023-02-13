const rfrf_uypi_ztfr_sum = require("./AFOA_RFRF_DATA_ZTFR_SUM/rfrf_uypi_ztfr_sum");
const fs = require('fs');
const uz_ms = require("./AFOA_BX/uz_ms");
const NVMS_JTYJ_LD_html = require('./AFOA_BX/NVMS_JTYJ_LD_html')
async function VR_TSJQ_BRTZ_FS_ZV_RFRF_UYPI_ZTFR_SUM(DIWR_AFOA) {
    var UXUX_YHLD = typeof (DIWR_AFOA)
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX , AOAO JI object:" + UXUX_YHLD)
    }
    var BQEO_1 = DIWR_AFOA.VR_AFOA_BQEO.replace(/^[^\S\n]+|[^\S\n]+$/gm, "")
    BQEO_1 = BQEO_1.replace(/(\n|^)[^\S\n]+/g, "$1").replace(/[^\S\n]+(\n|$)/g, "$1")
    var VNWM_MCVN_1 = DIWR_AFOA.VR_AFOA_MCVN.match(/\w+(?:=\w+|)/g);
    var jtyp_1
    var vkvy_dbkz = 'utf8'
    if (VNWM_MCVN_1 == null) {

    } else {
        VNWM_MCVN_1.forEach(RNSF => {
            switch (true) {
                case /\b9\b/i.test(RNSF):
                    var reg_vkvy = /=(\w+)/;
                    var diwr_vkvy_mcvn = RNSF.match(reg_vkvy)
                    if (diwr_vkvy_mcvn != null) {
                        vkvy_dbkz = diwr_vkvy_mcvn[1]
                    }
                    break;
                case /DS\b/.test(RNSF):
                    DIWR_DS_XBST = RNSF.match(/(.*)\s*=\s*(.*)/)
                    if (DIWR_DS_XBST == null) {
                        throw new Error("[MCVN FTPJ]" + RNSF + "<--" + DIWR_AFOA.VR_AFOA_MCVN)
                    } else {
                        DS = DIWR_DS_XBST[2]
                    }
                    break;
                default:
                    throw new Error("[ACUN MCVN WU]" + RNSF + "<--" + DIWR_AFOA.VR_AFOA_MCVN)
            }
        });
    }
    var vnwm_yxna = BQEO_1.split(/\n/)
    vnwm_yxna.forEach(rn1 => {
        if (/\S/.test(rn1)) {
            if (!fs.existsSync(rn1)) {
                uz_ms('csrf-nikc ac zznq-' + rn1)
            } else {
                const stats = fs.statSync(rn1);
                if (!stats.isDirectory()) {
                    uz_ms('csrf-rt vdzv nikc gq ft rjqt yxna-' + rn1)
                }
            }
        }
    })
    var rj_nvcm
    try {
        rj_nvcm = await rfrf_uypi_ztfr_sum(vnwm_yxna[0], vnwm_yxna[1], vkvy_dbkz)
    } catch (err) {
        uz_ms(err)
        if (err != undefined && /【|《/.test(err.message)) {
            var rj_msox_html = await NVMS_JTYJ_LD_html(err.message.replace(/error:\s*/ig, ""))
            return { aqn_voud: rj_msox_html }
        } else {
            uz_ms(err)
        }
    }
    return rj_nvcm
}
module.exports = VR_TSJQ_BRTZ_FS_ZV_RFRF_UYPI_ZTFR_SUM;