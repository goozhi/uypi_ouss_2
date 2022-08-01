function ZJZJ_TSJQ_ClearDtc(ZJZJ_BQEO){
    var RJSE_MSOX = "";
    const ZJZJ_ACUN = require('./ZJZJ_ACUN');
    var reg_BX=require('./reg_BX');
    var reg_BX_VXUX=new reg_BX();
    var RJSE_1 = ZJZJ_BQEO;
    var reg_ClearDtc_LD_MCVN = /\$ClearDtc\((.*)\)(?:;|)(?:\n|)/i;
    var ClearDtc_LD_MCVN = RJSE_1.match(reg_ClearDtc_LD_MCVN);
    if (ClearDtc_LD_MCVN == null) {
        RJSE_MSOX += "\n[ClearDtc LGPH MSOX]" + ZJZJ_BQEO.replace(/\n[\S\s]*/, '');
    } else {
        RJSE_1 = RJSE_1.replace(reg_ClearDtc_LD_MCVN, "");
    };
    var reg_ES = /\{.+\}/;
    var ES = RJSE_1.match(reg_ES);
    if (ES == null) {
        RJSE_MSOX += "[ESIH YJ AC AB]" + RJSE_1;
    } else {
        if(! new RegExp(reg_BX_VXUX.zhenID_2).test(ES)){
            RJSE_MSOX += "[ES DK BRTZ ACDI]" + ES;
        }else{
            RJSE_1 = RJSE_1.replace(reg_ES, "");
        }
    }
    if(RJSE_1!=""){
        RJSE_1=ZJZJ_ACUN(RJSE_1);
        if(RJSE_1!=""){
            RJSE_MSOX += "\n<ZJZJ ClearDtc TSJQ ZD VODY DK ACUN BQEO>" + RJSE_1+"\n</ZJZJ ClearDtc TSJQ ZD VODY DK ACUN BQEO>";
        }
    }
    if (RJSE_MSOX != "") {
        RJSE_MSOX = "\n" + RJSE_MSOX + " : " + ZJZJ_BQEO + "<--";
    }
    return RJSE_MSOX;

}
module.exports=ZJZJ_TSJQ_ClearDtc;