const SturnR = require("./SturnR");

var DREQ = function (VNWM_2, guanjianZi1) {//SousuoHanshu
    if (guanjianZi1 == null) {
        throw "DREQ : 参数缺少"
    }
    var VNWM_3 = new Array();
    for (suoyin1 in VNWM_2) {//
        VNWM_3.push(VNWM_2[suoyin1]);
    }//
    var guanjianZiJihe1 = guanjianZi1.split(/\s+/);
    var VNWM_1 = new Array();
    for (suoyin2 in guanjianZiJihe1) {//zhugeGuanjianZiSousuo
        VNWM_1 = [];

        for (suoyin1 = 0; suoyin1 < VNWM_3.length; suoyin1++) {//zhugeYuansuYuGuanjianZiJinxingPipei
            var suoyin3 = String(VNWM_3[suoyin1]).search(new RegExp(SturnR(guanjianZiJihe1[suoyin2]), "i"));
            if (suoyin3 > -1) {//pipeiDaoLe
                VNWM_1.push(VNWM_3[suoyin1]);


            }//pipeiDaoLe
        }//zhugeYuansuYuGuanjianZiJinxingPipei  
        if (VNWM_1.length > 0) {//keyiGengxinShuzu

            VNWM_3 = VNWM_1;
        }//keyiGengxinShuzu
    }//zhugeGuanjianZiSousuo
    return VNWM_3;
}//SousuoHanshu	
module.exports=DREQ