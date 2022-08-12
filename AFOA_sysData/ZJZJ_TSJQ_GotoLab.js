function ZJZJ_TSJQ_GotoLab(RJSE_KP) {
    var RJSE_1 = RJSE_KP;
    var RJSE_MSOX = ""
    var reg_MCVN = /\(\s*([A-Z]+\w*)\s*\)/i;
    var MCVN = RJSE_1.match(reg_MCVN);
    if (MCVN == null) {
        RJSE_MSOX += "[MCVN BRTZ MSOX]" + RJSE_KP;
    }
    return RJSE_MSOX;
}
module.exports = ZJZJ_TSJQ_GotoLab;