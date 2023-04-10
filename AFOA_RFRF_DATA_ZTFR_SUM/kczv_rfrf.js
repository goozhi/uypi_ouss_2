const rfrf_bqeo_diwr_fs = require("./rfrf_bqeo_diwr_fs")
const NIKC_NINI_RJVT = require("../AFOA_BX/NIKC_NINI_RJVT")

const fs = require('fs')
const uz_ms = require("../AFOA_BX/uz_ms")
const WR_TSJQ_ZV_CE_EBWU_LD_YHRJ = require("../AFOA_BX/WR_TSJQ_ZV_CE_EBWU_LD_YHRJ")
async function kczv_rfrf(nikc_vdzv, yxna_vdum, YXNA_VNWM_reg_VWUX_MR_YFUX, vkvy_dbkz) {
    if (vkvy_dbkz == null) {
        uz_ms('csrf-mcvn nrap-')
    }
    var diwr_vnwm_nini
    try {
        diwr_vnwm_nini = NIKC_NINI_RJVT(nikc_vdzv.replace(/(?:\\|\/|)$/, "/"), vkvy_dbkz)
    } catch (err) {
        uz_ms(err)
    }
    var diwr_yhld = { YXNA_VNWM_reg_VWUX_MR_YFUX, vkih: new Date().getTime() }
    var diwr_vnwm_vdum_nini = diwr_vnwm_nini.map(async rn1 => {
        if (/\ufffd/.test(rn1.BQEO)) {
            uz_ms('csrf-zjzo ab acun frih rt zjzj vkvy jils eopc-' + rn1.YXNA)
        }
        var diwr_vnwm_rfrf_bqeo_diwr
        try {
            diwr_vnwm_rfrf_bqeo_diwr = await rfrf_bqeo_diwr_fs(rn1.BQEO, diwr_yhld)
        } catch (err) {
            if (/^Error: 【|^Error: 《/.test(err.message)) {
                err.message = '【path : ' + rn1.YXNA + '】' + '\n' + err.message
            } else {

            }
            throw err
        }
        return diwr_vnwm_rfrf_bqeo_diwr
    })
    return new Promise((resolve, reject) => {
        Promise.all(diwr_vnwm_vdum_nini).then(jtyj => {
            let sopc_diwr = jtyj.flat()
            fs.writeFileSync(yxna_vdum, JSON.stringify(sopc_diwr))
            resolve(WR_TSJQ_ZV_CE_EBWU_LD_YHRJ({ WR_AFOA_BQEO: `cd vdum ab yxna md-${yxna_vdum}-md`, WR_AFOA_MCVN: '' }))
        }).catch(err => {
            reject(err)
        })
    })
}
module.exports = kczv_rfrf