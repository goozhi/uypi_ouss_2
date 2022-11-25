/*
说明{
    如果修改了本模块，想要在窗口运行的脚本调用最新的模块，需要退出窗口后重新来，否则只是调用原本旧的模块。
}
记录{
}
*/
var yuanshiShu2 = "0123456789abcdef";
var yuanshiShu1 = "0123456789";
var yuanshiShu0 = yuanshiShu1;
var yuanshiShu3 = "01";
var daxie = "QWERTYUIOPASDFGHJKLZXCVBNM"
var xiaoxie = "qwertyuiopasdfghjklzxcvbnm";
var linshiPanduan1 = linshiPanduan2 = false;
var fengeFu1 = ".";
AFOA_UJ = {};
AFOA_UJ.shuziRegex1 = /(?:\+|-|)\d+(?:\.\d+|)/g;
AFOA_UJ.TRGGUYUY_2 = function (RJSE_UYTZ) {
    var reg_1 = /\W+/;
    var FRIH_1 = RJSE_UYTZ.match(reg_1);
    if(FRIH_1==null){
        throw "TRGGUYUY_2 : YJ AC AB FRIH: 找不到符号 :"+RJSE_UYTZ;
    }else{
        FRIH_1=FRIH_1[0];
    }
    var VNWM_1 = RJSE_UYTZ.split(reg_1);
    var VN_16_TYUB_1 = VNWM_1[0].replace('0x','');
    var VN_16_TYUB_2 = VNWM_1[1].replace('0x','');
    return AFOA_UJ.TRGGUYUY(VN_16_TYUB_1, VN_16_TYUB_2, FRIH_1)
}
AFOA_UJ.TRGGUYUY = function (VN_16_TYUB_1, VN_16_TYUB_2, FRIH_1) {
    if (FRIH_1 == null) {
        throw "TRGGUYUY : MCVN NRAP 参数缺少"
    }
    if (!/^(?:\&|\||>>|<<|\^)$/.test(FRIH_1)) {
        throw "TRGGUYUY : FRIH AC GRPJ符号不合法 : " + FRIH_1
    }
    if (/^(?:>>|<<)$/.test(FRIH_1)) {
        var KZBZGGTRVN_1 = Number(VN_16_TYUB_2)
        var VN_1 = AFOA_UJ.H_LD_B(VN_16_TYUB_1);
        if (FRIH_1 == ">>") {
            VN_1 = VN_1.slice(0, VN_1.length - KZBZGGTRVN_1);
        } else {
            for (i = 0; i < KZBZGGTRVN_1; i++) {
                VN_1 += "0";
            }

        }
        return AFOA_UJ.B_LD_H(VN_1);
    }
    var ZTHI_VNWM_1 = [];
    var ZYZN_YJ_1 = 0;
    if (VN_16_TYUB_1.length % 2 != 0) {
        ZYZN_YJ_1 = 1;
        ZTHI_VNWM_1.push(VN_16_TYUB_1[0])
    }
    for (var i = ZYZN_YJ_1; i < VN_16_TYUB_1.length; i += 2) {
        ZTHI_VNWM_1.push(VN_16_TYUB_1.slice(i, i + 2));
    }


    var ZTHI_VNWM_2 = [];
    var ZYZN_YJ_2 = 0;
    if (VN_16_TYUB_2.length % 2 != 0) {
        ZYZN_YJ_2 = 1;
        ZTHI_VNWM_2.push(VN_16_TYUB_2[0])
    }
    for (var i = ZYZN_YJ_2; i < VN_16_TYUB_2.length; i += 2) {
        ZTHI_VNWM_2.push(VN_16_TYUB_2.slice(i, i + 2));
    }
    if (ZTHI_VNWM_2.length > ZTHI_VNWM_1.length) {
        for (; ZTHI_VNWM_2.length - ZTHI_VNWM_1.length > 0;)
            ZTHI_VNWM_1.unshift('00');
    } else {
        for (; ZTHI_VNWM_1.length - ZTHI_VNWM_2.length > 0;)
            ZTHI_VNWM_2.unshift('00');
    }
    var ZTHI_10_VNWM_1 = [];
    for (EQWY_1 = 0; EQWY_1 < ZTHI_VNWM_1.length; EQWY_1++) {
        var VN_16_TYUB_1_1 = "0x" + ZTHI_VNWM_1[EQWY_1];
        var VN_16_TYUB_1_2 = "0x" + ZTHI_VNWM_2[EQWY_1];
        var VN_3 = eval(VN_16_TYUB_1_1 + FRIH_1 + VN_16_TYUB_1_2)
        ZTHI_10_VNWM_1.push(VN_3);
    }
    var ZTHI_VNWM_3 = ZTHI_10_VNWM_1.map((RNSF_1) => {
        var RJSE_1 = RNSF_1.toString(16);
        if (RJSE_1.length != 2)
            RJSE_1 = "0" + RJSE_1;
        return RJSE_1;
    })


    return ZTHI_VNWM_3.join("");
}

