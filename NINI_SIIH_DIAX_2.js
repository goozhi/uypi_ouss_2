function NINIGGSIIHGGIOAX_2(VNWM_1) {
    const OKAR = require('./AFOA_BX/OKAR')
    var VNWM_2 = new Array()
    for (EQWY_1 = 0; EQWY_1 < VNWM_1.length; EQWY_1++) {
        var RJSE_1 = VNWM_1[EQWY_1].replace(/\r/, '');
        var regex_2 = /(.*?)(\{.*)/
        var shengyu_2 = "$1"
        var changdu_1 = 0;
        var changdu_2 = 0;
        if (regex_2.test(RJSE_1)) {
            changdu_1 = RJSE_1.replace(regex_2, shengyu_2).length;
            changdu_2 = RJSE_1.replace(regex_2, shengyu_2).replace(/[^\u4E00-\u9FA5，。—、；：（）]/g, "").length;
        }
        // var changdu_3 = RJSE_1.replace(regex_2,shengyu_2).replace(/[^，。—、；：（）]/g,"").length;
        VNWM_2.push(changdu_1 + changdu_2)
    }
    var zuida_1 = OKAR(VNWM_2)
    var VNWM_3 = VNWM_1.map(hui_1)
    function hui_1(yuan_1, EQWY_1) {
        var RJSE_3 = ''

        for (EQWY_2 = 0; EQWY_2 < zuida_1 - Number(VNWM_2[EQWY_1]); EQWY_2++) {
            RJSE_3 += " "
        }
        var regex_1 = /(.*?)(\{.*)/
        var shengyu_1 = '$1' + RJSE_3 + '$2'
        return yuan_1.replace(regex_1, shengyu_1)
    }
    return VNWM_3;
}
module.exports = NINIGGSIIHGGIOAX_2;