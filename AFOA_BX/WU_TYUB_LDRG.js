var WU_TYUB_LDRG = function (RJSE_2, caozuoFu) {//WU_TYUB_LDRGFangfa
    var yuanshiShu2 = "0123456789abcdef";
    var yuanshiShu1 = "0123456789";
    var yuanshiShu0 = yuanshiShu1;
    var yuanshiShu3 = "01";    
    var shuzi2 = 0;
    if (caozuoFu == 0) {//shiJinzhi
        yuanshiShu0 = yuanshiShu1;
    }//shiJinzhi
    else if (caozuoFu == 1) {//shiLiuJinzhi
        yuanshiShu0 = yuanshiShu2;
    }//shiLiuJinzhi
    else if (caozuoFu == 2) {//erLiuJinzhi
        yuanshiShu0 = yuanshiShu3;
    }//erLiuJinzhi
    else {//zidingyiJinzhi
        yuanshiShu0 = caozuoFu.toString();
    }//zidingyiJinzhi

    RJSE_1 = RJSE_2.toString();
    if (RJSE_1 == "")
        return 0.0;
    if (RJSE_1.indexOf("-") != -1) {//shiFushu
        RJSE_1 = RJSE_1.replace("-", "");
        linshiPanduan2 = true;
    }//shiFushu
    else {//bushiFushu
        linshiPanduan2 = false;

    }//bushiFushu
    var suoyin1 = RJSE_1.indexOf(".");
    if (suoyin1 != -1) {//xiaoshu
        RJSE_1 = RJSE_1.replace(".", "");
        linshiPanduan1 = true;
    }//xiaoshu
    else {//buShiXiaoshu
        linshiPanduan1 = false;
    }//buShiXiaoshu

    for (var suoyin3 = 0; suoyin3 < RJSE_1.length; suoyin3++) {//meigeYuansuDouZhixingYibian
        var suoyin2 = yuanshiShu0.indexOf(RJSE_1[suoyin3]);
        shuzi2 = shuzi2 * yuanshiShu0.length + suoyin2;
    }//meigeYuansuDouZhixingYibian
    if (linshiPanduan1 == true)
        shuzi2 = shuzi2 / Math.pow(yuanshiShu0.length, RJSE_1.length - suoyin1);

    if (linshiPanduan2 == true) {//shiFushu
        shuzi2 = 0 - shuzi2;
    }//shiFushu

    return shuzi2;
}//WU_TYUB_LDRGFangfa

module.exports=WU_TYUB_LDRG;