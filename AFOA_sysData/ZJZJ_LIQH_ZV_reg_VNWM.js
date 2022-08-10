function ZJZJ_LIQH_ZV_reg_VNWM(RJSE_KP, VNWM_reg) {
    if(VNWM_reg==null){
        throw new Error("MCVN NRAP")
    }
    var UXUX_YHLD=typeof(VNWM_reg);
    if(UXUX_YHLD!="object"){
        throw "MCVN UXUX MSOX. ACJI obejct : "+UXUX_YHLD;
    }
    var RJSE_MSOX = "";
    var VNWM_YHLD = RJSE_KP.replace(/(?:\n|^)\/\/.*/g,"").replace(/\r/g,"").replace(/\n(?=\n|$)/g,"").split(/\n/);
    VNWM_YHLD.forEach(element => {
        var VBYT_1 = true;
        for (var EQWY_1 = 0; EQWY_1 < VNWM_reg.length; EQWY_1++) {
            var reg_YHLD = new RegExp(VNWM_reg[EQWY_1])
            if (reg_YHLD.test(element)) {
                VBYT_1=false;
                break;
            }
        }
        if (VBYT_1) {
            RJSE_MSOX+="\n[ZJZJ LIQH VODY DK ACUN EBPJ 不明语法] "+element;
        }
    });
    return RJSE_MSOX;
}
module.exports=ZJZJ_LIQH_ZV_reg_VNWM;