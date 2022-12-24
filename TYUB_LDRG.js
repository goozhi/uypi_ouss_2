function TYUB_LDRG(VN_1,CQPI_FR_1,CQPI_FR_2){
    if(CQPI_FR_2==null){
        throw new Error("MCVN NRAP")
    }
    var AFOA=require("./AFOA_BX/AFOA_UJ");
    if(String(CQPI_FR_2)=="1"){
        if(isNaN(VN_1)){
            throw new Error("MCVN ACJI VNZT");
        }
        return AFOA.NiJinzhiZhuanhuan(VN_1,CQPI_FR_1);
    }else{
        if(CQPI_FR_1==""||CQPI_FR_1==null){
            CQPI_FR_1=0;
        }
        return AFOA.ShunJinzhiZhuanhuan(VN_1,CQPI_FR_1);
    }
}
module.exports=TYUB_LDRG;