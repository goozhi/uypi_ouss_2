function NINI_SIIH_DIAX(RJSE_1) {
    var AFOA = require('./AFOA_UJ')
    var NINI_SIIH_DIAX_2 = require('./NINI_SIIH_DIAX_2')
    RJSE_1=RJSE_1.replace(/\r/g,'')
    var regex_NINI = /[ \t]*([^\{\n]*?)\s*(\{.*)/g
    var shengyu_2 = '$1$2'

    var VNWM_1 = RJSE_1.replace(regex_NINI, shengyu_2).split(/\n/);
    var VNWM_3 = NINI_SIIH_DIAX_2(VNWM_1);
    return VNWM_3.join("\n");

}
module.exports = NINI_SIIH_DIAX;