var YP_VP = function (shu1, zhidingWeishu) {//AFOA_UJ.
    //适用于大量重复加零程序中，不需要逐个零添加。
    var RJSE1 = "000000000000000000000000";
    var RJSE2 = String(shu1);
    var cha1 = zhidingWeishu - RJSE2.length;
    if (cha1 > 0) {//为正数
        RJSE2 = RJSE1.slice(0, cha1) + RJSE2;
    }//为正数
    return RJSE2;
}//AFOA_UJ.jiaLing
module.exports=YP_VP