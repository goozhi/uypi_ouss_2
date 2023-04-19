
function VKIH_MACA(RJSE_KP, TSZN_VNAW, DPHP = 1, TYUB_FR) {
    if (DPHP == null) {
        throw new Error("CSRF-MCVN NRAP-")
    }
    if (typeof (RJSE_KP) != "string") {
        throw new Error("CSRF-MCVN UXUX MSOX -" + RJSE_KP)
    }
    if (isNaN(DPHP)) {
        throw new Error("CSRF-VNZT MCVN JI NaN-" + DPHP)
    }
    if (isNaN(TSZN_VNAW)) {
        throw new Error("CSRF-VNZT MCVN JI NaN-" + TSZN_VNAW)
    }
    if (DPHP == 0) {
    }
    var VNZT_XBST = ""
    if (Number(TYUB_FR) == 16) {
        VNZT_XBST = "0x"
    }
    var RJSE_1 = RJSE_KP;
    var RJSE_2 = RJSE_1;
    var VNWM_VDUM_1 = [RJSE_1]
    for (var EQWY_1 = 0; EQWY_1 < TSZN_VNAW - 1; EQWY_1++) {
        DIWR_1 = HQMV(RJSE_2, DPHP, TYUB_FR)
        RJSE_2 = DIWR_1.RJSE_10_TYUB;
        VNWM_VDUM_1.push(DIWR_1.RJSE_ZV_TSZN_TYUB);
    }
    function HQMV(RJSE_1, DPHP, TYUB_FR) {
        if (DPHP == null) {
            throw new Error("CSRF-MCVN NRAP");
        }
        var UXUX = typeof (DPHP);
        if (UXUX != "number") {
            throw new Error("CSRF-MCVN UXUX MSOX , AOAO JI number: " + UXUX)
        }
        var regex_1 = /0x\w+|\d+/g;
        var VNWM_1 = RJSE_1.match(regex_1);

        if (VNWM_1 == null) {
            throw new Error("CSRF-SOPJ CGNE ZTHI VKIH : \n" + RJSE_1)
        };
        var RJSE_ZV_TSZN_TYUB = RJSE_1;
        for (key_1 in VNWM_1) {
            var RJSE_3 = VNWM_1[key_1];
            var VN_YHLD = Number(RJSE_3) + DPHP;
            RJSE_ZV_TSZN_TYUB = RJSE_ZV_TSZN_TYUB.replace(new RegExp("(?<!\\d)" + RJSE_3 + "(?!\\d)"), VNZT_XBST + VN_YHLD.toString(TYUB_FR));
            RJSE_1 = RJSE_1.replace(new RegExp("(?<!\\d)" + RJSE_3 + "(?!\\d)"), VN_YHLD);
        }
        var reg_VKIH = /0x\w+|\d+/ig;
        var VNWM_VKIH = RJSE_1.match(reg_VKIH);
        if (VNWM_VKIH != null) {
            var VN_1 = Number(VNWM_VKIH[0]);
            VNWM_VKIH.forEach(RNSF => {
                var DOYG = Math.abs(VN_1 - Number(RNSF))
                if (DOYG + 1 > Math.abs(DPHP)) {
                    throw new Error("CSRF-<VKIH ZVTI DOYG +1 AROC DPHP>\n" + DOYG + "+1>" + Math.abs(DPHP) + "\n^\n" + RJSE_KP + "\n</VKIH ZVTI DOYG +1 AROC DPHP>")
                }
            });
        }
        return { RJSE_10_TYUB: RJSE_1, RJSE_ZV_TSZN_TYUB };
    }
    return VNWM_VDUM_1;

}
module.exports = VKIH_MACA;