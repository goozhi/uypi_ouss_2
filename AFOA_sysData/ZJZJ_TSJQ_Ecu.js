const ZJZJ_ACUN = require('./ZJZJ_ACUN');

function ZJZJ_TSJQ_Ecu(ZJZJ_BQEO) {
    ZJZJ_BQEO=ZJZJ_BQEO.replace(/\r/g,"").replace(/\/\/.*(?=\/\/line \d+)/g,"");
    var ZJZJ_cf_NINI=require('./ZJZJ_cf_NINI')
    var ZJZJ_3f_NINI=require('./ZJZJ_3f_NINI')
    var RJSE_MSOX = ""
    var RJSE_1 = ZJZJ_BQEO;
    var reg_cf_NINI = /.*,\s*cf\s*,.*/ig;
    var RJSE_cf_NINI = RJSE_1.match(reg_cf_NINI);
    if (RJSE_cf_NINI == null) {

    } else {
        RJSE_MSOX += ZJZJ_cf_NINI(RJSE_cf_NINI);
        RJSE_1 = RJSE_1.replace(reg_cf_NINI, "");
    }
    var reg_Ecu_MCVN = /\$Ecu\((.*)\)(?:;|)/i;
    var reg_JTCO_EB = /\*\*\*/;
    var Ecu_MCVN = RJSE_1.match(reg_Ecu_MCVN);
    if (Ecu_MCVN == null) {
        RJSE_MSOX += "\n[Ecu LGPH MSOX]" + ZJZJ_BQEO.replace(/\n[\S\s]*/, '');
        RJSE_1 = RJSE_1.replace(/.*Ecu.*/i, "");
    } else {
        RJSE_1 = RJSE_1.replace(reg_Ecu_MCVN, "");
    };
    var JTCO_EB = RJSE_1.match(reg_JTCO_EB);
    if (JTCO_EB == null) {
        RJSE_MSOX += "\n[NRAP JTCO EB]"
    } else {
        RJSE_1 = RJSE_1.replace(reg_JTCO_EB, "")
    }
    var ZJZJ_LIQH_ZV_reg_VNWM = require('./ZJZJ_LIQH_ZV_reg_VNWM')
    var reg_BX = require('./reg_BX');
    var reg_BX_VXUX = new reg_BX();
    var VNWM_YHLD = reg_BX_VXUX.hang_VNWM_Ecu;
    var reg_NINI = /\*".{0,9999}/g;
    var NINI_VNWM = RJSE_1.match(reg_NINI);
    RJSE_1 = RJSE_1.replace(reg_NINI, '');
    if (NINI_VNWM != null) {
        RJSE_MSOX += ZJZJ_LIQH_ZV_reg_VNWM(NINI_VNWM.join("\n"), VNWM_YHLD);
    }
    if (RJSE_1 != "") {
        RJSE_1 = ZJZJ_ACUN(RJSE_1);
        if (RJSE_1 != "") {
            RJSE_MSOX += "\n<ZJZJ Ecu TSJQ ZD VODY DK ACUN BQEO>" + RJSE_1 + "\n</ZJZJ Ecu TSJQ ZD VODY DK ACUN BQEO>";
        }
    }
    return RJSE_MSOX;
}
module.exports = ZJZJ_TSJQ_Ecu;