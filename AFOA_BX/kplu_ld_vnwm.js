const fs = require('fs');
const uz_ms = require('./uz_ms');
function kplu_ld_vnwm(nikc_kplu, udao_wu) {
    var reg_udao_wu = new RegExp(udao_wu.replace(/\.|^/g, "\\.") + '$', 'i')
    var VNWM_KP = fs.readdirSync(nikc_kplu);
    var VNWM_1 = VNWM_KP.filter(rn1 => {
        if (reg_udao_wu.test(rn1))
            return true;
    })
    var vyvy_diwr_vnwm_kplu = VNWM_1.map(rn1 => {
        var json_yxna_kp = nikc_kplu.replace(/[\\\/]$/, "") + '/' + rn1
        var diwr_vnwm_yhld = (require(json_yxna_kp))
        return diwr_vnwm_yhld.map(rn1 => {
            rn1.json_yxna_kp = json_yxna_kp
            return rn1
        })
    })
    if (vyvy_diwr_vnwm_kplu.length == 0) {
        uz_ms('csrf-Bi nikc tt hmpc tszn dk rjqt ncrl wu-' + udao_wu + '-kp-' + nikc_kplu)
    }
    var vnwm_yhld = new Array()
    return vnwm_yhld.concat.apply([], vyvy_diwr_vnwm_kplu);
}

module.exports = kplu_ld_vnwm