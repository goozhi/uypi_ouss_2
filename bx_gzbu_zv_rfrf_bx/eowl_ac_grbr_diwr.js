const uz_ms = require("../AFOA_BX/uz_ms");
const zjzj_yhrd_diyc_gnpz = require("../AFOA_RFRF_DATA_ZTFR_SUM/zjzj_yhrd_diyc_gnpz");
async function eowl_ac_grbr_diwr(diwr_vnwm_kplu_kp, DIWR_VNWM_reg_VWUX_MR_YFUX) {
    var diwr_vnwm_zjzj_zbhm = diwr_vnwm_kplu_kp.map(async rn1 => {
        try {
            await zjzj_yhrd_diyc_gnpz({vkih:rn1.vkih, yhrj: rn1.yhrj, rdrj: rn1.rdrj, DIWR_VNWM_reg_VWUX_MR_YFUX })
            rn1.gkqj_wwcf = true;
            return rn1
        } catch (err) {
            rn1.gkqj_wwcf = false;
            rn1.err = err
            return rn1
        }
    })

    return new Promise((resolve, reject) => {
        Promise.all(diwr_vnwm_zjzj_zbhm).then(jtyj => {
            var diwr_vnwm_vdum_1 = jtyj.filter(rn1 => {
                if (!rn1.gkqj_wwcf) {
                    return true
                }
            })
            resolve(diwr_vnwm_vdum_1)
        }).catch(err => {
            reject(err)
        })
    })
}
module.exports = eowl_ac_grbr_diwr;