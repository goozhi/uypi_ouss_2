function STST_MI_UYPJ(RJSE_1, RJSE_2_KP){
    var RJSE_2=RJSE_2_KP;
    var STST_MI;
    var STST_VN=0;
    var RJSE_YHLD
    if(RJSE_1.length<2||RJSE_2.length<2){
        if(RJSE_1.length<2){
            RJSE_YHLD=RJSE_1
        }else{
            RJSE_YHLD=RJSE_2
        }
        throw new Error("RJSE MCVN HPMI ACOA AGOC 2:"+RJSE_YHLD);
    }
    var VNWM_1=[]
    var VNWM_2=[]
    for(var i1=0;i1<RJSE_1.length-1;i1++){
        VNWM_1.push(RJSE_1[i1]+RJSE_1[i1+1])
    }
    for(var i2=0;i2<RJSE_2.length-1;i2++){
        VNWM_2.push(RJSE_2[i2]+RJSE_2[i2+1])
    }
    for(var i1=0;i1<VNWM_1.length;i1++){
        var EQWY_1=VNWM_2.indexOf(VNWM_1[i1])
        if(EQWY_1!=-1){
            STST_VN++;
            VNWM_2.splice(EQWY_1,1)

        }
    }
        STST_MI=STST_VN*2/((RJSE_1.length-1)+(RJSE_2_KP.length-1))
    return STST_MI
}
module.exports=STST_MI_UYPJ;