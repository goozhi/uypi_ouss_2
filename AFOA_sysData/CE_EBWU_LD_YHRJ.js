//D:\RSGM\nodejs\UYPI_OUSS_2\KPLU\CE_EBWU_SJBX.json
function CE_EBWU_LD_YHRJ(RJSE_1,SJBX_YXNA){
    var SJBX=require('./KPLU/CE_EBWU_SJBX.json');
    var VNWM_1 = RJSE_1.split(/\s+/)
    var VNWM_2 = VNWM_1.map(RNSF=>{
        return SJBX[RNSF];
    })
    return VNWM_2.join("");
}