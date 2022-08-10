
function ZJZJ_LJEY_NINI_EYNH_LJEY(RJSE_LJEY_KP) {
    var ZJZJ_TSJQ_ZV_DW_CXAV_TSJQ=require('./ZJZJ_TSJQ_ZV_DW_CXAV_TSJQ')
    var RJSE_MSOX = "";
    var UXUX_YHLD = typeof (RJSE_LJEY_KP);
    if (UXUX_YHLD != "string") {
        throw new Error("MCVN UXUX MSOX : ACJI string :" + UXUX_YHLD)
    }
    var RJSE_1 = RJSE_LJEY_KP;
    var reg_LJEY_LD = /(?:\n|^)\+\d\[.*?\]\((?:Spec|Read|Clear|Str|\+)\)/i;
    var reg_LJEY_JTCO_EB = /\$\$\$/;
    var RJSE_LJEY_LD = RJSE_LJEY_KP.match(reg_LJEY_LD);
    if (RJSE_LJEY_LD == null) {
        RJSE_MSOX += "[LJEY LD BRTZ MSOX]" + RJSE_LJEY_KP.match(/.*\+\d+.*/);
    } else {
        RJSE_LJEY_LD = RJSE_LJEY_LD[0].replace(/\n/g, "")
        var LJEY_LD_Spec_MCVN = RJSE_LJEY_LD.match(/spec/i);
        if(LJEY_LD_Spec_MCVN!=null){
            if(LJEY_LD_Spec_MCVN[0]!="Spec"){
                RJSE_MSOX+="[Spec MCVN JI ARAP VD KEAB DK] "+LJEY_LD_Spec_MCVN +" <--"+RJSE_LJEY_KP.match(/.*\/\/line \d+/);
            }
        }
        RJSE_1 = RJSE_1.replace(reg_LJEY_LD, "");
    }
    RJSE_1 = RJSE_1.replace(reg_LJEY_JTCO_EB, "");
    RJSE_MSOX+=ZJZJ_TSJQ_ZV_DW_CXAV_TSJQ(RJSE_1,"LJEY");
    if (RJSE_MSOX != "") {
        RJSE_MSOX = "\n" + RJSE_MSOX
    }
    return RJSE_MSOX;
}
module.exports = ZJZJ_LJEY_NINI_EYNH_LJEY;