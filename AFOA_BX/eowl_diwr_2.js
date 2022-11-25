var eowl_diwr_2 = function (diwr_VNWM_1, PZVA_WUZT_1, PZVA_BQEO_1, TSZN_VN) {//eowlGGMHNHGGdiwr
    //PZVA_WUZT_1为对象数组的属性名称，PZVA_BQEO_1为该属性所对应的值。根据该值来确定目标对象并返回。
    var VN_1 = 0;
    var VNWM_2 = [];
    for (var EQWY_1 = 0; EQWY_1 < diwr_VNWM_1.length; EQWY_1++) {
        if (VN_1 < TSZN_VN) {
            var diwr_1 = diwr_VNWM_1[EQWY_1];
            if (diwr_1[PZVA_WUZT_1] == PZVA_BQEO_1) {
                VN_1++;
                VNWM_2.push(diwr_1);
            }
        } else {//Gou LE 
            return VNWM_2;
        }//Gou LE

    }
    return null;
}
module.exports = eowl_diwr_2