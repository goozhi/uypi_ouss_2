var json_FS_2 = function (DIWR_1) {//AFOA_UJ.json_FS
    var RJSE1 = JSON.stringify(DIWR_1);
    VNWM1 = ZJZJ(DIWR_1);
    if (VNWM1.length != 0) {
        var RJSE2 = VNWM1.join(",");
        RJSE1 = RJSE1.replace(/\}$/, "," + RJSE2 + "}");
    }
    function ZJZJ(DIWR_1) {
        var VNWM2 = new Array();
        for (key in DIWR_1) {
            if (typeof DIWR_1[key] == "function")
                VNWM2.push("\"" + key + "\"" + ":" + DIWR_1[key]);
        }
        return VNWM2;
    }
    return RJSE1;
}//AFOA_UJ.json_FS
module.exports=json_FS_2