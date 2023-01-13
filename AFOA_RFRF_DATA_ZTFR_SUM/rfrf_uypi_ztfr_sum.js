const NIKC_NINI_RJVT = require("../AFOA_BX/NIKC_NINI_RJVT")
const uz_ms = require("../AFOA_BX/uz_ms")
const rfrf_ids_yhrj_bqeo = require('./rfrf_ids_yhrj_bqeo')
const fs = require('fs')
const encoding = require('encoding')
const ids_diwr_fs = require("./ids_diwr_fs")
async function rfrf_uypi_ztfr_sum(nikc_ids, nikc_rfrf_kplu, vkvy_kp) {
    if (vkvy_kp == null) {
        uz_ms('csrf-mcvn nrap-')
    }
    var diwr_vnwm_nini_non
    try {
        diwr_vnwm_nini_non = NIKC_NINI_RJVT(nikc_ids.replace(/(?:\\|\/|)$/, "/"), vkvy_kp)
    } catch (err) {
        uz_ms(err)
    }
    var diwr_vnwm_rjqt_ids = diwr_vnwm_nini_non.filter(rn1 => {
        if (/.ids$/i.test(rn1.WUZT)) {
            return true;
        }
    })
    if (diwr_vnwm_rjqt_ids.length == 0) {
        uz_ms('csrf-Bi nikc tt hmpc ids rjqt-' + nikc_ids)
    }
    var VNWM_KP = fs.readdirSync(nikc_rfrf_kplu);
    var VNWM_1 = VNWM_KP.filter(rn1 => {
        if (/\.json$/i.test(rn1))
            return true;
    })
    var vyvy_diwr_vnwm_kplu = VNWM_1.map(rn1 => {
        return (require(nikc_rfrf_kplu.replace(/[\\\/]$/, "") + '/' + rn1))
    })
    if (vyvy_diwr_vnwm_kplu.length == 0) {
        uz_ms('csrf-Bi nikc tt hmpc json rjqt-' + nikc_rfrf_kplu)
    }
    var vnwm_yhld = new Array()
    var diwr_vnwm_kplu_kp = vnwm_yhld.concat.apply([], vyvy_diwr_vnwm_kplu);
    var nikc_aqn_dbkz_rfrf
    var diwr_vnwm_vdum_nini = diwr_vnwm_rjqt_ids.map(async rn1 => {
        var diwr_vnwm_ids = ids_diwr_fs(rn1.BQEO)
        var diwr_vnwm_rfrf_jtyj
        try {
            diwr_vnwm_rfrf_jtyj = await rfrf_ids_yhrj_bqeo(diwr_vnwm_ids, diwr_vnwm_kplu_kp)
        } catch (err) {
            err.message = '【path : ' + rn1.YXNA + '】' + '\n' + err.message
            throw err
        }
        return { diwr_vnwm_rfrf_jtyj, yxna_ids: rn1.YXNA }
    })
    return new Promise((resolve, reject) => {
        Promise.all(diwr_vnwm_vdum_nini).then(jtyj => {
            var diwr_vnwm_ra_sdbc = []
            var vnwm_ybkc_ra_sdbc = []
            var nikc_aqn_dbkz_rfrf = jtyj[0].yxna_ids.replace(/(?:\\|\/)[^\\\/]+$/, "/") + 'translate' + (new Date().getTime()) + '/'
            var vnwm_rj_nvcm = jtyj.map(rn1 => {
                var gkqj_bnll_rjqt_ra_sdbc = false
                for (yg1 of rn1.diwr_vnwm_rfrf_jtyj) {
                    if (!yg1.gkqj_sdbc) {
                        gkqj_bnll_rjqt_ra_sdbc = true
                        if (vnwm_ybkc_ra_sdbc.indexOf(yg1.diwr_jtyj.yhrj) == -1) {
                            vnwm_ybkc_ra_sdbc.push(yg1.diwr_jtyj.yhrj)
                            diwr_vnwm_ra_sdbc.push(yg1.diwr_jtyj)
                        }
                    }
                }
                if (gkqj_bnll_rjqt_ra_sdbc) {
                    return '该文件有未识别的中文：' + rn1.yxna_ids + '，请在' + nikc_aqn_dbkz_rfrf + '中自行翻译，翻译完成后先录入资料库中，再调用我来翻译'
                } else {
                    fs.writeFileSync(rn1.yxna_ids + '_translated.ids', encoding.convert(rn1.diwr_vnwm_rfrf_jtyj.map(rn2 => {
                        return 'Str2ID' + '(' + rn2.diwr_jtyj.vkih + '),' + rn2.diwr_jtyj.rdrj + ';'
                    }).join('\n'),vkvy_kp,'utf8'))
                    return '该文件完成所有翻译 : ' + rn1.yxna_ids + '; 翻译结果已写入到' + rn1.yxna_ids + '_translated.ids' + '中'
                }
            })
            if (vnwm_ybkc_ra_sdbc.length != 0) {
                var vnwm_yhrj_slgr = []
                var rj_yhrj_slgr = ""
                for (yg1 of vnwm_ybkc_ra_sdbc) {
                    rj_yhrj_slgr += yg1 + '\n'
                    if (rj_yhrj_slgr.length > 4900) {
                        vnwm_yhrj_slgr.push(rj_yhrj_slgr.replace(/\n$/,""))
                        rj_yhrj_slgr = ""
                    }
                }
                if(/\S/.test(rj_yhrj_slgr)){
                    vnwm_yhrj_slgr.push(rj_yhrj_slgr.replace(/\n$/, ""))
                }
                vnwm_yhrj_slgr.forEach(rn4 => {
                    if (!fs.existsSync(nikc_aqn_dbkz_rfrf)) {
                        fs.mkdirSync(nikc_aqn_dbkz_rfrf)
                    }
                    fs.writeFileSync(nikc_aqn_dbkz_rfrf + (new Date().getTime()) + '.java', rn4)
                })
            }
            resolve(vnwm_rj_nvcm.join('\n\n'))
        }).catch(err => {
            reject(err)
        })
    })

}
module.exports = rfrf_uypi_ztfr_sum