const uz_ms = require("./AFOA_BX/uz_ms");
const VR_TSJQ_ZV_CE_EBWU_LD_YHRJ = require("./VR_TSJQ_ZV_CE_EBWU_LD_YHRJ");

function VR_EBWU_BRTZ_FS_ZV_qq(RJSE_KP){
    var UXUX_YHLD = typeof (RJSE_KP);
    if (UXUX_YHLD != "string") {
        throw new Error("MCVN UXUX MSOX , AOAO JI string:" + UXUX_YHLD)
    }
    var RJSE_1 = RJSE_KP.replace(/[\u2018\u2019]/g,'\'')
    var BMLC=RJSE_1.match(/\/\/.*/)
    if(BMLC!==null){
        RJSE_1=RJSE_1.replace(/\/\/.*/,"");
    }else{
        BMLC = ""
    }
    RJSE_1=RJSE_1.replace(/(?:;|\uff1b)\s*$/,"")
    var DIWR_MCVN = RJSE_1.match(/(.*\})\s*(?:,\s*|)(\w+)(?:\s*(?:\uff0c|,)\s*|\s*)(.*)/i)
    if (DIWR_MCVN == null) {
        throw new Error("[SOPJ CGNE NINI MCVN]" + RJSE_KP)
    }
    var RJSE_NINI_LLAO=DIWR_MCVN[1]
    var VR_NINI_UXUX=DIWR_MCVN[2]
    if(!/^(?:qq.+)$/i.test(VR_NINI_UXUX)){
        throw new Error("[NINI UXUX ACUN]"+VR_NINI_UXUX+"<--"+RJSE_KP)
    }
    var KLVQ_MCVN=VR_NINI_UXUX.replace(/qq/i,"").replace(/^(?!d)/,"d")
    var RJSE_MCVN=DIWR_MCVN[3]
    var reg_MCVN_1=/(\[[^\[\]\n]+\])(\[[^\[\]\n]+\])\s*(\d+)/
    var DIWR_MCVN_1=RJSE_MCVN.match(reg_MCVN_1)
    var NINI_qq_MCVN
    if(DIWR_MCVN_1!=null){
        NINI_qq_MCVN=DIWR_MCVN_1[3]+","+VR_TSJQ_ZV_CE_EBWU_LD_YHRJ({VR_AFOA_MCVN:"",VR_AFOA_BQEO: DIWR_MCVN_1[2].replace(/\[|\]/g,"")}).replace(/ /g,"")+"|"+VR_TSJQ_ZV_CE_EBWU_LD_YHRJ({VR_AFOA_MCVN:"",VR_AFOA_BQEO: DIWR_MCVN_1[1].replace(/\[|\]/g,"")}).replace(/ /g,"")
    }else{
        uz_ms("csrf-MCVN SDRH BRTZ MSOX-"+RJSE_MCVN+"-kp-"+RJSE_KP)
    }

    return RJSE_NINI_LLAO + ",21," + KLVQ_MCVN + "," +NINI_qq_MCVN+";"+BMLC
}
module.exports=VR_EBWU_BRTZ_FS_ZV_qq