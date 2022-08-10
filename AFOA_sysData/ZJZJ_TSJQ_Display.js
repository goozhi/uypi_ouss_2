
function ZJZJ_TSJQ_Display(RJSE_KP) {
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
            var IOWR_YHLD = RNSF.match(reg_NINI);
            if (IOWR_YHLD == null) {
                RJSE_MSOX += "[Display Str NINI BRTZ MSOX]" + RNSF + "<--";
                return "//Display NINI BRTZ MSOX";
            } else {
                return "*\"Display NINI\",\{99 99 99\}," + IOWR_YHLD[1];
            }
        });
        var RJSE_YHLD = "$Str();\n" + VNWM_NINI_2.join('\n') + "\n***";
        RJSE_MSOX = ZJZJ_TSJQ_Str(RJSE_YHLD);
        RJSE_1 = RJSE_1.replace(reg_NINI, "");
    }
    var reg_Display_LG = /\$Display\((ENTER|EE|EXIT|ZZ|)\)\{\s*(?:\/\/line \d+\s*|)"/i;
    var reg_Display_DS = /\"\s*(?:\/\/line \d+\s*|)\}\s*(?:;|)(?:\/\/.*|)$/;
    var IOWR_YHLD = RJSE_1.match(reg_Display_LG);
    if (IOWR_YHLD == null) {
        var XBST_QHIH = RJSE_KP.match(/.*\/\/line \d+/);
        if (RJSE_KP == "") {
            return "";
        }
        if(XBST_QHIH==null){
            throw new Error("Display TSJQ NRAP XBST QHIH : "+RJSE_KP);
        }
        RJSE_MSOX += '\n[Display LGPH BRTZ MSOX]' + XBST_QHIH;
    }
    var IOWR_YHLD = RJSE_1.match(reg_Display_DS);
    if (IOWR_YHLD == null) {
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