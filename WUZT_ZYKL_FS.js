const DOVW_DPAV_UYPJ = require("./AFOA_BX/DOVW_DPAV_UYPJ");

function WUZT_ZYKL_FS(RJSE_1) {
    var RJSE_KP = RJSE_1;
    var VNWM_EYTR = [
        { DYIH: "SHUJULIU", EYTR: "数据流" },
        { DYIH: "banbenxinxi", EYTR: "版本信息" },
        { DYIH: "qingguzhangma", EYTR: "清故障码" },
        { DYIH: "dongzuoceshi", EYTR: "动作测试" },
        { DYIH: "teshugongneng", EYTR: "特殊功能" },
        { DYIH: "duguzhangma", EYTR: "读故障码" }]
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
            var IOWR_YHLD = DOVW_DPAV_UYPJ(VNWM_EYTR[i1].DYIH.toLowerCase(), RJSE_1.toLowerCase())
            if (IOWR_YHLD.STST_MI > 0.74) {
                var IOWR_1 = { IOWR_EYTR: VNWM_EYTR[i1], NIXB_RJSE: RJSE_1, STST_MI:IOWR_YHLD.STST_MI,DOVW_DPAV: IOWR_YHLD.DOVW_DPAV }
                VNWM_STST_RJSE.push(IOWR_1)
            }

        }
        if (VNWM_STST_RJSE.length > 0) {
            VNWM_STST_RJSE.sort((a, b) => b.DOVW_DPAV - a.DOVW_DPAV)
            RJSE_1 = VNWM_STST_RJSE[0].IOWR_EYTR.EYTR;
        }
    }

    return RJSE_1
}
module.exports = WUZT_ZYKL_FS