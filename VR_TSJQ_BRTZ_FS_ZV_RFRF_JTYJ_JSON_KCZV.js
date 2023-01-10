const kczv_json_rfrf = require("./AFOA_RFRF_DATA_ZTFR_SUM/kczv_json_rfrf");
const fs = require('fs');
const uz_ms = require("./AFOA_BX/uz_ms");
const NVMS_JTYJ_LD_html = require('./AFOA_BX/NVMS_JTYJ_LD_html')
async function VR_TSJQ_BRTZ_FS_ZV_RFRF_JTYJ_JSON_KCZV(IOWR_AFOA) {
    const VR_EBWU_AFOA_BRTZ_FS = require("./VR_EBWU_AFOA_BRTZ_FS");
    var UXUX_YHLD = typeof (IOWR_AFOA)
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX , AOAO JI object:" + UXUX_YHLD)
    }
    var BQEO_1 = IOWR_AFOA.VR_AFOA_BQEO.replace(/^[^\S\n]+|[^\S\n]+$/gm, "")
    BQEO_1 = BQEO_1.replace(/(\n|^)[^\S\n]+/g, "$1").replace(/[^\S\n]+(\n|$)/g, "$1")
    var VNWM_MCVN_1 = IOWR_AFOA.VR_AFOA_MCVN.match(/\w+/g);
    var jtyp_1
    if (VNWM_MCVN_1 == null) {

    } else {
        VNWM_MCVN_1.forEach(async RNSF => {
            switch (true) {
                case /\b(?:str|9)\b/i.test(RNSF):
                    var reg_Str = /\$Str\(.*\)[\s\S]*?\*\*+/ig;
                    var reg_VR_AFOA_VNWY_TU = /\b(9|str)=([^\{\}]*)\{\{((?:(?!.+=.*\{\{)[\s\n\S])*?)\}\}(?!\}[^\}])/ig;
                    var vnwm_rjse_Str = BQEO_1.match(reg_Str);
                    if (vnwm_rjse_Str != null) {
                        for (var i1 = 0; i1 < vnwm_rjse_Str.length; i1++) {
                            BQEO_1 = BQEO_1.replace(vnwm_rjse_Str[i1], (await VR_EBWU_AFOA_BRTZ_FS(RNSF.replace(/\$str\((.*)\)(?:;|)/i, "9=$1{{").replace(/\*\*+/, "}}"))).rj_jtyj)
                        }
                    }
                    var vnwm_rjse_VR_AFOA_VNWY_TU = BQEO_1.match(reg_VR_AFOA_VNWY_TU);
                    if (vnwm_rjse_VR_AFOA_VNWY_TU != null) {
                        for (var i1 = 0; i1 < vnwm_rjse_VR_AFOA_VNWY_TU.length; i1++) {
                            BQEO_1 = BQEO_1.replace(RNSF, (await VR_EBWU_AFOA_BRTZ_FS(RNSF)).rj_jtyj)
                        }
                    }
                    break;
                default:
                    throw new Error("[ACUN MCVN WU]" + RNSF + "<--" + AFOA_UJ.VR_AFOA_MCVN)
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
    var rjqt_wu = "db_" + (new Date().getTime())
    var rj_nvcm
    try {
        rj_nvcm = (await kczv_json_rfrf(vnwm_yxna[0], vnwm_yxna[1].replace(/[\/\\]$/, "") + "/" + rjqt_wu + '.json', vnwm_yxna[2]))
    } catch (err) {
        if (err != undefined && /【|《/.test(err.message)) {
            var rj_msox_html = await NVMS_JTYJ_LD_html(err.message.replace(/error:\s*/ig, ""))
            return { aqn_voud: rj_msox_html }
        } else {
            uz_ms(err)
        }
    }
    return rj_nvcm
}
module.exports = VR_TSJQ_BRTZ_FS_ZV_RFRF_JTYJ_JSON_KCZV;