

var ZJZJ_TSJQ_ZV_DW_CXAV_TSJQ = require('./ZJZJ_TSJQ_ZV_DW_CXAV_TSJQ');

function ZJZJ_TSJQ_Act_menu(RJSE_KP) {
    var RJSE_1 = RJSE_KP;
    RJSE_1 = RJSE_1.replace(/(?:\n|^)\s*\/\/.*/g, "")
    var RJSE_MSOX = "";
    var reg_NINI = /(?:\n|^)\*".*/g;
    var reg_LD_MCVN = /\$Act\b.*/;
    RJSE_1 = RJSE_1.replace(reg_NINI, "");
    RJSE_1 = RJSE_1.replace(reg_LD_MCVN, "");
    RJSE_1 = RJSE_1.replace(/\*\*\*/, "");
    // RJSE_MSOX+=ZJZJ_TSJQ_ZV_DW_CXAV_TSJQ(RJSE_1,"Act");
    var diwr_RJSE_MSOX = ZJZJ_TSJQ_ZV_DW_CXAV_TSJQ(RJSE_1, "Act_menu");
    // return RJSE_MSOX;
    return new Promise((resolve, reject) => {
        Promise.all([diwr_RJSE_MSOX]).then(jtyj=>{
            RJSE_MSOX+=jtyj[0]
            if (RJSE_MSOX != "") {
                // RJSE_MSOX+="\n<ZJZJ Act TSJQ VODY MSOX>\n"+RJSE_MSOX+"\n</ZJZJ Act TSJQ VODY MSOX>";
                RJSE_MSOX += "\n" + RJSE_MSOX;
            }
            resolve(RJSE_MSOX)
        })

    })
}
module.exports = ZJZJ_TSJQ_Act_menu;