function NHVN_GFVN_FS(RJSE_KP){
    if(RJSE_KP.length%2!=0){
        RJSE_KP="0"+RJSE_KP;
    }
    return RJSE_KP;
}
module.exports=NHVN_GFVN_FS;