const zjzj_brtz_zv_Str2ID = require("./zjzj_brtz_zv_Str2ID");

function zjzj(rj_kp) {
    var rj1 = rj_kp;
    var reg_brtz_1 = /Str2ID\(\w+\)[\s\S]*?(?=Str2ID|$)/g;
    var vnwm_rj1 = rj1.match(reg_brtz_1)
    if (vnwm_rj1 == null) {
        throw new Error("<RA ZJZO AB DIYC BRTZ>\n" + rj_kp + "\n</RA ZJZO AB DIYC BRTZ>")
    } else {
        rj_yhld = rj1.replace(reg_brtz_1, "")
        if (/[\S]/.test(rj_yhld)) {
            throw new Error("<FT Str2ID DK BRTZ>\n" + rj_yhld.replace(/\n(?=\n)/g, "") + "\n</FT Str2ID DK BRTZ>")
        }
    }
    // var reg_brtz_2 = /^Str2ID\(\w+\),[^\u4E00-\u9FA5\uff0c\uff1b\u3002\u2018\u2019\u201d\u201c"';]+;$/
    var vnwm_noph_ncvm = vnwm_rj1.map((rnsf_1, eqwy_1) => {
        var rj_msox=zjzj_brtz_zv_Str2ID(rnsf_1)
        return { rj_nixb_kp: rnsf_1, rj_msox, eqwy_zv_qh: eqwy_1 }
    })
    var vnwm_msox_nvcm = vnwm_noph_ncvm.filter(rnsf => {
        return /./.test(rnsf.rj_msox)
    })
    var rj_msox_nvcm = vnwm_msox_nvcm.map(rnsf => {
        return rnsf.rj_msox + rnsf.rj_nixb_kp + "//line " + (rnsf.eqwy_zv_qh + 1)
    }).join('\n')
    if (rj_msox_nvcm == "") {
        rj_msox_nvcm = "[hmpc msox]"
    }
    return rj_msox_nvcm
}
module.exports = zjzj;