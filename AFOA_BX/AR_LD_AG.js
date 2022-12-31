var AR_LD_AG = function (neirong1) {//DaZhuanXiaoHanshu
    var daxie = "QWERTYUIOPASDFGHJKLZXCVBNM"
    var xiaoxie = "qwertyuiopasdfghjklzxcvbnm";
    neirong1 = String(neirong1);
    var RJSE_1 = "";
    for (var suoyin1 = 0; suoyin1 < neirong1.length; suoyin1++) {//xunhuanChazhao
        var suoyin2 = daxie.indexOf(neirong1[suoyin1]);
        if (suoyin2 != -1) {//zhaoDaoLe
            RJSE_1 = RJSE_1 + xiaoxie[suoyin2];
        }//zhaoDaoLe
        else {//meiZhaodao
            RJSE_1 = RJSE_1 + neirong1[suoyin1];
        }//meiZhaodao
    }//xunhuanChazhao
    return RJSE_1;
}//DaZhuanXiaoHanshu
module.exports = AR_LD_AG