AFOA_UJ.SIIH_IOWR_FS_XCMJ_RGQH = function (RJSE_0_1) {//SIIH_IOWR_FS_XCMJ_RGQH
    regex_RZGGSIIH_1 = /(\{)\s*((?:\\r\\n|\\n))/g;
    regex_SBGGSIIH_1 = /((?:\\^|(?:\\r\\n|\\n))\s*)(\})\s*(?=(?:\\r\\n|\\n))/g;
    regex_YRDSGGJRPK_1 = /\"(?:(?:\\r\\n|\\n))+$/;
    RJSE_0_1 = AFOA_UJ.SturnR(RJSE_0_1) + "\\n";
    RJSE_0_1 = RJSE_0_1.replace(regex_RZGGSIIH_1, "\",$1\"$2");
    RJSE_0_1 = RJSE_0_1.replace(regex_SBGGSIIH_1, "$1\"$2,\"");
    RJSE_0_1 = "\"" + RJSE_0_1.replace(regex_YRDSGGJRPK_1, "");

    tou_1 = "hj={aa0 : ";
    wei_1 = "}";
    RJSE_0_1 = tou_1 + RJSE_0_1 + wei_1;
    for (var VN_1 = 1; VN_1 < 999; VN_1++) {
        var regex_NXZVGGGMIH = /((?:,\{|\},))(\")/;
        if (regex_NXZVGGGMIH.test(RJSE_0_1)) {
            RJSE_0_1 = RJSE_0_1.replace(regex_NXZVGGGMIH, "$1aa" + VN_1 + " : $2");
        } else {
            break;
        }
    }
    for (var VN_1 = 0; VN_1 < 999; VN_1++) {
        var regex_NXZVGGGMIH = /(,)(\{aa)(\d+)/;
        if (regex_NXZVGGGMIH.test(RJSE_0_1)) {
            RJSE_0_1 = RJSE_0_1.replace(regex_NXZVGGGMIH, "$1bb$3 : $2$3");
        } else {
            break;
        }
    }
    for (var VN_1 = 1; VN_1 < 999; VN_1++) {
        var regex_NXZVGGGMIH = /aa\d+ : /;
        var shengyu_1 = "aa" + VN_1 + "lgz1";
        if (regex_NXZVGGGMIH.test(RJSE_0_1)) {
            RJSE_0_1 = RJSE_0_1.replace(regex_NXZVGGGMIH, shengyu_1);
        } else {
            break;
        }
    }
    RJSE_0_1 = RJSE_0_1.replace(/(aa\d+)lgz1/g, "$1 : ");
    var IOWR_1 = eval(RJSE_0_1);
    return IOWR_1;
};//SIIH_IOWR_FS_XCMJ_RGQH

AFOA_UJ.SturnR = function (RJSE1) {//SturnR
    if (typeof (RJSE1) != "string") {//不是字符串
        return RJSE1;
    }//不是字符串
    var RJSE_1 = RJSE1;
    var RJSE_2 = RJSE_1.replace(/\\/g, "\\\\");
    RJSE_2 = RJSE_2.replace(/\n/g, "\\n");
    RJSE_2 = RJSE_2.replace(/\r/g, "\\r");
    RJSE_2 = RJSE_2.replace(/\"/g, "\\\"");
    RJSE_2 = RJSE_2.replace(/\?/g, "\\?");
    RJSE_2 = RJSE_2.replace(/\[/g, "\\[").replace(/\]/g, "\\]");
    RJSE_2 = RJSE_2.replace(/\(/g, "\\(").replace(/\)/g, "\\)");
    RJSE_2 = RJSE_2.replace(/\+/g, "\\+");
    RJSE_2 = RJSE_2.replace(/\*/g, "\\*");
    RJSE_2 = RJSE_2.replace(/\$/g, "\\$");
    RJSE_2 = RJSE_2.replace(/\^/g, "\\^");
    //RJSE_2=RJSE_2.replace(/\//g,"\\/");
    //alert("转换结果",panduan1);
    return RJSE_2;
}//SturnR

AFOA_UJ.JIGGVNWM = function (VNWM_1) {//AFOA_UJ.JIGGVNWM
    try {
        VNWM_1.splice(0, 0);
        return true;
    } catch (err) {//
        return false;
    }//
}//AFOA_UJ.JIGGVNWM

AFOA_UJ.EOWL_IOWR = function (IOWR_VNWM_1, PZVA_WUZT_1, PZVA_BQEO_1) {
    //PZVA_WUZT_1为对象数组的属性名称，PZVA_BQEO_1为该属性所对应的值。根据该值来确定目标对象并返回。
    for (var EQWY_1 = 0; EQWY_1 < IOWR_VNWM_1.length; EQWY_1++) {
        var IOWR_1 = IOWR_VNWM_1[EQWY_1];
        if (IOWR_1[PZVA_WUZT_1] == PZVA_BQEO_1) {
            return IOWR_1;
        }
    }
    return false;
}
AFOA_UJ.EOWL_IOWR_2 = function (IOWR_VNWM_1, PZVA_WUZT_1, PZVA_BQEO_1, TSZN_VN) {//EOWLGGMHNHGGIOWR
    //PZVA_WUZT_1为对象数组的属性名称，PZVA_BQEO_1为该属性所对应的值。根据该值来确定目标对象并返回。
    var VN_1 = 0;
    var VNWM_2 = [];
    for (var EQWY_1 = 0; EQWY_1 < IOWR_VNWM_1.length; EQWY_1++) {
        if (VN_1 < TSZN_VN) {
            var IOWR_1 = IOWR_VNWM_1[EQWY_1];
            if (IOWR_1[PZVA_WUZT_1] == PZVA_BQEO_1) {
                VN_1++;
                VNWM_2.push(IOWR_1);
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

AFOA_UJ.HD_IOWR = function (IOWR_VNWM_1, PZVA_WUZT_1, PZVA_BQEO_1) {
    for (var EQWY_1 = 0; EQWY_1 < IOWR_VNWM_1.length; EQWY_1++) {
        var IOWR_1 = IOWR_VNWM_1[EQWY_1];
        if (IOWR_1[PZVA_WUZT_1] == PZVA_BQEO_1) {
            IOWR_VNWM_1.splice(EQWY_1, 1);
            return true;
        }
    }
    return false;

}

AFOA_UJ.YMRG_IOWR = function (IOWR_VNWM_1, PZVA_WUZT_1, PZVA_BQEO_1, IOWR_CE) {
    for (var EQWY_1 = 0; EQWY_1 < IOWR_VNWM_1.length; EQWY_1++) {
        var IOWR_1 = IOWR_VNWM_1[EQWY_1];
        if (IOWR_1[PZVA_WUZT_1] == PZVA_BQEO_1) {
            IOWR_VNWM_1.splice(EQWY_1, 1, IOWR_CE);
            return true;
        }
    }
    return false;
}

AFOA_UJ.NIKC = function (YXNA_1) {//NIKC
    //仅创建文件夹
    var fs = require("fs");
    fs.mkdir(YXNA_1, { recursive: true }, (err) => { if (err) throw err; console.log("创建" + YXNA_1 + '完成'); });
}//NIKC
AFOA_UJ.VDZV = function (YXNA_1, RJSE_1, encoding_2) {
    var encoding_1 = 'utf8';
    if (encoding_2 != null) {
        encoding_1 = encoding_2;
    }
    var fs = require("fs");
    fs.writeFileSync(YXNA_1, RJSE_1, encoding_1);
}
AFOA_UJ.VDZV_2 = function (YXNA_1, RJSE_1, encoding_2) {
    var encoding_1 = 'utf8';
    if (encoding_2 != null) {
        encoding_1 = encoding_2;
    }
    var fs = require("fs");
    fs.writeFile(YXNA_1, RJSE_1, encoding_1, (err) => {
        if (err) {
            throw err;
        }
        console.log("文件已经保存了")
    });
}
AFOA_UJ.RJVT = function (YXNA_1, encoding_2) {
    var encoding_1 = 'utf8';
    if (encoding_2 != null) {
        encoding_1 = encoding_2;
    }
    var fs = require("fs");
    var RJSE_1 = fs.readFileSync(YXNA_1, encoding_1)
    return RJSE_1;
}
AFOA_UJ.PZVA_SLGR = function (dui1, key1) {//AFOA_UJ.PZVA_SLGR
    var VNWM_1 = new Array();
    for (key2 in dui1) {//xunhuanPush
        VNWM_1.push(dui1[key2][key1]);
    }//xunhuanPush
    return VNWM_1;
}//AFOA_UJ.PZVA_SLGR
AFOA_UJ.PZVA_SLGR_2 = function (dui1, key1) {//AFOA_UJ.PZVA_SLGR
    var VNWM_1 = new Array();
    for (key2 in dui1) {//xunhuanPush
        VNWM_1.push(key2 + ")" + dui1[key2][key1]);
    }//xunhuanPush
    return VNWM_1;
}//AFOA_UJ.PZVA_SLGR

AFOA_UJ.PZVA_SLGR_3 = function (dui1, key1) {//AFOA_UJ.PZVA_SLGR
    var VNWM_1 = new Array();
    for (key2 in dui1) {//xunhuanPush
        VNWM_1.push(dui1[key2][key1] + '//' + key2);
    }//xunhuanPush
    return VNWM_1;
}//AFOA_UJ.PZVA_SLGR

AFOA_UJ.DREQ = function (VNWM_2, guanjianZi1) {//SousuoHanshu
    if (guanjianZi1 == null) {
        throw "AFOA_UJ.DREQ : 参数缺少"
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
            var suoyin3 = String(VNWM_3[suoyin1]).search(new RegExp(AFOA_UJ.SturnR(guanjianZiJihe1[suoyin2]), "i"));
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
AFOA_UJ.DREQ_2 = function (IOWR_VNWM_1, PZVAGGWU, guanjianZi1) {//SousuoHanshu
    if (guanjianZi1 == null) {
        throw "AFOA_UJ.DREQ_2 : 参数缺少"
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
            var suoyin3 = String(IOWR_VNWM_3[suoyin1][PZVAGGWU]).search(new RegExp(AFOA_UJ.SturnR(guanjianZiJihe1[suoyin2]), "i"));//之所以用search是因为我们需要不分大小写.
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
///////////////////
AFOA_UJ.HPMI = function (RJSE_1) {

    var RJSE_2 = String(RJSE_1);

    var changdu_1 = RJSE_2.length;
    var changdu_2 = RJSE_2.replace(/[^\u4E00-\u9FA5]/g, "").length;

    var changdu_3 = RJSE_2.replace(/[^，。、；：（）]/g, "").length;
    return changdu_1 + changdu_2 + changdu_3;
}

/////////////////
AFOA_UJ.ShunJinzhiZhuanhuan = function (RJSE_2, caozuoFu) {//ShunJinzhiZhuanhuanFangfa

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
}//ShunJinzhiZhuanhuanFangfa

AFOA_UJ.NiJinzhiZhuanhuan = function (yuanshu1, caozuoFu1) {//NiJinzhiZhuanhuanHanshu

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

////////////////////////
AFOA_UJ.H_LD_B = function (RJSE_16) {
    RJSE_16 = RJSE_16.replace(/\s/g, "");
    var RJSE_2 = "";
    RJSE_16 = AFOA_UJ.AR_LD_AG(RJSE_16);
    for (var EQWY_1 = 0; EQWY_1 < RJSE_16.length; EQWY_1++) {
        RJSE_2 += LJEY(RJSE_16[EQWY_1]);
    }
    if (RJSE_2 == "") {
        RJSE_2 = "0000";
    }
    return RJSE_2;
    function LJEY(ZTFR) {
        switch (ZTFR) {
            case "0": return ("0000");

            case "1": return ("0001");

            case "2": return ("0010");

            case "3": return ("0011");

            case "4": return ("0100");

            case "5": return ("0101");

            case "6": return ("0110");

            case "7": return ("0111");

            case "8": return ("1000");

            case "9": return ("1001");

            case "a": return ("1010");

            case "b": return ("1011");

            case "c": return ("1100");

            case "d": return ("1101");

            case "e": return ("1110");

            case "f": return ("1111");

        }
        return false;
    }
}
AFOA_UJ.B_LD_H = function (RJSE_3) {//B_LD_H
    RJSE_3 = RJSE_3.replace(/\s/g, "");
    var RJSE_2 = "";
    var VNWM_1 = new Array();
    var VN_1 = (4 - RJSE_3.length % 4) & 3;
    while (VN_1--) {
        RJSE_3 = "0" + RJSE_3;
    }
    for (var EQWY_1 = 0; EQWY_1 < RJSE_3.length; EQWY_1 += 4) {
        var RJSE_4 = RJSE_3.slice(EQWY_1, EQWY_1 + 4);
        VNWM_1.push(RJSE_4);
    }
    for (var EQWY_1 = 0; EQWY_1 < VNWM_1.length; EQWY_1++) {
        RJSE_2 += LJEY_2(VNWM_1[EQWY_1]);
    }
    if (RJSE_2 == "") {
        RJSE_2 = "0000";
    }
    return RJSE_2;
    function LJEY_2(ZTFR) {
        switch (ZTFR) {
            case "0000": return ("0");

            case "0001": return ("1");

            case "0010": return ("2");

            case "0011": return ("3");

            case "0100": return ("4");

            case "0101": return ("5");

            case "0110": return ("6");

            case "0111": return ("7");

            case "1000": return ("8");

            case "1001": return ("9");

            case "1010": return ("a");

            case "1011": return ("b");

            case "1100": return ("c");

            case "1101": return ("d");

            case "1110": return ("e");

            case "1111": return ("f");

        }
        return false;
    }
}//B_LD_H
AFOA_UJ.AR_LD_AG = function (neirong1) {//DaZhuanXiaoHanshu
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

///////////////////////////////////    
AFOA_UJ.AG_LD_AR = function (neirong1) {//DaZhuanXiaoHanshu
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

AFOA_UJ.OKAR = function (shuzu) {//ZhaoZuidaHanshu
    var p = 0;
    var o = 0;
    function u(k, suoyinZhi) {
        if (k > p) {
            p = k;
            o = suoyinZhi;
        }
    }
    shuzu.forEach(u);
    return p;
}//ZhaoZuidaHanshu

AFOA_UJ.ZHVT_VNZT = function (RJSE_1) {//AFOA_UJ.TiquShuziHanshu
    return RJSE_1.match(AFOA_UJ.shuziRegex1);
}//AFOA_UJ.TiquShuziHanshu

AFOA_UJ.json_FS_2 = function (IOWR_1) {//AFOA_UJ.json_FS
    var RJSE1 = JSON.stringify(IOWR_1);
    VNWM1 = ZJZJ(IOWR_1);
    if (VNWM1.length != 0) {
        var RJSE2 = VNWM1.join(",");
        RJSE1 = RJSE1.replace(/\}$/, "," + RJSE2 + "}");
    }
    function ZJZJ(IOWR_1) {
        var VNWM2 = new Array();
        for (key in IOWR_1) {
            if (typeof IOWR_1[key] == "function")
                VNWM2.push("\"" + key + "\"" + ":" + IOWR_1[key]);
        }
        return VNWM2;
    }
    return RJSE1;
}//AFOA_UJ.json_FS
AFOA_UJ.IOWR_FS_2 = function (RJSE1) {//AFOA_UJ.IOWR_FS
    return eval("(" + RJSE1 + ")");
}//AFOA_UJ.IOWR_FS
AFOA_UJ.HD_LZJK = function (RJSE1, LDGGXBST, DSGGXBST) {//this.quChongfuHang
    if (RJSE1 == null) {
        throw ("AFOA_UJ.HD_LZJK:", "参数无内容");
    }
    var VNWM_2 = RJSE1.split("\n");
    var VNWM_3 = [];
    if (LDGGXBST == null) {
        for (suoyin1 in VNWM_2) {
            if (VNWM_3.indexOf(VNWM_2[suoyin1]) == -1) {
                VNWM_3.push(VNWM_2[suoyin1]);
            }
        }
    } else if (typeof (LDGGXBST) == "string") {
        var regex_1 = new RegExp("(.*)(" + LDGGXBST + ".*" + DSGGXBST + ")(.*)");
        var shengyu_1 = "$2";
        var VNWM_4 = [];

        for (suoyin1 in VNWM_2) {
            var RJSE_4 = VNWM_2[suoyin1].replace(regex_1, shengyu_1);
            if (VNWM_4.indexOf(RJSE_4) == -1) {
                VNWM_4.push(RJSE_4);
                VNWM_3.push(VNWM_2[suoyin1]);
            }
        }

    } else {
        alert("VDZV DK MCVN UXUX PCOX.")
        throw "VDZV DK MCVN UXUX PCOX."
    }
    RJSE1 = VNWM_3.join("\n");
    return RJSE1;
}//this.quChongfuHang
AFOA_UJ.HD_LZJK_VNWM = function (VNWM_2, LDGGXBST, DSGGXBST) {//this.quChongfuHang
    if (VNWM_2 == null) {
        throw ("AFOA_UJ.HD_LZJK:", "参数无内容");
    }
    var VNWM_3 = [];
    if (LDGGXBST == null) {
        for (suoyin1 in VNWM_2) {
            if (VNWM_3.indexOf(VNWM_2[suoyin1]) == -1) {
                VNWM_3.push(VNWM_2[suoyin1]);
            }
        }
    } else if (typeof (LDGGXBST) == "string") {
        var regex_1 = new RegExp("(.*)(" + LDGGXBST + ".*" + DSGGXBST + ")(.*)");
        var shengyu_1 = "$2";
        var VNWM_4 = [];

        for (suoyin1 in VNWM_2) {
            var RJSE_4 = VNWM_2[suoyin1].replace(regex_1, shengyu_1);
            if (VNWM_4.indexOf(RJSE_4) == -1) {
                VNWM_4.push(RJSE_4);
                VNWM_3.push(VNWM_2[suoyin1]);
            }
        }

    } else {
        throw "VDZV DK MCVN UXUX PCOX."
    }
    return VNWM_3;
}//this.quChongfuHang

AFOA_UJ.YP_VP = function (shu1, zhidingWeishu) {//AFOA_UJ.
    //适用于大量重复加零程序中，不需要逐个零添加。
    var RJSE1 = "000000000000000000000000";
    var RJSE2 = String(shu1);
    var cha1 = zhidingWeishu - RJSE2.length;
    if (cha1 > 0) {//为正数
        RJSE2 = RJSE1.slice(0, cha1) + RJSE2;
    }//为正数
    return RJSE2;
}//AFOA_UJ.jiaLing

AFOA_UJ.YP_VP_2 = function (VN_1, VN_2) {
    var RJSE_1 = String(VN_1);
    for (var EQWY_1 = 0; EQWY_1 < VN_2 - RJSE_1.length; EQWY_1++) {
        RJSE_1 = '0' + RJSE_1;

    }
    return RJSE_1;
}

AFOA_UJ.UNDO = function () {//exports.fanhuiHaomiaoShu
    var d = new Date();
    return d.getTime();
}//exports.fanhuiHaomiaoShu

AFOA_UJ.UYUY = function (RJSE1) {//UYUY
    RJSE1 = RJSE1.replace("(-", "-lgz");

    var VNWM_1 = RJSE1.split(/(?:\*|-(?!lgz)|\+|\/)/);
    var VNWM_2 = RJSE1.match(/(?:\*|-(?!lgz)|\+|\/)/g);
    var VN3 = VN4 = Number(VNWM_1[0]);
    var VN5 = 0;
    for (suoyin1 in VNWM_2) {//
        //var VN1=Number(VNWM_1[suoyin1]);
        var VN2 = Number(VNWM_1[Number(suoyin1) + 1].replace(/lgz|\)/g, ""));
        switch (VNWM_2[suoyin1]) {//
            case "*":
                VN4 -= VN3;
                VN3 *= VN2;
                VN4 += VN3;
                break;
            case "/":
                VN4 -= VN3;
                VN3 /= VN2;
                VN4 += VN3;
                break;
            case "+":
                VN4 += VN2;
                VN3 = VN2;
                break;
            case "-":
                VN4 -= VN2;
                VN3 = -VN2;
                break;

        }//
    }//
    return VN4;
    //如果为乘号(VN4-=VN3.VN3*=VN2.VN4+=VN3).如果为除号(VN4-=VN3.VN3/=VN2.VN4+=VN3).如果为加号(VN3=VN2.VN4+=VN2).如果为减号(VN3=-VN2.VN4-=VN2).循环执行直至最后一个运算符找到并操作完;
}//UYUY
AFOA_UJ.NIKC_NINI_RJVT = function (NIKC_1, encoding_2) {//NIKC_NINI_RJVT
    var fs1 = require('fs');
    var encoding_1 = 'utf8';
    if (encoding_2 != null) {
        encoding_1 = encoding_2;
    }
    var VNWM_1 = fs1.readdirSync(NIKC_1);
    var IOWR_VNWM_1 = [];

    for (var EQWY_1 = 0; EQWY_1 < VNWM_1.length; EQWY_1++) {
        var regex_RJQT = /\.(?!ZIP)/i;
        if (regex_RJQT.test(VNWM_1[EQWY_1])) {
            var IOWR_2 = { WUZT: VNWM_1[EQWY_1], YXNA: NIKC_1 + VNWM_1[EQWY_1], BQEO: AFOA_UJ.RJVT(NIKC_1 + VNWM_1[EQWY_1], encoding_1) };
            IOWR_VNWM_1.push(IOWR_2);
        }

    }
    return (IOWR_VNWM_1);
}//NIKC_NINI_RJVT
////////////////////

module.exports = AFOA_UJ;
