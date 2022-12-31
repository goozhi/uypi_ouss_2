var json_FS_2 = function (IOWR_1) {//AFOA_UJ.json_FS
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
module.exports=json_FS_2