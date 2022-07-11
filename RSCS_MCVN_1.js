function RSCS_MCVN_1(MCVN_1){
    if(typeof(MCVN_1)!='string'){
        throw 'RSCS_MCVN_1 : MCVN UXUX MSOX:' + MCVN_1+typeof(MCVN_1)
    }
    if (!/Str/i.test(MCVN_1)) {
        throw 'RSCS_MCVN_1 : MCVN BRTZ MSOX:' + MCVN_1
    }
    var reg_1 = /(.*\()(.*)(\).*)/;
    var reg_2 = /ByCheckBmsCell/i;
    var reg_4 = /ByCheckBmsGroup/i;
    var reg_3 = /sortCanData/i;
    var sheng_1 = '$2';
    var VNWM_1=MCVN_1.replace(reg_1, sheng_1).split(/\s*,\s*/);
    var ByCheckBmsCell=false;
    var ByCheckBmsGroup=false;
    var sortCanData='00';
    VNWM_1.forEach(RNSF_1 =>{
        switch(true){
            case reg_2.test(RNSF_1):
                ByCheckBmsCell=true;
            break;
            case reg_3.test(RNSF_1):
                sortCanData=RNSF_1.replace(/.*=(\d+).*/,'$1');
            break;
            case reg_4.test(RNSF_1):
                ByCheckBmsGroup=true;
            break;
            default:
             throw 'RSCS_MCVN_1 : Str ACUN MCVN Str 不明参数:'+RNSF_1;
        }
    })
    return {ByCheckBmsCell, sortCanData, ByCheckBmsGroup};
}
module.exports=RSCS_MCVN_1;