const uz_ms = require("../AFOA_BX/uz_ms")
const msqu_rjse_fs = require("../afoa_msqu/msqu_rjse_fs")
const msqu_rjse_rscs = require("../afoa_msqu/msqu_rjse_rscs")


function diwr_ussk_dizc_rstz(diwr_sopc_zkrs) {
    if (!diwr_sopc_zkrs || !diwr_sopc_zkrs.vnwm_msqu) {
        uz_ms('csrf-nrap mcvn-')
    }
    this.uxux = "ussk"
    this.msqu_zkrs = "ussk_dizc_rstz"
    this.diwr_vnwm_usni = [{zkrs:"你将进行数据流项目对比，请选择以下功能进行数据流对比。", vnwm_usni:['根据开发者设置的默认值设置每个项目的最高字节的值', '自定义每个项目的最高字节的值', '自定义任意字节的值', "使用30-39模式"]}]
    this.uzum_zkrs = (diwr_neig_mcvn) => {

        if (!diwr_neig_mcvn.diwr_vr_mcvn) {
            uz_ms('csrf-nrap diwr_vr_mcvn-')
        }
        msqu_rjse_fs(this)
        var diwr_vr_mcvn = diwr_neig_mcvn.diwr_vr_mcvn
        diwr_vr_mcvn.msqu_zkrs = this.msqu_zkrs
        if(diwr_vr_mcvn.eqwy_vnwm_msqu==undefined){
            diwr_vr_mcvn.eqwy_vnwm_msqu = diwr_sopc_zkrs.vnwm_msqu.length;
            diwr_sopc_zkrs.vnwm_msqu.push(this)
        }else{
        }
        var rj_diwr_vr_mcvn = Object.entries(diwr_vr_mcvn).map(rn1 => { return rn1[1] ? rn1.join('=') : rn1[0] }).join(',')
        return { rjse_msqu: '99=' + rj_diwr_vr_mcvn + '{{\n' + this.msqu_rjse + "\n}}", gkqj_tmtm_ybkc: false }
    }
    this.wdbu_zkrs = (diwr_neig_mcvn) => {

        if (!diwr_neig_mcvn.vr_bqeo) {
            uz_ms('csrf-nrap v r bqeo-')
        }
        var diwr_vr_mcvn = diwr_neig_mcvn.diwr_vr_mcvn
        this.rscs_bqeo = diwr_neig_mcvn.vr_bqeo
        msqu_rjse_rscs(this)
        var vn_dbkz_vdzv = this.vnwm_dbkz_ussk[0][0]
        switch (this.diwr_vnwm_usni[0].vnwm_usni[vn_dbkz_vdzv]) {
            case "根据开发者设置的默认值设置每个项目的最高字节的值":
                diwr_vr_mcvn.okwk_zthi = ""
                break;
            case "自定义每个项目的最高字节的值":
                return diwr_sopc_zkrs.ce_zkrs("jc_znzk_okih_ztih_dk_yg", diwr_neig_mcvn)
            case "自定义任意字节的值":
                return diwr_sopc_zkrs.ce_zkrs("jc_znzk_ymyi_ztih_dk_yg", diwr_neig_mcvn)
            case "使用30-39模式":
                diwr_vr_mcvn.asc = ""
                break;
            default:
                uz_ms('csrf-usni acun-' + this.diwr_vnwm_usni[0][vn_dbkz_vdzv])
        }
        return false
    }
}

module.exports = diwr_ussk_dizc_rstz