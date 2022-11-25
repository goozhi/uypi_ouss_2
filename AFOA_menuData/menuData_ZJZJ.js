const ZJZJ_ACUN = require('./ZJZJ_ACUN')
function menuData_ZJZJ(RJSE_KP) {
    RJSE_KP=RJSE_KP.replace(/\r/g,"")
    var ZJZJ_menu = require("./ZJZJ_menu");
    var ZJZJ_menu_FTXB = require("./ZJZJ_menu_FTXB");
    if (RJSE_KP == null) {
        throw "MCVN NRAP";
    }
    RJSE_KP = RJSE_KP.split(/\n/).map((RNSF_1, EQWY_1) => {
        return RNSF_1 + "//line " + (EQWY_1 + 1);
    }).join("\n");
    var reg_LJEY = /(?:\n|^)_[A-Z]\w(?:(?!(?:\n|^)_)[\S\s])*?\*\*.*/ig;
    var regex_2 = /@MENU/i;
    var VNWM_menu_1 = RJSE_KP.match(reg_LJEY);
    var LD_XBST = RJSE_KP.match(regex_2);
    var VNWM_MSOX = [""];
    if (VNWM_menu_1 == null) {
        var RJSE_YHLD = ZJZJ_menu_FTXB(RJSE_KP);
        if (RJSE_YHLD != "") {
            return RJSE_YHLD;
        } else {
            return "";
        }
    }
    if (LD_XBST == null) {
        VNWM_MSOX.push("[IFYJ KRJI SDSD DK menuData RJQT, SR NRAP LG XBST @]");
    }
    var RJSE_ACUN = RJSE_KP.replace(reg_LJEY, "").replace(regex_2, "");
    if (RJSE_ACUN != "") {
        RJSE_ACUN = ZJZJ_ACUN(RJSE_ACUN)
        if (RJSE_ACUN != "")
            VNWM_MSOX.push("<ACUN BQEO>\n" + RJSE_ACUN + "\n</ACUN BQEO>");
    }

    VNWM_menu_1.forEach((RNSF_1) => {
        var RJSE_YHLD = ZJZJ_menu(RNSF_1,RJSE_KP);
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
module.exports = menuData_ZJZJ;