var SturnR = function (RJSE1) {//SturnR
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
module.exports=SturnR