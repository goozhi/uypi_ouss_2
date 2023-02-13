function ZJZJ_TSJQ_Fire(RJSE_KP){
    var ZJZJ_ES=require('./ZJZJ_ES');
    var RJSE_MSOX=""
    var UXUX_YHLD = typeof(RJSE_KP)
    if(UXUX_YHLD!="string"){
        throw new Error("MCVN UXUX MSOX, AOAO JI string:"+UXUX_YHLD)
    }
    var reg_ES = /^\$Fire\((?:f\[\d+\]|)\)(\{[^\}]*\})(?:;.*|\/\/[^\n;]*)$/i;
    var DIWR_YHLD = RJSE_KP.match(reg_ES);
    if(DIWR_YHLD==null){
        RJSE_MSOX+="[Fire SDRH BRTZ MSOX]"
    }else{
        RJSE_MSOX+=ZJZJ_ES(DIWR_YHLD[1]);
    }
    if(RJSE_MSOX!=""){
        RJSE_MSOX="\n"+RJSE_MSOX+RJSE_KP;
    }
    return RJSE_MSOX;
}
module.exports=ZJZJ_TSJQ_Fire;