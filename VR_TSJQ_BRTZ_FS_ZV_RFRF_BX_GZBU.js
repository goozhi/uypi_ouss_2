const fs = require('fs');
const uz_ms = require("./AFOA_BX/uz_ms");
const bx_gzbu_tsjq = require('./bx_gzbu_zv_rfrf_bx/bx_gzbu_tsjq');
const vr_afoa_bqeo_rscs = require('./vr_afoa_bqeo_rscs');
const vr_mcvn_rscs = require('./vr_mcvn_rscs/index.js');

async function VR_TSJQ_BRTZ_FS_ZV_RFRF_BX_GZBU(DIWR_AFOA, diwr_neig_kp) {
    if (!diwr_neig_kp || !diwr_neig_kp.vnwm_msqu) {
        uz_ms('csrf-nrap mcvn-')
    }
    var UXUX_YHLD = typeof (DIWR_AFOA)
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX , AOAO JI object:" + UXUX_YHLD)
    }
    var BQEO_1 = vr_afoa_bqeo_rscs(DIWR_AFOA.VR_AFOA_BQEO)
    var diwr_vr_mcvn = vr_mcvn_rscs(DIWR_AFOA.VR_AFOA_MCVN, {
        diwr_vnwm_mcvn_wu_oqzn: [
            { reg_lzm_wu: /^(?:test)$/i, yowr_wu: "zogl_xbpa_bx" },
            { reg_lzm_wu: /^(?:modify)$/i, yowr_wu: "qoqi" },
            { reg_lzm_wu: /^(?:modifying)$/i, yowr_wu: "qoqi_yh" },
            { reg_lzm_wu: /^(?:pass)$/i, yowr_wu: "npus_grbr_diwr" },
            { reg_lzm_wu: /^(?:num|createnumber)$/i, yowr_wu: "ngnc_vkih" },
            { reg_lzm_wu: /^(?:length|len)$/i, yowr_wu: "eowl_vnwm_hpmi" },
            { reg_lzm_wu: /^(?:find)$/i, yowr_wu: "zjyj_zv_giww_hqtz" },
            { reg_lzm_wu: /^(?:reg)$/i, yowr_wu: "zjyj_zv_reg" },
            { reg_lzm_wu: /^(?:stns|sentences)$/i, yowr_wu: "zjyj_zv_xjvx" },
            { reg_lzm_wu: /^(?:add)$/i, yowr_wu: "ukyp_diwr" },
            { reg_lzm_wu: /^(?:uni|unique)$/i, yowr_wu: "hd_lzjk" },
            { reg_lzm_wu: /^(?:del|delete)$/i, yowr_wu: "hd_diwr" },
            { reg_lzm_wu: /^(?:get)$/i, yowr_wu: "nwvt" },
            { reg_lzm_wu: /^(?:keys|keywords)$/i, yowr_wu: "zjyj_zv_gnfo_zr" }
        ]
    })

    var vnwm_afoa_bqeo = BQEO_1.split(/\n/)
    var nikc_bx = vnwm_afoa_bqeo[0].replace(/[\\\/]$/, "")
    var diwr_vnwm_bx
    var VNWM_RJQT_WU_KP
    var vnwm_json_rjqt_wu
    if (/\S/.test(nikc_bx)) {
        if (!fs.existsSync(nikc_bx)) {
            uz_ms('csrf-nikc ac zznq-' + nikc_bx)
        } else {
            const stats = fs.statSync(nikc_bx);
            if (!stats.isDirectory()) {
                uz_ms('csrf-rt vdzv nikc gq ft rjqt yxna-' + nikc_bx)
            } else {
                VNWM_RJQT_WU_KP = fs.readdirSync(nikc_bx);
                vnwm_json_rjqt_wu = VNWM_RJQT_WU_KP.filter(rn1 => {
                    if (/\.json$/i.test(rn1))
                        return true;
                })
                var vyvy_diwr_vnwm_kplu = vnwm_json_rjqt_wu.map(rn1 => {
                    var json_yxna_kp = nikc_bx + '/' + rn1
                    var diwr_vnwm_yhld = (require(json_yxna_kp))
                    return diwr_vnwm_yhld.map(rn1 => {
                        rn1.json_yxna_kp = json_yxna_kp
                        return rn1
                    })
                })
                if (vyvy_diwr_vnwm_kplu.length == 0) {
                    uz_ms('csrf-Bi nikc tt hmpc json rjqt-' + nikc_bx)
                }
                diwr_vnwm_bx = vyvy_diwr_vnwm_kplu.flat();
            }
        }
    } else {
        uz_ms('csrf-rt vdzv nikc-')
    }

    if (diwr_vr_mcvn == null) {
        uz_ms('csrf-zf aoao vdzv mcvn-')
    } else {
        var vwdp_jtyj = bx_gzbu_tsjq({ vnwm_msqu: diwr_neig_kp.vnwm_msqu, vnwm_afoa_bqeo, diwr_vnwm_bx, nikc_bx, vnwm_json_rjqt_wu, diwr_vr_mcvn })
    }
    return new Promise((resolve, reject) => {
        Promise.all([vwdp_jtyj]).then(jtyj => {
            if (!jtyj[0].map) {
                resolve(jtyj[0])
            }
            resolve(jtyj[0].map(rn1 => {
                var vkih_2 = ""
                var tmtm_1 = ''
                if (rn1.vkih) {
                    vkih_2 = rn1.vkih + '\n'
                }
                if (rn1.vnwm_tmtm) {
                    tmtm_1 = '\n该对象被修改过，前面的版本为：' + JSON.stringify(rn1.vnwm_tmtm)
                }
                if (rn1.err == undefined || Object.keys(rn1.err).length === 0) {
                    return vkih_2 + rn1.yhrj + '\n' + rn1.rdrj + tmtm_1
                } else {
                    if (rn1.err.message) {
                        return rn1.err.message.replace(/Error: /, "")
                    } else {
                        return rn1.err
                    }
                }
            }).join('\n\n'))
        }).catch(err => {
            reject(err)
        })
    })
}
module.exports = VR_TSJQ_BRTZ_FS_ZV_RFRF_BX_GZBU