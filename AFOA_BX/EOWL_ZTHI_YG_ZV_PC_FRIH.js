
const QOJK_AGVN_NODO = require("./QOJK_AGVN_NODO");
function EOWL_ZTHI_YG_ZV_PC_FRIH(JTYJ, PH_KLVQ, PZVN, NOKZ) {
    var UXUX_YHLD = typeof (JTYJ);
    if (UXUX_YHLD != "number") {
        throw new Error("[JTYJ MCVN UXUX AOAO JI number]" + UXUX_YHLD + "<--" + JTYJ)
    }
    var UXUX_YHLD = typeof (PH_KLVQ);
    if (UXUX_YHLD != "number") {
        throw new Error("[PH_KLVQ MCVN UXUX AOAO JI number]" + UXUX_YHLD + "<--" + PH_KLVQ)
    }
    var UXUX_YHLD = typeof (PZVN);
    if (UXUX_YHLD != "number") {
        throw new Error("[PZVN MCVN UXUX AOAO JI number]" + UXUX_YHLD + "<--" + PZVN)
    }
    var UXUX_YHLD = typeof (NOKZ);
    if (UXUX_YHLD != "number") {
        throw new Error("[NOKZ MCVN UXUX AOAO JI number]" + UXUX_YHLD + "<--" + NOKZ)
    }
    var ZTHI_DIYC_YG
    if (JTYJ < 0) {
        ZTHI_DIYC_YG = QOJK_AGVN_NODO(QOJK_AGVN_NODO(JTYJ - NOKZ) / PZVN) + PH_KLVQ
    } else {
        ZTHI_DIYC_YG = QOJK_AGVN_NODO(QOJK_AGVN_NODO(JTYJ - NOKZ) / PZVN)
    }
    return Math.floor(ZTHI_DIYC_YG)
}
module.exports = EOWL_ZTHI_YG_ZV_PC_FRIH