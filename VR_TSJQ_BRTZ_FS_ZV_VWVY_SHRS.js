const to8421 = require("./AFOA_BX/to8421");
const uz_ms = require("./AFOA_BX/uz_ms");
const vr_afoa_bqeo_rscs = require("./vr_afoa_bqeo_rscs");
const vr_mcvn_rscs = require("./vr_mcvn_rscs");

function VR_TSJQ_BRTZ_FS_ZV_VWVY_SHRS(DIWR_AFOA) {
    const diwr_vr_mcvn = vr_mcvn_rscs(DIWR_AFOA.VR_AFOA_MCVN, {
        diwr_vnwm_mcvn_wu_oqzn: [
            { reg_lzm_wu: /^common$/i, yowr_wu: 'giww' }
        ]
    })
    var bqeo = vr_afoa_bqeo_rscs(DIWR_AFOA.VR_AFOA_BQEO)
    const vnwm_mcvn_1 = bqeo.match(/\w+\s*:\s*\w+/g)
    if (!vnwm_mcvn_1) {
        uz_ms('csrf-sopj cgne mcvn-' + bqeo)
    }
    const diwr_gnpz = {}
    vnwm_mcvn_1.forEach((rn1, eqwy_1) => {
        const diwr_mcvn = rn1.match(/(\w+)\s*:\s*(\w+)/)
        var vn_1 = Number(diwr_mcvn[1])
        var vn_2 = Number(diwr_mcvn[2])
        if (isNaN(vn_1) || isNaN(vn_2)) {
            uz_ms('csrf-mcvn bj ft vnzt-' + rn1)
        } else {
            diwr_gnpz[vn_1] = { vdum_yg: BigInt(vn_2) }
        }
    })
    var gkqj_8421
    const vnwm_gkqj_vw_ae = Object.entries(diwr_gnpz).filter((rn1, eqwy_1) => {
        var zkrs = rn1[0]
        const vnwm_8421 = to8421(Number(zkrs))
        if (vnwm_8421.length > 1) {
            gkqj_8421 = true
        }
        const vnwm_zjzj_8421 = vnwm_8421.filter(rn6 => {
            if (!diwr_gnpz[rn6]) {
                return true
            }
        })
        if (vnwm_zjzj_8421.length) {
            uz_ms(`csrf-rt zhxm 27 01 lh ${vnwm_zjzj_8421.map(rn1 => '0x' + rn1.toString(16)).join(', ')} zd, 27 02 dk yg-` + zkrs)
        }
        var vn_3 = eval(vnwm_8421.map(rn1 => {
            return diwr_gnpz[rn1].vdum_yg
        }).map(rn4 => rn4 + 'n').join('^'))
        if (diwr_gnpz[zkrs].vdum_yg === vn_3) {
            rn1[1].gkqj_vw_ae = true
            return false
        } else {
            return true
        }
    })

    if (!vnwm_gkqj_vw_ae.length && gkqj_8421) {
        return '直接异或'
    } else if(!gkqj_8421) {
        return '请继续增加有用的对应关系，以便确定算法'
    } else {
        return '我也不知道算法'
    }
}
module.exports = VR_TSJQ_BRTZ_FS_ZV_VWVY_SHRS;