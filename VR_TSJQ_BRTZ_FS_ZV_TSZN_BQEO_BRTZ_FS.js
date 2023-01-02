const uz_ms = require("./AFOA_BX/uz_ms");



async function VR_TSJQ_BRTZ_FS_ZV_TSZN_BQEO_BRTZ_FS(IOWR_AFOA) {
    const VR_EBWU_AFOA_BRTZ_FS = require("./VR_EBWU_AFOA_BRTZ_FS");
    var UXUX_YHLD = typeof (IOWR_AFOA)
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX , AOAO JI object:" + UXUX_YHLD)
    }
    var BQEO_KP = IOWR_AFOA.VR_AFOA_BQEO.replace(/^\s+|\s+$/g, "")
    var BQEO_1=BQEO_KP
    BQEO_1 = BQEO_1.replace(/(\n|^)[^\S\n]+/g, "$1").replace(/[^\S\n]+(\n|$)/g, "$1")
    if(/^\s*`/.test(BQEO_1)){
        BQEO_1=BQEO_1.replace(/^\s*`|`\s*$/g,"")
    }else if(/^\s*·/.test(BQEO_1)){
        BQEO_1=BQEO_1.replace(/^\s*·|·\s*$/g,"")
    }else{
        uz_ms('csrf-bqeo aoao db qq wyih ae yhrj dz ih sin up lq-'+'-kp-'+BQEO_1)
    }
    var VNWM_MCVN_1 = IOWR_AFOA.VR_AFOA_MCVN.match(/\w+/g);
    if (VNWM_MCVN_1 == null) {

    } else {
        if(/\b1\b|\bmenu\b/i.test(JSON.stringify(VNWM_MCVN_1))&&!/menu|1/i.test(VNWM_MCVN_1[VNWM_MCVN_1.length-1])){
            uz_ms('csrf-m e n u mcvn aoao fh nq udcc-'+VNWM_MCVN_1)
        }
        for (var i2 = 0; i2 < VNWM_MCVN_1.length; i2++) {
            switch (true) {
                case /\b(?:str|9)\b/i.test(VNWM_MCVN_1[i2]):
                    var reg_Str = /\$Str\(.*\)[\s\S]*?\*\*+/ig;
                    var reg_VR_AFOA_VNWY_TU = /\b(9|str)=([^\{\}]*)\{\{((?:(?!.+=.*\{\{)[\s\n\S])*?)\}\}(?!\}[^\}])/ig;
                    var vnwm_rjse_Str = BQEO_1.match(reg_Str);
                    if (vnwm_rjse_Str != null) {
                        for (var i1 = 0; i1 < vnwm_rjse_Str.length; i1++) {
                            BQEO_1 = BQEO_1.replace(vnwm_rjse_Str[i1], (await VR_EBWU_AFOA_BRTZ_FS(vnwm_rjse_Str[i1].replace(/\$str\((.*)\)(?:;|)/i, "9=$1{{").replace(/\*\*+/, "}}"))).rj_jtyj)
                        }
                    }
                    var vnwm_rjse_VR_AFOA_VNWY_TU = BQEO_1.match(reg_VR_AFOA_VNWY_TU);
                    if (vnwm_rjse_VR_AFOA_VNWY_TU != null) {
                        for (var i1 = 0; i1 < vnwm_rjse_VR_AFOA_VNWY_TU.length; i1++) {
                            BQEO_1 = BQEO_1.replace(vnwm_rjse_VR_AFOA_VNWY_TU[i1], (await VR_EBWU_AFOA_BRTZ_FS(vnwm_rjse_VR_AFOA_VNWY_TU[i1])).rj_jtyj)
                        }
                    }
                    break;
                case /\b(?:ecu|8)\b/i.test(VNWM_MCVN_1[i2]):
                    var reg_ecu = /\$ecu\(.*\)[\s\S]*?\*\*+/ig;
                    var reg_yhld = /\b(8|ecu)=([^\{\}]*)\{\{((?:(?!.+=.*\{\{)[\s\n\S])*?)\}\}(?!\}[^\}])/ig;
                    var vnwm_rjse_ecu = BQEO_1.match(reg_ecu);
                    if (vnwm_rjse_ecu != null) {
                        for (var i1 = 0; i1 < vnwm_rjse_ecu.length; i1++) {
                            var rj_yhld = vnwm_rjse_ecu[i1].replace(/\$ecu\((.*)\)(?:;|)/i, "8=$1{{").replace(/\*\*+/, "}}")
                            BQEO_1 = BQEO_1.replace(vnwm_rjse_ecu[i1], (await VR_EBWU_AFOA_BRTZ_FS(rj_yhld)).rj_jtyj)
                        }
                    }
                    var vnwm_yhld = BQEO_1.match(reg_yhld);
                    if (vnwm_yhld != null) {
                        for (var i1 = 0; i1 < vnwm_yhld.length; i1++) {
                            BQEO_1 = BQEO_1.replace(vnwm_yhld[i1], (await VR_EBWU_AFOA_BRTZ_FS(vnwm_yhld[i1])).rj_jtyj)
                        }
                    }
                    break;
                case /\b(?:menu|1)\b/i.test(VNWM_MCVN_1[i2]):
                    var reg_menu = /(?:\n|^)\+\d.*[\s\S]*?Peng_JTCO_ZV_TZRN/ig;
                    var reg_yhld = /\b(1|menu)=([^\{\}]*)\{\{((?:(?!.+=.*\{\{)[\s\n\S])*?)\}\}(?!\}[^\}])/ig;
                    var vnwm_rjse_menu = BQEO_1.match(reg_menu);
                    if (vnwm_rjse_menu != null) {
                        // for (var i1 = 0; i1 < vnwm_rjse_menu.length; i1++) {
                        //     BQEO_1 = BQEO_1.replace(vnwm_rjse_menu[i1], (await VR_EBWU_AFOA_BRTZ_FS(vnwm_rjse_menu[i1].replace(/\+\d\[(.*)\]\(.*\)/i, "1=$1{{").replace(/Peng_JTCO_ZV_TZRN/, "}}"))).rj_jtyj)
                        // }
                    }
                    var vnwm_yhld = BQEO_1.match(reg_yhld);
                    if (vnwm_yhld != null) {
                        for (var i1 = 0; i1 < vnwm_yhld.length; i1++) {
                            BQEO_1 = BQEO_1.replace(vnwm_yhld[i1], (await VR_EBWU_AFOA_BRTZ_FS(vnwm_yhld[i1])).rj_jtyj)
                            BQEO_1 = BQEO_1.replace(/\$\$+/,"Peng_JTCO_ZV_TZRN")
                        }
                    }
                    break;
                case /\b(?:rdtc|3)\b/i.test(VNWM_MCVN_1[i2]):
                    var reg_yhld = /\b(3|rdtc)=([^\{\}]*)\{\{((?:(?!.+=.*\{\{)[\s\n\S])*?)\}\}(?!\}[^\}])/ig;
                    var vnwm_yhld = BQEO_1.match(reg_yhld);
                    if (vnwm_yhld != null) {
                        for (var i1 = 0; i1 < vnwm_yhld.length; i1++) {
                            BQEO_1 = BQEO_1.replace(vnwm_yhld[i1], (await VR_EBWU_AFOA_BRTZ_FS(vnwm_yhld[i1])).rj_jtyj)
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