function BRTZ_FS_3f(RJSE_KP){
    var NHVN_GFVN_FS=require("./NHVN_GFVN_FS")
    RJSE_KP=RJSE_KP.replace(/\r/g,'');
    var VNWM_1=RJSE_KP.split(/\n/);
    var VNWM_2=VNWM_1.map((RNSF_1,EQWY_1)=>{
        return NHVN_GFVN_FS(EQWY_1.toString(16).toLowerCase())+":"+RNSF_1
    });
    return '\''+VNWM_2.join("','")+"','oth:未定义';";
}
module.exports=BRTZ_FS_3f;