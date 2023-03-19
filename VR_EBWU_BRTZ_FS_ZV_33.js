function VR_EBWU_BRTZ_FS_ZV_33(RJSE_KP){
    var BRTZ_FS_3f=require('./BRTZ_FS_3f')
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
    var DIWR_MCVN = RJSE_1.match(/(.*\})\s*(?:,\s*|)(\w+)(?:\s*(?:\uff0c|,)\s*|\s*)([^,\uff0c ]*)(?:\s*(?:\uff0c|,)\s*|\s*)(.*)/i)
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
    var NINI_UXUX=DIWR_MCVN[2]
    if(!/^(?:33|s)$/i.test(NINI_UXUX)){
        throw new Error("[NINI UXUX ACUN]"+NINI_UXUX+"<--"+RJSE_KP)
    }
    var ZZZZ_KLVQ=DIWR_MCVN[3]
    try{
        eval(ZZZZ_KLVQ.replace(/d\d+/ig,"1"))
    }catch{
        throw new Error("[ZZZZ KLVQ MCVN FTPJ]"+ZZZZ_KLVQ+"<--"+RJSE_KP)
    }
    if(ZZZZ_KLVQ==""){
        ZZZZ_KLVQ="d4"
    }else if(/^\d+$/.test(ZZZZ_KLVQ)){
        ZZZZ_KLVQ="d"+ZZZZ_KLVQ
    }
    var RJSE_YHLD=DIWR_MCVN[4].replace(/\s+$/,"").replace(/\\( )/g,"$1\u917e");
    var reg_YHLD=/'([^,|\uff0c]*?)( )([^,|\uff0c]*?)'/g;
    var sheng_YHLD="'$1\u568f$3'";
    while(reg_YHLD.test(RJSE_YHLD)){
        RJSE_YHLD=RJSE_YHLD.replace(reg_YHLD,sheng_YHLD)
    }
    var VNWM_3f_MCVN_ZV_VNWM=RJSE_YHLD.split(/'\s*,\s*'|(?:\s*,|)\s*\|\|\|+\s*(?:,\s*|)|(?:,|\uff0c|)\s+(?!\u917e)(?:,|\uff0c|)/);
    var RJSE_3f_MCVN_ZV_VNWM=BRTZ_FS_3f("998\n"+VNWM_3f_MCVN_ZV_VNWM.join("\n").replace(/\u568f/g," ").replace(/\u917e|\u2018|\u2019|'/g,"")+"\n999");
    return LLAO+",3f,"+ZZZZ_KLVQ+","+RJSE_3f_MCVN_ZV_VNWM.replace(/([^;])\s*$/,"$1;")+BMLC
}
module.exports=VR_EBWU_BRTZ_FS_ZV_33;