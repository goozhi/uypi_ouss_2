var AG_LD_AR = function (neirong1) {//DaZhuanXiaoHanshu
    var daxie = "QWERTYUIOPASDFGHJKLZXCVBNM"
    var xiaoxie = "qwertyuiopasdfghjklzxcvbnm";
    var wenben1 = "";
    for (var suoyin1 = 0; suoyin1 < neirong1.length; suoyin1++) {//xunhuanChazhao
        var suoyin2 = xiaoxie.indexOf(neirong1[suoyin1]);
        if (suoyin2 != -1) {//zhaoDaoLe
            wenben1 = wenben1 + daxie[suoyin2];
        }//zhaoDaoLe
        else {//meiZhaodao
            wenben1 = wenben1 + neirong1[suoyin1];
        }//meiZhaodao
    }//xunhuanChazhao
    return wenben1;
}//DaZhuanXiaoHanshu
module.exports=AG_LD_AR