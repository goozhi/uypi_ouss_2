
var DIZC_OUSS_2=require('./DIZC_OUSS_2')
var ZTHI_YG_VDUM=require('./ZTHI_YG_VDUM')
async function VR_TSJQ_BRTZ_FS_ZV_DIZC_OUSS_2(IOWR_AFOA) {
    var UXUX_YHLD = typeof (IOWR_AFOA)
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX , AOAO JI object:" + UXUX_YHLD)
    }
    var BQEO_1 = IOWR_AFOA.VR_AFOA_BQEO.replace(/^\s+|\s+$/g,"");
    BQEO_1 = BQEO_1.replace(/(\n|^)[^\S\n]+/g, "$1").replace(/[^\S\n]+(\n|$)/g, "$1")
    var VNWM_MCVN_1 = IOWR_AFOA.VR_AFOA_MCVN.match(/\[.*?\]/g);
    var RJSE_ZTHI_SLGR=IOWR_AFOA.VR_AFOA_MCVN;
    if(/^\s*$/.test(RJSE_ZTHI_SLGR)){
        RJSE_ZTHI_SLGR="[4=01][4=0x10] [4=0xff]"
    }
    if (VNWM_MCVN_1 == null) {
        if(/^\s*(?:32|asc)\s*$/i.test(RJSE_ZTHI_SLGR)){
            RJSE_ZTHI_SLGR="["+ZTHI_YG_VDUM("32").map(RNSF=>{
                return RNSF.ZTHI_VKIH+"="+RNSF.DIYC_YG
            }).join(' ')+"]"
        }else if(/^\s*(?:9|max)\s*=.*$/i.test(RJSE_ZTHI_SLGR)){
            RJSE_ZTHI_SLGR="okwk_zthi"+RJSE_ZTHI_SLGR.replace(/9/,"")
        }else if (/^\s*(?:9|max)\s*$/i.test(RJSE_ZTHI_SLGR)) {
            RJSE_ZTHI_SLGR = "okwk_zthi=1 0X10 0XFF"
        }
    }else{
    VNWM_MCVN_1.forEach(RNSF => {
        switch (true) {
            case /^\[\d+=\w+(?: \d+=\w+)*\]$/.test(RNSF):
                break;
            default:
                throw new Error("[ACUN MCVN]" + RNSF + "<--" + IOWR_AFOA.VR_AFOA_MCVN)
        }
    });
    }
    return await DIZC_OUSS_2(BQEO_1,999,RJSE_ZTHI_SLGR)
}
module.exports = VR_TSJQ_BRTZ_FS_ZV_DIZC_OUSS_2;