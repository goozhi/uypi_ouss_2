const AR_LD_AG = require("./AR_LD_AG");

var H_LD_B = function (RJSE_16) {
    RJSE_16 = RJSE_16.replace(/\s/g, "");
    var RJSE_2 = "";
    RJSE_16 = AR_LD_AG(RJSE_16);
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
module.exports=H_LD_B