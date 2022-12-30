const reg_BX = require('./reg_BX');

function ZJZJ_TSJQ_ZV_DW_CXAV_TSJQ(RJSE_KP, CXAV_TSJQ_WU) {
    if (CXAV_TSJQ_WU == null) {
        throw new Error("MCVN NRAP")
    }
    var diwr_VNWM_MSOX = []
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
    diwr_VNWM_MSOX = VNWM_VYVY_CGNE_BQEO.map(async RNSF => {
        return new Promise((resolve,reject)=>{
            var diwr_RJSE_MSOX=ZJZJ_TSJQ(RNSF.WUZT, RNSF.CGNE_BQEO_VNWM);
            Promise.all([diwr_RJSE_MSOX]).then(jtyj=>{
                resolve(jtyj)
            })
        })
    })
    if (RJSE_1 != "") {
        if (ZJZJ_ACUN(RJSE_1) != "") {
            var CXAV_TSJQ_WU_YHRJ = CXAV_TSJQ_WU;
            if (CXAV_TSJQ_WU == "LJEY") {
                CXAV_TSJQ_WU_YHRJ = "菜单"
            }
            var VNWM_YHLD = reg_TSJQ_BX.BX_2.concat(reg_TSJQ_BX.BX)
            var RJSE_YHLD = ""
            for (var i1 = 0; i1 < VNWM_YHLD.length; i1++) {
                var IOWR_1 = VNWM_YHLD[i1];
                if (new RegExp("\\$" + IOWR_1.WUZT, "i").test(RJSE_1)) {
                    RJSE_YHLD = "\n<ZJZJ CXAV TSJQ ZD VODY TSJQ SDRH BRTZ MSOX>//" + CXAV_TSJQ_WU_YHRJ + "指令内部错误\n" + RJSE_1 + "\n</ZJZJ CXAV TSJQ ZD VODY TSJQ SDRH BRTZ MSOX>";
                    break;
                }
            }
            if (RJSE_YHLD != "") {
                RJSE_MSOX += RJSE_YHLD;
            } else {
                RJSE_MSOX += "\n<ZJZJ CXAV TSJQ ZD VODY ACUN TSJQ>//" + CXAV_TSJQ_WU_YHRJ + "指令内部错误\n" + RJSE_1 + "\n</ZJZJ CXAV TSJQ ZD VODY ACUN TSJQ>";
            }
        }
    } else {

    }
    if (RJSE_MSOX != "") {
        RJSE_MSOX = "\n" + RJSE_MSOX
    }
    return new Promise((resolve, reject) => {
        Promise.all(diwr_VNWM_MSOX).then(jtyj => {
            resolve(jtyj.join("") + RJSE_MSOX)
        })
    })
}
module.exports = ZJZJ_TSJQ_ZV_DW_CXAV_TSJQ;