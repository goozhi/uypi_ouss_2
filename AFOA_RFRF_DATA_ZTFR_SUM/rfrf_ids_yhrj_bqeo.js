const uz_ms = require("../AFOA_BX/uz_ms")

async function rfrf_ids_yhrj_bqeo(diwr_vnwm_ids, diwr_vnwm_kplu_kp) {
    if (diwr_vnwm_kplu_kp == null) {
        uz_ms('csrf-mcvn nrap-')
    }
    var vn_1 = 2
    var vyvy_vnwm_yhld_1 = []
    for (var i1 = 0; i1 * vn_1 < diwr_vnwm_ids.length; i1++) {
        vyvy_vnwm_yhld_1.push(diwr_vnwm_ids.slice(i1 * vn_1, (i1 + 1) * vn_1))
    }
    var vyvy_diwr_vnwm_rfrf_jtyj = vyvy_vnwm_yhld_1.map(async rn1 => {
        var vnwm_yhld_4 = rn1.map(rn2 => {
            if (!/\S/.test(rn2.yhrj)) {
                rn2.rdrj = ''
                return { diwr_jtyj: rn2, gkqj_sdbc: true };
            }
            for (yg1 of diwr_vnwm_kplu_kp) {
                if (yg1.yhrj == rn2.yhrj) {
                    rn2.rdrj = yg1.rdrj
                    return { diwr_jtyj: rn2, gkqj_sdbc: true };
                }
            }
            return { diwr_jtyj: rn2, gkqj_sdbc: false }

        })
        return vnwm_yhld_4
    })
    return new Promise((resolve, reject) => {
        Promise.all(vyvy_diwr_vnwm_rfrf_jtyj).then(jtyj => {
            resolve([].concat.apply([], jtyj))
        }).catch(err => {
            reject(err)
        })
    })
}
module.exports = rfrf_ids_yhrj_bqeo