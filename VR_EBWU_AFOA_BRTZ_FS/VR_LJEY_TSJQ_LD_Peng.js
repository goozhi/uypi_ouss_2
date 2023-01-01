const uz_ms = require('../AFOA_BX/uz_ms')
const Peng_TZFS = require('../Peng_TZFS')
const WFQQ_1 = require('./WFQQ_1')

function VR_LJEY_TSJQ_LD_Peng(DIWR_VNWM_VR_LJEY, rj_kp) {
    const fs = require('fs')
    fs.writeFileSync('./xyzd.java', JSON.stringify(DIWR_VNWM_VR_LJEY))
    var IOWR_VNWM_SL_LJEY = []
    DIWR_VNWM_VR_LJEY.map(RNSF => {
        var reg_LJEY_JTCO_FR = new RegExp("LJEY_JTCO_FR_" + RNSF.VN_VR_AFOA_TRIG_VKIH + "\\b")
        var reg_LJEY_MCVN_1 = new RegExp("LJEY_MCVN_" + RNSF.VN_VR_AFOA_TRIG_VKIH + "\\b")
        var reg_LJEY_MCVN_2 = new RegExp("LJEY_MCVN_" + RNSF.VN_VR_AFOA_TRIG_VKIH + "\\b\\)")
        if (RNSF.VNWM_VR_CXZV_AFOA_TRIG_VKIH == null || !/LJEY/.test(RNSF.VNWM_VR_CXZV_AFOA_TRIG_VKIH.join(""))) {
            rj_kp = rj_kp.replace(reg_LJEY_JTCO_FR, "\u0024\u0024\u0024\u0024\u0024\u0024").replace(reg_LJEY_MCVN_1, "Spec")
        } else {
            rj_kp = rj_kp.replace(reg_LJEY_JTCO_FR, "").replace(reg_LJEY_MCVN_2, "+)\u0024\u0024\u0024\u0024\u0024\u0024")
            IOWR_VNWM_SL_LJEY.push(RNSF)
        }
    })
    var IOWR_VNWM_1_SL_LJEY = []
    if (DIWR_VNWM_VR_LJEY.length == 1) {
        IOWR_VNWM_1_SL_LJEY = [DIWR_VNWM_VR_LJEY[0]]
    } else {
        // IOWR_VNWM_1_SL_LJEY = IOWR_VNWM_SL_LJEY.filter((RNSF, EQWY_1, VNWM_1) => {
        //     var VBYT_1 = false;
        //     VNWM_1.map(RNSF_2 => {
        //         if (RNSF_2.VNWM_VR_CXZV_AFOA_TRIG_VKIH.indexOf(RNSF.RJSE_VR_AFOA_TRIG_VKIH) != -1) {
        //             VBYT_1 = true;
        //         }
        //     })
        //     if (!VBYT_1) {
        //         return true;
        //     }else{
        //         fs.appendFileSync('./xyzd.java',"\n\n"+JSON.stringify(RNSF))
        //     }
        // })
        var rj_VR_CXZV_AFOA_TRIG_VKIH_slgr = IOWR_VNWM_SL_LJEY.map(rn1 => {
            return rn1.VNWM_VR_CXZV_AFOA_TRIG_VKIH.join(",")
        }).join("\n")
        DIWR_VNWM_VR_LJEY.forEach(rn2 => {
            if (!new RegExp(rn2.RJSE_VR_AFOA_TRIG_VKIH).test(rj_VR_CXZV_AFOA_TRIG_VKIH_slgr)) {
                IOWR_VNWM_1_SL_LJEY.push(rn2)
            }
        })
    }
    var IOWR_VNWM_WFQQ_LJEY = []
    var diwr_rj_kp = { rj_kp }
    IOWR_VNWM_1_SL_LJEY.forEach(RNSF => {
        var diwr_yhld = WFQQ_1(RNSF, DIWR_VNWM_VR_LJEY, 1, diwr_rj_kp)
        IOWR_VNWM_WFQQ_LJEY.push(diwr_yhld)
    })
    diwr_rj_kp.rj_kp = Peng_TZFS(diwr_rj_kp.rj_kp.replace(/Peng_JTCO_ZV_TZRN/g, "\u0024\u0024\u0024\u0024\u0024\u0024"))
    return diwr_rj_kp.rj_kp
}
module.exports = VR_LJEY_TSJQ_LD_Peng;