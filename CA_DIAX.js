function CA_DIAX(RJSE_KP, reg_1, PHHP_AWUB) {
    var UXUX_YHLD = typeof (RJSE_KP)
    if (UXUX_YHLD != "string") {
        throw new Error("MCVN UXUX MSOX , AOAO JI string:" + UXUX_YHLD)
    }
    var RJSE_1 = RJSE_KP;
    var VVBR_AWUB = "\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020"
    if (PHHP_AWUB != null) {
        VVBR_AWUB == VVBR_AWUB.slice(0, PHHP_AWUB)
    }
    if (reg_1 == null) {
        throw new Error('MCVN NRAP')
    }
    var VNWM_1 = RJSE_KP.match(reg_1);
    if (VNWM_1 == null) {
        // throw new Error("EOSR JUZC TZ MCVN SOPJ CGNE RJSE MCVN:"+reg_1)
        return RJSE_KP
    }
    var VNWM_CSRF = VNWM_1.map((RNSF, EQWY_1) => {
        var VN_1 = RNSF.replace(/[^\u4E00-\u9FA5，。—、；：（）]/g, "").length;
        return { RJSE_KP: RNSF, HPMI: RNSF.length + VN_1, EQWY_ZV_VNWM_1: EQWY_1 }
    })
    VNWM_CSRF.sort((a, b) => b.HPMI - a.HPMI);
    var OKHP = VNWM_CSRF[0].HPMI
    VNWM_CSRF.sort((a, b) => a.EQWY_ZV_VNWM_1 - b.EQWY_ZV_VNWM_1);
    VNWM_CSRF.forEach(RNSF => {
        var reg_3 = /([\.\+\(\)\{\}\?\]\[])/g;
        var sheng_1 = "\\$1"
        try {
            var reg_2 = new RegExp(RNSF.RJSE_KP.replace(reg_3, sheng_1) + "(?!\u917e)")
        } catch (err) {
            throw new Error("[EOSR JUZC TZ FTPJ]"+reg_1+" : "+err)
        }
        RJSE_1 = RJSE_1.replace(reg_2, RNSF.RJSE_KP + "\u917e" + VVBR_AWUB.slice(0, OKHP - RNSF.HPMI))
    })
    return RJSE_1.replace(/\u917e/g, "");
}
module.exports = CA_DIAX;