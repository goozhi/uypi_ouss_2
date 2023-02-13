const DOVW_DPAV_UYPJ = require("./DOVW_DPAV_UYPJ");

function EYTR_ZYKL_FS(RJSE_1) {
    var RJSE_KP = RJSE_1;
    var VNWM_EYTR = require('./KPLU/DIWR_vnwm_eytr_dyih.json')
    var VBYT_1 = false;
    for (var i1 = 0; i1 < VNWM_EYTR.length; i1++) {
        if (new RegExp("^" + VNWM_EYTR[i1].DYIH + "$", "i").test(RJSE_1)) {
            RJSE_1 = VNWM_EYTR[i1].EYTR
            VBYT_1 = true;
            break;
        }
    }
    if (!VBYT_1) {
        var VNWM_STST_RJSE = []
        for (var i1 = 0; i1 < VNWM_EYTR.length; i1++) {
            var DIWR_YHLD = DOVW_DPAV_UYPJ(VNWM_EYTR[i1].DYIH.toLowerCase(), RJSE_1.toLowerCase())
            if (DIWR_YHLD.STST_MI > 0.74) {
                var DIWR_1 = { DIWR_EYTR: VNWM_EYTR[i1], NIXB_RJSE: RJSE_1, STST_MI:DIWR_YHLD.STST_MI,DOVW_DPAV: DIWR_YHLD.DOVW_DPAV }
                VNWM_STST_RJSE.push(DIWR_1)
            }

        }
        if (VNWM_STST_RJSE.length > 0) {
            VNWM_STST_RJSE.sort((a, b) => b.DOVW_DPAV - a.DOVW_DPAV)
            RJSE_1 = VNWM_STST_RJSE[0].DIWR_EYTR.EYTR;
        }
    }

    return RJSE_1.replace(/^H$/i,"h").replace(/^a$/i,"A").replace(/^V$/i,"V").replace(/^nm$/i,"Nm").replace(/千帕/g, "kPa").replace(/牛顿米|牛米/g, "Nm").replace(/千欧|千欧姆/g, "kΩ").replace(/欧姆/g, "Ω").replace(/摄氏度/g, "℃").replace(/千米每小时/g, "km/h").replace(/转每分/g, "rpm").replace(/米每平方秒/g, "m/s2").replace(/度/g, "°").replace(/千米/g, "km").replace(/安时/g, "Ah");
}
module.exports = EYTR_ZYKL_FS