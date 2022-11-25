
function zq_ld(rj_kp){
    var rj1=rj_kp;
    rj1=rj1.replace(/\uff0c/g,',').replace(/\uff1b/g,";");
    // var reg_wyih_bqeo=/"[^"]+"/g;
    // var vnwm_wyih_bqeo=rj1.match(reg_wyih_bqeo);
    // if(vnwm_wyih_bqeo!=null){
    //     vnwm_wyih_bqeo.forEach(rnsf=>{
    //         rj1=rj1.replace(rnsf,rg_qh_brtz_fs(rnsf))
    //     })
    // }
    return rj1;
}
module.exports=zq_ld;