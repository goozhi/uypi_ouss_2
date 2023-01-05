const VNZT_MACA_ZV_10_16_TYUB = require("./AFOA_BX/VNZT_MACA_ZV_10_16_TYUB");

function RSCS_bb_NINI(NINI_IOWR_1, ZTHI_GTAW_VNWM) {
    if (typeof (NINI_IOWR_1) != 'object') {
        throw 'RSCS_bb_NINI : MCVN UXUX MSOX : ' + typeof (NINI_IOWR_1);
    }
    var NINI_MCVN_VNWM_1 = NINI_IOWR_1.MCVN_VNWM_1;
    var NINI_WU = NINI_MCVN_VNWM_1[0];
    var NINI_ES = NINI_MCVN_VNWM_1[1];
    var NINI_UXUX = NINI_MCVN_VNWM_1[2];
    var vnwm_NINI_bb_mcvn_KP = NINI_MCVN_VNWM_1.slice(3, NINI_MCVN_VNWM_1.length)
    var NINI_bb_MCVN = []
    vnwm_NINI_bb_mcvn_KP.forEach(RNSF_1 => {
        var IOWR_ZTHI_VKIH = RNSF_1.match(/d(\d+)\s*-\s*d(\d+)/i);
        if (IOWR_ZTHI_VKIH != null) {
            var VNWM_ZTHI_VKIH = VNZT_MACA_ZV_10_16_TYUB(IOWR_ZTHI_VKIH[1] + "-" + IOWR_ZTHI_VKIH[2], 1, 10)
            VNWM_ZTHI_VKIH.forEach(rnsf_2 => {
                var IOWR_ZTHI = { ZTHI_VKIH: rnsf_2, ZTHI_YG: ZTHI_GTAW_VNWM[rnsf_2], ZTHI_DIYC_YG: eval("0x"+ZTHI_GTAW_VNWM[rnsf_2]).toString(10) }
                NINI_bb_MCVN.push(IOWR_ZTHI)
            })
        }else if(/^\s*d\d+\s*$/i.test(RNSF_1)){
            var vn_1=eval(RNSF_1.replace(/d/i,""))
            NINI_bb_MCVN.push({ ZTHI_VKIH: vn_1, ZTHI_YG: ZTHI_GTAW_VNWM[vn_1], ZTHI_DIYC_YG: eval("0x"+ZTHI_GTAW_VNWM[vn_1]).toString(10) })
        }
        else {
            NINI_bb_MCVN.push({ ZTHI_VKIH: null, ZTHI_YG: null, ZTHI_DIYC_YG: RNSF_1 })
        }
    })
    var NINI_MCVN_IOWR_1 = { NINI_WU, NINI_ES, NINI_UXUX, vnwm_NINI_bb_mcvn_KP };
    return { NINI_bb_MCVN, NINI_MCVN_IOWR_1 };

}
module.exports = RSCS_bb_NINI