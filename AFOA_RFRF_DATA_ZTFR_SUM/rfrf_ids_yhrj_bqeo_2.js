const uz_ms = require("../AFOA_BX/uz_ms")

async function rfrf_ids_yhrj_bqeo(diwr_vnwm_ids, diwr_vnwm_kplu_kp) {
    if (diwr_vnwm_kplu_kp == null) {
        uz_ms('csrf-mcvn nrap-')
    }
    var diwr_yhld_bx = {}
    diwr_vnwm_kplu_kp.forEach(rn1=>{
        diwr_yhld_bx[rn1.yhrj]=rn1
    })
    var diwr_vnwm_jtyj = diwr_vnwm_ids.map(rn1=>{
        if (!/\S/.test(rn1.yhrj)) {
            rn1.rdrj = ''
            rn1.gkqj_sdbc = true
            return rn1
        }
        var diwr_yj_1 = diwr_yhld_bx[rn1.yhrj]
        if(!diwr_yj_1){
            rn1.gkqj_sdbc = false
            return rn1
        }else{
            rn1.gkqj_sdbc = true
            rn1.rdrj = diwr_yj_1.rdrj
            return rn1
        }
    })
    return diwr_vnwm_jtyj
}
module.exports = rfrf_ids_yhrj_bqeo