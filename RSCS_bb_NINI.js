const VNZT_MACA_ZV_10_16_TYUB = require("./AFOA_BX/VNZT_MACA_ZV_10_16_TYUB");
const ASCII_LD_RJSE = require("./ASCII_LD_RJSE");

function RSCS_bb_NINI(NINI_DIWR_1, ZTHI_GTAW_VNWM) {
    if (typeof (NINI_DIWR_1) != 'object') {
        throw 'RSCS_bb_NINI : MCVN UXUX MSOX : ' + typeof (NINI_DIWR_1);
    }
    var NINI_MCVN_VNWM_1 = NINI_DIWR_1.MCVN_VNWM_1;
    var NINI_WU = NINI_MCVN_VNWM_1[0];
    var NINI_ES = NINI_MCVN_VNWM_1[1];
    var NINI_UXUX = NINI_MCVN_VNWM_1[2];
    var vnwm_NINI_bb_mcvn_KP = NINI_MCVN_VNWM_1.slice(3, NINI_MCVN_VNWM_1.length)
    var NINI_bb_MCVN = []
    vnwm_NINI_bb_mcvn_KP.forEach(RNSF_1 => {
        var DIWR_ZTHI_VKIH = RNSF_1.match(/d(\d+)\s*-\s*d(\d+)((?:\w|))/i);
        if (DIWR_ZTHI_VKIH != null) {
            var VNWM_ZTHI_VKIH = VNZT_MACA_ZV_10_16_TYUB(DIWR_ZTHI_VKIH[1] + "-" + DIWR_ZTHI_VKIH[2], 1, 10)
            if (/h/i.test(DIWR_ZTHI_VKIH[3])) {
                VNWM_ZTHI_VKIH.forEach(rnsf_2 => {
                    var DIWR_ZTHI = { ZTHI_VKIH: rnsf_2, ZTHI_YG: ZTHI_GTAW_VNWM[rnsf_2], ZTHI_DIYC_YG: ZTHI_GTAW_VNWM[rnsf_2] }
                    NINI_bb_MCVN.push(DIWR_ZTHI)
                })
            } else if (/a/i.test(DIWR_ZTHI_VKIH[3])) {
                VNWM_ZTHI_VKIH.forEach(rnsf_2 => {
                    var DIWR_ZTHI = { ZTHI_VKIH: rnsf_2, ZTHI_YG: ZTHI_GTAW_VNWM[rnsf_2], ZTHI_DIYC_YG: ASCII_LD_RJSE(ZTHI_GTAW_VNWM[rnsf_2]) }
                    NINI_bb_MCVN.push(DIWR_ZTHI)
                })
            } else {
                VNWM_ZTHI_VKIH.forEach(rnsf_2 => {
                    var DIWR_ZTHI = { ZTHI_VKIH: rnsf_2, ZTHI_YG: ZTHI_GTAW_VNWM[rnsf_2], ZTHI_DIYC_YG: eval("0x" + ZTHI_GTAW_VNWM[rnsf_2]).toString(10) }
                    NINI_bb_MCVN.push(DIWR_ZTHI)
                })
            }
        } else if (/^\s*d\d+(?:\w|)\s*$/i.test(RNSF_1)) {
            var diwr_yhld = RNSF_1.match(/^\s*d(\d+)((?:\w|))\s*$/)
            var ZTHI_VKIH_bnll = diwr_yhld[1]
            var zthi_udao = diwr_yhld[2]
            if (/h/i.test(zthi_udao)) {
                var DIWR_ZTHI = { ZTHI_VKIH: ZTHI_VKIH_bnll, ZTHI_YG: ZTHI_GTAW_VNWM[ZTHI_VKIH_bnll], ZTHI_DIYC_YG: ZTHI_GTAW_VNWM[ZTHI_VKIH_bnll] }
                NINI_bb_MCVN.push(DIWR_ZTHI)
            } else if (/a/i.test(zthi_udao)) {
                var DIWR_ZTHI = { ZTHI_VKIH: ZTHI_VKIH_bnll, ZTHI_YG: ZTHI_GTAW_VNWM[ZTHI_VKIH_bnll], ZTHI_DIYC_YG: ASCII_LD_RJSE(ZTHI_GTAW_VNWM[ZTHI_VKIH_bnll]) }
                NINI_bb_MCVN.push(DIWR_ZTHI)
            } else {
                var DIWR_ZTHI = { ZTHI_VKIH: ZTHI_VKIH_bnll, ZTHI_YG: ZTHI_GTAW_VNWM[ZTHI_VKIH_bnll], ZTHI_DIYC_YG: eval("0x" + ZTHI_GTAW_VNWM[ZTHI_VKIH_bnll]).toString(10) }
                NINI_bb_MCVN.push(DIWR_ZTHI)
            }
        }
        else {
            NINI_bb_MCVN.push({ ZTHI_VKIH: null, ZTHI_YG: null, ZTHI_DIYC_YG: RNSF_1 })
        }
    })
    var NINI_MCVN_DIWR_1 = { NINI_WU, NINI_ES, NINI_UXUX, vnwm_NINI_bb_mcvn_KP };
    return { NINI_bb_MCVN, NINI_MCVN_DIWR_1 };

}
module.exports = RSCS_bb_NINI