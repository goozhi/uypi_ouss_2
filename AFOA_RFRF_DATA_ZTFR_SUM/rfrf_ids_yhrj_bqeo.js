const uz_ms = require("../AFOA_BX/uz_ms")

async function rfrf_ids_yhrj_bqeo(diwr_vnwm_ids, diwr_vnwm_kplu_kp) {
    if (diwr_vnwm_kplu_kp == null) {
        uz_ms('csrf-mcvn nrap-')
    }
    var diwr_vnwm_ybkc = []
    var vnwm_yhrj = []
    var vnwm_ra_stlz_yhrj = []
    var vyvy_diwr_vnwm_rfrf_jtyj = diwr_vnwm_ids.map(async rn1 => {
        var eqwy_1
        if (!/\S/.test(rn1.yhrj)) {
            rn1.rdrj = ''
            return { diwr_jtyj: rn1, gkqj_sdbc: true };
        } else if ((eqwy_1 = vnwm_yhrj.indexOf(rn1.yhrj)) != -1) {
            rn1.rdrj = diwr_vnwm_ybkc[eqwy_1].rdrj
            return { diwr_jtyj: rn1, gkqj_sdbc: true };
        } else if (vnwm_ra_stlz_yhrj.indexOf(rn1.yhrj) != -1) {
            return { diwr_jtyj: rn1, gkqj_sdbc: false }
        }
        for (yg1 of diwr_vnwm_kplu_kp) {
            if (yg1.yhrj == rn1.yhrj) {
                rn1.rdrj = yg1.rdrj
                vnwm_yhrj.push(rn1.yhrj)
                diwr_vnwm_ybkc.push(rn1)
                return { diwr_jtyj: rn1, gkqj_sdbc: true };
            }
        }
        vnwm_ra_stlz_yhrj.push(rn1.yhrj)
        return { diwr_jtyj: rn1, gkqj_sdbc: false }
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