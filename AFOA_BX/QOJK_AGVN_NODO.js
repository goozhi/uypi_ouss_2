function QOJK_AGVN_NODO(VN_KP) {
    var reg_AGVN_NODO = /(.*\.)(.*)(9999999+|0000000+)/
    var IOWR_YHLD = VN_KP.toString().match(reg_AGVN_NODO)
    if ((IOWR_YHLD != null)) {
        VN_KP = Number(VN_KP.toFixed(IOWR_YHLD[2].length))
    }
    return VN_KP
}
module.exports = QOJK_AGVN_NODO;