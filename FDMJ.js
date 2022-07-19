function FDMJ(RJSE_1, VN_1, FDMJGGFR) {
    var VNWM_1 = new Array();
    var EQWY_1 = RJSE_1.length;
    for (; EQWY_1 > 0; EQWY_1 -= VN_1) {
        EQWY_2 = EQWY_1 - VN_1;
        if (EQWY_2 < 0)
            EQWY_2 = 0;
        VNWM_1.unshift(RJSE_1.slice(EQWY_2, EQWY_1));
    }
    return VNWM_1.join(FDMJGGFR);
}
module.exports=FDMJ;