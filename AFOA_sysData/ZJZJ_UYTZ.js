function ZJZJ_UYTZ(UYTZ) {
    var UXUX_YHLD = typeof (UYTZ);
    if (UXUX_YHLD != "string") {
        throw new Error("MCVN UXUX MSOX, AOAO JI string:" + UXUX_YHLD)
    }
    var RJSE_MSOX = "";
    var reg_ZTHI_YYHA_1 = /d\d+/ig;
    var reg_f_VNWM = /f\[\d+\]\[\d+\]/ig;
    var reg_f_VNWM_2 = /f\[\d+\]\[\d+\]/g;
    var reg_ZTHI_YYHA_2 = /((?:d\d+)+)/ig;
    if (reg_f_VNWM.test(UYTZ)) {
        if (reg_f_VNWM_2.test(UYTZ)) {
            var UYTZ_2 = UYTZ.replace(reg_f_VNWM_2, '0xff');
            try {
                eval(UYTZ_2);
            } catch (err) {
                RJSE_MSOX += "[UYTZ BRTZ MSOX]" + UYTZ + "<--";
            }
        } else {
            RJSE_MSOX += "[UYTZ BRTZ MSOX]" + UYTZ + "<--";
        }
    } else {
        if (!/d\d/.test(UYTZ)) {
            RJSE_MSOX += "[UYTZ NRAP ZTHI XBST ]" + UYTZ + "<--";
        }
        var sheng_2 = '0x$1';
        var UYTZ_2 = UYTZ.replace(/((?:d\d+)+)#(\d+)/g, "($1-$1%$2)/$2").replace(reg_ZTHI_YYHA_2, sheng_2).replace(reg_ZTHI_YYHA_1, 'ff');
        try {
            eval(UYTZ_2);
        } catch (err) {
            RJSE_MSOX += "[UYTZ BRTZ MSOX]" + UYTZ + "<--";
        }
    }
    return RJSE_MSOX;
}
module.exports = ZJZJ_UYTZ;