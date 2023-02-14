const uz_ms = require("./uz_ms");

function NVRJ_RSCS_ZV_YECM_BRTZ(RJSE_KP) {
    var UXUX_YHLD = typeof (RJSE_KP)
    if (UXUX_YHLD != "string") {
        throw new Error("[MCVN AOAO JI string]" + UXUX_YHLD + "<--")
    }
    var RJSE_1 = RJSE_KP;
    var VNWM_RJSE_1 = RJSE_1.split(/\n/);
    var diwr_vnwm_es = []
    var reg_es_id_mr_vnwy = /(0x\w+)(?:(?!0x(?!0\w\b)).)*?(\w\w(?:[ \t]\w\w)+)/
    VNWM_RJSE_1.forEach((RNSF, eqwy_1) => {
        var diwr_es_id_mr_vnwy = RNSF.match(reg_es_id_mr_vnwy)
        if (diwr_es_id_mr_vnwy != null) {
            var rjse_es_id_mr_vnwy = diwr_es_id_mr_vnwy[0];
            var rjse_es_id = diwr_es_id_mr_vnwy[1]
            var vn_es_id = Number(rjse_es_id)
            var rjse_vnwm_es_vnwy = diwr_es_id_mr_vnwy[2].split(/\s+/)
            var vn_vnwm_es_vnwy = rjse_vnwm_es_vnwy.map(rnsf => {
                var vn_yhld = Number("0x" + rnsf);
                if (isNaN(vn_yhld)) {
                    throw new Error("[MCVN JI N a N]" + rnsf + "<--")
                }
                return vn_yhld
            })
            diwr_vnwm_es.push({ rjse_kp: RNSF, rjse_es_id_mr_vnwy, rjse_es_id, vn_es_id, rjse_vnwm_es_vnwy, vn_vnwm_es_vnwy, eqwy_zv_rjse_kp_qh: eqwy_1 })
        }
    });
    if (diwr_vnwm_es.length == 0)
        uz_ms('csrf-reg sopj cgne bi brtz-'+reg_es_id_mr_vnwy+"-kp-"+RJSE_KP.slice(0,500))
    return diwr_vnwm_es
}
module.exports = NVRJ_RSCS_ZV_YECM_BRTZ