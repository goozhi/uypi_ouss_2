function UL_PZVN_ZV_PC_FRIH(PH_HPMI, VN_JTYP, VN_ZTHI, NOKZ) {
    if (NOKZ == null) {
        NOKZ = 0
    }
    if (VN_ZTHI == null) {
        throw new Error('MCVN NRAP')
    }
    var MRPH_HPMI = PH_HPMI >> 1;
    var PZVN = (VN_JTYP - NOKZ) / (0 - ((VN_ZTHI % PH_HPMI - MRPH_HPMI) ^ MRPH_HPMI - 1) - 1)
    return PZVN;
}

module.exports = UL_PZVN_ZV_PC_FRIH;