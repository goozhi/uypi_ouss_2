var NiJinzhiZhuanhuan = function (yuanshu1, caozuoFu1) {//NiJinzhiZhuanhuanHanshu
    var yuanshiShu2 = "0123456789abcdef";
    var yuanshiShu1 = "0123456789";
    var yuanshiShu0 = yuanshiShu1;
    var yuanshiShu3 = "01";
    var linshiPanduan2 = false;
    var jieguo1 = 0;
    var RJSE_2 = "";
    if (yuanshu1 < 0) {//shiFushu
        yuanshu1 = 0 - yuanshu1;
        linshiPanduan2 = true;
    }//shiFushu
    else {//bushiFushu
        linshiPanduan2 = false;
    }//bushiFushu
    var shuzi1 = Math.floor(yuanshu1);
    var chaZhi1 = yuanshu1 - shuzi1;
    if (caozuoFu1 == 0) {//shiJinzhi
        yuanshiShu0 = yuanshiShu1;
    }//shiJinzhi
    else if (caozuoFu1 == 1) {//shiLiuJinzhi
        yuanshiShu0 = yuanshiShu2;
    }//shiLiuJinzhi
    else if (caozuoFu1 == 2) {//erJinzhi
        yuanshiShu0 = yuanshiShu3;
    }//erJinzhi
    else {//zidingyiJinzhi
        yuanshiShu0 = caozuoFu1.toString();
    }//zidingyiJinzhi

    if (chaZhi1 > 0) {//youXiaoshu
        var RJSE_1 = ZhengshuNiJinzhiZhuanhuan(shuzi1);
        //alert("shuzi1 :"+shuzi1+"yuanshu1 :"+yuanshu1);
        RJSE_2 = "";
        for (jishu1 = 0; jishu1 < 16; jishu1++) {//xunhuanZhaoChuDuiyingXiang
            yuanshu1 = chaZhi1 * yuanshiShu0.length;
            var suoyin1 = Math.floor(yuanshu1);
            RJSE_2 = RJSE_2 + yuanshiShu0[suoyin1];
            var chaZhi1 = yuanshu1 - suoyin1;
            if (chaZhi1 == 0) {//wuXiaoshu
                break;
            }//wuXiaoshu
        }//xunhuanZhaoChuDuiyingXiang
        return RJSE_1 + "." + RJSE_2;
    }//youXiaoshu
    else {//wuXiaoshu
        return ZhengshuNiJinzhiZhuanhuan(yuanshu1);
    }//wuXiaoshu

    function ZhengshuNiJinzhiZhuanhuan(shiJinzhi) {//ZhengshuNiJinzhiZhuanhuan

        var erJinzhi = new Array();
        while (true) {//xunhuanChuErQuYu
            var suoyin1 = shiJinzhi % yuanshiShu0.length;
            erJinzhi.unshift(yuanshiShu0[suoyin1]);

            shiJinzhi /= yuanshiShu0.length;
            if (shiJinzhi % yuanshiShu0.length != 0) {//buZhengChu
                shiJinzhi = Math.floor(shiJinzhi);
            }//buZhengChu
            if (shiJinzhi == 0) {//chuDaodi
                break;
            }//chuDaodi
        };//xunhuanChuErQuYu
        if (linshiPanduan2 == true) {//shiFushu
            return "-" + erJinzhi.join("");
        }//shiFushu
        else {//bushiFushu
            return erJinzhi.join("");
        }//bushiFushu
    }//ZhengshuNiJinzhiZhuanhuan

}//NiJinzhiZhuanhuanHanshu
module.exports=NiJinzhiZhuanhuan