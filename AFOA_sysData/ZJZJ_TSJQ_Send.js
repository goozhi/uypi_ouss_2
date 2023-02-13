function ZJZJ_TSJQ_Send(RJSE_KP){
    var ZJZJ_ES=require('./ZJZJ_ES');
    var RJSE_MSOX=""
    var UXUX_YHLD = typeof(RJSE_KP)
    if(UXUX_YHLD!="string"){
        throw new Error("MCVN UXUX MSOX, AOAO JI string:"+UXUX_YHLD)
    }
    var reg_ES = /^\$Send\((?:f\[\d+\]|)\)(\{[^\$\n]*\})(?:;.*|\/\/[^\n;]*|)$/i;
    var DIWR_YHLD = RJSE_KP.match(reg_ES);
    if(DIWR_YHLD==null){
        RJSE_MSOX+="[Send SDRH BRTZ MSOX]"
    }else{
        var VNWM_1= DIWR_YHLD[1].split(/\//);
        VNWM_1.forEach(RNSF => {
            RJSE_MSOX+=ZJZJ_ES(RNSF);            
        });
    }
    if(RJSE_MSOX!=""){
        RJSE_MSOX="\n"+RJSE_MSOX+RJSE_KP;
    }
    return RJSE_MSOX;
}
module.exports=ZJZJ_TSJQ_Send;