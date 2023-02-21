const SturnR = require("./SturnR");
const uz_ms = require("./uz_ms");

var DREQ_DIWR = function (diwr_vnwm_kp, vnwm_pzva_wu, vnwm_gnfo_sj) {//SousuoHanshu
    if (vnwm_gnfo_sj == null) {
        throw "参数缺少"
    }
    if(typeof(vnwm_pzva_wu)!='object'){
        uz_ms('csrf-atvn mcvn uxux aoao ji object-')
    }
    var DIWR_VNWM_3 = new Array();
    for (suoyin1 in diwr_vnwm_kp) {//
        DIWR_VNWM_3.push(diwr_vnwm_kp[suoyin1]);
    }//
    var DIWR_VNWM_2 = new Array();
    for (suoyin2 in vnwm_gnfo_sj) {//zhugeGuanjianZiSousuo
        DIWR_VNWM_2 = [];
        for (suoyin1 = 0; suoyin1 < DIWR_VNWM_3.length; suoyin1++) {//zhugeYuansuYuGuanjianZiJinxingPipei
            var reg_gnfo_sj = new RegExp(SturnR(vnwm_gnfo_sj[suoyin2]), "i")
            var rj_kp = vnwm_pzva_wu.map(rn1=>{
                return DIWR_VNWM_3[suoyin1][rn1]
            }).join('\n')
            var suoyin3 = String(rj_kp).search(reg_gnfo_sj);//之所以用search是因为我们需要不分大小写.
            if (suoyin3 != -1) {//pipeiDaoLe
                DIWR_VNWM_2.push(DIWR_VNWM_3[suoyin1]);
            }//pipeiDaoLe
        }//zhugeYuansuYuGuanjianZiJinxingPipei  
        if (DIWR_VNWM_2.length > 0) {//keyiGengxinShuzu
            DIWR_VNWM_3 = DIWR_VNWM_2;
        }//keyiGengxinShuzu
    }//zhugeGuanjianZiSousuo
    return DIWR_VNWM_3;
}//SousuoHanshu	
module.exports = DREQ_DIWR