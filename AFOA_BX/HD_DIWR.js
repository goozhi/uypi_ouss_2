var HD_DIWR = function (DIWR_VNWM_1, PZVA_WUZT_1, PZVA_BQEO_1) {
    for (var EQWY_1 = 0; EQWY_1 < DIWR_VNWM_1.length; EQWY_1++) {
        var DIWR_1 = DIWR_VNWM_1[EQWY_1];
        if (DIWR_1[PZVA_WUZT_1] == PZVA_BQEO_1) {
            DIWR_VNWM_1.splice(EQWY_1, 1);
            return true;
        }
    }
    return false;

}
module.exports=HD_DIWR;