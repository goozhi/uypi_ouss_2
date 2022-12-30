
async function VR_TSJQ_BRTZ_FS_ZV_rj_bwcr_vy(IOWR_AFOA) {
    const VR_EBWU_AFOA_BRTZ_FS = require("./VR_EBWU_AFOA_BRTZ_FS");
    var UXUX_YHLD = typeof (IOWR_AFOA)
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX , AOAO JI object:" + UXUX_YHLD)
    }
    var BQEO_1 = IOWR_AFOA.VR_AFOA_BQEO.replace(/^\s+|\s+$/g, "")
    BQEO_1 = BQEO_1.replace(/(\n|^)[^\S\n]+/g, "$1").replace(/[^\S\n]+(\n|$)/g, "$1")
    var VNWM_MCVN_1 = IOWR_AFOA.VR_AFOA_MCVN.match(/\w+/g);
    var jtyp_1
    if (VNWM_MCVN_1 == null) {
        var IOWR_RJ_BWCR_VY={BWCR_VY_BX_VKHI:"null",CXMI:"null",TSKL_BWCR_VY_VN_DK_ZTHI:"null",BWCR_VY_UUFB_TRIG:"d4",BWCR_VY_TIGE_VN:"4",BWCR_VY_VT_VY_VN:"3",vnwm_es:[]}
        var reg_mcvn_zv_bwcr_vy_lzvd=/[^=\n]+=[^=\n]+/ig;
        var vnwm_mcvn_zv_bwcr_vy_lzvd=BQEO_1.match(reg_mcvn_zv_bwcr_vy_lzvd)
        if(vnwm_mcvn_zv_bwcr_vy_lzvd!=null){
            vnwm_mcvn_zv_bwcr_vy_lzvd.forEach(RNSF=>{
                var mcvn_wu=RNSF.replace(/=.*|\s/ig,"")
                var mcvn_bqeo=RNSF.replace(/.*?=\s*/,"")
                switch(true){
                    case /\bstate\b/i.test(mcvn_wu):
                        IOWR_RJ_BWCR_VY.CXMI=mcvn_bqeo
                    break;
                    case /\bid\b/i.test(mcvn_wu):
                        IOWR_RJ_BWCR_VY.BWCR_VY_BX_VKHI=mcvn_bqeo
                    break;
                    case /\bstart\b/i.test(mcvn_wu):
                        IOWR_RJ_BWCR_VY.BWCR_VY_UUFB_TRIG=mcvn_bqeo
                    break;
                    case /\bframe\b/i.test(mcvn_wu):
                        var esih=mcvn_bqeo
                        if(!/\}/i.test(esih)){
                            esih="\{"+esih+"\}"
                        }
                        IOWR_RJ_BWCR_VY.vnwm_es.push(esih)
                    break;
                    case /\bspace\b/i.test(mcvn_wu):
                        IOWR_RJ_BWCR_VY.BWCR_VY_TIGE_VN=mcvn_bqeo
                    break;
                    case /\bcode\b/i.test(mcvn_wu):
                        IOWR_RJ_BWCR_VY.BWCR_VY_VT_VY_VN=mcvn_bqeo
                    break;
                    case /\b(num|number)\b/i.test(mcvn_wu):
                        IOWR_RJ_BWCR_VY.TSKL_BWCR_VY_VN_DK_ZTHI=mcvn_bqeo
                    break;
                    default:
                        throw new Error("[mcvn wu ftpj]"+mcvn_wu+"<--")
                }
            })
        }
        if(IOWR_RJ_BWCR_VY.vnwm_es.length==0){
            IOWR_RJ_BWCR_VY.vnwm_es.push("{19 02 09}")
        }
        jtyp_1="$ReadDtc();\n"+IOWR_RJ_BWCR_VY.vnwm_es.join(';')+"id="+IOWR_RJ_BWCR_VY.BWCR_VY_BX_VKHI+",num="+IOWR_RJ_BWCR_VY.TSKL_BWCR_VY_VN_DK_ZTHI+",start="+IOWR_RJ_BWCR_VY.BWCR_VY_UUFB_TRIG+',code='+IOWR_RJ_BWCR_VY.BWCR_VY_VT_VY_VN+',space='+IOWR_RJ_BWCR_VY.BWCR_VY_TIGE_VN+",state="+IOWR_RJ_BWCR_VY.CXMI+";"
    } else {
        VNWM_MCVN_1.forEach(async RNSF => {
            switch (true) {
                case /\b(?:str|9)\b/i.test(RNSF):
                    var reg_Str = /\$Str\(.*\)[\s\S]*?\*\*+/ig;
                    var reg_VR_AFOA_VNWY_TU = /\b(9|str)=([^\{\}]*)\{\{((?:(?!.+=.*\{\{)[\s\n\S])*?)\}\}(?!\}[^\}])/ig;
                    var vnwm_rjse_Str = BQEO_1.match(reg_Str);
                    if (vnwm_rjse_Str != null) {
                        for(var i1=0;i1<vnwm_rjse_Str.length;i1++){
                            BQEO_1 = BQEO_1.replace(vnwm_rjse_Str[i1], await VR_EBWU_AFOA_BRTZ_FS(RNSF.replace(/\$str\((.*)\)(?:;|)/i, "9=$1{{").replace(/\*\*+/, "}}")))
                        }
                    }
                    var vnwm_rjse_VR_AFOA_VNWY_TU = BQEO_1.match(reg_VR_AFOA_VNWY_TU);
                    if (vnwm_rjse_VR_AFOA_VNWY_TU != null) {
                        for(var i1=0;i1<vnwm_rjse_VR_AFOA_VNWY_TU.length;i1++){
                            BQEO_1 = BQEO_1.replace(RNSF, await VR_EBWU_AFOA_BRTZ_FS(RNSF))
                        }
                    }
                    break;
                default:
                    throw new Error("[ACUN MCVN WU]" + RNSF + "<--" + AFOA_UJ.VR_AFOA_MCVN)
            }
        });
    }
    return jtyp_1
}
module.exports = VR_TSJQ_BRTZ_FS_ZV_rj_bwcr_vy;