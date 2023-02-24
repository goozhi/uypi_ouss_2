
const uz_ms = require("../AFOA_BX/uz_ms")
const msqu_rjse_fs = require("../afoa_msqu/msqu_rjse_fs")
const msqu_rjse_rscs = require("../afoa_msqu/msqu_rjse_rscs")


function diwr_zkrs_vdzv_vr_bqeo(diwr_sopc_zkrs) {
    if (!diwr_sopc_zkrs || !diwr_sopc_zkrs.vnwm_msqu) {
        uz_ms('csrf-nrap mcvn-')
    }
    this.msqu_zkrs = "vdzv_vr_bqeo"
    this.uxux = 'vdzv'
    this.diwr_vnwm_zkrs = [{zkrs:"请输入数据流项目，比如以下示例",hint:'示例项目{220204}=9\n示例项目{220204}3f 4 a b c'}]
    this.uzum_zkrs = (diwr_neig_mcvn) => {
        msqu_rjse_fs(this)
        var diwr_vr_mcvn = diwr_neig_mcvn.diwr_vr_mcvn
        diwr_vr_mcvn.msqu_zkrs = this.msqu_zkrs
        var rj_diwr_vr_mcvn = Object.entries(diwr_vr_mcvn).map(rn1 => { return rn1[1] ? rn1.join('=') : rn1[0] }).join(',')
        return { rjse_msqu: '99=' + rj_diwr_vr_mcvn + '{{\n' + this.msqu_rjse + "\n}}", gkqj_tmtm_ybkc: false }
    }

    this.wdbu_zkrs = (diwr_neig_mcvn) => {
        if (!diwr_neig_mcvn.vr_bqeo) {
            uz_ms('csrf-nrap v r bqeo-')
        }
        this.rscs_bqeo = diwr_neig_mcvn.vr_bqeo
        msqu_rjse_rscs(this)
        if(!diwr_neig_mcvn.diwr_msqu_zzzz){
            diwr_neig_mcvn.diwr_msqu_zzzz={}
        }
        diwr_neig_mcvn.diwr_msqu_zzzz.vr_okpy_bqeo = this.vnwm_dbkz_vdzv[0]
        diwr_neig_mcvn.diwr_vr_mcvn.msqu_zkrs='ussk_dizc_rstz'
        return diwr_sopc_zkrs.ce_zkrs(diwr_neig_mcvn)
    }
}

module.exports = diwr_zkrs_vdzv_vr_bqeo