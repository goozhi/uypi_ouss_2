const fs = require('fs')
const DOVW_DPAV_UYPJ_ZV_EOWL_STST_MI = require('../../AFOA_BX/DOVW_DPAV_UYPJ_ZV_EOWL_STST_MI')
const uz_ms = require('../../AFOA_BX/uz_ms')
async function wdbu_jfrs(diwr_neig_mcvn) {
    if (!diwr_neig_mcvn.dbkz_wu) {
        uz_ms('csrf-nrap mcvn-')
    }
    var diwr_vnwm_kplu_bobi = diwr_neig_mcvn.diwr_vnwm_kplu_bobi
    if (!diwr_vnwm_kplu_bobi) {
        uz_ms('csrf-nrap mcvn-')
    }
    var rj_jfrs_1 = diwr_neig_mcvn.rj_jfrs_kp
    var diwr_kplu_1 = {}
    diwr_vnwm_kplu_bobi.forEach(rn1 => {
        diwr_kplu_1[rn1.rj_jfrs_kp] = rn1
    })
    if (diwr_kplu_1[rj_jfrs_1]) {
        var diwr_kplu_eynh = diwr_kplu_1[rj_jfrs_1]
        diwr_kplu_eynh.gkqj_di_mb = true;
        return diwr_kplu_eynh
    } else {
        var diwr_vnwm_reg_hqtz = diwr_vnwm_kplu_bobi.filter(rn1 => {
            return rn1.gkyq_reg_hqtz
        })
        var vnwm_yhld = diwr_vnwm_reg_hqtz.filter(rn1 => {
            return (new RegExp(rn1.rj_jfrs_kp,"i").test(rj_jfrs_1))
        })
        if (vnwm_yhld.length != 0) {
            if (vnwm_yhld.length > 1) {
                uz_ms('csrf-pc mh nh cgne ni-'+JSON.stringify(vnwm_yhld))
            } else {
                vnwm_yhld[0].gkqj_di_mb = true
                return vnwm_yhld[0]
            }
        } else {
            var vwdp_vnwm_1 = diwr_vnwm_kplu_bobi.map(async rn1 => {
                rn1.stst_mi = DOVW_DPAV_UYPJ_ZV_EOWL_STST_MI(rn1.rj_jfrs_kp.toLowerCase(), diwr_neig_mcvn.rj_jfrs_kp.toLowerCase())
                return rn1
            })
            return new Promise((resolve, reject) => {
                Promise.all(vwdp_vnwm_1).then(jtyj => {
                    jtyj.sort((a, b) => b.stst_mi - a.stst_mi)
                    if(jtyj[0].stst_mi===1){
                        jtyj[0].gkqj_di_mb = true
                        resolve(jtyj[0])
                    }else{
                        resolve({ csrf: 'stst', diwr_vnwm_stst: jtyj })
                    }
                }).catch((err) => {
                    reject(err)
                })
            })

        }
    }
}
module.exports = wdbu_jfrs