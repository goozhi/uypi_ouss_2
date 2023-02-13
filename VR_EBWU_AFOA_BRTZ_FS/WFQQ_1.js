function WFQQ_1(DIWR_1, DIWR_VNWM_VR_LJEY, VKIH_1, diwr_rj_kp) {
    var VNWM_VX_LJEY = []
    var DIWR_2 = { SL_LJEY: DIWR_1, VKIH_1, VNWM_VX_LJEY };
    glrh_reg=new RegExp("LJEY_VKIH_" + DIWR_1.VN_VR_AFOA_TRIG_VKIH + "\\b")
    diwr_rj_kp.rj_kp = diwr_rj_kp.rj_kp.replace(new RegExp("LJEY_VKIH_" + DIWR_1.VN_VR_AFOA_TRIG_VKIH + "\\b"), VKIH_1)
    
    if (DIWR_1.VNWM_VR_CXZV_AFOA_TRIG_VKIH == null || !/LJEY/.test(DIWR_1.VNWM_VR_CXZV_AFOA_TRIG_VKIH.join(""))) {
        return DIWR_2
    } else if (/LJEY/.test(DIWR_1.VNWM_VR_CXZV_AFOA_TRIG_VKIH.join(""))) {
        VKIH_1++
        DIWR_1.VNWM_VR_CXZV_AFOA_TRIG_VKIH.forEach(RNSF => {
            if (/LJEY/.test(RNSF)) {
                var DIWR_YHLD = RNSF.match(/\d+/)
                if (DIWR_YHLD == null) {
                    throw new Error("SOPJ CGNE EQWY:" + RNSF)
                }
                var VNWM_YHLD = DIWR_VNWM_VR_LJEY.filter(RNSF => {
                    if (RNSF.VN_VR_AFOA_TRIG_VKIH == Number(DIWR_YHLD[0])) {
                        return true;
                    }
                })
                if (VNWM_YHLD.length == 0) {
                    throw new Error("SOPJ CGNE EQWY :" + DIWR_YHLD[0])
                }
                var DIWR_3 = VNWM_YHLD[0]
                VNWM_VX_LJEY.push(WFQQ_1(DIWR_3, DIWR_VNWM_VR_LJEY, VKIH_1, diwr_rj_kp))
            }
        })
        return DIWR_2
    } else {
        throw new Error("WFQQ_1:RAVC MSOX")
    }
}
module.exports=WFQQ_1;