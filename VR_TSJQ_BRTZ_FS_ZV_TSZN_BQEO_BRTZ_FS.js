


async function VR_TSJQ_BRTZ_FS_ZV_TSZN_BQEO_BRTZ_FS(IOWR_AFOA) {
    const VR_EBWU_AFOA_BRTZ_FS = require("./VR_EBWU_AFOA_BRTZ_FS");
    var UXUX_YHLD = typeof (IOWR_AFOA)
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX , AOAO JI object:" + UXUX_YHLD)
    }
    var BQEO_1 = IOWR_AFOA.VR_AFOA_BQEO.replace(/^\s+|\s+$/g, "")
    BQEO_1 = BQEO_1.replace(/(\n|^)[^\S\n]+/g, "$1").replace(/[^\S\n]+(\n|$)/g, "$1")
    var VNWM_MCVN_1 = IOWR_AFOA.VR_AFOA_MCVN.match(/\w+/g);
    if (VNWM_MCVN_1 == null) {

    } else {
        for (var i1 = 0; i1 < VNWM_MCVN_1.length; i1++) {
            switch (true) {
                case /\b(?:str|9)\b/i.test(VNWM_MCVN_1[i1]):
                    var reg_Str = /\$Str\(.*\)[\s\S]*?\*\*+/ig;
                    var reg_VR_AFOA_VNWY_TU = /\b(9|str)=([^\{\}]*)\{\{((?:(?!.+=.*\{\{)[\s\n\S])*?)\}\}(?!\}[^\}])/ig;
                    var vnwm_rjse_Str = BQEO_1.match(reg_Str);
                    if (vnwm_rjse_Str != null) {
                        for (var i1 = 0; i1 < vnwm_rjse_Str.length; i1++) {
                            BQEO_1 = BQEO_1.replace(vnwm_rjse_Str[i1], await VR_EBWU_AFOA_BRTZ_FS(vnwm_rjse_Str[i1].replace(/\$str\((.*)\)(?:;|)/i, "9=$1{{").replace(/\*\*+/, "}}")))
                        }
                    }
                    var vnwm_rjse_VR_AFOA_VNWY_TU = BQEO_1.match(reg_VR_AFOA_VNWY_TU);
                    if (vnwm_rjse_VR_AFOA_VNWY_TU != null) {
                        for (var i1 = 0; i1 < vnwm_rjse_VR_AFOA_VNWY_TU.length; i1++) {
                            BQEO_1 = BQEO_1.replace(vnwm_rjse_VR_AFOA_VNWY_TU[i1], await VR_EBWU_AFOA_BRTZ_FS(vnwm_rjse_VR_AFOA_VNWY_TU[i1]))
                        }
                    }
                    break;
                case /\b(?:ecu|8)\b/i.test(VNWM_MCVN_1[i1]):
                    var reg_ecu = /\$ecu\(.*\)[\s\S]*?\*\*+/ig;
                    var reg_VR_AFOA_OSSE_ZZUY = /\b(8|ecu)=([^\{\}]*)\{\{((?:(?!.+=.*\{\{)[\s\n\S])*?)\}\}(?!\}[^\}])/ig;
                    var vnwm_rjse_ecu = BQEO_1.match(reg_ecu);
                    if (vnwm_rjse_ecu != null) {
                        for (var i1 = 0; i1 < vnwm_rjse_ecu.length; i1++) {
                            BQEO_1 = BQEO_1.replace(vnwm_rjse_ecu[i1], await VR_EBWU_AFOA_BRTZ_FS(vnwm_rjse_ecu[i1].replace(/\$ecu\((.*)\)(?:;|)/i, "8=$1{{").replace(/\*\*+/, "}}")))
                        }

                    }
                    var vnwm_rjse_VR_AFOA_OSSE_ZZUY = BQEO_1.match(reg_VR_AFOA_OSSE_ZZUY);
                    if (vnwm_rjse_VR_AFOA_OSSE_ZZUY != null) {
                        for (var i1 = 0; i1 < vnwm_rjse_VR_AFOA_OSSE_ZZUY.length; i1++) {
                            BQEO_1 = BQEO_1.replace(vnwm_rjse_VR_AFOA_OSSE_ZZUY[i1], await VR_EBWU_AFOA_BRTZ_FS(vnwm_rjse_VR_AFOA_OSSE_ZZUY[i1]))
                        }
                    }
                    break;
                case /\b(?:menu|1)\b/i.test(VNWM_MCVN_1[i1]):
                    var reg_menu = /\$menu\(.*\)[\s\S]*?\*\*+/ig;
                    var reg_VR_AFOA_OSSE_ZZUY = /\b(1|menu)=([^\{\}]*)\{\{((?:(?!.+=.*\{\{)[\s\n\S])*?)\}\}(?!\}[^\}])/ig;
                    var vnwm_rjse_menu = BQEO_1.match(reg_menu);
                    if (vnwm_rjse_menu != null) {
                        for (var i1 = 0; i1 < vnwm_rjse_menu.length; i1++) {
                            BQEO_1 = BQEO_1.replace(vnwm_rjse_menu[i1], await VR_EBWU_AFOA_BRTZ_FS(vnwm_rjse_menu[i1].replace(/\$menu\((.*)\)(?:;|)/i, "1=$1{{").replace(/\*\*+/, "}}")))
                        }

                    }
                    var vnwm_rjse_VR_AFOA_OSSE_ZZUY = BQEO_1.match(reg_VR_AFOA_OSSE_ZZUY);
                    if (vnwm_rjse_VR_AFOA_OSSE_ZZUY != null) {
                        for (var i1 = 0; i1 < vnwm_rjse_VR_AFOA_OSSE_ZZUY.length; i1++) {
                            BQEO_1 = BQEO_1.replace(vnwm_rjse_VR_AFOA_OSSE_ZZUY[i1], await VR_EBWU_AFOA_BRTZ_FS(vnwm_rjse_VR_AFOA_OSSE_ZZUY[i1]))
                        }
                    }
                    break;
                case /\b(?:rdtc|3)\b/i.test(VNWM_MCVN_1[i1]):
                    var reg_VR_AFOA_OSSE_ZZUY = /\b(3|rdtc)=([^\{\}]*)\{\{((?:(?!.+=.*\{\{)[\s\n\S])*?)\}\}(?!\}[^\}])/ig;
                    var vnwm_rjse_VR_AFOA_OSSE_ZZUY = BQEO_1.match(reg_VR_AFOA_OSSE_ZZUY);
                    if (vnwm_rjse_VR_AFOA_OSSE_ZZUY != null) {
                        for (var i1 = 0; i1 < vnwm_rjse_VR_AFOA_OSSE_ZZUY.length; i1++) {
                            BQEO_1 = BQEO_1.replace(vnwm_rjse_VR_AFOA_OSSE_ZZUY[i1], await VR_EBWU_AFOA_BRTZ_FS(vnwm_rjse_VR_AFOA_OSSE_ZZUY[i1]))
                        }
                    }
                    break;
                default:
                    throw new Error("[ACUN MCVN WU]" + RNSF + "<--" + AFOA_UJ.VR_AFOA_MCVN)
            }
        };
    }
    return BQEO_1
}
module.exports = VR_TSJQ_BRTZ_FS_ZV_TSZN_BQEO_BRTZ_FS;