function EYRH_NINI_HQMV_YENH_YYHA(RJSE_KP, ES_VNAW, DPHP){
    if(DPHP==null){
        throw new Error("MCVN NRAP")
    }
    if(typeof(RJSE_KP)!="string"){
        throw new Error("MCVN UXUX MSOX :\n"+RJSE_KP)
    }
    if(isNaN(DPHP)){
        throw new Error("VNZT MCVN JI NaN : "+DPHP)
    }
    if(isNaN(ES_VNAW)){
        throw new Error("VNZT MCVN JI NaN : "+ES_VNAW)
    }
    if(DPHP==0){
        DPHP=8;
    }
    var RJSE_1=RJSE_KP;
    var RJSE_2=RJSE_1;
    for( var EQWY_1 = 0 ; EQWY_1 < ES_VNAW - 1 ; EQWY_1++ ){        
        RJSE_2 = HQMV(RJSE_2, DPHP);
        RJSE_1 = RJSE_1 + "\n" + RJSE_2 ;
}
function HQMV(RJSE_1, DPHP){
    if(DPHP==null){
            throw new Error("MCVN NRAP");
        }
        var UXUX=typeof(DPHP);
        if(UXUX!="number"){
            throw new Error("MCVN UXUX MSOX : "+UXUX+":"+DPHP)
        }
        var regex_1 = /d\d+(?![ ])/g;
        var VNWM_1 = RJSE_1.match(regex_1);
        if(VNWM_1 == null){
            throw new Error("SOPJ CGNE ZTHI VKIH : \n"+RJSE_1)
        };
        
        for(key_1 in VNWM_1){
                var RJSE_3 = VNWM_1[key_1];
                RJSE_1 = RJSE_1.replace(RJSE_3 , "d"+(Number(RJSE_3.replace("d","")) + DPHP ));
        }
        return RJSE_1;
}
return RJSE_1;

}
module.exports=EYRH_NINI_HQMV_YENH_YYHA;