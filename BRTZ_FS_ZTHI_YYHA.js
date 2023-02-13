function BRTZ_FS_ZTHI_YYHA(DIWR_MCVN, RJSE_UXUX) {
    var PRVD_VM_GMVT=require('./PRVD_VM_GMVT');
    if(RJSE_UXUX==null){
        throw new Error("MCVN NRAP");
    }
    TRIG = DIWR_MCVN.TRIG;
    KLVQ = DIWR_MCVN.KLVQ;
    PZVN = DIWR_MCVN.PZVN;
    NOKZ = DIWR_MCVN.NOKZ;
    if(isNaN(TRIG)){
        throw new Error("MCVN ACJI VNZT");
    }
    if(isNaN(KLVQ)){
        throw new Error("MCVN ACJI VNZT");
    }
    if(isNaN(PZVN)){
        throw new Error("MCVN ACJI VNZT");
    }
    if(isNaN(NOKZ)){
        throw new Error("MCVN ACJI VNZT");
    }
    var UYTZ=PRVD_VM_GMVT(TRIG,KLVQ,'MOTOROLA');
    UYTZ=UYTZ.replace(/^\(([^\+]+)\)$/,"$1").replace(/^\((d\d+)\)$/,"$1");
    if(PZVN==1&&NOKZ==0){
    }else{
        UYTZ="("+UYTZ+")*"+PZVN+NOKZ;
    }
    return UYTZ;
}
module.exports = BRTZ_FS_ZTHI_YYHA;