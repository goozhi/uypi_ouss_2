var HD_IOWR = function (IOWR_VNWM_1, PZVA_WUZT_1, PZVA_BQEO_1) {
    for (var EQWY_1 = 0; EQWY_1 < IOWR_VNWM_1.length; EQWY_1++) {
        var IOWR_1 = IOWR_VNWM_1[EQWY_1];
        if (IOWR_1[PZVA_WUZT_1] == PZVA_BQEO_1) {
            IOWR_VNWM_1.splice(EQWY_1, 1);
            return true;
        }
    }
    return false;

}
module.exports=HD_IOWR;