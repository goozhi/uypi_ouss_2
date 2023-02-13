function EOWL_UYTZ_ZV_DBC(PCYC_ZTHI_VNWM, BRTZ) {
    const PZVA_SLGR = require('./AFOA_BX/PZVA_SLGR')
    const EOWL_DIWR = require('./AFOA_BX/EOWL_DIWR')
    if (/^MOTOROLA$/i.test(BRTZ)) {
        var PCYC_ZTHI_VKIH_VNWM = PZVA_SLGR(PCYC_ZTHI_VNWM, "ZTHI_VKIH");
        PCYC_ZTHI_VKIH_VNWM.sort();
        var PCYC_ZTHI_VNWM_2 = []
        for (FO_1 in PCYC_ZTHI_VKIH_VNWM) {
            PCYC_ZTHI_VNWM_2.push(EOWL_DIWR(PCYC_ZTHI_VNWM, "ZTHI_VKIH", PCYC_ZTHI_VKIH_VNWM[FO_1]));
        }
        var KZBZ_VN = 0;
        var VNWM_1 = []
        for (var i1 = 0; i1 < PCYC_ZTHI_VNWM_2.length; i1++) {
            var DIWR_1 = PCYC_ZTHI_VNWM_2[i1];
            if (i1 == PCYC_ZTHI_VNWM_2.length - 1) {
                var KZBZ_VN_ZV_WK_ZTHI = DIWR_1.VT_TR_VN.toString(2).replace(/1/g, "").length;
                VNWM_1.unshift("(d" + (Number(DIWR_1.ZTHI_VKIH) + 1) + "&0x" + DIWR_1.VT_TR_VN.toString(16) + ")>>" + KZBZ_VN_ZV_WK_ZTHI + "<<" + KZBZ_VN);
            } else {
                VNWM_1.unshift("(d" + (Number(DIWR_1.ZTHI_VKIH) + 1) + "&0x" + DIWR_1.VT_TR_VN.toString(16) + ")<<" + KZBZ_VN);
            }
            KZBZ_VN += 8;
        }
        JTYP = "(" + VNWM_1.join(")+(") + ")";
        return JTYP.replace(/\((d\d+)&0xf+\)/g, "$1").replace(/\((d\d+)<<0\)/g, "$1").replace(/\((d\d+&0x\w+)<<0\)/g, "$1").replace(/<<0|>>0/g, "");
    } else {
        throw new Error("ACUN MCVN")
    }
}
module.exports = EOWL_UYTZ_ZV_DBC