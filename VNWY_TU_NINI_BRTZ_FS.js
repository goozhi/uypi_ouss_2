function VNWY_TU_NINI_BRTZ_FS(RJSE_KP){
    var NINI_SIIH_DIAX_2 = require('./NINI_SIIH_DIAX_2')

    RJSE_KP=RJSE_KP.replace(/\r/g,"").replace(/\n(?=\n)/g,"");
    VNWM_1 = RJSE_KP.split(/\n/);
    var VNWM_2 = VNWM_1.map((RNSF)=>{
        return "*\""+RNSF+"\",{}";
    })
    var VNWM_3 =NINI_SIIH_DIAX_2(VNWM_2);
    return VNWM_3.join("\n");
}
module.exports=VNWY_TU_NINI_BRTZ_FS;