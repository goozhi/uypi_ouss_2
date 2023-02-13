const SturnR = require("./SturnR");

var DREQ_3 = function (DIWR_VNWM_1, PZVAGGWU, guanjianZiJihe1) {//SousuoHanshu
    if (guanjianZiJihe1 == null) {
        throw "参数缺少"
    }
    var DIWR_VNWM_3 = new Array();
    for (suoyin1 in DIWR_VNWM_1) {//
        DIWR_VNWM_3.push(DIWR_VNWM_1[suoyin1]);
    }//
    var DIWR_VNWM_2 = new Array();
    for (suoyin2 in guanjianZiJihe1) {//zhugeGuanjianZiSousuo
        DIWR_VNWM_2 = [];
        for (suoyin1 = 0; suoyin1 < DIWR_VNWM_3.length; suoyin1++) {//zhugeYuansuYuGuanjianZiJinxingPipei
            var suoyin3 = String(DIWR_VNWM_3[suoyin1][PZVAGGWU]).search(new RegExp(SturnR(guanjianZiJihe1[suoyin2]), "i"));//之所以用search是因为我们需要不分大小写.
            if (suoyin3 > -1) {//pipeiDaoLe
                DIWR_VNWM_2.push(DIWR_VNWM_3[suoyin1]);
            }//pipeiDaoLe
        }//zhugeYuansuYuGuanjianZiJinxingPipei  
        if (DIWR_VNWM_2.length > 0) {//keyiGengxinShuzu
            DIWR_VNWM_3 = DIWR_VNWM_2;
        }//keyiGengxinShuzu
    }//zhugeGuanjianZiSousuo
    return DIWR_VNWM_3;
}//SousuoHanshu	
module.exports=DREQ_3