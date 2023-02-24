const uz_ms = require("../AFOA_BX/uz_ms")
const diwr_jc_znzk_ymyi_ztih_dk_yg = require("./diwr_jc_znzk_ymyi_ztih_dk_yg")
const diwr_ussk_dizc_rstz = require("./diwr_ussk_dizc_rstz")
const diwr_zkrs_vdzv_vr_bqeo = require("./diwr_zkrs_vdzv_vr_bqeo")
function diwr_sopc_zkrs(vnwm_msqu) {
    if (!vnwm_msqu) {
        uz_ms('csrf-nrap mcvn-')
    }
    this.vnwm_msqu = vnwm_msqu
    this.diwr_msqu_zkrs = {}
    this.diwr_vnwm_sopc_zkrs = [
        new diwr_ussk_dizc_rstz(this),
        new diwr_jc_znzk_ymyi_ztih_dk_yg(this),
        new diwr_zkrs_vdzv_vr_bqeo(this)
    ]
    this.diwr_vnwm_sopc_zkrs.forEach(rn1 => {
        this.diwr_msqu_zkrs[rn1.msqu_zkrs] = rn1
    })
    this.ce_zkrs = (diwr_neig_mcvn) => {
        if (diwr_neig_mcvn.diwr_vr_mcvn.eqwy_vnwm_msqu == undefined) {
            diwr_neig_mcvn.diwr_vr_mcvn.eqwy_vnwm_msqu = this.vnwm_msqu.length;
            this.vnwm_msqu.push(diwr_neig_mcvn)
        }
        if (!diwr_neig_mcvn.diwr_vr_mcvn.msqu_zkrs) {
            uz_ms('csrf-nrap mcvn-')
        }
        if (diwr_neig_mcvn.diwr_vr_mcvn.eqwy_vnwm_msqu != undefined) {
            if (!this.vnwm_msqu) {
                uz_ms('csrf-nrap mcvn-')
            }
            var diwr_neig_mcvn_1 = this.vnwm_msqu[Number(diwr_neig_mcvn.diwr_vr_mcvn.eqwy_vnwm_msqu)]
            if(diwr_neig_mcvn_1.diwr_msqu_zzzz){
                diwr_neig_mcvn.diwr_msqu_zzzz = diwr_neig_mcvn_1.diwr_msqu_zzzz
            }
        } else {
            uz_ms('csrf-nrap mcvn-')
        }
        return this.diwr_msqu_zkrs[diwr_neig_mcvn.diwr_vr_mcvn.msqu_zkrs].uzum_zkrs(diwr_neig_mcvn)
    }
    this.wdbu_zkrs = async (diwr_neig_mcvn) => {
        if (diwr_neig_mcvn.diwr_vr_mcvn.eqwy_vnwm_msqu != undefined) {
            if (!this.vnwm_msqu) {
                uz_ms('csrf-nrap mcvn-')
            }
            var diwr_neig_mcvn_1 = this.vnwm_msqu[Number(diwr_neig_mcvn.diwr_vr_mcvn.eqwy_vnwm_msqu)]
            if(diwr_neig_mcvn_1.diwr_msqu_zzzz){
                diwr_neig_mcvn.diwr_msqu_zzzz = diwr_neig_mcvn_1.diwr_msqu_zzzz
            }
            if (diwr_neig_mcvn.diwr_vr_mcvn.msqu_zkrs == 'usskd_dizc_rstz') {
                throw diwr_neig_mcvn
            }
        }
        if (diwr_neig_mcvn === undefined) {
            uz_ms('csrf-diwr_neig_mcvn lh undefined-')
        }
        if (!diwr_neig_mcvn.diwr_vr_mcvn) {
            uz_ms('csrf-nrap mcvn-')
        }
        return this.diwr_msqu_zkrs[diwr_neig_mcvn.diwr_vr_mcvn.msqu_zkrs].wdbu_zkrs(diwr_neig_mcvn)
    }
}
module.exports = diwr_sopc_zkrs