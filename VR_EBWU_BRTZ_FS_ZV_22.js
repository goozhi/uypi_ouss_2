function VR_EBWU_BRTZ_FS_ZV_22(RJSE_KP){
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
    var LLAO=DIWR_MCVN[1]
    var reg_ES=/\{(.*)\}/
    var DIWR_ES=LLAO.match(reg_ES);
    if(DIWR_ES==null){
        throw new Error("[NRAP ES MCVN]"+LLAO+"<--"+RJSE_KP)
    }else{
        LLAO=LLAO.replace(reg_ES,"{"+DIWR_ES[1].replace(/(\w\w)(?=\w)/g,"$1 ")+"}")
    }

    var VR_NINI_UXUX=DIWR_MCVN[2]
    if(!/^(?:22.+|21.+)$/i.test(VR_NINI_UXUX)){
        throw new Error("[NINI UXUX ACUN]"+VR_NINI_UXUX+"<--"+RJSE_KP)
    }
    var KLVQ_MCVN=VR_NINI_UXUX.replace(/22|21/,"").replace(/^(?!d)/,"d")
    var RJSE_MCVN=DIWR_MCVN[3]
    var reg_MCVN_1=/(.*)(?:\u3011|\u3010|\|)(.*?)\s*(\d+)/
    var DIWR_MCVN_1=RJSE_MCVN.match(reg_MCVN_1)
    var NINI_22_MCVN
    if(DIWR_MCVN_1!=null){
        NINI_22_MCVN=DIWR_MCVN_1[3]+","+DIWR_MCVN_1[1]+"|"+DIWR_MCVN_1[2]
    }else{
        throw new Error("[MCVN SDRH BRTZ MSOX]"+RJSE_MCVN+"<--"+RJSE_KP)
    }
    return LLAO + ",21," + KLVQ_MCVN + "," +NINI_22_MCVN+";"+BMLC
}
module.exports=VR_EBWU_BRTZ_FS_ZV_22