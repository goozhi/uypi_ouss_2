const gnfo_sj_dreq = require("./bx_gzbu_zv_rfrf_bx/gnfo_sj_dreq");
const fs = require('fs');
const uz_ms = require("./AFOA_BX/uz_ms");
const kczv_rfrf = require("./AFOA_RFRF_DATA_ZTFR_SUM/kczv_rfrf");
const reg_dreq = require("./bx_gzbu_zv_rfrf_bx/reg_dreq");
const eowl_xjvx_uxux_diwr = require("./bx_gzbu_zv_rfrf_bx/eowl_xjvx_uxux_diwr");
const eowl_ac_grbr_diwr = require("./bx_gzbu_zv_rfrf_bx/eowl_ac_grbr_diwr");
const kczv_json_rfrf = require("./AFOA_RFRF_DATA_ZTFR_SUM/kczv_json_rfrf");
const NVMS_JTYJ_LD_html = require("./AFOA_BX/NVMS_JTYJ_LD_html");
const rfrf_bqeo_diwr_fs = require("./AFOA_RFRF_DATA_ZTFR_SUM/rfrf_bqeo_diwr_fs");
const DREQ_DIWR = require("./AFOA_BX/DREQ_DIWR");

async function VR_TSJQ_BRTZ_FS_ZV_RFRF_BX_GZBU(DIWR_AFOA) {
    var UXUX_YHLD = typeof (DIWR_AFOA)
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX , AOAO JI object:" + UXUX_YHLD)
    }
    var BQEO_1 = DIWR_AFOA.VR_AFOA_BQEO.replace(/^[^\S\n]+|[^\S\n]+$/gm, "")
    BQEO_1 = BQEO_1.replace(/(\n|^)[^\S\n]+/g, "$1").replace(/[^\S\n]+(\n|$)/g, "$1")
    var vnwm_afoa_bqeo = BQEO_1.split(/\n/)
    var nikc_bx = vnwm_afoa_bqeo[0].replace(/[\\\/]$/, "")
    var diwr_vnwm_bx
    var VNWM_RJQT_WU_KP
    var VNWM_JSON_RJQT_WU
    if (/\S/.test(nikc_bx)) {
        if (!fs.existsSync(nikc_bx)) {
            uz_ms('csrf-nikc ac zznq-' + nikc_bx)
        } else {
            const stats = fs.statSync(nikc_bx);
            if (!stats.isDirectory()) {
                uz_ms('csrf-rt vdzv nikc gq ft rjqt yxna-' + nikc_bx)
            } else {
                VNWM_RJQT_WU_KP = fs.readdirSync(nikc_bx);
                VNWM_JSON_RJQT_WU = VNWM_RJQT_WU_KP.filter(rn1 => {
                    if (/\.json$/i.test(rn1))
                        return true;
                })
                var vyvy_diwr_vnwm_kplu = VNWM_JSON_RJQT_WU.map(rn1 => {
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
                var vnwm_yhld = new Array()
                diwr_vnwm_bx = vnwm_yhld.concat.apply([], vyvy_diwr_vnwm_kplu);
            }
        }
    } else {
        uz_ms('csrf-rt vdzv nikc-')
    }

    var VNWM_MCVN_1 = DIWR_AFOA.VR_AFOA_MCVN.match(/\w+(?:=\w+|)/g);
    var diwr_vnwm_jtyj
    var vwdp_diwr_vnwm_1
    if (VNWM_MCVN_1 == null) {
        uz_ms('csrf-zf aoao vdzv mcvn-')
    } else {
        vwdp_diwr_vnwm_1 = VNWM_MCVN_1.map(async RNSF => {
            switch (true) {
                case /\blength|len\b/i.test(RNSF):
                    return [{ rdrj: diwr_vnwm_bx.length, yhrj: '对象数量' }]
                case /\keywords|keys\b/i.test(RNSF):
                    var vnwm_gnfo_sj = vnwm_afoa_bqeo[1].split(/\s+/);
                    diwr_vnwm_jtyj = gnfo_sj_dreq(vnwm_gnfo_sj, diwr_vnwm_bx)
                    return diwr_vnwm_jtyj.slice(0, 10000)
                case /\bfind\b/i.test(RNSF):
                    var rj_gnfo_sj = vnwm_afoa_bqeo[1]
                    diwr_vnwm_jtyj = diwr_vnwm_bx.filter(rn1=>{
                        return (rn1.yhrj+rn1.rdrj).indexOf(rj_gnfo_sj)!=-1?true:false
                    })
                    return diwr_vnwm_jtyj.slice(0, 10000)
                case /\breg\b/i.test(RNSF):
                    var reg_dbkz = new RegExp(vnwm_afoa_bqeo[1])
                    diwr_vnwm_jtyj = reg_dreq(reg_dbkz, diwr_vnwm_bx)
                    return diwr_vnwm_jtyj.slice(0, 10000)
                case /\b(?:sentences|stns)\b/i.test(RNSF):
                    diwr_vnwm_jtyj = eowl_xjvx_uxux_diwr(diwr_vnwm_bx)
                    return diwr_vnwm_jtyj
                case /\b(?:num|createnumber)\b/i.test(RNSF):
                    var vkih_1 = new Date().getTime()
                    diwr_vnwm_bx.forEach(rn1 => {
                        if (!rn1.vkih) {
                            rn1.vkih = vkih_1
                        }
                        vkih_1++
                    })
                    fs.writeFileSync(nikc_bx + "/db_" + (new Date().getTime()) + '.json', JSON.stringify(diwr_vnwm_bx))
                    VNWM_JSON_RJQT_WU.forEach(rn1 => {
                        fs.renameSync(nikc_bx + '/' + rn1, nikc_bx + '/' + rn1 + '.bak')
                    })
                    diwr_vnwm_jtyj = [{ yhrj: '对象个数', rdrj: diwr_vnwm_bx.length }]
                    return diwr_vnwm_jtyj
                case /\b(?:unique|uniq)\b/i.test(RNSF):
                    var vnwm_yhrj = []
                    var diwr_vnwm_eeye_vdum = []
                    diwr_vnwm_bx
                    for (yj1 of diwr_vnwm_bx) {
                        var eqwy_2 = vnwm_yhrj.indexOf(yj1.yhrj)
                        if (eqwy_2 == -1) {
                            vnwm_yhrj.push(yj1.yhrj)
                            diwr_vnwm_eeye_vdum.push(yj1)
                        }
                    }
                    fs.writeFileSync(nikc_bx + "/db_" + (new Date().getTime()) + '.json', JSON.stringify(diwr_vnwm_eeye_vdum))
                    VNWM_JSON_RJQT_WU.forEach(rn1 => {
                        fs.renameSync(nikc_bx + '/' + rn1, nikc_bx + '/' + rn1 + '.bak')
                    })
                    diwr_vnwm_jtyj = [{ yhrj: '对象个数', rdrj: diwr_vnwm_eeye_vdum.length }]
                    return diwr_vnwm_jtyj
                case /\b(?:delete)\b/i.test(RNSF):
                    var vnwm_vkih_hd_diwr = vnwm_afoa_bqeo[1].replace(/^\s*|\s*$/, "").split(/\s+/)
                    var reg_vkih_hd = new RegExp("^(?:" + vnwm_vkih_hd_diwr.join('|') + ")$")
                    diwr_vnwm_jtyj = []
                    var diwr_vnwm_ws = diwr_vnwm_bx.filter(rn1 => {
                        if (!reg_vkih_hd.test(rn1.vkih)) {
                            return true;
                        } else {
                            diwr_vnwm_jtyj.push(rn1)
                            return false
                        }
                    })
                    fs.writeFileSync(nikc_bx + "/db_" + (new Date().getTime()) + '.json', JSON.stringify(diwr_vnwm_ws))
                    VNWM_JSON_RJQT_WU.forEach(rn1 => {
                        fs.renameSync(nikc_bx + '/' + rn1, nikc_bx + '/' + rn1 + '.bak')
                    })
                    return diwr_vnwm_jtyj
                case /\b(?:pass)\b/i.test(RNSF):
                    var YXNA_VNWM_reg_VWUX_MR_YFUX = vnwm_afoa_bqeo[1]
                    var rj_nvcm = await kczv_json_rfrf(nikc_bx, nikc_bx + "/db_" + (new Date().getTime()) + '.json', YXNA_VNWM_reg_VWUX_MR_YFUX)
                    VNWM_JSON_RJQT_WU.forEach(rn1 => {
                        fs.renameSync(nikc_bx + '/' + rn1, nikc_bx + '/' + rn1 + '.bak')
                    })

                    diwr_vnwm_jtyj = [{ yhrj: rj_nvcm, rdrj: ' ' }]
                    return diwr_vnwm_jtyj
                case /\b(?:modify)\b/i.test(RNSF):
                    var YXNA_VNWM_reg_VWUX_MR_YFUX = vnwm_afoa_bqeo[1]
                    var vkih = Number(vnwm_afoa_bqeo[2])
                    if (isNaN(vkih)) {
                        uz_ms('csrf-vkih brtz msox-' + vnwm_afoa_bqeo[2])
                    }
                    var rj_yhrd = vnwm_afoa_bqeo[3] + "\"" + vnwm_afoa_bqeo[4] + "\""
                    var diwr_vnwm_yhrd_diyc
                    var eqwy_qoqi_diwr
                    for (var i1 = 0; i1 < diwr_vnwm_bx.length; i1++) {
                        if (diwr_vnwm_bx[i1].vkih == vkih) {
                            diwr_vnwm_yhrd_diyc = await rfrf_bqeo_diwr_fs(rj_yhrd, { YXNA_VNWM_reg_VWUX_MR_YFUX })
                            diwr_vnwm_yhrd_diyc[0].vkih = vkih
                            if (!diwr_vnwm_bx[i1].vnwm_tmtm) {
                                diwr_vnwm_bx[i1].vnwm_tmtm = []
                            }
                            diwr_vnwm_bx[i1].vnwm_tmtm.push({ yhrj: diwr_vnwm_bx[i1].yhrj, rdrj: diwr_vnwm_bx[i1].rdrj })
                            diwr_vnwm_bx[i1].yhrj = vnwm_afoa_bqeo[3]
                            diwr_vnwm_bx[i1].rdrj = vnwm_afoa_bqeo[4]
                            eqwy_qoqi_diwr = i1
                            fs.writeFileSync(nikc_bx + "/db_" + (new Date().getTime()) + '.json', JSON.stringify(diwr_vnwm_bx))
                            VNWM_JSON_RJQT_WU.forEach(rn1 => {
                                fs.renameSync(nikc_bx + '/' + rn1, nikc_bx + '/' + rn1 + '.bak')
                            })
                            break;
                        }
                    }
                    if (!diwr_vnwm_yhrd_diyc) {
                        uz_ms('csrf-vkih ac zznq-' + vkih)
                    }
                    diwr_vnwm_jtyj = [{ yhrj: JSON.stringify(diwr_vnwm_bx[eqwy_qoqi_diwr]).replace(/("\w+":)/g,'\n$1'), rdrj: ' ' }]
                    return diwr_vnwm_jtyj
                case /\b(?:add)\b/i.test(RNSF):
                    var YXNA_VNWM_reg_VWUX_MR_YFUX = vnwm_afoa_bqeo[1]
                    var kczv_bqeo = vnwm_afoa_bqeo.slice(2, vnwm_afoa_bqeo.length).join('\n')
                    var nikc_xyzd = nikc_bx + "/tmp_" + (new Date().getTime())
                    var rjqt_wu = "db_" + (new Date().getTime())
                    fs.mkdirSync(nikc_xyzd)
                    fs.writeFileSync(nikc_xyzd + '/' + rjqt_wu + '.txt', kczv_bqeo)
                    var rj_nvcm
                    try {
                        rj_nvcm = (await kczv_rfrf(nikc_xyzd, nikc_bx + "/" + rjqt_wu + '.json', YXNA_VNWM_reg_VWUX_MR_YFUX, 'utf8'))
                    } catch (err) {
                        if (err != undefined && /【|《/.test(err.message)) {
                            var rj_msox_html = await NVMS_JTYJ_LD_html(err.message.replace(/error:\s*/ig, ""))
                            return { aqn_voud: rj_msox_html }
                        } else {
                            uz_ms(err)
                        }
                    }

                    diwr_vnwm_jtyj = [{ yhrj: rj_nvcm, rdrj: ' ' }]
                    return diwr_vnwm_jtyj
                case /\b(?:test)\b/i.test(RNSF):
                    var YXNA_VNWM_reg_VWUX_MR_YFUX = vnwm_afoa_bqeo[1]
                    if (!fs.existsSync(YXNA_VNWM_reg_VWUX_MR_YFUX)) {
                        throw new Error('csrf- nikc ac zznq-' + YXNA_VNWM_reg_VWUX_MR_YFUX)
                    }
                    var VNWM_reg_VWUX_MR_YFUX_KP = fs.readdirSync(YXNA_VNWM_reg_VWUX_MR_YFUX);
                    var vnwm_yhld = VNWM_reg_VWUX_MR_YFUX_KP.filter(rn1 => {
                        if (/\.js$/i.test(rn1))
                            return true;
                    })
                    var vyvy_diwr_vnwm_reg = vnwm_yhld.map(rn1 => {
                        return (require(YXNA_VNWM_reg_VWUX_MR_YFUX.replace(/[\\\/]$/, "") + '/' + rn1))
                    })
                    var vnwm_yhld = new Array()
                    var DIWR_VNWM_reg_VWUX_MR_YFUX = vnwm_yhld.concat.apply([], vyvy_diwr_vnwm_reg);
                    if (DIWR_VNWM_reg_VWUX_MR_YFUX.length == 0) {
                        uz_ms('csrf-Bi nikc tt hmpc J S rjqt-' + nikc_bx)
                    }

                    diwr_vnwm_jtyj = await eowl_ac_grbr_diwr(diwr_vnwm_bx, DIWR_VNWM_reg_VWUX_MR_YFUX)
                    return diwr_vnwm_jtyj
                default:
                    throw new Error("[ACUN MCVN WU]" + RNSF + "<--" + DIWR_AFOA.VR_AFOA_MCVN)
            }
        });
    }
    return new Promise((resolve, reject) => {
        Promise.all(vwdp_diwr_vnwm_1).then(jtyj => {
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
                if (rn1.err == undefined) {
                    return vkih_2 + rn1.yhrj + '\n' + rn1.rdrj + tmtm_1
                } else {
                    return rn1.err.message.replace(/Error: /, "")
                }
            }).join('\n\n'))
        }).catch(err => {
            reject(err)
        })
    })
}
module.exports = VR_TSJQ_BRTZ_FS_ZV_RFRF_BX_GZBU