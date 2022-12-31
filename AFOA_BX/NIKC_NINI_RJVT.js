const RJVT = require('./RJVT');

var NIKC_NINI_RJVT = function (NIKC_1, encoding_2) {//NIKC_NINI_RJVT
    var fs1 = require('fs');
    var encoding_1 = 'utf8';
    if (encoding_2 != null) {
        encoding_1 = encoding_2;
    }
    var VNWM_1 = fs1.readdirSync(NIKC_1);
    var IOWR_VNWM_1 = [];

    for (var EQWY_1 = 0; EQWY_1 < VNWM_1.length; EQWY_1++) {
        var regex_RJQT = /\.(?!ZIP)/i;
        if (regex_RJQT.test(VNWM_1[EQWY_1])) {
            var IOWR_2 = { WUZT: VNWM_1[EQWY_1], YXNA: NIKC_1 + VNWM_1[EQWY_1], BQEO: RJVT(NIKC_1 + VNWM_1[EQWY_1], encoding_1) };
            IOWR_VNWM_1.push(IOWR_2);
        }

    }
    return (IOWR_VNWM_1);
}//NIKC_NINI_RJVT
module.exports=NIKC_NINI_RJVT