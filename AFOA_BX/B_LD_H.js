var B_LD_H = function (rj_vy_tyub) {//B_LD_H
    rj_vy_tyub = rj_vy_tyub.replace(/\s/g, "");
    var RJSE_2 = "";
    var VNWM_1 = new Array();
    var VN_1 = (4 - rj_vy_tyub.length % 4) & 3;
    while (VN_1--) {
        rj_vy_tyub = "0" + rj_vy_tyub;
    }
    for (var EQWY_1 = 0; EQWY_1 < rj_vy_tyub.length; EQWY_1 += 4) {
        var RJSE_4 = rj_vy_tyub.slice(EQWY_1, EQWY_1 + 4);
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
module.exports=B_LD_H;