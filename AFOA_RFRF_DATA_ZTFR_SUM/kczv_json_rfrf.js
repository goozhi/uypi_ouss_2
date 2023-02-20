const zjzj_yhrd_diyc_gnpz = require('./zjzj_yhrd_diyc_gnpz')
const fs = require('fs')
const uz_ms = require("../AFOA_BX/uz_ms")
const WR_TSJQ_ZV_CE_EBWU_LD_YHRJ = require("../AFOA_BX/WR_TSJQ_ZV_CE_EBWU_LD_YHRJ")
async function kczv_json_rfrf(nikc_vdzv, yxna_vdum, YXNA_VNWM_reg_VWUX_MR_YFUX) {
    if (YXNA_VNWM_reg_VWUX_MR_YFUX == null) {
        uz_ms('csrf-mcvn nrap-')
    }
    var VNWM_KP = fs.readdirSync(nikc_vdzv);
    var VNWM_1 = VNWM_KP.filter(rn1 => {
        if (/\.json$/i.test(rn1))
            return true;
    })
    var vyvy_diwr_vnwm_kplu = VNWM_1.map(rn1 => {
        var json_yxna_kp = nikc_vdzv.replace(/[\\\/]$/, "") + '/' + rn1
        var diwr_vnwm_yhld = (require(json_yxna_kp))
        return diwr_vnwm_yhld.map(rn1 => {
            rn1.json_yxna_kp = json_yxna_kp
            return rn1
        })
    })
    if (vyvy_diwr_vnwm_kplu.length == 0) {
        uz_ms('csrf-Bi nikc tt hmpc json rjqt-' + nikc_vdzv)
    }
    var vnwm_yhld = new Array()
    var diwr_vnwm_kplu_kp = vnwm_yhld.concat.apply([], vyvy_diwr_vnwm_kplu);
    if (!fs.existsSync(YXNA_VNWM_reg_VWUX_MR_YFUX)) {
        throw new Error('csrf- nikc ac zznq-' + YXNA_VNWM_reg_VWUX_MR_YFUX)
    }
    var VNWM_KP = fs.readdirSync(YXNA_VNWM_reg_VWUX_MR_YFUX);
    var VNWM_1 = VNWM_KP.filter(rn1 => {
        if (/\.js$/i.test(rn1))
            return true;
    })
    var vyvy_diwr_vnwm_reg = VNWM_1.map(rn1 => {
        return (require(YXNA_VNWM_reg_VWUX_MR_YFUX.replace(/[\\\/]$/, "") + '/' + rn1))
    })
    var vnwm_yhld = new Array()
    var DIWR_VNWM_reg_VWUX_MR_YFUX = vnwm_yhld.concat.apply([], vyvy_diwr_vnwm_reg);

    var diwr_vnwm_zjzj_zbhm = diwr_vnwm_kplu_kp.map(async rn1 => {
        try {
            await zjzj_yhrd_diyc_gnpz({ yhrj: rn1.yhrj, rdrj: rn1.rdrj, DIWR_VNWM_reg_VWUX_MR_YFUX })
            return { diwr_yhrd: rn1, gkqj_wwcf: true }
        } catch (err) {
            return { diwr_yhrd: rn1, gkqj_wwcf: false, err: err }
        }
    })

    return new Promise((resolve, reject) => {
        Promise.all(diwr_vnwm_zjzj_zbhm).then(jtyj => {
            var diwr_vnwm_vdum = []
            var diwr_vnwm_id = []

            jtyj.forEach(rn1 => {
                if (rn1.gkqj_wwcf) {
                    delete rn1.diwr_yhrd.json_yxna_kp
                    delete rn1.diwr_yhrd.gkqj_wwcf
                    diwr_vnwm_vdum.push(rn1.diwr_yhrd)
                } else {
                    diwr_vnwm_id.push(rn1.diwr_yhrd)
                }
            })
            fs.writeFileSync(yxna_vdum, JSON.stringify(diwr_vnwm_vdum))
            fs.writeFileSync(yxna_vdum + '_丢弃的对象.json.bak', JSON.stringify(diwr_vnwm_id))
            resolve(WR_TSJQ_ZV_CE_EBWU_LD_YHRJ({ WR_AFOA_BQEO: 'yexf pc ' + jtyj.length + ' nh diwr, cd ja ' + diwr_vnwm_vdum.length + ` nh vdum ab yxna md-${yxna_vdum}-md`, WR_AFOA_MCVN: '' }))
        }).catch(err => {
            reject(err)
        })
    })
}
module.exports = kczv_json_rfrf