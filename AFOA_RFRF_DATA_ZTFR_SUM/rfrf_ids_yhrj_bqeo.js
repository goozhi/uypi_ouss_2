const uz_ms = require("../AFOA_BX/uz_ms")

async function rfrf_ids_yhrj_bqeo(diwr_vnwm_ids, diwr_vnwm_kplu_kp) {
    if (diwr_vnwm_kplu_kp == null) {
        uz_ms('csrf-mcvn nrap-')
    }
    var diwr_vnwm_ybkc = []
    var vyvy_diwr_vnwm_rfrf_jtyj = diwr_vnwm_ids.map(async rn1 => {
        for (yg2 of diwr_vnwm_ybkc) {
            if (yg2.yhrj == rn1.yhrj) {
                if (yg2.gkqj_sdbc) {
                    rn1.rdrj = yg2.rdrj
                    rn1.gkqj_sdbc = true
                } else {
                    rn1.gkqj_sdbc = false
                }
                return rn1
            }
        }
        if (!/\S/.test(rn1.yhrj)) {
            rn1.rdrj = ''
            rn1.gkqj_sdbc = true
            return rn1
        }
        for (yg1 of diwr_vnwm_kplu_kp) {
            if (yg1.yhrj == rn1.yhrj) {
                rn1.rdrj = yg1.rdrj
                diwr_vnwm_ybkc.push(rn1)
                rn1.gkqj_sdbc = true
                return rn1
            }
        }
        rn1.gkqj_sdbc = false
        diwr_vnwm_ybkc.push(rn1)
        return rn1
    })
    return new Promise((resolve, reject) => {
        Promise.all(vyvy_diwr_vnwm_rfrf_jtyj).then(jtyj => {
            resolve(jtyj)
        }).catch(err => {
            reject(err)
        })
    })
}
module.exports = rfrf_ids_yhrj_bqeo