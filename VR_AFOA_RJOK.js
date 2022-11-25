

function VR_AFOA_RJOK(bqeo_kp, rj_nixb) {
    const VR_TSJQ_DIWR = require("./vr_tsjq_diwr")
    var diwr_vnwm_tsjq = new VR_TSJQ_DIWR().diwr_vnwm_tsjq
    switch (true) {
        case /afoa_wu/i.test(rj_nixb):
            return diwr_vnwm_tsjq.map(rn1 => {
                return rn1.vr_afoa_wu
            }).join('\n\n')
        case /afoa_lzm_wu/i.test(rj_nixb):
            return diwr_vnwm_tsjq.map(rn1 => {
                return rn1.vnwm_vr_afoa_lzm_wu.join(',')
            }).join('\n\n')
        case /csrf/i.test(rj_nixb):
            return diwr_vnwm_tsjq.map(rn1 => {
                return rn1.csrf
            }).join('\n\n')
        case /klch/i.test(rj_nixb):
            return diwr_vnwm_tsjq.map(rn1 => {
                return rn1.klch
            }).join('\n\n')
        case /^sopc$/i.test(rj_nixb):
            return JSON.stringify(diwr_vnwm_tsjq)
        default:
            throw new Error('acun mcvn', { cause: { nixb: rj_nixb, kp: "" } })
    }
}
module.exports = VR_AFOA_RJOK;