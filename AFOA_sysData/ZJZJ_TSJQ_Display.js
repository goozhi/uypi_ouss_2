
async function ZJZJ_TSJQ_Display(RJSE_KP) {
    var UXUX_YHLD=typeof(RJSE_KP);
    if(UXUX_YHLD!="string"){
        throw new Error("MCVN UXUX MSOX , AOAO JI string:"+UXUX_YHLD)
    }
    var ZJZJ_TSJQ_Str = require('./ZJZJ_TSJQ_Str');
    var RJSE_MSOX = "";
    var RJSE_1 = RJSE_KP;
    var reg_NINI = /@\+.*?@/g;
    var VNWM_NINI = RJSE_1.match(reg_NINI);
    if (VNWM_NINI != null) {
        var VNWM_NINI_2 = VNWM_NINI.map(RNSF => {
            var reg_NINI = /@\+\{f\[\d+\]\}\s*,\s*(.*)@/;
            var DIWR_YHLD = RNSF.match(reg_NINI);
            if (DIWR_YHLD == null) {
                RJSE_MSOX += "[Display Str NINI BRTZ MSOX]" + RJSE_KP.match(new RegExp(RNSF+".*")) + "<--";
                return "//Display Str NINI BRTZ MSOX";
            } else {
                return "*\"Display 项目\",\{99 99 99\}," + DIWR_YHLD[1];
            }
        });
        var RJSE_YHLD = "$Str();\n" + VNWM_NINI_2.join('\n') + "\n***";
        var RJSE_YHLD_2 = await ZJZJ_TSJQ_Str(RJSE_YHLD);
        if(RJSE_YHLD_2!=""){
            RJSE_MSOX+="\n<Display Str NINI MSOX>\n"+RJSE_KP+"\n"+RJSE_YHLD_2+"\n</Display Str NINI MSOX>"
        }
        RJSE_1 = RJSE_1.replace(reg_NINI, "");
    }
    var reg_Display_LG = /\$Display\((ENTER|EE|EXIT|)\)\{\s*(?:\/\/line \d+\s*|)"/i;
    var reg_Display_DS = /\"\s*(?:\/\/line \d+\s*|)\}\s*(?:;|)\s*(?:\/\/.*|)$/;
    var DIWR_YHLD = RJSE_1.match(reg_Display_LG);
    if (DIWR_YHLD == null) {
        var XBST_QHIH = RJSE_KP.match(/.*\/\/line \d+/);
        if (RJSE_KP == "") {
            return "";
        }
        if(XBST_QHIH==null){
            throw new Error("Display TSJQ NRAP XBST QHIH : "+RJSE_KP);
        }
        RJSE_MSOX += '\n[Display LGPH BRTZ MSOX]' + XBST_QHIH;
    }
    var DIWR_YHLD = RJSE_1.match(reg_Display_DS);
    if (DIWR_YHLD == null) {
        var XBST_QHIH = RJSE_KP.match(/.*\/\/line \d+/);
        if (RJSE_KP == "") {
            return "";
        }

        RJSE_MSOX += '\n[Display DSPH BRTZ MSOX]' + XBST_QHIH;
    }
    if (RJSE_MSOX != "") {
        // RJSE_MSOX = "\n" + RJSE_MSOX //+"\n"+ RJSE_KP;
    }
    return RJSE_MSOX;
}
module.exports = ZJZJ_TSJQ_Display;