const uz_ms = require("./uz_ms")

function diwr_vnwm_eowl_tszn_pzva_nvcm(diwr_neig_kp) {
    if (!diwr_neig_kp) {
        uz_ms('csrf-nrap mcvn-' + rj_yhld)
    } else {
        var vnwm_fo_1 = [
            'reg_pzva_slgr'
            , 'diwr_vnwm'
            , 'tszn_pzva_vdum_brtz'
            , 'pzva_fdmj_fr'
            , 'diwr_fdmj_fr'
        ]
        diwr_neig_zjzj(diwr_neig_kp, vnwm_fo_1)
    }
    return diwr_neig_kp.diwr_vnwm.map(rn1 => Object.entries(rn1)
        .map(([key, value]) => diwr_neig_kp.reg_pzva_slgr.test(key) && diwr_neig_kp.tszn_pzva_vdum_brtz(key, value))
        .filter(Boolean)
        .join(diwr_neig_kp.pzva_fdmj_fr))
        .join(diwr_neig_kp.diwr_fdmj_fr)


}
module.exports = diwr_vnwm_eowl_tszn_pzva_nvcm