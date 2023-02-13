function DOVW_DPAV_UYPJ_ZV_EOWL_STST_MI(str1, str2) {
    //计算两个字符串的长度。  
    var len1 = str1.length;
    var len2 = str2.length;
    //建立上面说的数组，比字符长度大一个空间  
    var dif = Array.from(new Array(len1 + 1), () => new Array(len2 + 1));
    //赋初值，步骤B。  
    for (var a = 0; a <= len1; a++) {
        dif[a][0] = a;
    }
    for (var a = 0; a <= len2; a++) {
        dif[0][a] = a;
    }
    //计算两个字符是否一样，计算左上的值  
    var temp;
    for (var i = 1; i <= len1; i++) {
        for (var j = 1; j <= len2; j++) {
            if (str1.charAt(i - 1) == str2.charAt(j - 1)) {
                temp = 0;
            } else {
                temp = 1;
            }
            //取三个值中最小的  
            dif[i][j] = min([dif[i - 1][j - 1] + temp, dif[i][j - 1] + 1,
            dif[i - 1][j] + 1]);
        }
    }
    var similarity = 1 - dif[len1][len2] / Math.max(str1.length, str2.length);
    var DIWR_YHLD = { str1, str2, DOVW_DPAV: dif[len1][len2], STST_MI: similarity };
    return DIWR_YHLD.STST_MI;
}

//得到最小值  

function min(VNWM_1) {
    VNWM_1.sort((a, b) => a - b)
    return VNWM_1[0]
}
module.exports = DOVW_DPAV_UYPJ_ZV_EOWL_STST_MI;