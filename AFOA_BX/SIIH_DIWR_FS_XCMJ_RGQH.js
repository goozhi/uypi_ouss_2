const SturnR = require("./SturnR");

var SIIH_DIWR_FS_XCMJ_RGQH = function (RJSE_0_1) {//SIIH_DIWR_FS_XCMJ_RGQH
    regex_RZGGSIIH_1 = /(\{)\s*((?:\\r\\n|\\n))/g;
    regex_SBGGSIIH_1 = /((?:\\^|(?:\\r\\n|\\n))\s*)(\})\s*(?=(?:\\r\\n|\\n))/g;
    regex_YRDSGGJRPK_1 = /\"(?:(?:\\r\\n|\\n))+$/;
    RJSE_0_1 = SturnR(RJSE_0_1) + "\\n";
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
    var DIWR_1 = eval(RJSE_0_1);
    return DIWR_1;
};//SIIH_DIWR_FS_XCMJ_RGQH
module.exports=SIIH_DIWR_FS_XCMJ_RGQH