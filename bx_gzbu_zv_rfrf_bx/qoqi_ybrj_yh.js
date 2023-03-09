const diwr_neig_zjzj = require("../AFOA_BX/diwr_neig_zjzj")
const kplu_ld_vnwm = require("../AFOA_BX/kplu_ld_vnwm")
const uz_ms = require("../AFOA_BX/uz_ms")
const rfrf_bqeo_diwr_fs = require("../AFOA_RFRF_DATA_ZTFR_SUM/rfrf_bqeo_diwr_fs")
const zjzj_yhrd_diyc_gnpz = require("../AFOA_RFRF_DATA_ZTFR_SUM/zjzj_yhrd_diyc_gnpz")
const fs = require('fs')
async function qoqi_ybrj_yh(diwr_neig_kp) {
    var vnwm_fo_1 = [
        'nikc_bx',
        'vnwm_afoa_bqeo',
        'diwr_vnwm_bx',
        'diwr_rfrf_bx_vkih',
        'vnwm_json_rjqt_wu',
        'vnwm_json_rjqt_wu',
        'reject',
        'resolve',
        'diwr_msqu'
    ]
    diwr_neig_zjzj(diwr_neig_kp, vnwm_fo_1)
    var yxna_vnwm_reg_vwux_mr_yfux = diwr_neig_kp.vnwm_afoa_bqeo[1]
    var diwr_vnwm_reg_vwux_mr_yfux = kplu_ld_vnwm(yxna_vnwm_reg_vwux_mr_yfux, 'js')

    var vwdp_vnwm_1 = diwr_neig_kp.diwr_msqu.vnwm_dbkz_vdzv.map(async rn1 => {
        var reg_qoqi = /qoqi-.*-vkih-([\S\s]*)-bqeo-([\s\S]*)/i
        var diwr_qoqi = rn1.match(reg_qoqi)
        if (!diwr_qoqi) {
            uz_ms('csrf-cgne um ms-' + rn1)
        } else {
            var vkih = Number(diwr_qoqi[1])
            var bqeo = diwr_qoqi[2]
            var diwr_eynh = diwr_neig_kp.diwr_rfrf_bx_vkih[vkih]
            if (!diwr_eynh) {
                uz_ms('csrf-vkih ac zznq-' + vkih)
            } else {
                var rdrj_yhld = bqeo.replace(/^\s+|\s+$/g, "").replace(/Peng_JTCO_ZV_TZRN/g, "$$$$$$")
                qoqi_pzva = 'yhrj'
                diwr_eynh.qoqi_zdti = new Date().getTime()
                if (!diwr_eynh.vnwm_qoqi_mf) {
                    diwr_eynh.vnwm_qoqi_mf = []
                }
                var dbkz_wu = process.env.USERNAME
                if (!dbkz_wu) {
                    dbkz_wu = 'ravc'
                }
                var rj_yhld = diwr_eynh.rdrj
                if (!rj_yhld) {
                    uz_ms('csrf-nrap mcvn-' + rj_yhld)
                }
                try {
                    await zjzj_yhrd_diyc_gnpz({ rdrj: diwr_eynh.rdrj, yhrj: rdrj_yhld, DIWR_VNWM_reg_VWUX_MR_YFUX: diwr_vnwm_reg_vwux_mr_yfux })
                } catch (err) {
                    diwr_neig_kp.reject(err)
                }
                diwr_eynh.yhrj = bqeo.replace(/^\s+|\s+$/g, "").replace(/Peng_JTCO_ZV_TZRN/g, "$$$$$$")
                diwr_eynh.vnwm_qoqi_mf.push({ qoqi_pzva, dbkz_wu, qoqi_zdti: diwr_eynh.qoqi_zdti })
                if (!diwr_eynh.vnwm_tmtm) {
                    diwr_eynh.vnwm_tmtm = []
                }
                diwr_eynh.vnwm_tmtm.push({ rdrj: diwr_eynh.rdrj, yhrj: diwr_eynh.yhrj })
            }
        }
    })
    return new Promise((resolve, reject) => {
        Promise.all(vwdp_vnwm_1).then(jtyj => {
            fs.writeFileSync(diwr_neig_kp.nikc_bx + "/db_" + (new Date().getTime()) + '.json', JSON.stringify(diwr_neig_kp.diwr_vnwm_bx))
            diwr_neig_kp.vnwm_json_rjqt_wu.forEach(rn1 => {
                fs.renameSync(diwr_neig_kp.nikc_bx + '/' + rn1, diwr_neig_kp.nikc_bx + '/' + rn1 + '.bak')
            })
            resolve('完成更改')
        }).catch(err => {
            reject(err)
        })
    })
}
module.exports = qoqi_ybrj_yh