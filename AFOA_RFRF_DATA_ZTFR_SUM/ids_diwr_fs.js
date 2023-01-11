const uz_ms = require("../AFOA_BX/uz_ms");

function ids_diwr_fs(rj_kp) {
    if (/\ufffd/.test(rj_kp)) {
        uz_ms('csrf-umvo acun frih, rt zjzj rjqt vkvy jils eopc-' + rj_kp.slice(0, 1000))
    }
    var rj_1 = rj_kp
    var reg_brtz_1 = /Str2ID\(\w+\)[\s\S]*?(?=Str2ID|$)/g;
    var reg_str2 = /^Str2ID\((\w+)\),\s*(.*?)\s*;\s*$/;
    var vnwm_str2 = rj_1.match(reg_brtz_1)
    if (vnwm_str2 == null) {
        uz_ms("csrf-RA ZJZO AB DIYC BRTZ-" + rj_kp.slice(0, 1000))
    } else {
        rj_yhld = rj_1.replace(reg_brtz_1, "")
        if (/[\S]/.test(rj_yhld)) {
            uz_ms("csrf-FT Str2ID DK BRTZ-" + rj_yhld.replace(/\n(?=\n)/g, ""))
        }

    }
    var diwr_vnwm_str2 = vnwm_str2.map(rn1 => {
        var diwr_str2 = rn1.match(reg_str2)
        if (diwr_str2 != null) {
            return { rj_kp: rn1, vkih: diwr_str2[1], yhrj: diwr_str2[2] }
        } else {
            uz_ms('csrf-str2 brtz msox-' + rn1)
        }
    })
    return diwr_vnwm_str2
}
module.exports = ids_diwr_fs