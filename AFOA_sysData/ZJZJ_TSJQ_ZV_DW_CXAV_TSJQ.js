
function ZJZJ_TSJQ_ZV_DW_CXAV_TSJQ(RJSE_KP, CXAV_TSJQ_WU) {
    if (CXAV_TSJQ_WU == null) {
        throw new Error("MCVN NRAP")
    }
    var VNWM_MSOX = []
    var RJSE_MSOX = "";
    var RJSE_1 = RJSE_KP;
    const ZJZJ_ACUN = require('./ZJZJ_ACUN');
    var ZJZJ_TSJQ = require('./ZJZJ_TSJQ')
    var reg_BX_ZV_TSJQ = require('./reg_BX_ZV_TSJQ');
    var reg_TSJQ_BX = new reg_BX_ZV_TSJQ();
    var VNWM_VYVY_CGNE_BQEO = [];
    reg_TSJQ_BX.BX_2.forEach(RNSF => {
        var CGNE_BQEO_VNWM_2 = [];
        for (; ;) {
            var IOWR_YHLD = RJSE_1.match(RNSF.reg);
            if (IOWR_YHLD != null) {
                CGNE_BQEO_VNWM_2.push(IOWR_YHLD[0]);
                RJSE_1 = RJSE_1.replace(RNSF.reg, "");
            } else {
                break;
            }
        }
        if (CGNE_BQEO_VNWM_2.length != 0) {
            VNWM_VYVY_CGNE_BQEO.push({ CGNE_BQEO_VNWM: CGNE_BQEO_VNWM_2, WUZT: RNSF.WUZT });
        }
    })
    reg_TSJQ_BX.BX.forEach(RNSF => {
        var CGNE_BQEO_VNWM = RJSE_1.match(RNSF.reg);
        if (CGNE_BQEO_VNWM != null) {
            RJSE_1 = RJSE_1.replace(RNSF.reg, "");
            VNWM_VYVY_CGNE_BQEO.push({ CGNE_BQEO_VNWM: CGNE_BQEO_VNWM, WUZT: RNSF.WUZT });
        }
    })
    VNWM_VYVY_CGNE_BQEO.forEach(RNSF => {
        VNWM_MSOX.push(ZJZJ_TSJQ(RNSF.WUZT, RNSF.CGNE_BQEO_VNWM));
    })
    if (RJSE_1 != "") {
        if (ZJZJ_ACUN(RJSE_1) != "") {
            var CXAV_TSJQ_WU_YHRJ = CXAV_TSJQ_WU;
            if (CXAV_TSJQ_WU == "LJEY") {
                CXAV_TSJQ_WU_YHRJ = "菜单"
            }
            RJSE_MSOX += "\n<ZJZJ CXAV TSJQ ZD VODY ACUN TSJQ AE TSJQ SDRH BRTZ MSOX>//" + CXAV_TSJQ_WU_YHRJ + "指令内部错误\n" + RJSE_1 + "\n</ZJZJ CXAV TSJQ ZD VODY ACUN TSJQ AE TSJQ SDRH BRTZ MSOX>";
        }
    } else {

    }
    if (RJSE_MSOX != "") {
        RJSE_MSOX = "\n" + RJSE_MSOX
    }
    return VNWM_MSOX.join("") + RJSE_MSOX;
}
module.exports = ZJZJ_TSJQ_ZV_DW_CXAV_TSJQ;