var HD_LZJK_VNWM = function (VNWM_2, LDGGXBST, DSGGXBST) {//this.quChongfuHang
    if (VNWM_2 == null) {
        throw ("HD_LZJK:", "参数无内容");
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
module.exports=HD_LZJK_VNWM