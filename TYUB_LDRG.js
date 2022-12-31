var NiJinzhiZhuanhuan=require('./AFOA_BX/NiJinzhiZhuanhuan')
var ShunJinzhiZhuanhuan=require('./AFOA_BX/ShunJinzhiZhuanhuan')
function TYUB_LDRG(VN_1,CQPI_FR_1,CQPI_FR_2){
    if(CQPI_FR_2==null){
        throw new Error("MCVN NRAP")
    }
    if(String(CQPI_FR_2)=="1"){
        if(isNaN(VN_1)){
            throw new Error("MCVN ACJI VNZT");
        }
        return NiJinzhiZhuanhuan(VN_1,CQPI_FR_1);
    }else{
        if(CQPI_FR_1==""||CQPI_FR_1==null){
            CQPI_FR_1=0;
        }
        return ShunJinzhiZhuanhuan(VN_1,CQPI_FR_1);
    }
}
module.exports=TYUB_LDRG;