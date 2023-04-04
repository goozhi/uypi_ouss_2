const uz_ms = require("../AFOA_BX/uz_ms")

function vo_vyn_ld_diwr(rj_kp = '') {
    var rj_1 = rj_kp
    var diwr_jtyj = {}
    var reg_es_vo_vyn = /\*\{.*\};/g
    var vnwm_es_vo_vyn = rj_1.match(reg_es_vo_vyn)
    if (vnwm_es_vo_vyn) {
        rj_1 = rj_1.replace(reg_es_vo_vyn, "")
        if (/\S/.test(rj_1)) {
            uz_ms('csrf-efpc ftpj frih-' + rj_1)
        } else {
            vnwm_es_vo_vyn.map(rn1 => {
                vnwm_es_vnwy = rn1.match(/\w+/g)
                // vnwm_es_vnwy.forEach((rn1, eqwy_1, vnwm_1) => {
                //     vnwm_1[eqwy_1] = Number('0x' + rn1)
                //     if (isNaN(vnwm_1[eqwy_1])) {
                //         uz_ms('csrf-ftpj dk 16 tyub-' + rn1)
                //     }
                // })
                if (vnwm_es_vnwy) {
                    if (vnwm_es_vnwy.length - 5 != Number('0x' + vnwm_es_vnwy[0])) {
                        uz_ms('csrf-vnwy vnaw ss da yenh ztih ac fr-' + rn1)
                    }
                    var rj_yyha = '0x' + vnwm_es_vnwy.slice(1, 5).join('').replace(/^0+/,"")
                    var vn_yhld = Number(rj_yyha)
                    if (isNaN(vn_yhld)) {
                        uz_ms('csrf-I D efpc ftpj frih-' + vnwm_es_vnwy.slice(1, 5))
                    } else {
                    }
                    if (diwr_jtyj[rj_yyha]) {
                        diwr_jtyj[rj_yyha].vnwm_vnwy.push(vnwm_es_vnwy.slice(5, vnwm_es_vnwy.length))
                    } else {
                        diwr_jtyj[rj_yyha] = { vnwm_vnwy: [vnwm_es_vnwy.slice(5, vnwm_es_vnwy.length)] }
                    }
                } else {
                    uz_ms('csrf-sopj cgne ztih vnwy-' + rn1)
                }
            })
            return diwr_jtyj
        }
    } else {
        uz_ms('csrf-sopj cgne vo vyn-' + rj_kp)
    }
}
module.exports = vo_vyn_ld_diwr