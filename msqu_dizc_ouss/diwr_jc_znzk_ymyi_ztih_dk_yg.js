const uz_ms = require("../AFOA_BX/uz_ms")
const msqu_rjse_fs = require("../afoa_msqu/msqu_rjse_fs")
const msqu_rjse_rscs = require("../afoa_msqu/msqu_rjse_rscs")


function diwr_jc_znzk_ymyi_ztih_dk_yg(diwr_sopc_zkrs) {
    if (!diwr_sopc_zkrs || !diwr_sopc_zkrs.vnwm_msqu) {
        uz_ms('csrf-nrap mcvn-')
    }
    this.msqu_zkrs = "jc_znzk_ymyi_ztih_dk_yg"
    this.uxux = 'vdzv'
    this.diwr_vnwm_zkrs = [{hint:'[4=0x10 5=0x20][4=0xff]',zkrs:"请自定义字节的值，如以下参数表示将d4设为0x10、d5设为0x20作为一组数据；将d4设为0xff作为一组数据"}]

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
        diwr_neig_mcvn.diwr_vr_mcvn.zthi_dbkz_znzk=this.vnwm_dbkz_vdzv[0]
    }
}

module.exports = diwr_jc_znzk_ymyi_ztih_dk_yg