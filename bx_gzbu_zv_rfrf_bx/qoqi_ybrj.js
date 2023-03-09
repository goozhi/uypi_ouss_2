const diwr_neig_zjzj = require("../AFOA_BX/diwr_neig_zjzj")
const uz_ms = require("../AFOA_BX/uz_ms")
const msqu_rjse_fs = require("../afoa_msqu/msqu_rjse_fs")
const vr_mcvn_ld_rjse = require("../afoa_msqu/vr_mcvn_ld_rjse")

function qoqi_ybrj(diwr_neig_kp) {
    var vnwm_fo_1 = [
        'diwr_vnwm_bx',
        'vnwm_afoa_bqeo'
    ]
    diwr_neig_zjzj(diwr_neig_kp, vnwm_fo_1)
    var zkrs_1 = '请修改'
    var vr_vkih_bqeo = diwr_neig_kp.vnwm_afoa_bqeo.slice(2, 1000).join('\n')
    var vnwm_vkih = vr_vkih_bqeo.match(/\d+/g)
    if (!vnwm_vkih) {
        uz_ms('csrf-rt vdzv vkih-' + vr_vkih_bqeo)
    }
    var diwr_1 = {}
    diwr_neig_kp.diwr_vnwm_bx.forEach(rn1 => {
        diwr_1[rn1.vkih] = rn1
    })
    var diwr_vnwm_zkrs = vnwm_vkih.map(rn1 => {
        diwr_yhld = diwr_1[rn1]
        if (!diwr_yhld) {
            uz_ms('csrf-vkih ac zznq-' + rn1)
        } else {
            var bqeo_3 = diwr_yhld.yhrj
            var rj_jtyj = 'qoqi--vkih-' + rn1 + '-bqeo-\n' + bqeo_3
            return { zkrs: zkrs_1 + ': ' + diwr_yhld.rdrj, hint: rj_jtyj }
        }
    })
    var diwr_msqu = { uxux: 'vdzv', diwr_vnwm_zkrs }
    msqu_rjse_fs(diwr_msqu)
    var diwr_msqu_vr_mcvn = {}
    diwr_msqu_vr_mcvn.modifying = 'originals'
    return { rj_msqu: '60=' + vr_mcvn_ld_rjse(diwr_msqu_vr_mcvn) + '{{·\n' + diwr_neig_kp.vnwm_afoa_bqeo.slice(0,2).join('\n') + '\n' + diwr_msqu.msqu_rjse + '\n·}}' }
}
module.exports = qoqi_ybrj