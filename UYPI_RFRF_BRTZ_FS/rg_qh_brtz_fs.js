function rg_qh_brtz_fs(rjse_kp){
    return rjse_kp.replace(/^"|"$/g,"").replace(/\n/g,"\\n");
}
module.exports=rg_qh_brtz_fs;