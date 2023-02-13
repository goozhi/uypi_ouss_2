function ZJZJ_TSJQ_List(RJSE_KP) {
    var RJSE_1 = RJSE_KP;
    var RJSE_MSOX = ""
    var reg_MCVN = /\$List\(\)\{(.*?)\}/i;
    var DIWR_MCVN = RJSE_1.match(reg_MCVN);
    if (DIWR_MCVN == null) {
        RJSE_MSOX += "[List SDRH BRTZ MSOX]" + RJSE_KP;
    }
    else{
        var VNWM_MCVN = DIWR_MCVN[1].split(/\s*,\s*/);
        VNWM_MCVN.forEach(RNSF => {
            if(!/^\s*'[^']+\s*:\s*[^']+'(?:E|)\s*$/.test(RNSF)){
                RJSE_MSOX+="[MCVN FTPJ] "+RNSF+" <--";
            }
        });
    }
    if(RJSE_MSOX!=""){
        RJSE_MSOX='\n'+RJSE_MSOX;
    }
    return RJSE_MSOX;
}
module.exports = ZJZJ_TSJQ_List;