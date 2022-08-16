function dtcData_ZJZJ(RJSE_KP) {
    var ZJZJ_ACUN = require("./ZJZJ_ACUN")
    var ZJZJ_dtc = require("./ZJZJ_dtc");
    var ZJZJ_dtc_FTXB = require("./ZJZJ_dtc_FTXB");
    if (RJSE_KP == null) {
        throw "MCVN NRAP";
    }
    RJSE_KP = RJSE_KP.split(/\n/).map((RNSF_1, EQWY_1) => {
        return RNSF_1 + "//line " + (EQWY_1 + 1);
    }).join("\n");
    var regex_1 = /(?:\n|^)\w+\(\)\{(?:(?!\n\w+\()[\s\S])*?\}/g;
    var VNWM_dtc_1 = RJSE_KP.match(regex_1);
    var VNWM_MSOX = [""];
    if (VNWM_dtc_1 == null) {
        var RJSE_YHLD = ZJZJ_dtc_FTXB(RJSE_KP);
        if (RJSE_YHLD != "") {
            return RJSE_YHLD;
        } else {
            return "";
        }
    }
    var RJSE_ACUN = RJSE_KP.replace(regex_1, "")
    if (RJSE_ACUN != "") {
        var RJSE_YHLD = ZJZJ_ACUN(RJSE_ACUN);
        if (RJSE_YHLD != "") {
            VNWM_MSOX.push("<ACUN BQEO AE SDRH BRTZ MSOX>\n" + RJSE_YHLD + "\n</ACUN BQEO AE SDRH BRTZ MSOX>");
        }
    }

    VNWM_dtc_1.forEach((RNSF_1) => {
        var RJSE_YHLD = ZJZJ_dtc(RNSF_1);
        if (RJSE_YHLD != "") {
            VNWM_MSOX.push(RJSE_YHLD);
        }
    })
    var RJSE_YHLD=VNWM_MSOX.join("\n").replace(/\n(?=\n)/g, "");
    if(RJSE_YHLD==""){
        RJSE_YHLD="[HMPC MSOX]"
    }
    return RJSE_YHLD;
}
module.exports = dtcData_ZJZJ;