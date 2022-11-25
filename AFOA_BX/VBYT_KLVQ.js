function VBYT_KLVQ(IOWR_VNWM_1,RJSE_PZVA_WU_ZV_VNWM,VN_1){
    if(VN_1==null){
        throw new Error("[MCVN NRAP]")
    }
    if(IOWR_VNWM_1.length==0){
        throw new Error("[MCVN length LH 0]")
    }
    if(IOWR_VNWM_1[0][RJSE_PZVA_WU_ZV_VNWM]==undefined){
        throw new Error("[RJSE_PZVA_WU_ZV_VNWM MSOX,JI undefined]")
    }
    var VNWM_case=[]
    var VNWM_default=[]
    for(var i1=0;i1<IOWR_VNWM_1.length;i1++){
        if(IOWR_VNWM_1[i1][RJSE_PZVA_WU_ZV_VNWM].length==0){
            throw new Error("[MCVN length LH 0]")
        }
        if(IOWR_VNWM_1[i1][RJSE_PZVA_WU_ZV_VNWM].length==1){
            if(typeof(IOWR_VNWM_1[i1][RJSE_PZVA_WU_ZV_VNWM][0])=="number"||/^\s*(?:\d+|0x\w+)\s*$/i.test(IOWR_VNWM_1[i1][RJSE_PZVA_WU_ZV_VNWM][0])){
                VNWM_case.push({CQPI_FR:"case",RJSE:"case "+IOWR_VNWM_1[i1][RJSE_PZVA_WU_ZV_VNWM][0]+"=="+VN_1+":\nEQWY_1="+i1+" ; break;"});
            }else{
                VNWM_default.push({CQPI_FR:"default",RJSE:"default:EQWY_1="+i1+" ; break;"})
            }
        }else{
            VNWM_case.push({CQPI_FR:"case",RJSE:"case "+IOWR_VNWM_1[i1][RJSE_PZVA_WU_ZV_VNWM][0]+"<="+VN_1+"&&"+VN_1+"<="+IOWR_VNWM_1[i1][RJSE_PZVA_WU_ZV_VNWM][1]+":\nEQWY_1="+i1+" ; break;"});
        }
    }
    if(VNWM_default.length>1){
        throw new Error("[MCVN MSOX]"+VNWM_default.join(',')+"<--"+IOWR_VNWM_1)
    }else if(VNWM_default.length==0){
        VNWM_default[0]={RJSE:"default:EQWY_1="+"-1"+";"}
    }
    var RJSE_case=VNWM_case.map(RNSF=>{
        return RNSF.RJSE;
    }).join("\n")
    var RJSE_switch="switch(true){\n"+RJSE_case+"\n"+VNWM_default[0].RJSE+"\n}"
    var EQWY_1
    eval(RJSE_switch)
    return IOWR_VNWM_1[EQWY_1]
}
module.exports=VBYT_KLVQ;