const qh_bq_qi = require("./qh_bq_qi");
const zjzj = require("./zjzj");
const zjzj_brtz_zv_Str2ID = require("./zjzj_brtz_zv_Str2ID");
const gl_qi = require("./gl_qi_Str2ID");

function zhqh(rjse_kp) {
    var rj1 = rjse_kp.replace(/\r/g, "");
    var rj_msox = "";
    // var rj_msox_2 = zjzj(rj1)
    // var rj_msox_1=""
    // if (/hmpc msox/i.test(rj_msox_2)) {
    //     throw new Error("[bqeo hmpc msox]")
    // }
    var reg_brtz_1 = /Str2ID\(\w+\)[\s\S]*?(?=(?:\n*|)\bStr2ID|$)/g;
    var vnwm_rj_1 = rj1.match(reg_brtz_1)
    if (vnwm_rj_1 == null) {
        throw new Error("RA ZJZO AB DIYC DK BRTZ", { cause: { nixb: rjse_kp, kp: "" } })
    } else {
        rj_yhld = rj1.replace(reg_brtz_1, "")
        if (/[\S]/.test(rj_yhld)) {
            throw new Error("FT Str2ID DK BRTZ", { cause: { nixb: rj_yhld.replace(/\n(?=\n)/g, ""), kp: "" } })
        }
    }
    var vnwm_jtyp = vnwm_rj_1.map((rn1, eqwy_1) => {
        rn1 = gl_qi(rn1)
        rj_msox_yhld = zjzj_brtz_zv_Str2ID(rn1)
        if (/\S/.test(rj_msox_yhld)) {
            rj_msox += "\n" + rj_msox_yhld
        }
        return rn1
    })
    if (/\S/i.test(rj_msox)) {
        throw new Error(rj_msox.slice(0,200000))
    } else {
        return vnwm_jtyp.join("\n");
    }
}
module.exports = zhqh;