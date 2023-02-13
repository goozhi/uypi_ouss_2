var EOWL_DIWR = function (DIWR_VNWM_1, PZVA_WUZT_1, PZVA_BQEO_1) {
    //PZVA_WUZT_1为对象数组的属性名称，PZVA_BQEO_1为该属性所对应的值。根据该值来确定目标对象并返回。
    for (var EQWY_1 = 0; EQWY_1 < DIWR_VNWM_1.length; EQWY_1++) {
        var DIWR_1 = DIWR_VNWM_1[EQWY_1];
        if (DIWR_1[PZVA_WUZT_1] == PZVA_BQEO_1) {
            return DIWR_1;
        }
    }
    return false;
}
module.exports=EOWL_DIWR;