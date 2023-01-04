function turs_ubub_vbyt(rj_eynh_vbyt_uj_kp) {
    var rj_es_vnwm_vbyt_brtz
    var rj_1 = rj_eynh_vbyt_uj_kp
    for (; ;) {
        if (/\$1/.test(rj_1)) {
            var reg_mcvn = /帧数组(.*)的元素(.*)的值为(.*)/
            var diwr_mcvn_1 = rj_1.match(reg_mcvn)
            if (diwr_mcvn_1 != null) {
                rj_es_vnwm_vbyt_brtz = 'f[' + diwr_mcvn_1[1] + '][' + diwr_mcvn_1[2] + ']:' + diwr_mcvn_1[3]
            } else if (diwr_mcvn_1 == null && rj_es_vnwm_vbyt_brtz == undefined) {
                uz_ms('csrf-epqt vbyt nrap mcvn-' + rj_1.match(/.*\$1.*/)[0])
            } else {
            }
            rj_1 = rj_1.replace(/\$1(.*;)(.*)/, rj_es_vnwm_vbyt_brtz + "$1")
        } else {
            break;
        }
    }
    var reg_else_if = /.*\$2.*/g;
    var vnwm_else_if = rj_1.match(reg_else_if)
    if (vnwm_else_if != null) {
        vnwm_else_if.forEach(rn1 => {
            var reg_else_if_mcvn = /elseif.*;\s*(\w+)/i;
            var diwr_mcvn_2 = rn1.match(reg_else_if_mcvn)
            if (diwr_mcvn_2 == null) {
                uz_ms('csrf-epqt vbyt nrap mcvn-' + rj_1.match(/.*\$2.*/)[0])
            }
            if (rj_es_vnwm_vbyt_brtz == undefined) {
                uz_ms('csrf-epqt vbyt nrap mcvn-' + rj_1.match(/.*\$2.*/)[0])
            }
            rj_es_vnwm_vbyt_brtz = rj_es_vnwm_vbyt_brtz.replace(/\w+\s*$/, diwr_mcvn_2[1])
            rj_1 = rj_1.replace(/\$2(.*;)(.*)/, rj_es_vnwm_vbyt_brtz + "$1")
        })
    }
    return rj_1
}
module.exports = turs_ubub_vbyt