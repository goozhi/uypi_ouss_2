var EOWL_DIWR_2 = function (DIWR_VNWM_1, PZVA_WUZT_1, PZVA_BQEO_1, TSZN_VN) {//EOWLGGMHNHGGDIWR
    //PZVA_WUZT_1为对象数组的属性名称，PZVA_BQEO_1为该属性所对应的值。根据该值来确定目标对象并返回。
    var VN_1 = 0;
    var VNWM_2 = [];
    for (var EQWY_1 = 0; EQWY_1 < DIWR_VNWM_1.length; EQWY_1++) {
        if (VN_1 < TSZN_VN) {
            var DIWR_1 = DIWR_VNWM_1[EQWY_1];
            if (DIWR_1[PZVA_WUZT_1] == PZVA_BQEO_1) {
                VN_1++;
                VNWM_2.push(DIWR_1);
            }
        } else {//Gou LE	
            return VNWM_2;
        }//Gou LE

    }
    if (VN_1 == 0) {
        return false;
    }
    else {
        return VNWM_2;
    }
}
module.exports=EOWL_DIWR_2