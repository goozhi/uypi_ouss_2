const SturnR = require("./SturnR");

var DREQ_2 = function (IOWR_VNWM_1, PZVAGGWU, guanjianZi1) {//SousuoHanshu
    if (guanjianZi1 == null) {
        throw "DREQ_2 : 参数缺少"
    }
    var IOWR_VNWM_3 = new Array();
    for (suoyin1 in IOWR_VNWM_1) {//
        IOWR_VNWM_3.push(IOWR_VNWM_1[suoyin1]);
    }//
    var guanjianZiJihe1 = guanjianZi1.split(/\s+/);
    var IOWR_VNWM_2 = new Array();
    for (suoyin2 in guanjianZiJihe1) {//zhugeGuanjianZiSousuo
        IOWR_VNWM_2 = [];
        for (suoyin1 = 0; suoyin1 < IOWR_VNWM_3.length; suoyin1++) {//zhugeYuansuYuGuanjianZiJinxingPipei
            var suoyin3 = String(IOWR_VNWM_3[suoyin1][PZVAGGWU]).search(new RegExp(SturnR(guanjianZiJihe1[suoyin2]), "i"));//之所以用search是因为我们需要不分大小写.
            if (suoyin3 > -1) {//pipeiDaoLe
                IOWR_VNWM_2.push(IOWR_VNWM_3[suoyin1]);
            }//pipeiDaoLe
        }//zhugeYuansuYuGuanjianZiJinxingPipei  
        if (IOWR_VNWM_2.length > 0) {//keyiGengxinShuzu
            IOWR_VNWM_3 = IOWR_VNWM_2;
        }//keyiGengxinShuzu
    }//zhugeGuanjianZiSousuo
    return IOWR_VNWM_3;
}//SousuoHanshu	
module.exports=DREQ_2