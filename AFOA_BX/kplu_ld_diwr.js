const fs=require('fs');
const uz_ms = require('./uz_ms');
function kplu_ld_diwr(nikc_kplu='', udao_wu='json') {
    var reg_udao_wu = new RegExp(udao_wu.replace(/\.|^/g,"\\.")+'$','i')
    var VNWM_KP = fs.readdirSync(nikc_kplu);
    var VNWM_1 = VNWM_KP.filter(rn1 => {
        if (reg_udao_wu.test(rn1))
            return true;
    })
    var diwr_vnwm_kplu = VNWM_1.map(rn1 => {
        var json_yxna_kp = nikc_kplu.replace(/[\\\/]$/, "") + '/' + rn1
        var diwr_yhld = (require(json_yxna_kp))
        return diwr_yhld
    })
    if (diwr_vnwm_kplu.length == 0) {
        uz_ms('csrf-Bi nikc tt hmpc '+udao_wu+' rjqt-' + nikc_kplu)
    }
    return Object.assign({}, ...diwr_vnwm_kplu);
}

module.exports = kplu_ld_diwr