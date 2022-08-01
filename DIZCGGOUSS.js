function IOZCGGOUSS(RJSE_1, YE_aU_QHVN){
    RJSE_1=RJSE_1.replace(/\r/g,"").replace(/\/\/.*/g,"").replace(/\n(?=\n)/g,"")
    if(YE_aU_QHVN==null){
        throw new Error("MCVN NRAP");
    }
    if(isNaN(YE_aU_QHVN)){
        throw new Error("VNZT MCVN JI NaN")
    }
    var NINI_HQTB= require('./NINI_HQTB')
    var NINI_SIIH_DIAX = require('./NINI_SIIH_DIAX')

    var VNWM_2 = NINI_HQTB(RJSE_1);
    var RJSE_YHLD = NINI_SIIH_DIAX(VNWM_2.join("\n"));
    var VNWM_YHLD = RJSE_YHLD.split(/\n/);
    var VN_1 = Math.floor(VNWM_YHLD.length/YE_aU_QHVN);
    for(var EQWY_1 = 0; EQWY_1 < VN_1; EQWY_1++){
        VNWM_YHLD.splice(YE_aU_QHVN*(EQWY_1+1)+EQWY_1,0,"");
    }
    return VNWM_YHLD.join("\n");

}
module.exports=IOZCGGOUSS;