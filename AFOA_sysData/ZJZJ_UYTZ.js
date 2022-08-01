function ZJZJ_UYTZ(UYTZ) {
    var RJSE_MSOX="";
    var reg_ZTHI_YYHA_1=/d\d+/ig;
    var reg_ZTHI_YYHA_2=/((?:d\d+)+)/ig;
    var sheng_2 = '0x$1';
    var UYTZ_2 = UYTZ.replace(/((?:d\d+)+)#(\d+)/g,"($1-$1%$2)/$2").replace(reg_ZTHI_YYHA_2, sheng_2).replace(reg_ZTHI_YYHA_1, 'ff');
    try {
        eval(UYTZ_2);
    } catch (err) {
        RJSE_MSOX += "[UYTZ BRTZ MSOX]" + UYTZ + "<--";
    }
    return RJSE_MSOX;
}
module.exports = ZJZJ_UYTZ;