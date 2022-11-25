function unicode_LD_ZTFR_SU(RJSE_KP){
    var RJSE_1=RJSE_KP;
    var reg_unicode=/\\u[a-f\d]+/ig;
    var VNWM_1=RJSE_1.match(reg_unicode)
    if(VNWM_1!=null){
        var IOWR_VNWM_1=VNWM_1.map(RNSF=>{
            return {RJSE_unicode:RNSF,ZTFR_SU:String.fromCharCode(Number("0x"+RNSF.replace(/\\u/,"")))}
        })
        IOWR_VNWM_1.forEach(RNSF=>{
            RJSE_1=RJSE_1.replace(RNSF.RJSE_unicode,RNSF.ZTFR_SU)
        })
    }
    return RJSE_1;
}
module.exports=unicode_LD_ZTFR_SU