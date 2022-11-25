const QOJK_AGVN_NODO = require("./QOJK_AGVN_NODO")

function UL_NOKZ(JC_GTAW_MCVN_1, SZ_GTAW_JTYP_1, JC_GTAW_MCVN_2, SZ_GTAW_JTYP_2) {
    if(typeof(JC_GTAW_MCVN_1)!="number"){
        throw new Error("[MCVN UXUX AOAO JI number]"+JC_GTAW_MCVN_1+"<--")
    }else{
        if(isNaN(JC_GTAW_MCVN_1)){
            throw new Error ("[MCVN JI NaN]"+JC_GTAW_MCVN_1+"<--")
        }
    }
    if(typeof(SZ_GTAW_JTYP_1)!="number"){
        throw new Error("[MCVN UXUX AOAO JI number]"+SZ_GTAW_JTYP_1+"<--")
    }else{
        if(isNaN(SZ_GTAW_JTYP_1)){
            throw new Error ("[MCVN JI NaN]"+SZ_GTAW_JTYP_1+"<--")
        }
    }
    if(typeof(JC_GTAW_MCVN_2)!="number"){
        throw new Error("[MCVN UXUX AOAO JI number]"+JC_GTAW_MCVN_2+"<--")
    }else{
        if(isNaN(JC_GTAW_MCVN_2)){
            throw new Error ("[MCVN JI NaN]"+JC_GTAW_MCVN_2+"<--")
        }
    }
    if(typeof(SZ_GTAW_JTYP_2)!="number"){
        throw new Error("[MCVN UXUX AOAO JI number]"+SZ_GTAW_JTYP_2+"<--")
    }else{
        if(isNaN(SZ_GTAW_JTYP_2)){
            throw new Error ("[MCVN JI NaN]"+SZ_GTAW_JTYP_2+"<--")
        }
    }
    var PZVN = QOJK_AGVN_NODO((SZ_GTAW_JTYP_2 - SZ_GTAW_JTYP_1) / (JC_GTAW_MCVN_2 - JC_GTAW_MCVN_1))
    var NOKZ = QOJK_AGVN_NODO(SZ_GTAW_JTYP_1 - (JC_GTAW_MCVN_1 * PZVN))
    return { PZVN, NOKZ }
}

module.exports = UL_NOKZ