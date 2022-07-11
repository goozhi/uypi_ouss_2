function EOWL_TRIG(RJSE_UYPJ){
    var reg_1=/d\d+/g;
    var VNWM_1=RJSE_UYPJ.match(reg_1);
    var VNWM_2 = VNWM_1.map(RNSF_1=>{
        return Number(RNSF_1.replace('d',''));
    });
    var VNWM_3 = [];
    VNWM_2.forEach(RNSF_1 => {
        if(VNWM_3.indexOf(RNSF_1)!=-1){
            throw "STNH NINI UYPJ ZTHI YYHA VKIH UMDY STYF DK ZBHM 同个项目算法字节地址编号出现相同的情况:"+RJSE_UYPJ;
        }else{
            VNWM_3.push(RNSF_1);
        }
    });
    var VN_1 = VNWM_2.sort((a,b)=>b-a)[0];
    return Math.floor((VN_1-1)/8);
}
module.exports=EOWL_TRIG;